"use client"
import Reviews from '@/interfaces/review.interface';

// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface TestimonialsSwiperProps {
  reviews: Reviews[];
}

export default function TestimonialsSwiper({reviews}: TestimonialsSwiperProps) {

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop={true}
      slidesPerView={'auto'}
      grabCursor={true}
      centeredSlides={false}
      pagination={{ clickable: true }}
      spaceBetween={50}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
      }}>
      {reviews && reviews.map(el => (
        <SwiperSlide key={crypto.randomUUID()} className="swiper-slide item p-8 rounded-2xl shading">
          <div className="info flex items-center">
            <img className="max-w-20 max-h-20 rounded-full mr-5 align-middle" src="img/explore-perfil.png" alt="Review profile image" />
            <div className="text-box my-auto">
              <h3 className="name text-base capitalize font-semibold text-black mt-2">{el.user.username}</h3>
              <span className="job text-sm text-light">{el.user.email}</span>
              <div className="stars text-yellow-500">****</div>
            </div>
          </div>
          <p className="comment mt-5 text-container">{el.comment}</p>
        </SwiperSlide>
      ))}
      
    </Swiper>
  )
}