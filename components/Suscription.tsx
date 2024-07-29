import { RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";

export default function Suscription() {
  return (
    <section className="join section bg-container">
      <div className="join-container section-container grid gap-6 gap-y-12 pb-6 justify-center md:grid-cols-a md:items-center xl:pt-4 xl:pb-20 xl:gap-x-32 xl:grid-cols-b">
        <div className="join-data text-center">
          <h2 className="section-title md:text-start">
            Your Journey <br /> Starts Here
          </h2>
          <p className="join-description text-start mb-8 xl:mb-12">
            Get up to date with the latest travel and information from us.
          </p>
          <form action="" className="join-form grid gap-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              id="1"
              className="join-input py-5 px-4 bg-neutral-900"
            />
            <button className="join-submit button cursor-pointer">
              Subscribe Our Newsletter <RiArrowRightLine className="w-5 h-5 stroke-secondary" />
            </button>
          </form>
        </div>
        <div className="join-image scale-image relative justify-self-center overflow-hidden md:-order-1">
          <Image width={300} height={300} quality={100} src="/img/join-island.jpg" className="join-img xl:w-[460px] transition-transform duration-500" alt="Island image" />
          <div className="shadow"></div>
        </div>
      </div>
    </section>
  );
}
