import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "@/database/entities/user.entity"

// Crear una nueva conexión para cada solicitud en lugar de usar un singleton
export async function getConnection(): Promise<DataSource> {
  const connection = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number.parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [User],
    synchronize: false,
    logging: process.env.NODE_ENV === "development",
    // Configuraciones importantes para entornos serverless
    extra: {
      connectionLimit: 1,
      connectTimeout: 30000,
      acquireTimeout: 30000,
      waitForConnections: true,
      queueLimit: 0,
    },
    // Asegurarse de cerrar la conexión después de cada consulta
    poolSize: 1,
  })

  // Inicializar la conexión
  if (!connection.isInitialized) {
    await connection.initialize()
  }
  
  return connection
}

// Función para obtener el repositorio de usuarios
export async function userRepository() {
  try {
    const connection = await getConnection()
    return connection.getRepository(User)
  } catch (error) {
    console.error("Error al obtener el repositorio de usuarios:", error)
    throw error
  }
}

// Función para obtener todos los usuarios
export async function getAllUsers() {
  let connection: DataSource | null = null
  try {
    connection = await getConnection()
    const userRepo = connection.getRepository(User)
    return await userRepo.find()
  } catch (error) {
    console.error("Error al obtener usuarios:", error)
    throw error
  } finally {
    // Cerrar la conexión después de usarla
    if (connection && connection.isInitialized) {
      await connection.destroy()
    }
  }
}

// Función para obtener un usuario por email
export async function getUserByEmail(email: string) {
  let connection: DataSource | null = null
  try {
    connection = await getConnection()
    const userRepo = connection.getRepository(User)
    return await userRepo.findOne({ where: { email }})
  } catch (error) {
    console.error(`Error al obtener usuario con email ${email}:`, error)
    throw error
  } finally {
    // Cerrar la conexión después de usarla
    if (connection && connection.isInitialized) {
      await connection.destroy()
    }
  }
}