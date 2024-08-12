import texts from "@/public/texts";
import SuscriptionForm from "@/components/SuscriptionForm";
import Image from "next/image";

export default function Suscription() {

  const TEXT = texts.ES;
  
  return (
    <section className="join section bg-container">
      <div className="join-container section-container">
        <div className="join-content grid gap-6 gap-y-12 pb-6 justify-center sm:grid-cols-2 md:grid-cols-a sm:items-center xl:pt-4 xl:pb-20 lg:gap-x-32 lg:grid-cols-b">
          <div className="join-data text-center flex flex-col justify-between aspect-square">
            <h2 className="section-title mb-0 sm:text-start">{TEXT.joinTitle1} <br /> {TEXT.joinTitle2}</h2>
            <p className="join-description sm:text-start">{TEXT.joinText1}</p>
            <SuscriptionForm />
          </div>

          <div className="join-image -order-1 block w-full h-auto relative overflow-hidden aspect-square">
            <Image priority
             className="join-img transition-transform duration-500 w-full h-full block top-0 left-0 object-cover" alt="Imagen de la habitación"
             src="/img/join-image.jpeg" 
             width={320} height={720} 
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* <div className="shading"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
