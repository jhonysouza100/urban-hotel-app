import { RiArrowRightLine } from "@remixicon/react";

export default function Suscription() {
  return (
    <section className="join section bg-container">
      <div className="join-container section-container grid gap-6 gap-y-12 pb-6 justify-center md:grid-cols-a md:items-center lg:gap-x-32 lg:pt-4 lg:pb-20">
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
              Subscribe Our Newsletter <RiArrowRightLine />
            </button>
          </form>
        </div>
        <div className="join-image relative justify-self-center overflow-hidden md:-order-1">
          <img src="http://127.0.0.1:5501/assets/img/join-island.jpg" className="join-img w-[300px] xl:w-[460px] transition-transform duration-500 hover:scale-125" />
          <div className="shadow"></div>
        </div>
      </div>
    </section>
  );
}
