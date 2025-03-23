"use client";

import { RiWifiLine, RiHotelBedLine, RiCupLine, RiTimeLine, RiTv2Line, RiSnowflakeLine, RiTempHotLine, RiBaiduLine, RiGogglesLine, RiKeynoteLine } from "@remixicon/react";
import Image from "next/image";
import Button from "./ui/Button";
import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { FreeMode, Thumbs, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TEXT from "@/lang/es.json";

const PoolSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgba(0, 0, 0, 0.6)">
      <path d="M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36z"/>
      <circle cx="16.5" cy="5.5" r="2.5"/>
    </svg>
  )
}

export default function Service() {
  const images = [
    {src: '/images/gallery-img-1.jpg'},
    {src: '/images/gallery-img-2.jpg'},
    {src: '/images/gallery-img-3.jpg'},
    {src: '/images/gallery-img-4.jpg'},
    {src: '/images/gallery-img-5.jpg'},
    {src: '/images/gallery-img-6.jpg'},
    {src: '/images/gallery-img-7.jpg'},
    {src: '/images/gallery-img-8.jpg'},
    {src: '/images/gallery-img-9.jpg'},
    {src: '/images/gallery-img-11.jpg'},
    {src: '/images/gallery-img-12.jpg'},
    {src: '/images/gallery-img-13.jpg'},
    {src: '/images/gallery-img-14.jpg'},
    {src: '/images/gallery-img-15.jpg'},
    {src: '/images/gallery-img-16.jpg'},
    {src: '/images/gallery-img-17.jpg'},
    {src: '/images/gallery-img-18.jpg'},
    {src: '/images/gallery-img-20.jpg'},
  ];
  const galleryRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const thumbSwiperRef = useRef<Swiper | null>(null);
  const gallerySwiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    if (!galleryRef.current || !thumbsRef.current) return;

    // Initialize Swiper for thumbnails
    const thumbsSwiper = new Swiper(thumbsRef.current, {
      modules: [Thumbs, FreeMode],
      thumbs: {
        slideThumbActiveClass: 'swiper-slide-thumb-active',
      },
      spaceBetween: 12,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    thumbSwiperRef.current = thumbsSwiper;

    // Initialize Swiper for gallery
    const gallerySwiper = new Swiper(galleryRef.current, {
      modules: [FreeMode, Navigation, Pagination, Thumbs],
      pagination: { 
        type: 'fraction',
        el: '.swiper-pagination',
      },
      navigation: { 
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: { swiper: thumbSwiperRef.current },
      spaceBetween: 0,
      slidesPerView: 1,
      on: {
        slideChange() {
          if (thumbSwiperRef.current) {
            thumbSwiperRef.current.update();
          }
        }
      },
    });
    gallerySwiperRef.current = gallerySwiper;

    return () => {
      // Clean up the Swipers
      gallerySwiper.destroy();
      thumbsSwiper.destroy();
    };
  }, []);

  return (
    <section className="services section" id="gallery">
      <div className="services-section section-container">

        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2">

          <div className="services-data">
            <span className="block font-montserrat text-xl text-muted-foreground font-light text-start">{TEXT.serviceTitle1}<br /></span>
            <h2 className="section-title text-4xl text-start lg:text-5xl">{TEXT.brandName1}</h2>
            <p className="text-base text-muted-foreground mb-5 text-start">{TEXT.servicesDescription1}</p>

            <div className="grid grid-cols-2 text-start gap-y-2 gap-x-2 sm:p-3 lg:p-0">
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiHotelBedLine /><span className="font-medium">{TEXT.serviceTextGroup1[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup1[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiWifiLine /><span className="font-medium">{TEXT.serviceTextGroup2[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup2[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiCupLine /><span className="font-medium">{TEXT.serviceTextGroup3[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup3[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiTimeLine /><span className="font-medium">{TEXT.serviceTextGroup4[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup4[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiTv2Line /><span className="font-medium">{TEXT.serviceTextGroup5[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup5[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiSnowflakeLine /><span className="font-medium">{TEXT.serviceTextGroup6[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup6[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiTempHotLine /><span className="font-medium">{TEXT.serviceTextGroup7[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup7[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><PoolSvg /><span className="font-medium">{TEXT.serviceTextGroup8[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup8[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiBaiduLine /><span className="font-medium">{TEXT.serviceTextGroup9[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup9[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiKeynoteLine /><span className="font-medium">{TEXT.serviceTextGroup10[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup10[1]}</span></div>
            </div>
          </div>

          {/* gallery and thumbnails */}
          <div className="services-image md:p-6 lg:p-0">

            {/* gallery */}
            <div ref={galleryRef} className="swiper gallery-swiper w-full rounded-2xl shadow-md">
              <div className="swiper-wrapper">
                {images.map(el => (
                  <div key={crypto.randomUUID()} className="swiper-slide gallery-slide h-96 aspect-square lg:aspect-video">
                    <Image className="block h-full w-full object-cover" src={`${el.src}`}
                      height={380}
                      width={380}
                      sizes="(max-width: 425px) 75vw,(max-width: 768px) 45vw, (max-width: 1200px) 50vw, 45vw"
                      loading="lazy"
                      alt="Gallery image"
                      />
                  </div>
                ))}
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-pagination"></div>
            </div>

            {/* thumbnails */}
            <div ref={thumbsRef} className="swiper thumbs-swiper w-full h-32 rounded-lg mt-3">
              <div className="swiper-wrapper">
                {images.map(el => (
                  <div key={crypto.randomUUID()} className="swiper-slide thumb-slide">
                    <Button className="flex h-full w-full items-center justify-center p-0">
                      <Image className="block h-full w-full object-cover" src={`${el.src}`} 
                      height={60}
                      width={60}                      
                      sizes="(max-width: 375px) 25vw, (max-width: 425px) 20vw, (max-width: 768px) 20vw, (max-width: 1200px) 15vw, 10vw"
                      loading="lazy" 
                      alt="Thumbnails image" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
