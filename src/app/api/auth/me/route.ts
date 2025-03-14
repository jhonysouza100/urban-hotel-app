import { type NextRequest, NextResponse } from "next/server"
import { getTokenFromCookies, verifyToken } from "@/lib/jwt"

export async function GET(request: NextRequest) {
  try {
    // Obtener el token de las cookies
    const token = getTokenFromCookies()

    if (!token) {
      return NextResponse.json({ error: "No autenticado" }, { status: 401 })
    }

    // Verificar el token
    const { valid, payload, error } = await verifyToken(token)

    if (!valid || !payload) {
      return NextResponse.json({ error: "Token inválido o expirado" }, { status: 401 })
    }

    // Devolver la información del usuario
    return NextResponse.json({
      user: {
        id: payload.id,
        email: payload.email,
        name: payload.name,
        role: payload.role,
      },
    })
  } catch (error) {
    console.error("Error al obtener información del usuario:", error)
    return NextResponse.json({ error: "Error en el servidor" }, { status: 500 })
  }
}