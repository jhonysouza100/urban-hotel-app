import config from "@/config";

interface MediaLinks {
  developer: string;
  instagram: string;
  facebook: string;
  whatsapp: string;
  email: string;
  maps: string;
  cataratasarg: string;
  cataratasbr: string; 
  ingresobrasil: string;
  aeropuertoig: string; 
  lunallena: string; 
  booking: string;
}

export async function getMediaLinks(): Promise<MediaLinks> {
  try {

    const res = await fetch(`${config.BACKEND_MEDIA_LINKS}`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: MediaLinks = await res.json();

    return data;

  } catch (error) {
    console.error("Error fetching media links:", error);
    return [] as any;
  }
}