import { prisma } from "@/lib/prisma";

// Función para obtener todos los usuarios
export async function getAllAdminsAction() {
  try {
    return await prisma.admins.findMany();
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw error;
  }
}

// Función para obtener un usuario por email
export async function getAdminByEmailAction(email: string) {
  try {
    return await prisma.admins.findFirst({
      where: {
        email: email,
      },
    });
  } catch (error) {
    console.error(`Error al obtener usuario con email ${email}:`, error);
    throw error;
  }
}

// Función para crear un nuevo admin
export async function createAdminAction(data: { email: string; username: string; password: string }) {
  try {
    return await prisma.admins.create({
      data: data,
    });
  } catch (error) {
    console.error("Error al crear admin:", error);
    throw error;
  }
}

// Función para editar un admin existente
export async function updateAdminAction(id: number, data: { email?: string; username?: string; password?: string }) {
  try {
    return await prisma.admins.update({
      where: { id: id },
      data: data,
    });
  } catch (error) {
    console.error(`Error al actualizar admin con id ${id}:`, error);
    throw error;
  }
}

// Función para eliminar un admin
export async function deleteAdminAction(id: number) {
  try {
    return await prisma.admins.delete({
      where: { id: id },
    });
  } catch (error) {
    console.error(`Error al eliminar admin con id ${id}:`, error);
    throw error;
  }
}