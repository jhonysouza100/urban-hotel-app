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
    const response = await fetch(`${process.env.MEDIA_LINKS}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return {} as any;
  }
}