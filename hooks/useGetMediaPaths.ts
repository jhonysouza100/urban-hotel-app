import config from "@/config";
import Path from "@/interfaces/path.interface";

export async function getMediaPaths(): Promise<Path> {
  try {

    const res = await fetch(`${config.BACKEND_MEDIA_PATHS}`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    
    return {...data}[0];

  } catch (error) {
    console.error("Error fetching media paths:", error);
    return [] as any;
  }
}