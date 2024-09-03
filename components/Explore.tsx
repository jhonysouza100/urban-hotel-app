import Image from "next/image";

export default function Explore() {
  return (
    <section className="explore w-full h-screen bg-gradient-to-t from-neutral-900 to-neutral-200 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:backdrop-blur-xl after:-z-10">
      <div className="section-container section grid justify-center">
        <div className="card bg-neutral-100 w-80 aspect-[9/16] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y">
          <Image className="rounded-lg" src={'/img/gallery-img-1.jpg'} width={380} height={380} alt="hola mundo" />
          <h3 className="text-foreground font-bold">Lorem, ipsum dolor.</h3>
          <p className="text-muted-foreground max-h-40 overflow-auto scrollbar-thin">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam perspiciatis, vel provident ipsa aliquam nostrum ad? Mollitia eligendi dolorum distinctio, eum suscipit itaque fugiat alias laborum, sed, possimus facilis. Rerum nostrum sapiente ab rem, animi reiciendis ex excepturi quidem minima quae corrupti reprehenderit maiores ut maxime consequuntur repellat ullam, quo facere neque. Perspiciatis ratione earum suscipit corrupti excepturi tempora incidunt inventore aspernatur? Provident, odio dolor sed, amet voluptatibus deleniti quidem voluptatem deserunt aut assumenda suscipit! Culpa veniam praesentium, nam deserunt illum impedit possimus rem perspiciatis accusantium! Ipsam architecto molestiae, amet nostrum illum maiores sit non, unde dolores minima, quisquam porro ad? Natus quam sit pariatur cumque, quaerat hic eveniet accusantium ad repellendus saepe deleniti sed veniam mollitia commodi amet ea possimus in maiores doloremque. Animi aliquam perferendis, molestiae modi sapiente mollitia libero voluptatum cupiditate, consequatur dolor iusto sed quaerat cumque! Minus voluptatem et ratione reprehenderit totam impedit amet. Impedit fugiat aliquid aspernatur error, quae sit pariatur necessitatibus excepturi maxime, cum quia accusamus. Eius numquam sunt fugiat accusantium repellat, magni ducimus voluptas dolor non expedita, adipisci itaque libero. Possimus quisquam aspernatur eaque cupiditate maxime nisi illo unde quod. Minima nostrum iusto adipisci, dignissimos rerum excepturi aut consectetur porro nobis autem. Officia?</p>
          <span className="rounded-3xl py-2 px-4 font-bold border border-info text-info bg-info-soft">Tooltip</span>
        </div>
      </div>
    </section>
  )
}