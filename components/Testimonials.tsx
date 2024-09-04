import { getAllReviews } from "@/hooks/useGetReviews";
import TestimonialsSwiper from "./TestimonilasSwiper";
import Review from "@/interfaces/review.interface";
import texts from "@/public/texts";
import { Avatar, Rating } from "@mui/material";

export default async function Testimonials() {
  const TEXT = texts.ES;

  const REVIEWS: Review[] = await getAllReviews();

  return (
    <section className="testimonials section mt-72 relative" id="testimonials">
      
      <div className="absolute w-full bg-container pb-24 left-0 bottom-1/2 border-b-2 border-secondary">
        
        <div className="section-data container section-container grid grid-cols-1 md:grid-cols-2">
          
          <div className="box text-center p-6">
            {/*Tooltip */}
            <span className="flex items-center justify-start sm:justify-center text-xl gap-2 font-montserrat">
              <Rating className="!text-secondary" name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
              <span className="text-neutral-100"> 4.4 Rating</span>
            </span>
            {/*Title */}
            <h3 className="section-title text-neutral-100 font-montserrat text-start sm:text-center">{TEXT.testimonilasTitle1}<br/>{TEXT.testimonilasTitle2}</h3>
            <p className="text-base text-muted text-start sm:text-center mb-5">{TEXT.testimonilasDescription1}</p>
            <div className="box text-start sm:text-center space-y-2">
              <span className="inline-flex gap-4">
                <Avatar className='!w-6 !h-6' src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="google logo" />
                <Avatar className='!w-6 !h-6' src="https://www.gstatic.com/travel-hotels/branding/icon_100532569.png" alt="google logo" />
              </span>
            </div>
          </div>
          
          <div className="box"></div>
          
        </div>

      </div>

      <div className="container max-w-full px-2 sm:px-0">
        <TestimonialsSwiper reviews={REVIEWS} />
      </div>
    </section>
  );
}
