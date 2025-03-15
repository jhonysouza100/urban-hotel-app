import { NextResponse, type NextRequest } from "next/server"
import fs from "fs/promises"
import path from "path"
import { v2 as cloudinary } from "cloudinary"
import type ImageDataResponse from "@/interfaces/image_data_response.interface"

// Configuración de Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(req: NextRequest) {
  try {
    // Obtener el body de la solicitud
    const { public_id } = await req.json()

    if (!public_id) {
      return NextResponse.json({ message: "No se proporcionó un public_id" }, { status: 400 })
    }

    // Eliminar la imagen de Cloudinary
    try {
      await cloudinary.uploader.destroy(public_id)
    } catch (cloudinaryError) {
      console.error("Error al eliminar la imagen de Cloudinary:", cloudinaryError)
      return NextResponse.json({ message: "Error al eliminar la imagen de Cloudinary" }, { status: 500 })
    }

    // Actualizar el archivo JSON
    try {
      // Ruta al archivo images_data.json
      const filePath = path.join(process.cwd(), "public/documents", "images_data.json")

      // Leer el archivo JSON
      let imagesData: ImageDataResponse[] = []
      try {
        const fileData = await fs.readFile(filePath, "utf-8")
        imagesData = JSON.parse(fileData)
      } catch (readError) {
        console.error("Error al leer el archivo JSON:", readError)
        return NextResponse.json({ message: "Error al leer el archivo de imágenes" }, { status: 500 })
      }

      // Filtrar y eliminar el objeto con el public_id correspondiente
      imagesData = imagesData.filter((image) => image.public_id !== public_id)

      // Escribir los datos actualizados en el archivo JSON
      await fs.writeFile(filePath, JSON.stringify(imagesData, null, 2))

      return NextResponse.json({ message: "Imagen eliminada exitosamente" })
    } catch (fileError) {
      console.error("Error al actualizar el archivo JSON:", fileError)
      return NextResponse.json(
        { message: "La imagen se eliminó de Cloudinary pero hubo un error al actualizar los datos locales" },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error general al eliminar la imagen:", error)
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Error desconocido al eliminar la imagen" },
      { status: 500 },
    )
  }
}