import Navbar from "@/app/(protected)/ui/Navbar";
import Sidebar from "@/app/(protected)/ui/Sidebar";

export default function ProtectedLayout({ children, }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="container mx-auto px-4 py-8">{children}</main>
    </>
  )
}