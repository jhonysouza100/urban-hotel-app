import { RiFacebookLine, RiInstagramLine, RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";
import { getMediaLinks } from "@/hooks/useGetMediaLinks";
import texts from "@/public/texts";

export default async function Footer() {

   const TEXT = texts.ES;
   const LINK = await getMediaLinks();

  return (
    <footer className="footer pt-6 pb-8 bg-container md:pt-10 md:pb-4">

      <div className="footer-container section-container grid gap-6 gap-y-16">
        
        <p className="footer-logo inline-block mb-2 text-light text-xl font-semibold lg:text-2xl">Iguazú Urban Hotel <span className="text-primary-1">Express</span></p>

        <div className="footer-content grid grid-cols-1 gap-4 sm:gap-8 sm:gap-y-4 sm:gap-x-2 md:grid-cols-2 md:gap-16 xl:grid-cols-max4">
          <div className="footer-data">
            <h3 className="footer-title">{TEXT.footertitle1}</h3>
            <div className="footer-social flex gap-x-6 xl:gap-x-8">
              <a href={LINK.facebook} target="_blank" className="footer-social-link text-light cursor-pointer xl:text-2xl transition-all duration-500 hover:text-primary-1 hover:-translate-y-1" aria-label="Contact"><RiFacebookLine className="w-6 h-6 lg:w-7 lg:h-7" /></a>
              <a href={LINK.instagram} target="_blank" className="footer-social-link text-light cursor-pointer xl:text-2xl transition-all duration-500 hover:text-primary-1 hover:-translate-y-1" aria-label="Contact"><RiInstagramLine className="w-6 h-6 lg:w-7 lg:h-7" /></a>
            </div>
          </div>
          <div className="footer-data">
            <h3 className="footer-title">{TEXT.footertitle2}</h3>
            <ul className="footer-list grid gap-y-3">
              <li className="footer-info"><RiMapPinLine className="footer-icon" /><a href={LINK.maps} target="_blank">{TEXT.footerinfo1}</a></li>
            </ul>
          </div>
          <div className="footer-data">
          <h3 className="footer-title">{TEXT.footertitle3}</h3>
          <ul className="footer-list grid gap-y-3">
            <li className="footer-info"><RiPhoneLine className="footer-icon" /><a target="_blank" href={LINK.whatsapp}> {TEXT.footerinfo2}</a></li>
            <li className="footer-info"><RiMailLine className="footer-icon" /><a target="_blank" href={LINK.email}> {TEXT.footerinfo3}</a></li>
          </ul>
        </div>
        <div className="footer-data">
          <h3 className="footer-title">{TEXT.footertitle4}</h3>
          <ul className="footer-list grid gap-y-3">
            <li className="footer-info"><a target="_blank" href={LINK.cataratasarg}>{TEXT.footerinfo4}</a></li>
            <li className="footer-info"><a target="_blank" href={LINK.cataratasbr}>{TEXT.footerinfo5}</a></li>
            <li className="footer-info"><a target="_blank" href={LINK.ingresobrasil}>{TEXT.footerinfo6}</a></li>
            <li className="footer-info"><a target="_blank" href={LINK.aeropuertoig}>{TEXT.footerinfo7}</a></li>
            <li className="footer-info"><a target="_blank" href={LINK.lunallena}>{TEXT.footerinfo8}</a></li>
          </ul>
        </div>

        </div>
        
      </div>

      <span className="footer-copyright text-[0.7rem] xl:text-sm text-light block mt-24 text-center">{"© Copyright Iguazú Urban Hotel 2024. All rights reserved"} by <a className="cursor-pointer" href={LINK.developer} target="_blank">Jhony Souza</a></span>
      
    </footer>
  )
}