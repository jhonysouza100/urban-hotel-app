import Testimonials from "@/components/Testimonials";
import dynamic from "next/dynamic";

const Suscription = dynamic(() => import("@/components/Suscription"), {
  ssr: true,
  loading: () => <p className="m-auto">Loading...</p>,
});

export default function Home() {
  
  return (
    <main>
      <Testimonials />
      <Suscription />
    </main>
  );
}
