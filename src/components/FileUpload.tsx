"use client";

import { useState, type FormEvent, type ChangeEvent, type DragEvent } from "react";
import { RiCloseLine, RiFileImageLine, RiFileLine, RiFileUnknowLine, RiUploadCloudLine } from "@remixicon/react";
import Button from "./ui/Button";
import { toast } from "sonner";

interface resObjType {
  message: string;
  status: number;
  ok: boolean;
  data?: {
    public_id: string
    secure_url: string
  }[];
}

export default function FileUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  
    // Verificar si el evento tiene archivos
    if (e.dataTransfer && e.dataTransfer.files) {
      const droppedFiles = Array.from(e.dataTransfer.files);
  
      // Si solo hay un archivo, lo asignamos al estado `file` (el archivo seleccionado)
      if (droppedFiles.length === 1) {
        setFile(droppedFiles[0]);
      }
  
      // Mapear los archivos que se están arrastrando para obtener los datos necesarios
      const newFiles = droppedFiles.map((selectedFile) => selectedFile);
  
      // Actualizar el estado de `files` con los nuevos archivos arrastrados
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Handle file upload logic here
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
    
    if (e.target.files) {
      // Map through all selected files and update the state
      const newFiles = Array.from(e.target.files).map((selectedFile) => selectedFile);
  
      // Update the state with the newly selected files (add them to the existing files)
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsUploading(true);
    
    const formData = new FormData();
  
    // Agregar todos los archivos de la lista `files` a formData
    files.forEach((file) => {
      formData.append("files[]", file); // Usamos "files[]" para enviar un array de archivos
    });
  
    try {
      const res: any = await fetch("/api/image/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        let errorObj: resObjType = await res.json();
        throw new Error(errorObj.message);
      }
      
      let successObj: resObjType = await res.json();

      // console.log("success:", successObj.message);
      toast.success(`${successObj.message}`);
    } catch (error) {
      // console.log("catch error:", error);
      toast.error(`${error}`);
    } finally {
      setIsUploading(false);
      // Limpiar los estados de los archivos
      setFile(null);
      setFiles([]);
    }
  };
  
  const removeFile = (name: string) => {
     // Verificar si el archivo a eliminar es el que está seleccionado en el estado `file`
    if (file && file.name === name) {
      setFile(null);  // Si es el archivo seleccionado, restablecer el estado `file`
    }
    setFiles(files.filter((file) => file.name !== name))
  }

  const handleCancel = () => {
    setFile(null);
    setFiles([]);
  };

  // console.log("files:", files);
  // console.log("file:", file);

  return (
    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-md bg-gray-50 p-1">
          <RiFileLine className="h-5 w-5 text-gray-600" />
        </div>
        <div>
          <h2 className="text-base font-medium text-gray-900">Upload Files</h2>
          <p className="text-sm text-gray-500">Archivos adjuntos que se han subido como parte de este proyecto.</p>
        </div>
      </div>

      <div
        className={`mt-4 flex flex-col items-center justify-center rounded-md border border-dashed border-blue-300 bg-blue-50 p-6 ${dragActive && "border-green-500 bg-green-100"}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="mb-3 rounded-full bg-blue-100 p-3">
          <div className="h-6 w-6 text-blue-500">
            <RiUploadCloudLine />
          </div>
        </div>
        <p className="mb-1 text-sm text-gray-700">
          Drag & drop your files here or{" "}
          <label className="cursor-pointer text-blue-600 hover:underline">
            <span>choose files</span>
            <input type="file" className="hidden" multiple onChange={handleFileChange} />
          </label>
        </p>
        <p className="text-xs text-gray-500">500 MB max file size</p>
      </div>

      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="mb-2 text-sm font-medium text-gray-900">Uploaded Files</h3>
          <div className="space-y-3">
            {files.map((file) => (
              <div
                key={crypto.randomUUID()}
                className="flex items-center justify-between rounded-md border border-gray-200 bg-gray-50 px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                  {file.type && file.type.includes("image") ? (
                      <RiFileImageLine className="h-4 w-4" />
                    ) : (
                      <RiFileUnknowLine className="h-4 w-4" />
                    )
                  }
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{file.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{`${(file.size / (1024 * 1024)).toFixed(1)} mb`}</span>
                      {/* {file.progress && (
                        <>
                          <span className="text-xs text-gray-500">{file.progress}%</span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-500">{file.timeLeft}</span>
                        </>
                      )} */}
                    </div>
                    {/* {file.progress && <Progress value={file.progress} className="mt-1 h-1 w-full max-w-[160px]" />} */}
                  </div>
                </div>
                <button
                  onClick={() => removeFile(file.name)}
                  className="rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600"
                >
                  <RiCloseLine className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <Button onClick={handleCancel} className="rounded-md text-error hover:bg-error-soft [transition:background_.3s]">
          Cancelar
        </Button>
        <form onSubmit={handleSubmit}>
          <Button
            type="submit"
            disabled={isUploading}
            className="rounded-md bg-blue-600 hover:bg-blue-700 [transition:background_.3s]">
            {isUploading ? "Subiendo..." : "Enviar"}
          </Button>
        </form>
      </div>
    </div>
  )
}