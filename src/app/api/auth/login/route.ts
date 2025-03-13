import { type NextRequest, NextResponse } from "next/server"
import { createToken, setTokenCookie } from "@/libs/jwt"

// Simulación de base de datos de usuarios (en producción, usa una base de datos real)
const USERS = [
  {
    id: "1",
    email: "admin@gmail.com",
    password: "admin123", // En producción, usa contraseñas hasheadas
    name: "Administrador",
    role: "admin",
  },
  {
    id: "2",
    email: "user@gmail.com",
    password: "user123",
    name: "Usuario Normal",
    role: "user",
  },
]

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validar que se proporcionaron email y password
    if (!email || !password) {
      return NextResponse.json({ error: "Email y contraseña son requeridos" }, { status: 400 })
    }

    // Buscar el usuario en la "base de datos"
    const user = USERS.find((u) => u.email === email)

    // Verificar si el usuario existe y la contraseña es correcta
    if (!user || user.password !== password) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 })
    }

    // Crear el token JWT
    const token = await createToken({
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    })

    // Establecer el token en las cookies
    setTokenCookie(token)

    // Devolver respuesta exitosa
    return NextResponse.json({
      message: "Inicio de sesión exitoso",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    })
  } catch (error) {
    console.error("Error en inicio de sesión:", error)
    return NextResponse.json({ error: "Error en el servidor" }, { status: 500 })
  }
}