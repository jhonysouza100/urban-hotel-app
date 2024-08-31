"use client";
import { RiWifiLine, RiHotelBedLine, RiCupLine, RiTimeLine, RiTv2Line, RiSnowflakeLine, RiTempHotLine, RiBaiduLine, RiGogglesLine } from "@remixicon/react";
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
import texts from "@/public/texts";

export default function Gallery() {
  const TEXT = texts.ES;
  const images = [
    {src: '/img/gallery-img-1.jpg'},
    {src: '/img/gallery-img-2.jpg'},
    {src: '/img/gallery-img-3.jpg'},
    {src: '/img/gallery-img-4.jpg'},
    {src: '/img/gallery-img-5.jpg'},
    {src: '/img/gallery-img-6.jpg'},
    {src: '/img/gallery-img-7.jpg'},
    {src: '/img/gallery-img-8.jpg'},
    {src: '/img/gallery-img-9.jpg'},
    {src: '/img/gallery-img-10.jpg'},
    {src: '/img/gallery-img-11.jpg'},
    {src: '/img/gallery-img-12.jpg'},
    {src: '/img/gallery-img-13.jpg'},
    {src: '/img/gallery-img-14.jpg'},
    {src: '/img/gallery-img-15.jpg'},
    {src: '/img/gallery-img-16.jpg'},
    {src: '/img/gallery-img-17.jpg'},
    {src: '/img/gallery-img-18.jpg'},
    {src: '/img/gallery-img-19.jpg'},
    {src: '/img/gallery-img-20.jpg'},
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
      spaceBetween: 10,
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
    <section className="gallery section" id="gallery">
      <div className="gallery-section section-container xl:px-4">

        <h2 className="section-title xl:text-[2.5rem]">
        {/* Bienvenido a */}
        {/* La Aldea de la Selva */}
          {TEXT.serviceTitle1}<br />
          <span className="text-secondary">{TEXT.serviceTitle2}</span>
        </h2>

        <div className="flex gap-8">

          <div className="location-data text-center">
            <h2 className="section-title">
              Lorem, ipsum dolor.<br />
              Lorem, ipsum.
            </h2>
            <p className="location-description mb-8 text-muted-foreground xl:mb-12">
              {TEXT.servicesDescription1}
            </p>
            <div className="grid grid-cols-2 text-start border-l-4 rounded-r-lg p-4 border-primary-1 text-success bg-success-soft gap-y-2 gap-x-2">
              <div className="grid grid-cols-max2 items-center gap-x-2"><RiHotelBedLine /><span className="font-medium">{TEXT.serviceTextGroup1[0]}</span><span className="col-start-2 text-sm text-primary-1">{TEXT.serviceTextGroup1[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2"><RiWifiLine /><span className="font-medium">{TEXT.serviceTextGroup2[0]}</span><span className="col-start-2 text-sm text-primary-1">{TEXT.serviceTextGroup2[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2"><RiCupLine /><span className="font-medium">{TEXT.serviceTextGroup3[0]}</span><span className="col-start-2 text-sm text-primary-1">{TEXT.serviceTextGroup3[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2"><RiTimeLine /><span className="font-medium">{TEXT.serviceTextGroup4[0]}</span><span className="col-start-2 text-sm text-primary-1">{TEXT.serviceTextGroup4[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2"><RiTv2Line /><span className="font-medium">{TEXT.serviceTextGroup5[0]}</span><span className="col-start-2 text-sm text-primary-1">{TEXT.serviceTextGroup5[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2"><RiSnowflakeLine /><span className="font-medium">{TEXT.serviceTextGroup6[0]}</span><span className="col-start-2 text-sm text-primary-1">{TEXT.serviceTextGroup6[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2"><RiTempHotLine /><span className="font-medium">{TEXT.serviceTextGroup7[0]}</span><span className="col-start-2 text-sm text-primary-1">{TEXT.serviceTextGroup7[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2"><RiGogglesLine /><span className="font-medium">{TEXT.serviceTextGroup8[0]}</span><span className="col-start-2 text-sm text-primary-1">{TEXT.serviceTextGroup8[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2"><RiBaiduLine /><span className="font-medium">{TEXT.serviceTextGroup9[0]}</span><span className="col-start-2 text-sm text-primary-1">{TEXT.serviceTextGroup9[1]}</span></div>
            </div>
          </div>

          <div className="sm:w-2/3">
            {/* gallery */}
            <div ref={galleryRef} className="swiper gallery-swiper w-full rounded-lg shadow-md">
              <div className="swiper-wrapper">
                {images.map(el => (
                  <div key={crypto.randomUUID()} className="swiper-slide gallery-slide h-96 aspect-square lg:aspect-video">
                    <Image className="block h-full w-full object-cover" src={`${el.src}`} height={1080} width={1080} alt="" />
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
                      <Image className="block h-full w-full object-cover" src={`${el.src}`} height={500} width={500} alt="thumbnails image" />
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
