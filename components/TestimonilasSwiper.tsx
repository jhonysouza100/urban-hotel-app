"use client"

// swiper imports
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Reviews from '@/interfaces/review.interface';
import { Card, Rating, CardHeader, Avatar, CardContent, Typography, IconButton, Button, DialogProps, DialogContent, DialogContentText, Dialog, DialogActions } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { RiMore2Fill } from '@remixicon/react';
import { useEffect, useRef, useState } from 'react';

interface TestimonialsSwiperProps {
  reviews: Reviews[];
}

export default function TestimonialsSwiper({reviews}: TestimonialsSwiperProps) {

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
              sx={{paddingBottom: 0}}
              avatar={ <Avatar className='bg-primary' aria-label="recipe">{el.user.username.charAt(0)}</Avatar>}
              action={ <IconButton onClick={() => handleClickOpen(el)} aria-label="Leer más"><RiMore2Fill /></IconButton> }
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
      <DialogTitle id="scroll-dialog-title">
        {selectedReview && (<div className='flex justify-start items-center text-zinc-500'>
          <Avatar className='bg-primary mr-4' aria-label="recipe">{selectedReview.user.username.charAt(0)}</Avatar>
          <div className='flex flex-col'>
            <Typography variant="subtitle1" className='font-semibold'>{selectedReview.user.username}</Typography>
            <Typography variant="subtitle2">{selectedReview.user.email}</Typography>
          </div>
        </div>)}
      </DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
          {selectedReview && (
            <div>
              <Rating size='small' name="read-only" value={selectedReview.rating} readOnly />
              <Typography variant="body2">{selectedReview.comment}</Typography>
            </div>
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>

    </>
  )
}

