import texts from "@/public/texts";
import SuscriptionForm from "@/components/SuscriptionForm";
import Image from "next/image";

export default function Suscription() {

  const TEXT = texts.ES;
  
  return (
    <section className="join section bg-container" id="suscription">
      <div className="join-container container mx-auto sm:max-w-screen-xl px-4 xl:px-20 grid gap-6 justify-center gap-y-12 pb-10 sm:grid-cols-a sm:items-center xl:pt-4 xl:gap-x-32 xl:grid-cols-b xl:pb-20">
        <div className="join-data text-center max-w-[340px]">
          <h2 className="section-title text-background mb-6 sm:text-start sm:mb-4 lg:mb-6 xl:text-[2.5rem]">{TEXT.joinTitle1} <br /> {TEXT.joinTitle2}</h2>
          <p className="join-description mb-8 text-container-foreground sm:text-start sm:mb-6 lg:mb-12">{TEXT.joinText1}</p>
          <SuscriptionForm />
        </div>

        <div className="join-image -order-1 w-full h-auto grid justify-items-center overflow-hidden">
          <div className="aspect-square w-[300px] xl:w-full">
            <Image
              className="join-img transition-transform duration-500 w-full h-full object-cover" alt="Imagen de la habitación"
              src="/img/join-image.jpg" 
              width={380}
              height={380}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
          {/* <div className="shading"></div> */}
        </div>
      </div>
    </section>
  );
}
