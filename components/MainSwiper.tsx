"use client"
import Path from "@/interfaces/path.interface";
import texts from "@/lang/es";
import Button from "./ui/Button";
import { RiWhatsappFill } from "@remixicon/react";
import { useEffect } from "react";

import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, EffectFade } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

interface MainSwiperProps {
  paths: Path;
}

export default function MainSwiper({paths}: MainSwiperProps) {

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
  
  const TEXT = texts.ES;

  return (
    <div className="swiper main-swiper">
      <div className="swiper-wrapper">
        {Array.from(['1', '2', '3']).map(el => (
          <div key={crypto.randomUUID()} className="swiper-slide">
            <div className="swiper-content relative h-screen min-h-[480px] !bg-center !bg-cover" 
              style={{ background: `url('/img/home-bg-${el}.webp') no-repeat` }}
            >
              <div className="home-shadow dark-filter absolute top-0 left-0 w-full h-full z-10" />
              <div className="home-content absolute top-0 left-0 h-full w-full pl-10 flex justify-end items-end z-20 lg:pl-80 lg:pr-8">
                <div className="home-data container px-6 grid gap-y-4">
                  <h1 className="home-title section-title text-[32px] text-background text-end lg:text-[2.5rem]">{TEXT.homeTitle1}
                    <br /> {TEXT.homeTitle2} <span className="text-primary-3">{TEXT.homeTitle3}</span>
                  </h1>
                  <p className="home-description mb-16 text-background text-end text-xs md:text-sm lg:text-base">{TEXT.homeDescription1}</p>
                  <div className="flex justify-end mb-24 md:mb-14">
                    <a href={`${paths.whatsapp}`} target="_blank" className="z-20" aria-label="Whatsapp">
                      <Button className="home-button bg-primary-2 rounded-md">
                        {TEXT.homeButtonTitle1} 
                        <RiWhatsappFill />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}