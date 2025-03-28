"use client"

import { useAuth } from "@/hooks/useAuth"
import SidebarFooterAccount from "../../ui/SidebarFooterAccount"

export default function UploadsPage() {
  const { loading, user } = useAuth()

  if (loading) {
    return (
      <>
        {/* sidebar account skeleton */}
      </>
    )
  }

  if(user) {
    return (
      <div className="container mx-auto flex items-center justify-center p-4">
        <SidebarFooterAccount />
      </div>
    )
  }

  return <></>
}