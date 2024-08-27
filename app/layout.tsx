import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  title: "Iguazú Urban Hotel Express",
  description: "Hotel en las Cataratas del Iguazú - Disfruta de una experiencia única en nuestro hotel ubicado en la maravillosa región de las Cataratas del Iguazú. Habitaciones cómodas, servicios de calidad y vistas espectaculares.",
  keywords: "hotel, Cataratas del Iguazú, alojamiento, turismo, naturaleza, viaje, paseo, vacaciones, Cataratas del iguazú entradas, cataratas del Iguazú información, reservar hotel, reservar hostel, reservar Habitación, habitación matrimonial, viaje a Cataratas del Iguazú todo incluido en avión, Booking paquetes a Cataratas, Viajes a Cataratas del Iguazú en micro, viajar a Argentina, viajar a Brasil, Despegar pasajes a cataratas del Iguazú",
  openGraph: {
    type: "website",
    url: "https://www.iguazuurbanhotel.com",
    title: "Hotel en las Cataratas del Iguazú",
    description: "Disfruta de una experiencia única en nuestro hotel ubicado en la maravillosa región de las Cataratas del Iguazú. Habitaciones cómodas, servicios de calidad y vistas espectaculares.",
    siteName: "Iguazú Urban Hotel Express",
    images: [{
      url: "https://static.misionesonline.news/wp-content/uploads/2022/06/Iguazu-Urban-Hotel-Express-3.jpg",
    }],
  },
  authors: [{ name: "Iguazú Urban Hotel Express", url: "https://www.iguazuurbanhotel.com" }],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} bg-white tracking-wide min-h-screen select-none antialiased`}>
        <Header />
        {/* <ScrollAnimations /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
