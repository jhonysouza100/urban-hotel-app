"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { RiMailLine, RiLockLine, RiLoginBoxLine } from "@remixicon/react"
import Button from "./ui/Button"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, loading, error } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Iniciar Sesión</h1>
      </div>

      {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Correo Electrónico
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <RiMailLine className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="ejemplo@correo.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <RiLockLine className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium disabled:bg-blue-300"
          startIcon={<RiLoginBoxLine className="h-5 w-5" />}
        >
          {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Credenciales de prueba:</p>
        <p className="mt-1">
          <strong>Admin:</strong> admin@gmail.com / admin123
        </p>
        <p>
          <strong>Usuario:</strong> user@gmail.com / user123
        </p>
      </div>
    </div>
  )
}