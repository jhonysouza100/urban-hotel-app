import texts from "@/public/texts";
import SuscriptionForm from "@/components/SuscriptionForm";
import Image from "next/image";

export default function Suscription() {

  const TEXT = texts.ES;
  
  return (
    <section className="join section bg-container">
      <div className="join-container section-container grid gap-6 gap-y-12 pb-6 justify-center md:grid-cols-a md:items-center xl:pt-4 xl:pb-20 xl:gap-x-32 xl:grid-cols-b">
        <div className="join-data text-center">
          <h2 className="section-title md:text-start">
            {TEXT.jointitle1} <br /> {TEXT.jointitle2}
          </h2>
          <p className="join-description text-start mb-8 xl:mb-12">
            {TEXT.jointext1}
          </p>

          <SuscriptionForm />

        </div>
        <div className="join-image scale-image relative justify-self-center overflow-hidden md:-order-1">
          <Image priority width={300} height={300} quality={100} src="/img/join-image.jpeg" className="join-img h-[300px] w-[300px] xl:w-[420px] xl:h-[460px] transition-transform duration-500" alt="Island image" />
          <div className="shadow"></div>
        </div>
      </div>
    </section>
  );
}
