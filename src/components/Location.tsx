import TEXT from "@/lang/es.json";
import { RiBusLine, RiCameraLine, RiPlaneLine, RiRoadMapLine, RiShoppingBagLine, RiTreeLine } from "@remixicon/react";

export default async function Location() {

  return (
    <section className="location section" id="location">

      <div className="location-container section-container grid gap-6 gap-y-12 grid-cols-1 justify-center md:items-center lg:grid-cols-2 xl:grid-cols-c xl:gap-x-28 xl:py-4">
        <div className="location-data overflow-hidden text-center md:text-start">
          <h2 className="section-title md:text-start">
            {TEXT.locationTitle1}<br />
            {TEXT.locationTitle2}
          </h2>
          <p className="location-description mb-8 text-muted-foreground xl:mb-12">
            {TEXT.locationDescription1}
          </p>
          <div className="section-data text-start rounded-r-md grid grid-cols-1 md:grid-cols-max2 gap-y-2 gap-x-4">
            <div className="grid grid-cols-max2 items-center gap-x-2"><RiBusLine /><span className="font-medium text-muted-foreground">{TEXT.locationTextGroup1[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.locationTextGroup1[1]}</span></div>
            <div className="grid grid-cols-max2 items-center gap-x-2"><RiRoadMapLine /><span className="font-medium text-muted-foreground">{TEXT.locationTextGroup2[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.locationTextGroup2[1]}</span></div>
            <div className="grid grid-cols-max2 items-center gap-x-2"><RiCameraLine /><span className="font-medium text-muted-foreground">{TEXT.locationTextGroup3[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.locationTextGroup3[1]}</span></div>
            <div className="grid grid-cols-max2 items-center gap-x-2"><RiShoppingBagLine /><span className="font-medium text-muted-foreground">{TEXT.locationTextGroup4[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.locationTextGroup4[1]}</span></div>
            <div className="grid grid-cols-max2 items-center gap-x-2"><RiTreeLine /><span className="font-medium text-muted-foreground">{TEXT.locationTextGroup5[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.locationTextGroup5[1]}</span></div>
            <div className="grid grid-cols-max2 items-center gap-x-2"><RiPlaneLine /><span className="font-medium text-muted-foreground">{TEXT.locationTextGroup6[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.locationTextGroup6[1]}</span></div>
          </div>
        </div>
        <div className="location-image shadow-md rounded-lg overflow-hidden w-full h-full lg:-order-1">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d756.439296249307!2d-54.56812382158762!3d-25.59654208367118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6923382135a49%3A0x4c03b72e6c337200!2sIguazu%20Urban%20Hotel!5e0!3m2!1ses!2sar!4v1724418857965!5m2!1ses!2sar"
          className="w-full h-full min-h-[300px] object-cover" loading="lazy" title="Fray Luiz Beltran 290"></iframe>
        </div>
      </div>

    </section>
  ) 
}