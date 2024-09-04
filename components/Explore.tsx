import { RiBatteryChargeLine, RiTeamLine, RiTimeLine, RiTreasureMapLine, RiTShirtLine, RiWalkLine } from "@remixicon/react";
import Image from "next/image";

export default function Explore() {
  return (
    // <section className="explore w-full h-screen bg-gradient-to-t from-neutral-900 to-neutral-200 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:backdrop-blur-xl after:-z-10">
    <section className="explore w-full" id="explore">
      <div className="section-container section grid gap-4 justify-center sm:grid-cols-2 lg:grid-cols-3">
        <div className="card shadow-md bg-neutral-50 w-80 aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y">
          <Image className="rounded-lg" src={'/img/explore-img-8.jpg'} width={380} height={380} alt="hola mundo" />
          <h3 className="text-foreground font-bold">Cataratas del Iguazú<br /><span className="text-muted-foreground text-sm">Lado Argentino</span></h3>
          <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">Las majestuosas Cataratas del Iguazú se encuentran en el interior del Parque Nacional Iguazú, un área de preservación de la naturaleza que abarca 67.720 hectáreas en el extremo norte de la Provincia de Misiones, en la República Argentina. Son un conjunto de 275 saltos que se localizan sobre el Río Iguazú, en el límite entre la Provincia de Misiones y el Estado Brasileño de Paraná a 17 kilómetros de la localidad de Puerto Iguazú.</p>
        </div>
        <div className="card shadow-md bg-neutral-50 w-80 aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y">
          <Image className="rounded-lg" src={'/img/explore-img-9.jpg'} width={380} height={380} alt="hola mundo" />
          <h3 className="text-foreground font-bold">Cataratas del Iguazú<br /><span className="text-muted-foreground text-sm">Lado Brasilero</span></h3>
          <p className="text-muted-foreground max-h-40 overflow-auto scrollbar-thin">Aprovechá la vista panorámica que se obtiene desde el Lado Brasilero. Desde los miradores y pasarelas del Parque Nacional do Iguaçú se puede apreciar una vista de casi la totalidad de los saltos. Además de un impresionante acercamiento a la Garganta del Diablo.</p>
        </div>
        <div className="card shadow-md bg-neutral-50 w-80 aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y">
          <Image className="rounded-lg" src={'/img/explore-img-10.jpg'} width={380} height={380} alt="hola mundo" />
          <h3 className="text-foreground font-bold">Gomon Gran Aventura<br /><span className="text-muted-foreground text-sm">Excurión en bote</span></h3>
          <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">{`Primero, un paseo en camión 4x4 por los caminos de la selva durante 30 minutos (5.5km). Luego suben al gomón 5km río abajo y van subiendo contra la corriente hasta llegar al cañadón de las cataratas!. Tendran un breve momento para sacar fotos y luego se viene lo mejor! Ingresan con el gomón al salto tres mosqueteros para mojarse y tener un avistamiento de la "Garganta del Diablo". Por último pero no menos importante, entran al segundo salto más importante de las cataratas, el salto "San Martin" donde van a vivir una experiencia diferente y única, van a mojarse muchisimo! Concluyen volviendo al primer punto de encuentro.`}</p>
          <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center"><RiTimeLine className="w-5 h-5" />Duración 2:15hs aprox.</span>
          <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center"><RiTeamLine className="w-5 h-5" />Edad mínima 12 años</span>
          <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center"><RiTShirtLine className="w-5 h-5" />Llevar un cambio de ropa</span>
        </div>
        <div className="card shadow-md bg-neutral-50 w-80 aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y">
          <Image className="rounded-lg" src={'/img/explore-img-12.jpg'} width={380} height={380} alt="hola mundo" />
          <h3 className="text-foreground font-bold">Jungle Fly<br /><span className="text-muted-foreground text-sm">Aventura en medio de la selva</span></h3>
          <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">Tirolesa a 70mts de altura, pasarelas colgantes, caminatas por la selva con guía y Rappel (descenso por cascada de 12mts de altura).</p>
          <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center"><RiTimeLine className="w-5 h-5" />Duración 4hs aprox.</span>
          <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center"><RiBatteryChargeLine className="w-5 h-5" />Intensa</span>
          <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center"><RiTShirtLine className="w-5 h-5" />Calzado y prendas cómodas</span>
        </div>
        <div className="card shadow-md bg-neutral-50 w-80 aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y">
          <Image className="rounded-lg" src={'/img/explore-img-13.jpg'} width={380} height={380} alt="hola mundo" />
          <h3 className="text-foreground font-bold">Cabalgata ecológica del indio solitario<br /><span className="text-muted-foreground text-sm">Paseo a caballo por la selva</span></h3>
          <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">Una experiencia bastante apreciable, no se pueden perder este paseo. Nos toco un dia de lluvia lo que hizo del paseo mucho mas especial al estar en contacto con la naturaleza, el paso por la selva fue increíble. Fuimos con niños y no habíamos cabalgado nunca el guía nos dio confianza y los caballos son mansos y lo mas importante estan bien cuidados, un beso a lucerito, colibrí, presuntuoso, y correntina, sin duda un recuerdo que quedara para siempre en los niños.</p>
          <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center"><RiTimeLine className="w-5 h-5" />Duración 2hrs aprox.</span>
          <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center"><RiBatteryChargeLine className="w-5 h-5" />Moderada</span>
        </div>
        <div className="card shadow-md bg-neutral-50 w-80 aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y">
          <Image className="rounded-lg overflow-hidden" src={'/img/explore-img-15.jpg'} width={380} height={380} alt="hola mundo" />
          <h3 className="text-foreground font-bold">Güirá Oga<br /><span className="text-muted-foreground text-sm">La casa de los pájaros</span></h3>
          <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">Recorrerá senderos rodeado por la selva misionera y conocerá a sus habitantes en recintos que conservan la vegetación del lugar, ofreciendo a los animales que no pueden ser liberados la posibilidad de vivir en su hábitat. GüiráOga le hará reflexionar sobre la necesidad de proteger la fauna silvestre y su entorno. La actividad se realiza en compañía de un guía. Apta para toda la familia.</p>
          <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center"><RiTimeLine className="w-5 h-5" />Duración 1:30hrs aprox.</span>
          <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center"><RiBatteryChargeLine className="w-5 h-5" />Leve</span>
        </div>
        <div className="card shadow-md bg-neutral-50 w-80 aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y">
          <Image className="rounded-lg overflow-hidden" src={'/img/explore-img-14.jpg'} width={380} height={380} alt="hola mundo" />
          <h3 className="text-foreground font-bold">Hito Tres Fronteras<br /><span className="text-muted-foreground text-sm">Puerto Iguazú</span></h3>
          <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">El Hito es el segundo atractivo más visitado de nuestro destino, donde miles de turistas se acercan para llevarse las mejores postales junto a recuerdo inolvidable de un espacio único que reúne a dos ríos y tres países. Viernes, sábado y domingo se habilita el show de aguas danzantes en el hito de las tres fronteras. Las luces se encienden de 19 a 20 hs, mientras que el show principal se proyecta a las 19:30 hs. Es de entrada libre y gratuita. ¡Los esperamos!</p>
          <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center"><RiTimeLine className="w-5 h-5" />Duración 1:30hrs aprox.</span>
          <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center"><RiBatteryChargeLine className="w-5 h-5" />Leve</span>
          <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center"><RiWalkLine className="w-5 h-5" />Se puede llegar caminando</span>
        </div>
        <div className="card shadow-md bg-neutral-50 w-80 aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y">
          <Image className="rounded-lg overflow-hidden" src={'/img/explore-img-16.jpg'} width={380} height={380} alt="hola mundo" />
          <h3 className="text-foreground font-bold">Ruinas de San Ignacio<br /><span className="text-muted-foreground text-sm"></span></h3>
          <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">Sin dudas uno de los puntos turísticos más visitados de la Provincia de Misiones. Las Ruinas de San Ignacio son uno los vestigios mejores conservados de lo que fue el proceso, la evangelización de los nativos guaraníes por parte de los jesuitas y de las capacidades que adquirieron. Al visitar estas ruinas te vas a encontrar, con los restos de lo que fue una ciudad que llego albergar a aproximadamente a 4500 personas. Esta fue una ciudad en medio de la selva misionera construida a lo largo de 150 años por los mismos guaraníes a través de las misiones de evangelización jesuitas.</p>
          <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center"><RiTimeLine className="w-5 h-5" />La excursión dura todo el día</span>
          <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center"><RiTreasureMapLine className="w-5 h-5" />A 250 km de distancia</span>
        </div>
        <div className="card shadow-md bg-neutral-50 w-80 aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y">
          <Image className="rounded-lg overflow-hidden" src={'/img/explore-img-17.jpg'} width={380} height={380} alt="hola mundo" />
          <h3 className="text-foreground font-bold">Minas de Wanda<br /><span className="text-muted-foreground text-sm">Yacimiento de piedras semipreciosas</span></h3>
          <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">Las Minas de Wanda son un punto de parada caso obligatorio para todos los que visiten la provincia de Misiones, a tan solo 40 kilómetros de las cataratas del Iguazú están prácticamente de paso sobre la ruta nacional 12.</p>
          <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center"><RiTimeLine className="w-5 h-5" />La excursión dura todo el día</span>
          <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center"><RiTreasureMapLine className="w-5 h-5" />A 40 km. de Puerto Iguazú</span>
        </div>
      </div>
    </section>
  )
}