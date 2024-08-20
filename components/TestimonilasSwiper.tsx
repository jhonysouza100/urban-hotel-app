"use client"
import Review from '@/interfaces/review.interface';
import { Card, Rating, CardHeader, Avatar, CardContent, Typography, IconButton, Button, DialogContent, DialogContentText, Dialog, DialogActions } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { RiArrowDownSLine } from '@remixicon/react';
import { Suspense, useEffect, useRef, useState } from 'react';
import texts from "@/public/texts";

import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// swiper imports
import 'swiper/css';

interface TestimonialsSwiperProps {
  reviews: Review[];
}

interface TestimonialCardProps {
  review: Review;
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

  const TestimonialCard = ({review}: TestimonialCardProps) => {
    const swiperSlide = useSwiperSlide();

    return (
      // <Card className={`transition-transform duration-500 ${swiperSlide && swiperSlide.isActive ? 'scale-110' : 'scale-100'}`}>
      <Card>
      <CardHeader
        avatar={ <Avatar className='!bg-primary-1' src={review.picture || review.author.charAt(0)} alt="Imagen de perfil del usuario" />}
        action={ <IconButton onClick={() => handleClickOpen(review)} aria-label="Leer más"><RiArrowDownSLine /></IconButton> }
        title={<span className='!font-semibold !line-clamp-1'>{review.author}</span>}
        subheader={<span className='!flex !items-center !justify-start !gap-1 !text-muted-foreground !text-xs'>{review.timestamp} en<Avatar sx={{ width: 16, height: 16 }} src={review.platformLogo} alt={review.platformName} />{review.platformName}</span>}
      />
      <CardContent className='!pt-0'>
        <Rating size='small' name="read-only" value={review.rating} readOnly />
        <Typography className='!line-clamp-5 !min-h-[100px] !max-h-[100px]' variant="body2" color="text.secondary">{review.text}</Typography>
      </CardContent>
    </Card>
    )
  };

  return (
    <>
    <Swiper modules={[Autoplay]} 
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }}
      onSlideChange={({ activeIndex }: { activeIndex: number }) => {
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach((slide, index) => {
          if (slide instanceof HTMLElement) { // Asegura que sea un HTMLElement
            if (index === activeIndex) {
              slide.style.transform = 'scale(1.07)';
            } else {
              slide.style.transform = 'scale(1)';
            }
          }
        })}
      }
    >
        
      {reviews && reviews.map((el, virtualIndex) => (
        <SwiperSlide key={crypto.randomUUID()} className="swiper-slide p-4 md:p-5 transition-transform duration-500">
          <TestimonialCard review={el} />
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
                  <Avatar className='!bg-primary-1' src={selectedReview.picture || selectedReview.author.charAt(0)} alt='Imagen de perfil' />
                  <span className='flex flex-col'>
                    <Typography className='!font-medium' variant="subtitle1" color="text.primary">{selectedReview.author}</Typography>
                    {<span className='!flex !items-center !justify-start !gap-1 !text-muted-foreground !text-xs'>{selectedReview.timestamp} en<Avatar sx={{ width: 16, height: 16 }} src={selectedReview.platformLogo} alt={selectedReview.platformName} />{selectedReview.platformName}</span>}
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

