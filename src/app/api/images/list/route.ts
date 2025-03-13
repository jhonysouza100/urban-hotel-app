import { ImageData } from '@/types/image_data.interface';
import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
  try {
    // Ruta al archivo images_data.json en la carpeta 'public'
    const filePath = path.join(process.cwd(), 'public', 'images_data.json');

    // Verificar si el archivo existe
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ message: "No se encontró un archivo de imágenes" }, {status: 404});
    }
    
    // Leer el archivo JSON
    const fileData = fs.readFileSync(filePath, 'utf-8');
    
    // Parsear el archivo JSON
    const imagesData: ImageData[] = JSON.parse(fileData);
    
    // Devolver los datos de las imágenes
    return new Response(JSON.stringify(imagesData), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Hubo un problema al leer el archivo" }, {status: 500});
  }
}