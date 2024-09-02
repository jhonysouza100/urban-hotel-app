import Review from "@/interfaces/review.interface";
import texts from "@/public/texts";
import { Avatar, Button, Card, CardContent, CardHeader, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Rating, Typography, DialogActions } from "@mui/material";
import { RiArrowDownSLine } from "@remixicon/react";

interface TestimonialCardProps {
  review: Review;
}

export default function TestimonialCard({review}: TestimonialCardProps) {

  return(
    <>
    {/* <Card>
      <CardHeader
        avatar={<Avatar className='!bg-primary-1' src={review.picture} alt={`${review.author.charAt(0)}`} />}
        // action={<IconButton onClick={() => handleOpen(review)} aria-label="Leer más"><RiArrowDownSLine /></IconButton>}
        title={<span className='!font-semibold !line-clamp-1'>{review.author}</span>}
        subheader={<span className='!flex !items-center !justify-start !gap-1 !text-muted-foreground !text-xs'>{review.timestamp} en<Avatar sx={{ width: 16, height: 16 }} src={review.platformLogo} alt={review.platformName} />{review.platformName}</span>}
      />
      <CardContent className='!pt-0'>
        <Rating className="!text-secondary" size='small' name="read-only" value={review.rating} readOnly />
        <Typography className='!line-clamp-5 !min-h-[100px] !max-h-[100px]' variant="body2" color="text.secondary">{review.text}</Typography>
      </CardContent>
    </Card> */}

    <div className="box bg-color-white rounded-md text-black bg-white py-[20px] px-[40px] w-[200px]">
      <input type="checkbox" name="readmore" id="readmore" className="hidden" />
      <div className="content">
        <h3 className="title mt-[30px] text-center">Text Demo</h3>
        <p
          className="description text-justify relative overflow-hidden max-h-[114px] before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[56px] before:w-full before:trasition-all before:duration-100 before:bg-gradient-to-t before:from-[white] before:to-[rgba(255,255,255,0)]">
          {review.text}
        </p>
        <button className="button mt-[30px] text-center" />
        <label
          data-more="READ MORE"
          data-less="READ LESS"
          className="text-center inline-block border border-black w-[140px] h-[50px] relative cursor-pointer before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[attr(data-more)] before:flex before:justify-center before:items-center before:text-black"
          htmlFor="readmore" />
    </div>
  </div>

    </>
  )
}