import { getAllReviews } from "@/hooks/useGetReviews";
import TestimonialsSwiper from "./TestimonilasSwiper";
import Review from "@/interfaces/review.interface";
import texts from "@/public/texts";
import { Avatar, Rating } from "@mui/material";

export default async function Testimonials() {
  const TEXT = texts.ES;

  const REVIEWS: Review[] = await getAllReviews();

  return (
    <section className="testimonials section container max-w-full px-2 sm:px-0" id="testimonials">
      <div className="section-data container section-container grid grid-cols-1 md:grid-cols-2">
        <div className="box text-center p-6">
          <span className="block font-montserrat text-xl text-muted-foreground text-center font-light sm:text-start">{TEXT.testimonilasTitle1}<br /></span>
          <h3 className="section-title font-montserrat sm:text-start lg:text-5xl">{TEXT.testimonilasTitle2}</h3>
          <p className="text-base text-muted-foreground text-start mb-5">{TEXT.testimonilasDescription1}</p>
          <div className="box text-center sm:text-start space-y-2">
            <span className="text-muted-foreground">Rating</span>
            <p className="text-4xl font-montserrat">4,4 <span className="text-xl text-muted-foreground">de 5</span></p>
            <span className="text-muted-foreground inline-flex gap-4">
              <Rating className="!text-secondary" name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
              <Avatar className='!w-6 !h-6' src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="google logo" />
              <Avatar className='!w-6 !h-6' src="https://www.gstatic.com/travel-hotels/branding/icon_100532569.png" alt="google logo" />
            </span>
          </div>
        </div>
      </div>

      <TestimonialsSwiper reviews={REVIEWS} />
    </section>
  );
}
