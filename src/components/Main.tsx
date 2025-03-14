import TEXT from "@/lang/es.json";
import { getAllStaticUrls } from "@/hooks/useStaticUrls";
import { RiFacebookCircleFill, RiInstagramFill, RiWhatsappFill } from "@remixicon/react";
import MainSwiper from "./MainSwiper";
import Button from "./ui/Button";
import AdSensePropagationWrapper from "@/providers/AdSensePropagationWrapper";

export default async function Main() {

  const URL = await getAllStaticUrls();

  // Array de redes sociales para mapear
  const socialLinks = [
    { icon: <RiInstagramFill />, url: URL.instagram, label: "Instagram" },
    { icon: <RiFacebookCircleFill />, url: URL.facebook, label: "Facebook" },
    { icon: <RiWhatsappFill />, url: URL.whatsapp, label: "Whatsapp" }
  ];

  return (
    <section className="home relative bg-container h-screen min-h-[480px]" id="home">

      <div className="home-content absolute top-0 left-0 h-full w-full pl-10 flex justify-end items-end z-20 lg:pl-80 lg:pr-8 pointer-events-none">
        <div className="home-data container px-6 grid gap-y-4">
          <h1 className="home-title section-title text-[32px] text-background text-end lg:text-[2.5rem]">{TEXT.homeTitle1}
            <br /> {TEXT.homeTitle2} <span className="text-primary-3">{TEXT.homeTitle3}</span>
          </h1>
          <p className="home-description mb-16 text-background text-end text-xs md:text-sm lg:text-base">{TEXT.homeDescription1}</p>
          <div className="flex justify-end mb-24 md:mb-14">
            <AdSensePropagationWrapper dataAdSlot="1603817205">
              <a
                href={`${URL.whatsapp}`}
                target="_blank"
                className="home-button z-20"
                aria-label="Whatsapp">
                <Button
                  text={TEXT.homeButtonTitle1}
                  endIcon={<RiWhatsappFill />}
                  className="bg-primary-2 rounded-md pointer-events-auto"
                />
              </a>
            </AdSensePropagationWrapper>
          </div>
        </div>
      </div>

      <MainSwiper />
      
      {/* LANG MENU */}
      {/* <LangSelect /> */}

      {/* social component */}
      <div className="home-social grid justify-items-center gap-y-24 absolute top-1/2 -translate-y-1/2 z-20">
        <span className="home-social-text relative rotate-90 font-medium text-background text-sm after:content-[''] after:w-12 after:h-[1px] after:bg-neutral-100 after:absolute after:top-0 after:bottom-0 after:my-auto after:-right-16">
          {TEXT.socialLinkTitle1}
        </span>
        <div className="home-social-links grid gap-y-3">
          {socialLinks.map((el, index) => (
            <AdSensePropagationWrapper key={index} dataAdSlot="7100349173">
              <a
                href={`${el.url}`}
                target="_blank"
                className="home-social-link w-6 h-6 text-background transition-transform duration-500 hover:scale-110 cursor-pointer"
                aria-label={el.label}>
                {el.icon}
              </a>
            </AdSensePropagationWrapper>
          ))}
        </div>
      </div>

    </section>
  )
}