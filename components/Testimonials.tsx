import { getAllReviews } from "@/hooks/useGetReviews"
import TestimonialsSwiper from './TestimonilasSwiper';
import Review from "@/interfaces/review.interface";
import texts from "@/public/texts";

export default async function Testimonials() {

  const TEXT = texts.ES;

  const REVIEWS: Review[] = await getAllReviews();// devuele un arreglo de objetos

  return (
    <section className="section-container px-2 md:px-0 pt-10 pb-20">
      <div className="section-header text-center mb-12">
        <h2 className="section-title text-primary-1">{TEXT.testimonilasTitle2}</h2>
        <h3 className="text-xl text-foreground">{TEXT.testimonilasTitle1}</h3>
      </div>

      <TestimonialsSwiper reviews={REVIEWS} />
     
    </section>
  )
}