"use client";
import Review from '@/interfaces/review.interface';
import { useEffect } from 'react';
import TestimonialCard from "./TestimonialCard";

import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface TestimonialsSwiperProps {
  reviews: Review[];
}

export default function TestimonialsSwiper({ reviews }: TestimonialsSwiperProps) {
 
  const swiperParams: SwiperOptions = {
    modules: [Autoplay],
    autoplay: { delay: 5000, disableOnInteraction: false },
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
    // onSlideChange: ({ activeIndex }: { activeIndex: number }) => {
    //   const slides = document.querySelectorAll('.swiper-slide');
    //   slides.forEach((slide, index) => {
    //     if (slide instanceof HTMLElement) { // Asegura que sea un HTMLElement
    //       if (index === activeIndex) {
    //         slide.style.transform = 'scale(1.07)';
    //       } else {
    //         slide.style.transform = 'scale(1)';
    //       }
    //     }
    //   })
    // }
  };

  useEffect(() => {
    const swiper = new Swiper('.testimonials-swiper', swiperParams);
  }, [])

  return (
    <>
      <div className='swiper testimonials-swiper'>
        <div className="swiper-wrapper">
          {reviews && reviews.map((el, virtualIndex) => (
            <div key={crypto.randomUUID()} className="swiper-slide p-4 md:p-5 transition-transform duration-500">
              <TestimonialCard review={el} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}