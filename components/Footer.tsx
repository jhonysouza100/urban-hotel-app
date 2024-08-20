import { RiFacebookLine, RiInstagramLine, RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";
import { getMediaPaths } from "@/hooks/useGetMediaPaths";
import texts from "@/public/texts";
import Link from "next/link";
import { Avatar } from "@mui/material";

export default async function Footer() {
  
   const TEXT = texts.ES;
   const PATH = await getMediaPaths();

  return (
    <footer className="footer pt-6 pb-8 bg-container md:pt-10 md:pb-4">

      <div className="footer-container section-container grid gap-6 gap-y-16">
        
        <div className="flex items-center justify-start gap-4">
          <Avatar className="footer-logo !w-16 !h-16" alt="Logo del hotel" sizes="medium" src="./img/logo.png" />
          <div className="footer-text grid gap-1 text-xl font-semibold lg:text-2xl">
            <p className="text-primary-1">{TEXT.brandName2}</p>
            <p className="footer-logo text-container-foreground">{TEXT.brandName1}</p>
          </div>
        </div>

        <div className="footer-content grid grid-cols-1 gap-8 sm:gap-y-8 sm:gap-x-16 sm:grid-cols-max2 lg:gap-x-20 lg:grid-cols-max3 xl:grid-cols-max4">

          <div className="footer-data">
            <h3 className="footer-title">{TEXT.footerTitle1}</h3>
            <div className="footer-social flex gap-x-6 xl:gap-x-8">
              <a 
                href={`${PATH.facebook}`} 
                target="_blank" rel="noreferrer" 
                className="footer-social-link text-container-foreground cursor-pointer transition-all duration-500 hover:text-primary-1 hover:-translate-y-1"
                aria-label="Abrir en Facebook">
                <RiFacebookLine className="w-6 h-6 lg:w-7 lg:h-7" />
              </a>
              <a 
                href={`${PATH.instagram}`}
                target="_blank" rel="noreferrer"
                className="footer-social-link text-container-foreground cursor-pointer transition-all duration-500 hover:text-primary-1 hover:-translate-y-1"
                aria-label="Abrir en Instagram">
                <RiInstagramLine className="w-6 h-6 lg:w-7 lg:h-7" />
              </a>
            </div>
          </div>
          
          <div className="footer-data">
            <h3 className="footer-title">{TEXT.footerTitle2}</h3>
            <ul className="footer-list grid gap-y-3">
              <li className="footer-info"><RiMapPinLine /><a href={`${PATH.maps}`} target="_blank" rel="noreferrer">{TEXT.footerInfoDirection}</a></li>
            </ul>
          </div>
         
          <div className="footer-data sm:col-start-2 xl:row-start-1 xl:col-start-3">
            <h3 className="footer-title">{TEXT.footerTitle3}</h3>
            <ul className="footer-list grid gap-y-3">
              <li className="footer-info"><RiPhoneLine /><a target="_blank" rel="noreferrer" href={`${PATH.whatsapp}`}> {TEXT.footerInfoPhone}</a></li>
              <li className="footer-info"><RiMailLine /><a target="_blank" rel="noreferrer" href={`${PATH.email}`}> {TEXT.footerInfoEmail}</a></li>
            </ul>
          </div>
          
          <div className="footer-data lg:row-start-1 lg:col-start-3 xl:row-start-2 xl:col-start-1 xl:col-span-2">
            <h3 className="footer-title">{TEXT.footerTitle4}</h3>
            <ul className="footer-list grid gap-y-3">
              <li className="footer-info"><a target="_blank" rel="noreferrer" href={`${PATH.aeropuertoig}`}>{TEXT.footerInfoAirport}</a></li>
              <li className="footer-info"><a target="_blank" rel="noreferrer" href={`${PATH.cataratasarg}`}>{TEXT.footerInfoParkArg}</a></li>
              <li className="footer-info"><a target="_blank" rel="noreferrer" href={`${PATH.cataratasbr}`}>{TEXT.footerInfoParkBr}</a></li>
              <li className="footer-info"><a target="_blank" rel="noreferrer" href={`${PATH.ingresobrasil}`}>{TEXT.footerInfoMigrationBr}</a></li>
              <li className="footer-info"><a target="_blank" rel="noreferrer" href={`${PATH.lunallena}`}>{TEXT.footerInFullMoon}</a></li>
            </ul>
          </div>

          <div className="footer-data sm:row-start-2 xl:row-start-1 xl:col-start-4">
            <h3 className="footer-title">{TEXT.footerTitle5}</h3>
            <ul className="footer-list grid gap-y-3">
              <li className="footer-info"><a href={`${PATH.developer}`} target="_blank" rel="noreferrer">{TEXT.footerInfoDeveloper}</a></li>
              <li className="footer-info"><Link href="/terms">{TEXT.footerTerms}</Link></li>
              <li className="footer-info"><Link href="/policy">{TEXT.footerInfoPolicy}</Link></li>
              <li className="footer-info"><Link href="/faq">{TEXT.footerInfoFaq}</Link></li>
            </ul>
          </div>

        </div>
        
      </div>

      <span className="footer-copyright text-[0.7rem] xl:text-sm text-container-foreground block mt-24 text-center">{"© Copyright Iguazú Urban Hotel 2024. All rights reserved."}</span>
      
    </footer>
  )
}