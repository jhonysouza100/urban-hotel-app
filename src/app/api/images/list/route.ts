export const dynamic = 'force-dynamic';

import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import type ImageDataResponse from "@/interfaces/image_data_response.interface"
import { getImagesByAuthorAction } from "@/actions/image.actions"

export async function GET() {
  try {
    // Ruta al archivo images_data.json
    const filePath = path.join(process.cwd(), "public/documents", "images_data.json")

    // Leer el archivo JSON
    try {
      const fileData = fs.readFileSync(filePath, "utf-8")
      const imagesFile: ImageDataResponse[] = JSON.parse(fileData)

      const imagesData = await getImagesByAuthorAction(1);

      // Devolver los datos de las imágenes
      return NextResponse.json(imagesData)
    } catch (readError) {
      // Si el archivo no existe o está vacío, devolver un array vacío
      if (readError instanceof Error && "code" in readError && readError.code === "ENOENT") {
        return NextResponse.json([])
      }

      console.error("Error al leer el archivo JSON:", readError)
      return NextResponse.json({ message: "Error al leer el archivo de imágenes" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error general al listar las imágenes:", error)
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Error desconocido al listar las imágenes" },
      { status: 500 },
    )
  }
}