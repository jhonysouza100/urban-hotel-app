"use client"
import texts from "@/public/texts";
import { getMediaPaths } from "@/hooks/useGetMediaPaths";
import { RiFacebookCircleFill, RiInformationLine, RiInstagramFill, RiWhatsappFill } from "@remixicon/react";
import Button from "./ui/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Main() {

  const TEXT = texts.ES;

  // const PATH = await getMediaPaths();
  const PATH = {
    whatsapp: '',
    facebook: '',
    instagram: '',
  }

  return (
    <section className="home relative bg-container h-screen" id="home">

      {/* <Swiper /> */}
      <Swiper
        modules={[EffectFade, Pagination, Autoplay, Keyboard]}
        className="home-slider"
        pagination={{ clickable: true }}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={'auto'}
        effect={'fade'}
        loop={true}
        keyboard={{enabled: true,}}
        autoplay={{delay: 8000, disableOnInteraction: false,}}
        grabCursor={true}
        >

          {Array.from(['1', '2', '3']).map(el => (
            <SwiperSlide key={crypto.randomUUID()}>
              <div className="swiper-content relative min-h-screen !bg-center !bg-cover" 
                style={{ background: `url('/img/home-bg-${el}.webp') no-repeat` }}
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
                        <a href={`${PATH.whatsapp}`} target="_blank" className="" aria-label="Whatsapp">
                          {TEXT.homeButtonTitle1} 
                        </a>
                        <RiWhatsappFill className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            
          ))}

    </Swiper>
      {/* LANG MENU */}
      {/* <LangSelect /> */}

      {/* social component */}
      <div className="home-social grid justify-items-center gap-y-24 absolute top-1/2 -translate-y-1/2 z-20">
        <span className="home-social-text relative rotate-90 font-medium text-background text-sm after:content-[''] after:w-12 after:h-[1px] after:bg-background after:absolute after:top-0 after:bottom-0 after:my-auto after:-right-16">
          {TEXT.socialLinkTitle1}
        </span>
        <div className="home-social-links grid gap-y-3">
          <a href={`${PATH.instagram}`} target="_blank" className="home-social-link w-6 h-6 text-background transition-transform duration-500 hover:scale-110 cursor-pointer" aria-label="Instagram"><RiInstagramFill /></a>
          <a href={`${PATH.facebook}`} target="_blank" className="home-social-link w-6 h-6 text-background transition-transform duration-500 hover:scale-110 cursor-pointer" aria-label="Facebook"><RiFacebookCircleFill /></a>
          <a href={`${PATH.whatsapp}`} target="_blank" className="home-social-link w-6 h-6 text-background transition-transform duration-500 hover:scale-110 cursor-pointer" aria-label="Whatsapp"><RiWhatsappFill  /></a>
        </div>
      </div>

    </section>
  )
}