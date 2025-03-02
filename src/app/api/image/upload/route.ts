import { NextResponse, type NextRequest } from "next/server";
import { writeFile } from 'fs/promises';
import path from "path";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import type { UploadApiResponse, UploadApiErrorResponse } from "cloudinary";

// Configuración de Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Definir el tamaño máximo de archivo (5MB en bytes)
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// Interfaz para los datos de la imagen
interface ImageData {
  public_id: string;
  secure_url: string;
}

export async function POST(req: NextRequest) {
  const data = await req.formData();

  // Obtener todos los archivos subidos
  const files = data.getAll("files[]");

  if (files.length === 0) {
    return NextResponse.json(
      {
        message: "Por favor, seleccione uno o más archivos para subir.",
        status: 400,
        ok: false
      }, {status: 400}
    );
  }

  const uploadedImages: ImageData[] = [];

  // Subir cada archivo individualmente a Cloudinary
  for (const file of files) {
    if (!(file instanceof File)) {
      return NextResponse.json(
        {
          message: "Uno de los archivos no es válido",
          status: 400,
          ok: false
        }, {status: 400}
      );
    }

    // Verificar el tamaño del archivo
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          message: `El tamaño de la imagen ${file.name} excede el límite permitido de ${MAX_FILE_SIZE / (1024 * 1024)}MB`,
          status: 400,
          ok: false
        }, {status: 400}
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    try {
      // Subir el archivo a Cloudinary
      const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
        cloudinary.uploader
          .upload_stream((error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
            if (error) {
              reject(error);
            } else if (result) {
              resolve(result);
            } else {
              reject(NextResponse.json({ message: `No se recibió respuesta de Cloudinary`, status: 404, ok: false }, {status: 404}));
            }
          })
          .end(buffer);
      });

      // Crear el objeto con los datos de la imagen
      const imageData: ImageData = {
        public_id: uploadResult.public_id,
        secure_url: uploadResult.secure_url,
      };

      uploadedImages.push(imageData);
    } catch (error: UploadApiErrorResponse | any) {
      return NextResponse.json(
        { 
          message: `${error.message}: ${file.name}`, 
          status: error.http_code, 
          ok: false 
        }, {status: error.http_code}
      );
    }
  }

  // Ruta para guardar el archivo JSON en la carpeta 'public'
  const jsonFilePath = path.join(process.cwd(), "public", "images_data.json");

  // Leer el archivo JSON existente, si existe
  let existingData: ImageData[] = [];
  if (fs.existsSync(jsonFilePath)) {
    const fileData = fs.readFileSync(jsonFilePath);
    existingData = JSON.parse(fileData.toString());
  }

  // Agregar los nuevos datos de las imágenes
  existingData.push(...uploadedImages);

  // Escribir los datos actualizados en el archivo JSON
  fs.writeFileSync(jsonFilePath, JSON.stringify(existingData, null, 2));

  return NextResponse.json({ message: "Archivos subidos y datos guardados", status: 200, ok: true, data: uploadedImages }, {status: 200});
}