import { getAllReviews } from "@/hooks/useGetReviews"
import TestimonialsSwiper from './TestimonilasSwiper';
import Review from "@/interfaces/review.interface";
import texts from "@/public/texts";

export default async function Testimonials() {

  const TEXT = texts.ES;

  const REVIEWS: Review[] = await getAllReviews();

  return (
    <section className="section-container px-2 md:px-0 pt-10 pb-20">
      <div className="section-header text-center mb-12">
        <h2 className="section-title">
          {TEXT.testimonilasTitle1}<br />
          <span className="text-primary-2">{TEXT.testimonilasTitle2}</span>
        </h2>
      </div>

      <TestimonialsSwiper reviews={REVIEWS} />
     
    </section>
  )
}