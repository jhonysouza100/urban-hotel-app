import texts from "@/public/texts";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import { RiArrowRightLine } from "@remixicon/react";

export default function Explore() {
  
  const TEXT = texts.ES;

  return (
    <section className="explore section pt-0 mt-10 xl:mt-28 relative bg-container" id="explore">
      <div className="explore-container">
          <div className="explore-image absolute overflow-hidden">
            <Link href={`/explore`} className=" shadow-md absolute top-1/2 right-1/2 translate-x-1/2 sm:-translate-y-1/2 z-10">
              <Button className="rounded-md move-right bg-primary-2">{TEXT.moreButtonText1}<RiArrowRightLine className="w-5 h-5" /></Button>
            </Link>
            <Image src="/img/explore-img-0.jpg"
            className="explore-img w-full h-[333px] object-cover object-center sm:w-screen xl:h-[600px]"
            alt="Explore image"
            width={1080}
            height={720}
            quality={100}
            />
            <div className="explore-shadow absolute top-0 left-0 w-full h-full"></div>
          </div>
          <div className="explore-content container mx-auto sm:max-w-screen-xl px-4 xl:px-20 grid gap-6 relative pt-64 text-center gap-y-10 xl:pt-[24rem] xl:grid-cols-c">
            <div className="explore-data xl:text-start">
                <h2 className="section-title font-semibold text-neutral-100 sm:text-start">{TEXT.exploreTitle1}<br />{TEXT.exploreTitle2}</h2>
                <p className="explore-description text-sm text-container-foreground sm:text-start">{TEXT.exploreDescription1}</p>
            </div>
            <div className="explore-user inline-flex items-center justify-center gap-x-2 xl:justify-end xl:self-end xl:mb-5">
                <Image src="/img/explore-perfil.png"
                className="explore-profile w-8 rounded-full"
                alt="Explore profile"
                width={320}
                height={320}
                />
                <span className="explore-name text-xs text-neutral-100">Paul James</span>

            </div>
          </div>
      </div>
    </section>
  )
}