import texts from "@/public/texts";
import SuscriptionForm from "@/components/SuscriptionForm";
import Image from "next/image";

export default function Suscription() {

  const TEXT = texts.ES;
  
  return (
    <section className="join section bg-container">
      <div className="join-container section-container">
        <div className="join-content grid gap-6 gap-y-12 pb-6 justify-center sm:grid-cols-2 md:grid-cols-a sm:items-center xl:pt-4 xl:pb-20 lg:gap-x-32 lg:grid-cols-b">
          <div className="join-data text-center aspect-square self-start">
            <h2 className="section-title sm:text-start">
              {TEXT.joinTitle1} <br /> {TEXT.joinTitle2}
            </h2>
            <p className="join-description sm:text-start mb-8 xl:mb-12">
              {TEXT.joinText1}
            </p>

            <SuscriptionForm />

          </div>
          <div className="join-image scale-image sm:-order-1 block w-full h-auto relative overflow-hidden aspect-[4/5]">
            <Image width={1080} height={1314} src="/img/join-image.jpeg" className="join-img transition-transform duration-500 w-full h-full block top-0 left-0 object-cover" alt="Island image" />
            <div className="shading"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
