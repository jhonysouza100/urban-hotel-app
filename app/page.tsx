import Location from "@/components/Location";
import Main from "@/components/Main";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import dynamic from "next/dynamic";

const Suscription = dynamic(() => import("@/components/Suscription"), {
  ssr: true,
  loading: () => <p className="m-auto">Loading...</p>,
});

export default function Home() {
  
  return (
    <main>
      <Main />
      <Location />
      <Services />
      <Testimonials />
      <Suscription />
    </main>
  );
}
