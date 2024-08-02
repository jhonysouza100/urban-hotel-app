import { getAllReviews } from "@/hooks/useGetReviews"
import TestimonialsSwiper from './TestimonilasSwiper';
import Review from "@/interfaces/review.interface";
import texts from "@/public/texts";

export default async function Testimonials() {

  const TEXT = texts.ES;

  const REVIEWS: Review[] = await getAllReviews();// devuele un arreglo de objetos

  return (
    <section className="section-container text-dark pt-8 pb-6 md:pt-10 md:pb-20">
      <div className="section-header text-center mb-12">
        <h2 className="section-title text-dark">{TEXT.testimonialtext1}</h2>
      </div>

      <TestimonialsSwiper reviews={REVIEWS} />
     
    </section>
  )
}