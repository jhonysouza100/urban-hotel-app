"use client"

// swiper imports
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from '@/interfaces/review.interface';
import { Card, Rating, CardHeader, Avatar, CardContent, Typography, IconButton, Button, DialogContent, DialogContentText, Dialog, DialogActions } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { RiArrowDownSLine } from '@remixicon/react';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import texts from "@/public/texts";

interface TestimonialsSwiperProps {
  reviews: Review[];
}

export default function TestimonialsSwiper({reviews}: TestimonialsSwiperProps) {

  const {textClose1} = texts.ES;

  const [open, setOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  const handleClickOpen = (review: Review) => {
    setSelectedReview(review);
    setOpen(true);
    setShowPreview(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowPreview(false);
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
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      grabCursor={true}
      keyboard={{enabled: true,}}
      slidesPerView={'auto'}
      centeredSlides={false}
      spaceBetween={0}
      breakpoints={{
        500: {
          slidesPerView: 2,
          spaceBetween: 0
        },
      }}>
        
      {reviews && reviews.map(el => (
        <SwiperSlide key={crypto.randomUUID()} className="swiper-slide p-3 md:p-5">
          {/* <Card className='transition-transform duration-500 hover:scale-105'> */}
          <Card>
            <CardHeader
              avatar={ <Avatar className='!bg-primary-1' src={el.picture || el.author.charAt(0)} aria-label="Imagen de perfil del usuario" />}
              action={ <IconButton onClick={() => handleClickOpen(el)} aria-label="Leer más"><RiArrowDownSLine /></IconButton> }
              title={<span className='font-semibold'>{el.author}</span>}
              subheader={<div className='flex items-center justify-start gap-1 !text-sm'>{el.timestamp} en<Avatar sx={{ width: 16, height: 16 }} src={el.platformLogo} />{el.platformName}</div>}
            />
            <CardContent className='!pt-0'>
              <Rating size='small' name="read-only" value={el.rating} readOnly />
              <Typography className='line-clamp-5 min-h-24 max-h-26' variant="body2" color="text.secondary">{el.text}</Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
      
    </Swiper>

    {showPreview && (
        <Suspense>
          <Dialog open={open} onClose={handleClose} scroll={'paper'} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
            {/* TITULO ===================================================================================== */}
            <DialogTitle id="scroll-dialog-title">
              {selectedReview && (
                <span className='flex flex-row flex-wrap items-center justify-start gap-3 sm:flex-nowrap md:gap-4'>
                  <Avatar className='!bg-primary-1' src={selectedReview.picture || selectedReview.author.charAt(0)} aria-label="Imagen de perfil del usuario" />
                  <span className='flex flex-col'>
                    <Typography className='!font-medium' variant="body2" color="text.primary">{selectedReview.author}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">{<div className='flex items-center justify-start gap-1 !text-sm'>{selectedReview.timestamp} en<Avatar sx={{ width: 16, height: 16 }} src={selectedReview.platformLogo} />{selectedReview.platformName}</div>}</Typography>
                  </span>
                  <span className='flex justify-start grow sm:justify-end'>
                    <Rating size='small' name="read-only" value={selectedReview.rating} readOnly />
                  </span>
              </span>)}
            </DialogTitle>
            {/* CONTENIDO ===================================================================================== */}
            <DialogContent dividers={true}>
              <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
                {selectedReview && selectedReview.text}
              </DialogContentText>
            </DialogContent>
            {/* ACTIONS ===================================================================================== */}
            <DialogActions className='!px-6'>
              <Button onClick={handleClose}>{textClose1}</Button>
            </DialogActions>
          </Dialog>
        </Suspense>
    )}

    </>
  )
}

