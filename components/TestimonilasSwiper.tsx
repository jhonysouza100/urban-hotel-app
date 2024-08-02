"use client"
import Reviews from '@/interfaces/review.interface';

// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Card, Rating, CardHeader, Avatar, CardContent, Typography } from '@mui/material';

interface TestimonialsSwiperProps {
  reviews: Reviews[];
}

export default function TestimonialsSwiper({reviews}: TestimonialsSwiperProps) {

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard]}
      autoplay={{delay: 3000, disableOnInteraction: false,}}
      speed={1500}
      loop={true}
      grabCursor={true}
      keyboard={{enabled: true,}}
      slidesPerView={'auto'}
      centeredSlides={false}
      spaceBetween={10}
      // pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 3 }}
      breakpoints={{
        425: {
          slidesPerView: 2,
          spaceBetween: 30
        },
      }}>
        
      {reviews && reviews.map(el => (
        <SwiperSlide key={crypto.randomUUID()} className="swiper-slide item flex justify-center">
          <Card>
            <CardHeader 
              sx={{paddingBottom: 0}}
              avatar={ <Avatar className='bg-primary' aria-label="recipe">{el.user.username.charAt(0)}</Avatar>}
              // action={ <Rating size='small' name="read-only" value={el.rating} readOnly /> }
              title={el.user.username}
              subheader={el.user.email}
            />
            <CardContent className='space-y-2'>
              <Rating size='small' name="read-only" value={el.rating} readOnly />
              <Typography className='line-clamp-5' variant="body2" color="text.secondary">{el.comment}</Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
      
    </Swiper>
  )
}