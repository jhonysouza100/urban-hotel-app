import { NextResponse, type NextRequest } from "next/server"
import path from "path"
import fs from "fs/promises"
import { v2 as cloudinary } from "cloudinary"
import type { UploadApiResponse, UploadApiErrorResponse } from "cloudinary"
import type ImageDataResponse from "@/interfaces/image_data_response.interface"
import { createImageAction } from "@/actions/image.actions"
import { getTokenFromCookies, verifyToken } from "@/lib/jwt"

// Configuración de Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Definir el tamaño máximo de archivo (10MB en bytes)
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData()

    // Obtener todos los archivos subidos
    const files = data.getAll("files[]")

    if (files.length === 0) {
      return NextResponse.json({ message: "No se ha subido ningún archivo válido" }, { status: 400 })
    }

    const uploadedImages: ImageDataResponse[] = []

    // Subir cada archivo individualmente a Cloudinary
    for (const file of files) {
      if (!(file instanceof File)) {
        return NextResponse.json({ message: "Uno de los archivos no es válido" }, { status: 400 })
      }

      // Verificar el tamaño del archivo
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            message: `El tamaño de la imagen ${file.name} excede el límite permitido de ${MAX_FILE_SIZE / (1024 * 1024)}MB`,
          },
          { status: 400 },
        )
      }

      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      try {
        // Subir el archivo a Cloudinary
        const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
          cloudinary.uploader
            .upload_stream((error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
              if (error) {
                reject(error)
              } else if (result) {
                resolve(result)
              } else {
                reject(new Error("No se recibió respuesta de Cloudinary"))
              }
            })
            .end(buffer)
        })

        // Obtener el token de las cookies
        const token = getTokenFromCookies()
  
        // Verificar el token
        const { payload } = await verifyToken(token as string)
    
        // Crear el objeto con los datos de la imagen
        const imageData: ImageDataResponse = {
          authorId: Number(payload?.id),
          public_id: uploadResult.public_id,
          secure_url: uploadResult.secure_url,
        }

        uploadedImages.push(imageData)

        await createImageAction(imageData)

      } catch (error: UploadApiErrorResponse | any) {
        console.error(`${file.name}`, error)
        return NextResponse.json(
          { 
            message: `${error.message}: ${file.name}`,
          }, {status: error.http_code}
        );
      }
    }

    // Actualizar el archivo JSON con los nuevos datos
    try {
      // Ruta para el archivo JSON
      const jsonFilePath = path.join(process.cwd(), "public/documents", "images_data.json")

      // Leer el archivo JSON existente o crear uno nuevo
      let existingData: ImageDataResponse[] = []
      try {
        const fileData = await fs.readFile(jsonFilePath, "utf-8")
        existingData = JSON.parse(fileData)
      } catch (error) {
        // Si el archivo no existe o hay un error al leerlo, usamos un array vacío
        console.log("No se encontró el archivo images_data.json o está vacío, creando uno nuevo")
      }

      // Agregar los nuevos datos de las imágenes
      existingData.push(...uploadedImages)

      // Escribir los datos actualizados en el archivo JSON
      await fs.writeFile(jsonFilePath, JSON.stringify(existingData, null, 2))

      return NextResponse.json({
        message: "Archivos subidos y datos guardados",
        data: uploadedImages,
      })
    } catch (fileError) {
      console.error("Error al actualizar el archivo JSON:", fileError)
      // Aún devolvemos los datos de las imágenes subidas aunque haya fallado la actualización del archivo
      return NextResponse.json({
        message: "Archivos subidos pero hubo un error al guardar los datos",
        data: uploadedImages,
      })
    }
  } catch (error) {
    console.error("Error general en la carga de archivos:", error)
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Error desconocido al procesar los archivos" },
      { status: 500 },
    )
  }
}