"use client"
import { Avatar } from "@mui/material";
import { RiCloseLine, RiMenuFill } from "@remixicon/react";
import React from "react";

export default function Header() {

  const scrollRef = React.useRef<Boolean>(false);
  const openRef = React.useRef<Boolean>(false);
  // const [isMenuOpen, setIsMenuOpen] = React.useState<Boolean>(false);
  
  const handleClick = (open?: Boolean) => {
    open ? openRef.current = true : openRef.current = false;
    const menu = document.getElementById('nav-menu');
    if(menu) {
      menu.classList.toggle('top-0', Boolean(openRef.current));
      console.log(openRef.current)
    }
  };

  const addBlur = () => {
    const header = document.getElementById('header');
    const open = document.getElementById('nav-open');
    if(header && open) {
      header.classList.toggle('isBlur', Boolean(scrollRef.current));
      open.classList.toggle('text-foreground', Boolean(scrollRef.current));
    }
  }

  const addSectionFocus = () => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const scrollY = window.scrollY;
    if(sections) {
      sections.forEach(el => {
        const sectionHght = el.offsetHeight,
        sectionTop = el.offsetTop -58,
        sectionId = el.getAttribute('id'),
        sectionClass = document.querySelector<HTMLElement>('.nav-menu a[href*=' + sectionId + ']');
        if(sectionClass) {
          if(scrollY > sectionTop && scrollY < sectionTop + sectionHght) {
            sectionClass.classList.add('after:w-3/4');
          } else {
            sectionClass.classList.remove('after:w-3/4');
          }
        }
      })
    }
  };

  const handleScroll = () => { 
    window.scrollY >= 50 
    ? scrollRef.current = true
    : scrollRef.current = false;
    addBlur();
    addSectionFocus();
  };

  React.useEffect(() => {
    const open = document.getElementById('nav-open');
    const close = document.getElementById('nav-close');

    open?.addEventListener('click', () => handleClick(true));
    close?.addEventListener('click',() => handleClick(false));
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      open?.removeEventListener('click', () => handleClick());
      close?.removeEventListener('click', () => handleClick());
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  
  
  return (
    <header className='header fixed w-full top-0 left-0 z-50 after:transition-all after:ease-in-out after:duration-1000' id="header">
      
      <nav className="nav section-container h-14 flex justify-between items-center xl:h-20">
        <Avatar className="nav-logo"
          alt="logo del hotel"
          src="./img/logo.webp"
          sx={{ width: 32, height: 32 }}
        />

        <div className='nav-menu' id="nav-menu">
            <ul className="nav- text-center flex flex-col gap-y-10">
              <li className="nav-item"><a href="#home" className="nav-link section-active relative text-foreground font-montserrat font-semibold lg:flex-row lg:gap-x-16">Home</a></li>
              <li className="nav-item"><a href="#location" className="nav-link relative text-foreground font-montserrat font-semibold lg:flex-row lg:gap-x-16">Location</a></li>
              <li className="nav-item"><a href="#testimonials" className="nav-link relative text-foreground font-montserrat font-semibold lg:flex-row lg:gap-x-16">Testimonials</a></li>
              <li className="nav-item"><a href="#suscription" className="nav-link relative text-foreground font-montserrat font-semibold lg:flex-row lg:gap-x-16">Suscription</a></li>
            </ul>
            <div 
              className="nav-close p-2 flex items-center justify-center text-foreground cursor-pointer absolute top-4 right-6 lg:hidden"
              id="nav-close">
              <RiCloseLine className="w-6 h-6" />
            </div>
        </div>   

        <div 
          className="nav-open p-2 flex items-center justify-center text-background cursor-pointer transition-colors ease-int duration-100 lg:hidden"
          id="nav-open">
          <RiMenuFill className="w-6 h-6" />
        </div>
      </nav>

  </header>
  )
  
}