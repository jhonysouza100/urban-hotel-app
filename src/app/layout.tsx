import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
// import AdSenseScript from "@/providers/AdSenseScript";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Iguazú Urban Hotel Express",
    template: "%s | Iguazú Urban Hotel",
  },
  description: "Hotel en las Cataratas del Iguazú - Disfruta de una experiencia única en nuestro hotel ubicado en la maravillosa región de las Cataratas del Iguazú. Habitaciones cómodas, servicios de calidad y vistas espectaculares.",
  keywords: [
    "Cataratas del Iguazú",
    "Hotel barato",
    "Hotel Cataratas del Iguazú",
    "Alojamiento en Puerto Iguazú económico",
    "Hoteles en Iguazú centro",
    "Hotel cerca de las Cataratas",
    "Alojamiento cerca de las Cataratas del Iguazú",
    "Hoteles en Cataratas del Iguazú lado argentino",
    "Hoteles en Cataratas del Iguazú lado brasileño",
    "Hoteles en Puerto Iguazú 3 estrellas",
    "Hoteles en Puerto Iguazú 4 estrellas",
    "Hoteles económicos en Puerto Iguazú",
    "Cabañas en Puerto Iguazú",
    "Reservas en Puerto Iguazú",
    "Reservas hotel Iguazú",
    "Ofertas hotel Cataratas",
    "Hoteles baratos en Cataratas del Iguazú",
    "Mejores hoteles en Iguazú para familias",
    "Hotel con vista a las Cataratas del Iguazú",
    "Alojamiento para parejas en Iguazú",
    "Hostales y hoteles en Puerto Iguazú",
    "Turismo en Iguazú",
  ],  
  category: 'tourism',
  openGraph: {
    locale: "es_ES",
    type: "website",
    url: "https://www.iguazuurbanhotel.com",
    title: "Hotel en las Cataratas del Iguazú",
    description: "Disfruta de una experiencia única en nuestro hotel ubicado en la maravillosa región de las Cataratas del Iguazú. Habitaciones cómodas, servicios de calidad y vistas espectaculares.",
    siteName: "Iguazú Urban Hotel Express",
    images: [{
      url: "https://static.misionesonline.news/wp-content/uploads/2022/06/Iguazu-Urban-Hotel-Express-3.jpg",
    }],
  },
  appleWebApp: { 
    capable: true, 
    statusBarStyle: "black-translucent", 
    title: "Iguazú Urban Hotel Express", 
    startupImage: [{
      url: '/android-chrome-512x512.png',
      media: '(device-width: 768px) and (device-height: 1024px)',
    },]
  },
  // themeColor: "	#cdab7e", /* deprecated */
  verification: { google: 'google'},
  alternates: {
    canonical: 'https://www.iguazuurbanhotel.com',
    // languages: {
    //   'en-US': 'https://www.iguazuurbanhotel.com/en',
    //   'pt-Br': 'https://www.iguazuurbanhotel.com/pt',
    // }
  },
  other: {
    street_address: 'Fray Luiz Beltran 290',
    locality: 'Puerto Iguazú',
    postal_code: '3370',
    country_name: ' Argentina',
    Latitude: '-25.5970016',
    Longitude: '-54.5684891'
  },
  manifest: "/site.webmanifest",
  authors: [{ name: "Iguazú Urban Hotel Express", url: "https://www.iguazuurbanhotel.com" }],
  creator: 'jhonysouza100',
  publisher: 'Chill Hop',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'Next.js',
  applicationName: 'urban-hotel-app',
  referrer: 'origin-when-cross-origin',
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      {/* <head> */}
        {/* <AdSenseScript /> */}
      {/* </head> */}
      <body className={`${poppins.className} bg-neutral-50 tracking-wide min-h-screen select-none antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
