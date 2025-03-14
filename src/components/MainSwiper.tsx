"use client";

import { useEffect } from "react";

import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, EffectFade } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function MainSwiper() {

  const swiperParams: SwiperOptions = {
    modules: [Autoplay, EffectFade],
    autoplay: { delay: 3000, disableOnInteraction: false },
    effect: 'fade',
    grabCursor: true,
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    speed: 1500
  };
  
  useEffect(() => {
    new Swiper('.main-swiper', swiperParams);
  }, [])
  
  return (
    <div className="swiper main-swiper">
      <div className="swiper-wrapper">
        {Array.from(['1', '2', '3']).map(el => (
          <div key={crypto.randomUUID()} className="swiper-slide">
            <div className="swiper-content relative h-screen min-h-[480px] !bg-center !bg-cover" 
              style={{ background: `url('/images/home-bg-${el}.webp') no-repeat` }}
            >
              <div className="home-shadow dark-filter absolute top-0 left-0 w-full h-full z-10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}