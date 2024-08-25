"use client"
import { RiArrowUpSLine } from "@remixicon/react";
import Image from "next/image";
import Path from "@/interfaces/path.interface";
import { useEffect, useRef, useState } from "react";

interface ScrollUpProps {
  path: Path;
}

export default function ScrollUp({path}: ScrollUpProps) {

  const [show, setShow] = useState('');
  const scrollUpRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => window.scrollY >= 350 ? setShow("bottom-16") : setShow("");

    window.addEventListener('scroll', handleScroll);

    // Limpieza del efecto
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={scrollUpRef} className={`scrollup ${show} z-50 grid gap-4 fixed right-4 -bottom-1/2 transition-all duration-500 lg:right-12`}>

      <a href={`${path.whatsapp}`} target="_blank"
        className="scrollup-btn rounded-md p-[8px] bg-muted-foreground text-background inline-flex items-center justify-center backdrop-blur-xl cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-1">
        <Image src='./img/whatsapp.svg' height={400} width={400} loading="lazy" className="whatsapp-icon w-6 h-6xl:w-7 xl:h-7" alt="whatsapp-logo" />
      </a>

      <a href="#" aria-label="scroll up button"
        className="scrollup-btn rounded-md p-[8px] bg-muted-foreground text-background inline-flex items-center justify-center backdrop-blur-xl cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-1">
        <RiArrowUpSLine className="w-6 h-6 xl:w-7 xl:h-7" />
      </a>

    </div>
  );
}
