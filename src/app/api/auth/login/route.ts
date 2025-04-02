import { type NextRequest, NextResponse } from "next/server"
import { createToken, setTokenCookie } from "@/lib/jwt"
import { getAdminByUsernameAction } from "@/actions/admin.actions"
import { compare } from "bcrypt"

// Simulación de base de datos de usuarios (en producción, usa una base de datos real)
const USERS = [
  {
    // id: 1,
    // name: "admin",
    // password: "123456",
    // image: "https//image.jpeg"
  }
]

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // Validar que se proporcionaron username y password
    if (!username || !password) {
      return NextResponse.json({ message: "Nombre de usuario y contraseña son requeridos" }, { status: 400 })
    }
    
    // Buscar el usuario en la "base de datos"
    const user = await getAdminByUsernameAction(username);

    // Verificar si el usuario existe y la contraseña es correcta
    const checkdPassword = await compare(password, user?.password as string );
    if (!user || !checkdPassword) {
      return NextResponse.json({ message: "Credenciales inválidas" }, { status: 403 })
    }

    // Crear el token JWT
    const token = await createToken({
      id: user.id.toString(),
      picture: user.picture as string,
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
        picture: user.picture,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    })
  } catch (error) {
    return NextResponse.json({ message: error instanceof Error ? error.message : "Inicio de sesión fallido" }, { status: 500 })
  }
}