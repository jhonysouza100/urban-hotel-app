import texts from "@/lang/es";
import { getMediaPaths } from "@/hooks/useGetMediaPaths";
import { RiFacebookCircleFill, RiInstagramFill, RiWhatsappFill } from "@remixicon/react";
import MainSwiper from "./MainSwiper";

export default async function Main() {

  const TEXT = texts.ES;

  const PATH = await getMediaPaths();

  return (
    <section className="home relative bg-container h-screen min-h-[480px]" id="home">

      <MainSwiper paths={PATH} />
      
      {/* LANG MENU */}
      {/* <LangSelect /> */}

      {/* social component */}
      <div className="home-social grid justify-items-center gap-y-24 absolute top-1/2 -translate-y-1/2 z-20">
        <span className="home-social-text relative rotate-90 font-medium text-background text-sm after:content-[''] after:w-12 after:h-[1px] after:bg-neutral-100 after:absolute after:top-0 after:bottom-0 after:my-auto after:-right-16">
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