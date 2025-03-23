import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import AdSenseScript from "@/providers/AdSenseScript";
import "./globals.css";
import { AuthProvider } from "@/hooks/useAuth"
import { Toaster } from "sonner";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Iguazú Urban Hotel Express",
    template: "%s | Iguazú Urban Hotel",
  },
  description: "Hotel económico en las Cataratas del Iguazú con excelente relación calidad-precio. Habitaciones cómodas, desayuno incluido, WiFi gratis y ubicación céntrica a solo 20 min de las Cataratas. ¡Reserva ahora!",
  keywords: [
    "Hotel barato Cataratas del Iguazú",
    "Alojamiento económico Puerto Iguazú",
    "Hotel económico cerca de Cataratas",
    "Mejor precio hotel Iguazú",
    "Ofertas hotel Cataratas",
    "Hotel económico Iguazú centro",
    "Hospedaje barato Cataratas",
    "Hotel calidad precio Iguazú",
    "Alojamiento accesible Cataratas",
    "Hoteles baratos Puerto Iguazú",
    "Reserva hotel económico Iguazú",
    "Promociones hotel Cataratas",
    "Descuentos hotel Iguazú",
    "Habitaciones baratas Cataratas",
    "Presupuesto hotel Iguazú",
  ],  
  category: 'tourism',
  openGraph: {
    locale: "es_ES",
    type: "website",
    url: "https://www.iguazuurbanhotel.com",
    title: "Hotel en las Cataratas del Iguazú",
    description: "Hotel en las Cataratas del Iguazú. Habitaciones cómodas, ubicación céntrica, desayuno incluido y WiFi gratis. A solo 20 min de las Cataratas. ¡Mejor relación calidad-precio garantizada!",
    siteName: "Iguazú Urban Hotel Express",
    images: [{
      url: "https://static.misionesonline.news/wp-content/uploads/2022/06/Iguazu-Urban-Hotel-Express-3.jpg",
      width: 1200,
      height: 630,
      alt: "Habitaciones económicas en Iguazú"
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Económico en las Cataratas del Iguazú | Iguazú Urban Hotel Express',
    description: 'Hotel en las Cataratas del Iguazú. Habitaciones cómodas, ubicación céntrica, desayuno incluido y WiFi gratis.',
    images: ['https://static.misionesonline.news/wp-content/uploads/2022/06/Iguazu-Urban-Hotel-Express-3.jpg'],
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
  verification: { google: 'google0d1ea2d6ded018dc.html'},
  alternates: {
    canonical: 'https://www.iguazuurbanhotel.com',
    languages: {
      'en-US': 'https://www.iguazuurbanhotel.com/en',
      'pt-BR': 'https://www.iguazuurbanhotel.com/pt',
    }
  },
  other: {
    street_address: 'Fray Luiz Beltran 290',
    locality: 'Puerto Iguazú',
    postal_code: '3370',
    country_name: ' Argentina',
    Latitude: '-25.5970016',
    Longitude: '-54.5684891',
    'og:priceRange': 'U$40',
    'business:contact_data:street_address': 'Fray Luiz Beltran 290',
    'business:contact_data:locality': 'Puerto Iguazú',
    'business:contact_data:postal_code': '3370',
    'business:contact_data:country_name': 'Argentina',
    'place:location:latitude': '-25.5970016',
    'place:location:longitude': '-54.5684891'
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
  applicationName: 'Iguazú Urban Hotel',
  referrer: 'origin-when-cross-origin',
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      {/* <head> */}
        {/* <AdSenseScript /> */}
      {/* </head> */}
      <body className={`${poppins.className} bg-neutral-50 tracking-wide min-h-screen select-none antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
