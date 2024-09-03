import Service from "@/components/Service";
import Location from "@/components/Location";
import Main from "@/components/Main";
import Testimonials from "@/components/Testimonials";
import dynamic from "next/dynamic";
import Explore from "@/components/Explore";

const Suscription = dynamic(() => import("@/components/Suscription"), {
  ssr: true,
  loading: () => <p className="m-auto">Loading...</p>,
});

export default function Home() {
  
  return (
    <main>
      <Main />
      <Service />
      <Explore />
      <Testimonials />
      <Location />
      <Suscription />
    </main>
  );
}
