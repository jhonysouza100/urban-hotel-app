import { getAllReviews } from "@/hooks/useGetReviews"
import TestimonialsSwiper from './TestimonilasSwiper';
import Review from "@/interfaces/review.interface";
import texts from "@/public/texts";

export default async function Testimonials() {

  const TEXT = texts.ES;

  const REVIEWS: Review[] = await getAllReviews();// devuele un arreglo de objetos

  return (
    <section className="section-container text-dark px-2 sm:px-6 pt-10 pb-20">
      <div className="section-header text-center mb-12">
        <h2 className="section-title text-dark">{TEXT.testimonialText1}</h2>
      </div>

      <TestimonialsSwiper reviews={REVIEWS} />
     
    </section>
  )
}