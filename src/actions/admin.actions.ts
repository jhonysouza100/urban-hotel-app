import { prisma } from "@/lib/prisma";

// Función para obtener todos los usuarios
export async function getAllAdminsAction() {
  try {
    return await prisma.users.findMany();
  } catch (error) {
    console.error(`Error al obtener los usuarios:`, error);
    throw new Error(error instanceof Error ? error.message : "Fallo al obtener los usuarios");
  }
}

// Función para obtener un usuario por email
export async function getAdminByEmailAction(email: string) {
  try {
    return await prisma.users.findFirst({
      where: {
        email: email,
      },
    });
  } catch (error) {
    console.error(`Error al obtener el usuario por email ${email}:`, error);
    throw new Error(error instanceof Error ? error.message : "Fallo al obtener el usuario por email");
  }
}