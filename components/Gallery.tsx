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

export default function Gallery() {
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
      <div className="gallery-section section-container xl:py-4 xl:px-4">

        {/* gallery */}
        <div ref={galleryRef} className="swiper gallery-swiper h-96 w-full rounded-lg">
          <div className="swiper-wrapper">
            <div className="swiper-slide flex h-full items-center justify-center">
              <Image className="block h-full w-full object-cover" src='/img/popular-forest.jpg' height={500} width={500} alt="" />
            </div>
            <div className="swiper-slide flex h-full items-center justify-center">
              <Image className="block h-full w-full object-cover" src='/img/popular-lake.jpg' height={500} width={500} alt="" />
            </div>
            <div className="swiper-slide flex h-full items-center justify-center">
              <Image className="block h-full w-full object-cover" src='/img/popular-mountain.jpg' height={500} width={500} alt="" />
            </div>
            <div className="swiper-slide flex h-full items-center justify-center">
              <Image className="block h-full w-full object-cover" src='/img/home-mountain.jpg' height={500} width={500} alt="" />
            </div>
            <div className="swiper-slide flex h-full items-center justify-center">
              <Image className="block h-full w-full object-cover" src='/img/home-lake.jpg' height={500} width={500} alt="" />
            </div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </div>

        {/* thumbnails */}
        <div ref={thumbsRef} className="swiper thumbs-swiper mt-3 h-32 w-full rounded-lg">
          <div className="swiper-wrapper">
            <div className="swiper-slide thumb-slide">
              <button className="flex h-full w-full items-center justify-center">
                <Image className="block h-full w-full object-cover" src='/img/popular-forest.jpg' height={500} width={500} alt="" />
              </button>
            </div>
            <div className="swiper-slide thumb-slide">
              <button className="flex h-full w-full items-center justify-center">
                <Image className="block h-full w-full object-cover" src='/img/popular-lake.jpg' height={500} width={500} alt="" />
              </button>
            </div>
            <div className="swiper-slide thumb-slide">
              <button className="flex h-full w-full items-center justify-center">
                <Image className="block h-full w-full object-cover" src='/img/popular-mountain.jpg' height={500} width={500} alt="" />
              </button>
            </div>
            <div className="swiper-slide thumb-slide">
              <button className="flex h-full w-full items-center justify-center">
                <Image className="block h-full w-full object-cover" src='/img/home-mountain.jpg' height={500} width={500} alt="" />
              </button>
            </div>
            <div className="swiper-slide thumb-slide">
              <button className="flex h-full w-full items-center justify-center">
                <Image className="block h-full w-full object-cover" src='/img/home-lake.jpg' height={500} width={500} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
