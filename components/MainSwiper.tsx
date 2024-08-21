"use client"
import Path from "@/interfaces/path.interface";
import texts from "@/public/texts";
import Button from "./ui/Button";
import { RiWhatsappFill } from "@remixicon/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

interface MainSwiperProps {
  paths: Path;
}

export default function MainSwiper({paths}: MainSwiperProps) {

  const TEXT = texts.ES;

  return (
    <Swiper
      modules={[EffectFade, Autoplay, Pagination]}
      pagination={true}
      effect={'fade'}
      loop={true}
      autoplay={{ delay: 8000, disableOnInteraction: false }}
    >

    {/* {Array.from(['1', '2', '3']).map(el => (<>el</>))} */}
      <SwiperSlide>
        <div className="swiper-content relative min-h-screen !bg-center !bg-cover" 
          style={{ background: `url('/img/home-bg-1.webp') no-repeat` }}
        >
          <div className="home-shadow dark-filter absolute top-0 left-0 w-full h-full z-10" />
          <div className="home-content absolute top-0 left-0 h-full w-full pl-6 flex justify-end items-end z-20">
            <div className="home-data container px-6 grid gap-y-4">
              <h1 className="home-title section-title text-[32px] text-background text-end">{TEXT.homeTitle1}
                <br /> {TEXT.homeTitle2} <span className="text-primary-3">{TEXT.homeTitle3}</span>
              </h1>
              <p className="home-description mb-16 text-background text-end text-xs">{TEXT.homeDescription1}</p>
              <div className="flex justify-end mb-24">
                <Button className="home-button bg-primary-2 rounded-sm">
                  <a href={`${paths.whatsapp}`} target="_blank" className="" aria-label="Whatsapp">
                    {TEXT.homeButtonTitle1} 
                  </a>
                  <RiWhatsappFill className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-content relative min-h-screen !bg-center !bg-cover" 
          style={{ background: `url('/img/home-bg-2.webp') no-repeat` }}
        >
          <div className="home-shadow dark-filter absolute top-0 left-0 w-full h-full z-10" />
          <div className="home-content absolute top-0 left-0 h-full w-full pl-6 flex justify-end items-end z-20">
            <div className="home-data container px-6 grid gap-y-4">
              <h1 className="home-title section-title text-[32px] text-background text-end">{TEXT.homeTitle1}
                <br /> {TEXT.homeTitle2} <span className="text-primary-3">{TEXT.homeTitle3}</span>
              </h1>
              <p className="home-description mb-16 text-background text-end text-xs">{TEXT.homeDescription1}</p>
              <div className="flex justify-end mb-24">
                <Button className="home-button bg-primary-2 rounded-sm">
                  <a href={`${paths.whatsapp}`} target="_blank" className="" aria-label="Whatsapp">
                    {TEXT.homeButtonTitle1} 
                  </a>
                  <RiWhatsappFill className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-content relative min-h-screen !bg-center !bg-cover" 
          style={{ background: `url('/img/home-bg-3.webp') no-repeat` }}
        >
          <div className="home-shadow dark-filter absolute top-0 left-0 w-full h-full z-10" />
          <div className="home-content absolute top-0 left-0 h-full w-full pl-6 flex justify-end items-end z-20">
            <div className="home-data container px-6 grid gap-y-4">
              <h1 className="home-title section-title text-[32px] text-background text-end">{TEXT.homeTitle1}
                <br /> {TEXT.homeTitle2} <span className="text-primary-3">{TEXT.homeTitle3}</span>
              </h1>
              <p className="home-description mb-16 text-background text-end text-xs">{TEXT.homeDescription1}</p>
              <div className="flex justify-end mb-24">
                <Button className="home-button bg-primary-2 rounded-sm">
                  <a href={`${paths.whatsapp}`} target="_blank" className="" aria-label="Whatsapp">
                    {TEXT.homeButtonTitle1} 
                  </a>
                  <RiWhatsappFill className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
}