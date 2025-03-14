import { NextResponse, type NextRequest } from "next/server";
import fs from "fs";
import path from "path";

import { v2 as cloudinary } from 'cloudinary';
import ImageDataResponse from "@/interfaces/image_data_response.interface";

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

export async function POST(req: NextRequest) {
  try {
    // Obtener el body de la solicitud
    const { public_id } = await req.json();

    if (!public_id) {
      return NextResponse.json({ message: "No se proporcionó un public_id" }, { status: 400 });
    }

    // Eliminar la imagen de Cloudinary ↓↓↓
    await cloudinary.uploader.destroy(public_id);

    // Ruta al archivo images_data.json en la carpeta 'public'
    const filePath = path.join(process.cwd(), "public/documents", "images_data.json");

    // Verificar si el archivo existe
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ message: "No se encontró el archivo de imágenes" }, { status: 404 });
    }

    // Leer el archivo JSON
    const fileData = fs.readFileSync(filePath, "utf-8");

    // Parsear el archivo JSON
    let imagesData: ImageDataResponse[] = JSON.parse(fileData);

    // Filtrar y eliminar el objeto con el public_id correspondiente
    imagesData = imagesData.filter((image: ImageDataResponse) => image.public_id !== public_id);

    // Escribir los datos actualizados en el archivo JSON
    fs.writeFileSync(filePath, JSON.stringify(imagesData, null, 2));

    return NextResponse.json({ message: "Imagen eliminada exitosamente" }, {status: 200});

  } catch (error) {
    console.error("Error al eliminar la imagen:", error);
    return NextResponse.json({ message: "Hubo un problema al eliminar la imagen" }, { status: 500 });
  }
}