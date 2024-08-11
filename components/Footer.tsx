import { RiFacebookLine, RiInstagramLine, RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";
import { getMediaLinks } from "@/hooks/useGetMediaLinks";
import texts from "@/public/texts";
import Link from "next/link";

export default async function Footer() {

   const TEXT = texts.ES;
   const LINK = await getMediaLinks();

  return (
    <footer className="footer pt-6 pb-8 bg-container md:pt-10 md:pb-4">

      <div className="footer-container section-container grid gap-6 gap-y-16">
        
        <p className="footer-logo inline-block mb-2 text-light text-xl font-semibold lg:text-2xl">Iguazú Urban Hotel <span className="text-primary-1">Express</span></p>

        <div className="footer-content grid grid-cols-1 gap-4 sm:gap-8 sm:gap-y-8 sm:gap-x-16 sm:grid-cols-max2 lg:gap-12 lg:grid-cols-max3">

          <div className="footer-data">
            <h3 className="footer-title">{TEXT.footerTitle1}</h3>
            <div className="footer-social flex gap-x-6 xl:gap-x-8">
              <a 
                href={`${LINK.facebook}`} 
                target="_blank" rel="noreferrer" 
                className="footer-social-link text-light cursor-pointer transition-all duration-500 hover:text-primary-1 hover:-translate-y-1"
                aria-label="Abrir en Facebook">
                <RiFacebookLine className="w-6 h-6 lg:w-7 lg:h-7" />
              </a>
              <a 
                href={`${LINK.instagram}`}
                target="_blank" rel="noreferrer"
                className="footer-social-link text-light cursor-pointer transition-all duration-500 hover:text-primary-1 hover:-translate-y-1"
                aria-label="Abrir en Instagram">
                <RiInstagramLine className="w-6 h-6 lg:w-7 lg:h-7" />
              </a>
            </div>
          </div>

          <div className="footer-data">
            <h3 className="footer-title">{TEXT.footerTitle2}</h3>
            <ul className="footer-list grid gap-y-3">
              <li className="footer-info"><RiMapPinLine /><a href={`${LINK.maps}`} target="_blank" rel="noreferrer">{TEXT.footerInfoDirection}</a></li>
            </ul>
          </div>

          <div className="footer-data">
            <h3 className="footer-title">{TEXT.footerTitle3}</h3>
            <ul className="footer-list grid gap-y-3">
              <li className="footer-info"><RiPhoneLine /><a target="_blank" rel="noreferrer" href={`${LINK.whatsapp}`}> {TEXT.footerInfoPhone}</a></li>
              <li className="footer-info"><RiMailLine /><a target="_blank" rel="noreferrer" href={`${LINK.email}`}> {TEXT.footerInfoEmail}</a></li>
            </ul>
          </div>

          <div className="footer-data">
            <h3 className="footer-title">{TEXT.footerTitle4}</h3>
            <ul className="footer-list grid gap-y-3">
              <li className="footer-info"><a target="_blank" rel="noreferrer" href={`${LINK.aeropuertoig}`}>{TEXT.footerInfoAirport}</a></li>
              <li className="footer-info"><a target="_blank" rel="noreferrer" href={`${LINK.cataratasarg}`}>{TEXT.footerInfoParkArg}</a></li>
              <li className="footer-info"><a target="_blank" rel="noreferrer" href={`${LINK.cataratasbr}`}>{TEXT.footerInfoParkBr}</a></li>
              <li className="footer-info"><a target="_blank" rel="noreferrer" href={`${LINK.ingresobrasil}`}>{TEXT.footerInfoMigrationBr}</a></li>
              <li className="footer-info"><a target="_blank" rel="noreferrer" href={`${LINK.lunallena}`}>{TEXT.footerInFullMoon}</a></li>
            </ul>
          </div>

          <div className="footer-data">
            <h3 className="footer-title">{TEXT.footerTitle5}</h3>
            <ul className="footer-list grid gap-y-3">
              <li className="footer-info"><a href={`${LINK.developer}`} target="_blank" rel="noreferrer">{TEXT.footerInfoDeveloper}</a></li>
              <li className="footer-info"><Link href="/terms">{TEXT.footerTerms}</Link></li>
              <li className="footer-info"><Link href="/policy">{TEXT.footerInfoPolicy}</Link></li>
              <li className="footer-info"><Link href="/faq">{TEXT.footerInfoFaq}</Link></li>
            </ul>
          </div>

        </div>
        
      </div>

      <span className="footer-copyright text-[0.7rem] xl:text-sm text-light block mt-24 text-center">{"© Copyright Iguazú Urban Hotel 2024. All rights reserved."}</span>
      
    </footer>
  )
}