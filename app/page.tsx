import Main from "@/components/Main";
import Service from "@/components/Service";
import Explore from "@/components/Explore";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import dynamic from "next/dynamic";

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
