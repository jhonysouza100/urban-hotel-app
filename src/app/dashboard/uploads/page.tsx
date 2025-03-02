import FileUpload from "@/components/FileUpload"
import ImagesGrid from "@/components/ImagesGrid"

export default function UploadsPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 p-4">
      <FileUpload />
      <ImagesGrid />
    </div>
  )
}