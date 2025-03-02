"use client";

import React from "react";
import { RiCloseLine, RiMenuFill } from "@remixicon/react";
// import { socket } from "@/utils/socket";
import Avatar from "./ui/Avatar";
// import AdSenseBanner from "@/providers/AdSenseBanner";

interface DataViews {
  views: number;
}


export default function Header() {

  const scrollRef = React.useRef<Boolean>(false);
  const openRef = React.useRef<Boolean>(false);
  
  const handleClick = (open?: Boolean) => {
    open ? openRef.current = true : openRef.current = false;
    const menu = document.getElementById('nav-menu');
    if(menu) {
      menu.classList.toggle('top-0', Boolean(openRef.current));
    }
  };

  const addBlur = () => {
    const header = document.getElementById('header');
    const open = document.getElementById('nav-open');
    const navLinks = document.querySelectorAll('.nav-link');
    if(header && open && navLinks) {
      header.classList.toggle('isBlur', Boolean(scrollRef.current));
      open.classList.toggle('text-foreground', Boolean(scrollRef.current));
      navLinks.forEach(el => {
        el.classList.toggle('lg:text-foreground', Boolean(scrollRef.current));
        el.classList.toggle('lg:after:bg-foreground', Boolean(scrollRef.current));
    });
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

    // Disabled Socket !!!
    // socket.on('user-joined', (data: DataViews) => {
    //   console.log(data.views);
    // });

    return () => {
      // socket.off("user-joined");
      open?.removeEventListener('click', () => handleClick());
      close?.removeEventListener('click', () => handleClick());
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  
  
  return (
    <header className='header fixed w-full top-0 left-0 z-50' id="header">
      
      <nav className="nav section-container h-14 flex justify-between items-center xl:h-20">
        <Avatar className="nav-logo"
          alt="logo del hotel"
          src="/img/logo.webp"
        />

        <div className='nav-menu z-50 fixed w-full min-h-max -top-full left-0 py-16 bg-transparent-75 backdrop-blur-xl transition-all duration-500 lg:static lg:top-0 lg:w-max lg:bg-inherit lg:p-0 lg:backdrop-blur-none' id="nav-menu">
            <ul className="nav-list text-center flex flex-col items-center px-4 gap-x-[4.5rem] gap-y-10 lg:flex-row">
              <li className="nav-item"><a onClick={() => handleClick(false)} href="#home" className="nav-link section-active after:w-3/4 relative text-foreground lg:text-background font-montserrat font-semibold lg:flex-row lg:gap-x-16">Inicio</a></li>
              <li className="nav-item"><a onClick={() => handleClick(false)} href="#gallery" className="nav-link relative text-foreground lg:text-background font-montserrat font-semibold lg:flex-row lg:gap-x-16">Alojamiento</a></li>
              <li className="nav-item"><a onClick={() => handleClick(false)} href="#testimonials" className="nav-link relative text-foreground lg:text-background font-montserrat font-semibold lg:flex-row lg:gap-x-16">Reseñas</a></li>
              <li className="nav-item"><a onClick={() => handleClick(false)} href="#location" className="nav-link relative text-foreground lg:text-background font-montserrat font-semibold lg:flex-row lg:gap-x-16">Ubicación</a></li>
              <li className="nav-item"><a onClick={() => handleClick(false)} href="#explore" className="nav-link relative text-foreground lg:text-background font-montserrat font-semibold lg:flex-row lg:gap-x-16">Excursiones</a></li>
              <li className="nav-item"><a onClick={() => handleClick(false)} href="#suscription" className="nav-link relative text-foreground lg:text-background font-montserrat font-semibold lg:flex-row lg:gap-x-16">Contacto</a></li>
            </ul>
            <div 
              className="nav-close p-2 flex items-center justify-center text-foreground cursor-pointer absolute top-4 right-6 lg:hidden"
              id="nav-close">
              <RiCloseLine className="w-6 h-6" />
            </div>
        </div>
        
        <div 
          className="nav-open p-2 flex items-center justify-center text-background cursor-pointer lg:hidden"
          id="nav-open">
          <RiMenuFill className="w-6 h-6" />
        </div>
      </nav>

      {/* <AdSenseBanner className="absolute w-full -bottom-[90px] left-0 h-[90px] z-10" dataAdSlot="2266824893" dataAdFormat="auto" dataFullWidthResponsive="true" /> */}

    </header>
  )
  
}