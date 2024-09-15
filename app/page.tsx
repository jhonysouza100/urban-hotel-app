import Main from "@/components/Main";
import Service from "@/components/Service";
import Explore from "@/components/Explore";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import dynamic from "next/dynamic";

import Header from "@/components/Header";

const Suscription = dynamic(() => import("@/components/Suscription"), {
  ssr: true,
  loading: () => <p className="m-auto">Loading...</p>,
});

export default function Home() {

  return (
    <>
    <Header />
    <main>
      <Main />
      <Service />
      <Testimonials />
      <Location />
      <Explore />
      <Suscription />
    </main>
    </>
  );
}
