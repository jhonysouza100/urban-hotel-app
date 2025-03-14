import { NextResponse } from "next/server"
import { getAllUsers, getUserByEmail } from "@/database/user.connection"

export async function GET(request: Request) {
  try {
    // Obtener el parámetro email de la URL si existe
    const url = new URL(request.url)
    const email = url.searchParams.get("email")

    let result

    if (email) {
      // Buscar un usuario específico por email
      result = await getUserByEmail(email)

      // Si no se encuentra el usuario, devolver un mensaje
      if (!result) {
        return NextResponse.json({ message: `No se encontró ningún usuario con el email: ${email}` }, { status: 404 })
      }

      // Ocultar la contraseña en la respuesta
      if (result) {
        const { password, ...userWithoutPassword } = result
        result = userWithoutPassword
      }
    } else {
      // Obtener todos los usuarios
      const users = await getAllUsers()

      // Ocultar las contraseñas en la respuesta
      result = users.map((user) => {
        const { password, ...userWithoutPassword } = user
        return userWithoutPassword
      })
    }

    return NextResponse.json({
      message: "Conexión a la base de datos exitosa",
      data: result,
    })
  } catch (error) {
    console.error("Error al probar la conexión a la base de datos:", error)
    return NextResponse.json(
      {
        error: "Error al conectar con la base de datos",
        message: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    )
  }
}