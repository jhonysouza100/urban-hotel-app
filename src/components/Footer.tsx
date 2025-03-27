import { RiFacebookLine, RiInstagramLine, RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";
import { getAllStaticUrls } from "@/hooks/useStaticUrls";
import TEXT from "@/lang/es.json";
import ScrollUp from "@/components/ScrollUp";
import Avatar from "@/components/ui/Avatar"
import Image from "next/image";
import Link from "next/link";

export default async function Footer() {
  
  const URL = await getAllStaticUrls();

  return (
    <footer className="footer pt-6 pb-8 bg-container md:pt-10 md:pb-4">

      <div className="footer-container container mx-auto md:max-w-screen-xl px-4 xl:px-20 grid gap-6 gap-y-16">

        <div className="footer-image flex flex-col justify-between items-start gap-4 md:flex-row md:items-center md:justify-start md:gap-8">
          <div className="flex items-center justify-start gap-4">
            
            <Avatar src="/images/logo.png" alt="Logo del hotel" size="large" />

            <div className="footer-text grid gap-1 text-xl font-semibold lg:text-2xl">
              <p className="text-primary-1">{TEXT.brandName2}</p>
              <p className="footer-logo text-container-foreground">{TEXT.brandName1}</p>
            </div>
          </div>

          <a className="-order-1 aspect-square w-[84px] h-[84px] translate-y-3 sm:w-[120px] sm:h-[120px]" href={URL.hotelesVerdes} target="_blank" aria-label="Hoteles más verdes">
            <Image src="/images/certificacion_bronce.png" alt="Hoteles más verdes" width={500} height={500} />
          </a>

        </div>
        

        <div className="footer-content grid grid-cols-1 gap-8 md:gap-y-8 md:gap-x-16 md:grid-cols-max2 lg:gap-x-20 lg:grid-cols-max3 xl:grid-cols-max4">

          <div className="footer-data">
            <h3 className="footer-title text-background text-base mb-4 xl:text-xl xl:mb-6">{TEXT.footerTitle1}</h3>
            <div className="footer-social flex gap-x-6 xl:gap-x-8">
              <a 
                href={`${URL.facebook}`} 
                target="_blank" rel="noreferrer" 
                className="footer-social-link text-container-foreground cursor-pointer transition-all duration-500 hover:text-primary-1 hover:-translate-y-1"
                aria-label="Abrir en Facebook">
                <RiFacebookLine className="w-6 h-6 lg:w-7 lg:h-7" />
              </a>
              <a 
                href={`${URL.instagram}`}
                target="_blank" rel="noreferrer"
                className="footer-social-link text-container-foreground cursor-pointer transition-all duration-500 hover:text-primary-1 hover:-translate-y-1"
                aria-label="Abrir en Instagram">
                <RiInstagramLine className="w-6 h-6 lg:w-7 lg:h-7" />
              </a>
            </div>
          </div>
          
          <div className="footer-data">
            <h3 className="footer-title text-background text-base mb-4 xl:text-xl xl:mb-6">{TEXT.footerTitle2}</h3>
            <ul className="footer-list grid gap-y-3">
              <li className="footer-info"><RiMapPinLine /><a href={`${URL.maps}`} target="_blank" rel="noreferrer">{TEXT.footerInfoDirection}</a></li>
            </ul>
          </div>
         
          <div className="footer-data md:col-start-2 xl:row-start-1 xl:col-start-3">
            <h3 className="footer-title text-background text-base mb-4 xl:text-xl xl:mb-6">{TEXT.contacto}</h3>
            <ul className="footer-list grid gap-y-3">
              <li className="footer-info"><RiPhoneLine /><a target="_blank" rel="noreferrer" href={`${URL.whatsapp}`}> {TEXT.footerInfoPhone}</a></li>
              <li className="footer-info"><RiMailLine /><a target="_blank" rel="noreferrer" href={`mailto:${URL.email}`}> {TEXT.footerInfoEmail}</a></li>
            </ul>
          </div>
          
          <div className="footer-data lg:row-start-1 lg:col-start-3 xl:row-start-2 xl:col-start-1 xl:col-span-2">
            <h3 className="footer-title text-background text-base mb-4 xl:text-xl xl:mb-6">{TEXT.footerTitle4}</h3>
            <ul className="footer-list grid gap-y-3">
              <li className="footer-info"><a target="_blank" rel="noreferrer" href={`${URL.aeropuertoig}`}>{TEXT.footerInfoAirport}</a></li>
              <li className="footer-info"><a target="_blank" rel="noreferrer" href={`${URL.cataratasarg}`}>{TEXT.footerInfoParkArg}</a></li>
              <li className="footer-info"><a target="_blank" rel="noreferrer" href={`${URL.cataratasbr}`}>{TEXT.footerInfoParkBr}</a></li>
              <li className="footer-info"><a target="_blank" rel="noreferrer" href={`${URL.ingresobrasil}`}>{TEXT.footerInfoMigrationBr}</a></li>
              <li className="footer-info"><a target="_blank" rel="noreferrer" href={`${URL.lunallena}`}>{TEXT.footerInFullMoon}</a></li>
            </ul>
          </div>

          <div className="footer-data md:row-start-2 xl:row-start-1 xl:col-start-4">
            <h3 className="footer-title text-background text-base mb-4 xl:text-xl xl:mb-6">{TEXT.footerTitle5}</h3>
            <ul className="footer-list grid gap-y-3">
              <li className="footer-info"><a href={`${URL.developer}`} target="_blank" rel="noreferrer">{TEXT.footerInfoDeveloper}</a></li>
              <li className="footer-info"><a href="/terms">{TEXT.footerTerms}</a></li>
              <li className="footer-info"><a href="/policy">{TEXT.footerInfoPolicy}</a></li>
              <li className="footer-info"><a href="/faq">{TEXT.footerInfoFaq}</a></li>
            </ul>
          </div>

        </div>
        
      </div>

      <div className="footer-copyright-container mx-auto text-center">
        <Link href="/dashboard">
          <span className="footer-copyright text-[0.7rem] xl:text-sm text-container-foreground inline-block mt-24 p-2">
            {"© Copyright Iguazú Urban Hotel 2025. All rights reserved."}
          </span>
        </Link>
      </div>

      <ScrollUp url={URL} />
      
    </footer>
  )
}