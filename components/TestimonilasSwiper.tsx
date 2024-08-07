"use client"

// swiper imports
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Reviews from '@/interfaces/review.interface';
import { Card, Rating, CardHeader, Avatar, CardContent, Typography, IconButton, Button, DialogProps, DialogContent, DialogContentText, Dialog, DialogActions, Stack } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { RiArrowDownSLine, RiMore2Fill } from '@remixicon/react';
import { useEffect, useRef, useState } from 'react';
import texts from "@/public/texts";

interface TestimonialsSwiperProps {
  reviews: Reviews[];
}

export default function TestimonialsSwiper({reviews}: TestimonialsSwiperProps) {

  const {textClose1} = texts.ES;

  const [open, setOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Reviews | null>(null);

  const handleClickOpen = (review: Reviews) => {
    setSelectedReview(review);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  return (
    <>
    <Swiper className='swiper'
      // modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard]}
      // autoplay={{ delay: 3000, disableOnInteraction: false, }}
      autoplay={{ disableOnInteraction: false }}
      // speed={1500}
      loop={true}
      grabCursor={true}
      keyboard={{enabled: true,}}
      slidesPerView={'auto'}
      centeredSlides={false}
      spaceBetween={0}
      // pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 3 }}
      breakpoints={{
        425: {
          slidesPerView: 2,
          spaceBetween: 0
        },
      }}>
        
      {reviews && reviews.map(el => (
        <SwiperSlide key={crypto.randomUUID()} className="swiper-slide p-3 md:p-5">
          {/* <Card className='transition-transform duration-500 hover:scale-105'> */}
          <Card>
            <CardHeader 
              className='pb-0'
              avatar={ <Avatar className='bg-primary-1' aria-label="recipe">{el.user.username.charAt(0)}</Avatar>}
              action={ <IconButton onClick={() => handleClickOpen(el)} aria-label="Leer más"><RiArrowDownSLine /></IconButton> }
              title={<span className='font-semibold'>{el.user.username}</span>}
              subheader={el.user.email}
            />
            <CardContent className='space-y-2'>
              <Rating size='small' name="read-only" value={el.rating} readOnly />
              <Typography className='line-clamp-5 min-h-24 max-h-24' variant="body2" color="text.secondary">{el.comment}</Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
      
    </Swiper>

    <Dialog open={open} onClose={handleClose} scroll={'paper'} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
      {/* TITULO ===================================================================================== */}
      <DialogTitle id="scroll-dialog-title" className=''>
        {selectedReview && (
          <span className='flex flex-row flex-wrap items-center justify-start gap-3 sm:flex-nowrap md:gap-4'>
            <Avatar className='bg-primary-1' aria-label="recipe">{selectedReview.user.username.charAt(0)}</Avatar>
            <span className='flex flex-col'>
              <Typography className='font-medium' variant="body2" color="text.primary">{selectedReview.user.username}</Typography>
              <Typography variant="subtitle2" color="text.secondary">{selectedReview.user.email}</Typography>
            </span>
            <span className='flex justify-start grow sm:justify-end'>
              <Rating size='small' name="read-only" value={selectedReview.rating} readOnly />
            </span>
        </span>)}
      </DialogTitle>
      {/* CONTENIDO ===================================================================================== */}
      <DialogContent dividers={true}>
        <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
          {selectedReview && selectedReview.comment}
        </DialogContentText>
      </DialogContent>
      {/* ACTIONS ===================================================================================== */}
      <DialogActions>
        <Button onClick={handleClose}>{textClose1}</Button>
      </DialogActions>
    </Dialog>

    </>
  )
}

