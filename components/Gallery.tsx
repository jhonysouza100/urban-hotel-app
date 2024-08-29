"use client"
import Image from "next/image";
import React from "react";
import Swiper from "swiper";
import { Thumbs } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export default function Gallery() {

  const swiperOptions: SwiperOptions = {
    modules: [Thumbs]
  }

  React.useEffect(() => {
    new Swiper('.gallery-swiper', swiperOptions)
  },[]);
  
  return (
    <section className="gallery section" id="gallery">
      <div className="gallery-section section-container xl:py-4 xl:px-4">
        {/* thumbnails */}
        <div className="swiper swiper-gallery">
          <div className="swiper-wrapper">
            <div className="swiper-slide">

            </div>
          </div>
        </div>
        {/* gallery */}
        <div className="swiper swiper-gallery">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="flex h-full w-full items-center justify-center">
                <Image 
                  className="block h-full w-full object-cover"
                  src={'./img/etc.jpg'}
                  height={500} 
                  width={500} 
                  alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
