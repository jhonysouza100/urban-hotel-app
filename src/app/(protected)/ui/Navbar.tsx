"use client"

import { useAuth } from "@/hooks/useAuth"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { RiLogoutBoxLine, RiUploadCloud2Line, RiImageLine } from "@remixicon/react"
import Avatar from "@/components/ui/Avatar"

export default function Navbar() {
  const { user, logout, loading } = useAuth()
  const pathname = usePathname()

  if (loading) {
    return (
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          {/* Skeleton que cubre todo el largo del header */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-4">
              <div className="animate-pulse bg-gray-200 h-8 w-32 rounded"></div>
              <div className="hidden md:flex space-x-2">
                <div className="animate-pulse bg-gray-200 h-8 w-28 rounded"></div>
                <div className="animate-pulse bg-gray-200 h-8 w-28 rounded"></div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="animate-pulse bg-gray-200 h-6 w-36 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-8 w-20 rounded"></div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  if (!user) {
    return (
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">
              IPanel
            </Link>
            <Link href="/login" className="px-3 py-2 rounded-md text-sm font-medium text-blue-600 hover:bg-blue-50">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-bold text-gray-900">
              IPanel
            </h3>

            <nav className="hidden md:flex space-x-2">
              <Link
                href="/dashboard/uploads"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === "/dashboard/uploads" ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="flex items-center">
                  <RiUploadCloud2Line className="mr-1" />
                  Subir Imágenes
                </span>
              </Link>

              <Link
                href="/dashboard/gallery"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === "/dashboard/gallery" ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="flex items-center">
                  <RiImageLine className="mr-1" />
                  Galería
                </span>
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <Avatar className="border" src={user.picture} alt={user.name || user.email} />
              <div className="flex flex-col gap-1">
              <span className="font-medium text-base">{user.name || user.email}</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                {user.role === "admin" ? "Admin" : "Usuario"}
              </span>
              </div>
            </div>

            <button
              onClick={() => logout()}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50"
            >
              <RiLogoutBoxLine className="mr-1" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}