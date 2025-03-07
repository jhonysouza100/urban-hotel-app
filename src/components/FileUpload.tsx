"use client";

import type React from "react"

import { useState, type FormEvent, type ChangeEvent, type DragEvent } from "react"
import { RiCloseLine, RiFileImageLine, RiFileLine, RiFileUnknowLine, RiUploadCloudLine } from "@remixicon/react"
import Button from "./ui/Button"
import { toast } from "sonner"
import axios, { AxiosResponse, type AxiosProgressEvent } from "axios"
import { Router } from "next/router";

interface ResObjType extends AxiosResponse {
  data: {
    message: string;
    obj?: {
      public_id: string;
      secure_url: string;
    }[];
  };
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

const formatEstimatedTime = (seconds: number): string => {
  if (seconds < 60) {
    return `${Math.round(seconds)}s`
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.round(seconds % 60)
    return `${minutes}m ${remainingSeconds}s`
  } else {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${hours}h ${minutes}m`
  }
}

export default function FileUpload() {
  const [files, setFiles] = useState<File[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [uploading, setUploading] = useState<number>(0)
  const [estimated, setEstimated] = useState<string>("");

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
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer && e.dataTransfer.files) {
      const droppedFiles = Array.from(e.dataTransfer.files)

      const newFiles = droppedFiles.map((selectedFile) => selectedFile)

      setFiles((prevFiles) => [...prevFiles, ...newFiles])
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((selectedFile) => selectedFile)
      setFiles((prevFiles) => [...prevFiles, ...newFiles])
    }
  }
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsUploading(true)

    const formData = new FormData()
    files.forEach((file) => {
      formData.append("files[]", file)
    })

    try {
      const response: ResObjType = await axios.post("/api/image/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          if (
            progressEvent.lengthComputable &&
            progressEvent.total !== undefined &&
            progressEvent.estimated !== undefined
          ) {
            const percentComplete = (progressEvent.loaded / progressEvent.total) * 100;
            console.log(formatEstimatedTime(progressEvent.estimated))
            setEstimated(formatEstimatedTime(progressEvent.estimated))
            setUploading(percentComplete)
          }
        },
      })

      if (response.status === 200) {
        toast.success(response.data.message)
      } else {
        throw new Error(response.data.message || "An error occurred while uploading the files.")
      }
    } catch (error) {
      console.error("Error uploading files:", error)
      toast.error(error instanceof Error ? error.message : "An unknown error occurred")
    } finally {
      setIsUploading(false)
      setFiles([])
      setUploading(0)
      setEstimated("")
    }
  }

  const removeFile = (name: string) => {
    setFiles(files.filter((file) => file.name !== name))
  }

  const handleCancel = () => {
    setFiles([])
  }

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
                <div className="flex items-center gap-3 flex-grow">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                    {file.type && file.type.includes("image") ? (
                      <RiFileImageLine className="h-4 w-4" />
                    ) : (
                      <RiFileUnknowLine className="h-4 w-4" />
                    )}
                  </div>
                  <div className="file_info flex-grow min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{formatFileSize(file.size)}</span>
                      {uploading > 0 && (
                        <>
                          <span className="text-xs text-gray-500">{Math.round(uploading)}%</span>
                          {estimated && (
                            <>
                              <span className="text-xs text-gray-500">•</span>
                              <span className="text-xs text-gray-500">{estimated}</span>
                            </>
                          )}
                        </>
                      )}
                    </div>
                    <div className="mt-1 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
                        style={{ width: `${uploading}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(file.name)}
                  className="ml-2 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600"
                >
                  <RiCloseLine className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <Button
          disabled={isUploading || files.length === 0}
          onClick={handleCancel}
          className="rounded-md text-error hover:bg-error-soft disabled:cursor-not-allowed [transition:background_.3s]"
        >
          Cancelar
        </Button>
        <form onSubmit={handleSubmit}>
          <Button
            type="submit"
            disabled={isUploading || files.length === 0}
            className={`rounded-md disabled:bg-blue-300 ${isUploading ? "!cursor-progress" : "cursor-pointer"} disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700 [transition:background_.3s`}
          >
            {isUploading ? "Subiendo..." : "Enviar"}
          </Button>
        </form>
      </div>
    </div>
  )
}