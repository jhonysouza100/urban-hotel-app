"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Image data interface
interface ImageData {
  public_id: string
  secure_url: string
}

export default function ImagesGrid() {
  const [images, setImages] = useState<ImageData[]>([]);

  // Función para obtener las imagenes
  async function getImages() {
    try {
      const response = await fetch("/api/images");
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error(error);
    }
  };
  // Función para eliminar una imagen
  async function deleteImage(publicId: string){
    try {
      const response = await fetch("/api/image/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ public_id: publicId }),
      });
  
      const result = await response.json();
      console.log(result.message);
      if (result.message === "Imagen eliminada exitosamente") {
        // Eliminar la imagen del estado
        setImages((prevImages) =>
          prevImages.filter((image: ImageData) => image.public_id !== publicId)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {  
    getImages();
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h3 className="text-3xl text-muted-foreground mb-4">Imágenes Subidas</h3> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images && images.map((image: ImageData) => (
          <div
            key={image.public_id}
            className="relative border border-gray-200 rounded-lg overflow-hidden"
          >
            <Image
              src={image.secure_url}
              alt={image.public_id}
              width={500}
              height={500}
              className="w-full h-64 object-cover"
            />
            <button
              onClick={() => deleteImage(image.public_id)}
              className="absolute top-2 right-2 bg-red-500 text-white py-1 px-4 rounded-full shadow-md hover:bg-red-600">
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}