import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "@/database/entities/user.entity"

// Singleton para la conexión a la base de datos
let connection: DataSource | null = null
let connectionPromise: Promise<DataSource> | null = null

async function startConnection(): Promise<DataSource> {
  if (connectionPromise) return connectionPromise

  if (!connection || !connection.isInitialized) {
    connectionPromise = (async () => {
      try {
        // Cerrar la conexión anterior si existe
        if (connection && !connection.isInitialized) {
          await connection.destroy()
        }

        // Crear una nueva conexión
        connection = new DataSource({
          type: "mysql",
          host: process.env.DB_HOST,
          port: Number.parseInt(process.env.DB_PORT || "3306"),
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
          entities: [User],
          synchronize: false, // No sincronizar automáticamente (solo lectura)
          logging: process.env.NODE_ENV === "development",
          // Opciones adicionales para entornos serverless
          extra: {
            connectionLimit: 1,
            connectTimeout: 30000, // 30 segundos
          },
        })

        // Inicializar la conexión
        await connection.initialize()
        console.log("Base de datos conectada correctamente")
        return connection
      } catch (error) {
        console.error("Error al conectar con la base de datos:", error)
        connectionPromise = null
        throw error
      }
    })()

    return connectionPromise
  }

  return connection
}

// Función para obtener el repositorio de usuarios
async function userRepository() {
  try {
    const connection = await startConnection()
    return connection.getRepository(User)
  } catch (error) {
    console.error("Error al obtener el repositorio de usuarios:", error)
    throw error
  }
}

// Función para obtener todos los usuarios
export async function getAllUsers() {
  try {
    return (await userRepository()).find()
  } catch (error) {
    console.error("Error al obtener usuarios:", error)
    throw error
  }
}

// Función para obtener un usuario por email
export async function getUserByEmail(email: string) {
  try {
    return (await userRepository()).findOne({ where: { email }})
  } catch (error) {
    console.error(`Error al obtener usuario con email ${email}:`, error)
    throw error
  }
}