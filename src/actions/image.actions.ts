import { prisma } from "@/lib/prisma";

// Función para crear un nuevo admin
export async function createImageAction(data: { authorId: number; secure_url: string; public_id: string }) {
  try {
    return await prisma.cloudinary_images.create({
      data: data,
    });
  } catch (error) {
    console.error("Error al guardar las imagenes en la base de datos:", error);
    throw error;
  }
}
