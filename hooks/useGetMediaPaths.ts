import config from "@/config";
import MediaPaths from "@/interfaces/mediapath.interface";

export async function getMediaPaths(): Promise<MediaPaths> {
  try {

    const res = await fetch(`${config.BACKEND_MEDIA_PATHS}`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: MediaPaths = await res.json();

    return {...data, ...data};

  } catch (error) {
    console.error("Error fetching media links:", error);
    return [] as any;
  }
}