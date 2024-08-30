"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { FreeMode, Thumbs, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Button from "./ui/Button";

export default function Gallery() {
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
      <div className="gallery-section section-container">

        {/* gallery */}
        <div ref={galleryRef} className="swiper gallery-swiper w-full rounded-lg shadow-md">
          <div className="swiper-wrapper">
            {images.map(el => (
              <div key={crypto.randomUUID()} className="swiper-slide gallery-slide h-96 aspect-square sm:aspect-video">
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
    </section>
  );
}
