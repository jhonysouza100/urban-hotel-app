import texts from "@/public/texts";
import { RiCheckboxCircleLine, RiWifiLine, RiHotelBedLine, RiCupLine, RiTimeLine, RiMapLine } from "@remixicon/react";

export default function Services() {

  const TEXT = texts.ES;

  return(
    <section className="services section" id="services">
      <h3 className="services-title section-title">{TEXT.sectionTitle2}</h3>
      <div className="services-container section-container pt-6 grid grid-cols-2 justify-center sm:pt-8 sm:flex sm:justify-around sm:items-start sm:flex-col lg:pt-10 xl:pt-12 2xl:pt-16">
        <div className="services-group left grid gap-4 sm:grid-cols-4">
          {TEXT.serviceText1 && TEXT.serviceText1.map( el => (
          <div className="services-data flex gap-x-2" key={crypto.randomUUID()}>
            <RiCheckboxCircleLine className="w-6 h-6"/>
            <div>
              <h3 className="services-name text-foreground">{el.t}</h3>
              <span className="skils_level text-muted-foreground text-md">{el.d}</span>
            </div>
          </div>))}
          
        </div>
        <div className="services-group right grid gap-4 sm:grid-cols-4">
        {TEXT.serviceText2 && TEXT.serviceText2.map( el => (
          <div className="services-data flex gap-x-2" key={crypto.randomUUID()}>
            <RiCheckboxCircleLine className="w-6 h-6"/>
            <div>
              <h3 className="services-name text-foreground">{el.t}</h3>
              <span className="skils_level text-muted-foreground text-md">{el.d}</span>
            </div>
          </div>))}
        </div>
      </div>
    </section>
  )
}