import { getAllReviews } from "@/hooks/useGetReviews";
import TestimonialsSwiper from "./TestimonilasSwiper";
import Review from "@/interfaces/review.interface";
import texts from "@/public/texts";

export default async function Testimonials() {
  const TEXT = texts.ES;

  const REVIEWS: Review[] = await getAllReviews();

  return (
    <section className="section-container px-2 sm:px-0 pt-20 pb-4" id="testimonials">
      <div className="section-data text-center p-6">
        <span className="block font-montserrat text-xl text-muted-foreground text-center font-light sm:text-start">{TEXT.testimonilasTitle1}<br /></span>
        <h3 className="section-title sm:text-start">{TEXT.testimonilasTitle2}</h3>
        <p className="text-base text-muted-foreground text-start mb-5">{TEXT.testimonilasDescription1}</p>
      </div>

      <TestimonialsSwiper reviews={REVIEWS} />
    </section>
  );
}
