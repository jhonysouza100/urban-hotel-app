"use client"
import { Avatar } from "@mui/material";
import { RiArrowLeftSLine } from "@remixicon/react";
import Link from "next/link";
import React from "react";
import Button from "./ui/Button";

export default function Header() {

  const scrollRef = React.useRef<Boolean>(false);

  const addBlur = () => {
    const header = document.getElementById('alt-header');
    if(header) {
      header.classList.toggle('isBlur', Boolean(scrollRef.current));
    }
  }

  const handleScroll = () => { 
    window.scrollY >= 50 
    ? scrollRef.current = true
    : scrollRef.current = false;
    addBlur();
  };

  React.useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  
  
  return (
    <header className='alt-header fixed w-full top-0 left-0 z-50' id="alt-header">
      
      <nav className="nav section-container h-14 flex justify-between items-center xl:h-20">
  
        <Link href="/">
        <Button className="rounded-md p-0 flex items-center justify-center text-info backdrop-blur-none bg-[rgba(0,0,0,0)] shadow-none cursor-pointer">
          <RiArrowLeftSLine className="w-10 h-10" />
        </Button>
        </Link>

        <Avatar className="nav-logo"
          alt="logo del hotel"
          src="./img/logo.webp"
          sx={{ width: {xs: 32, md: 40}, height: {xs: 32, md: 40} }}
        />
      </nav>

  </header>
  )
  
}