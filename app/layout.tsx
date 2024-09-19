import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Iguazú Urban Hotel Express",
    template: "%s | Iguazú Urban Hotel",
  },
  description: "Hotel en las Cataratas del Iguazú - Disfruta de una experiencia única en nuestro hotel ubicado en la maravillosa región de las Cataratas del Iguazú. Habitaciones cómodas, servicios de calidad y vistas espectaculares.",
  keywords: ["hotel", "Cataratas del Iguazú", "alojamiento", "Cataratas del iguazú entradas", "Cataratas del Iguazú información", "reservar hotel", "reservar hostel", "reservar Habitación", "habitación matrimonial", "Viaje a Cataratas del Iguazú todo incluido en avión", "Booking paquetes a Cataratas", "Viajes a Cataratas del Iguazú en micro", "Pasajes a cataratas del Iguazú", "turismo", "naturaleza", "viaje", "paseo", "vacaciones" ],
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
  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "Iguazú Urban Hotel Express" },
  themeColor: "	#cdab7e",
  manifest: "/site.webmanifest",
  authors: [{ name: "Iguazú Urban Hotel Express", url: "https://www.iguazuurbanhotel.com" }],
  creator: 'jhonysouza100',
  publisher: 'Chill Hop',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: { index: true, follow: true },
  generator: 'Next.js',
  applicationName: 'urban-hotel-app',
  referrer: 'origin-when-cross-origin',
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} bg-neutral-100 tracking-wide min-h-screen select-none antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
