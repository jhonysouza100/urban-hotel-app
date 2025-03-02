import config from "@/config";
import Path from "@/interfaces/path.interface";
import path from "path";
import fs from "fs";

export async function getMediaPaths(): Promise<Path> {
  try {

    // const res = await fetch(`${config.BACKEND_MEDIA_PATHS}`);

    // if (!res.ok) {
    //   throw new Error(`HTTP error! status: ${res.status}`);
    // }

    // const data = await res.json();

    // Definir la ruta al archivo JSON local
    const filePath = path.join(process.cwd(), 'src/data', 'paths.json');
    
    // Leer el archivo de manera asincrona
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Parsear el contenido del archivo a un objeto JSON
    const data: Path = JSON.parse(fileContent);
    
    return {...data};

  } catch (error) {
    console.error("Error fetching media paths:", error);
    return [] as any;
  }
}