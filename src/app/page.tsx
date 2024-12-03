import Main from "@/components/Main";
import Service from "@/components/Service";
import Explore from "@/components/Explore";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import dynamic from "next/dynamic";
import { unstable_noStore } from "next/cache";
import Header from "@/components/Header";
import AddSenseBanner from "@/providers/AddSenseBanner";
// import ScrollAnimationsWrapper from "@/providers/ScrollAnimationsWrapper";

const Suscription = dynamic(() => import("@/components/Suscription"), {
  ssr: true,
  loading: () => <p className="m-auto">Loading...</p>,
});

export default function HomePage() {
  unstable_noStore();
  return (
    <>
    <Header />
    <main>
      <Main />
      <Service />
        <AddSenseBanner className="w-full h-[90px]" dataAdSlot="7100349173" dataAdFormat="auto" dataFullWidthResponsive="true" />
      <Testimonials />
      <Location />
        <AddSenseBanner className="w-full h-[90px]" dataAdSlot="1603817205" dataAdFormat="auto" dataFullWidthResponsive="true" />
      <Explore />
      <Suscription />
    </main>
    {/* <ScrollAnimationsWrapper /> */}
    </>
  );
}
