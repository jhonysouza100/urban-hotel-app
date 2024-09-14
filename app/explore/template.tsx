import Footer from "@/components/Footer";
import AltHeader from "@/components/AltHeader";

export default function ExploreTemplate({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
    <AltHeader />
    {children}
    <Footer />
    </>
  )

}