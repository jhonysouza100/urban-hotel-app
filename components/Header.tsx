import { Avatar } from "@mui/material";
import { RiCloseLine, RiMenuFill } from "@remixicon/react";
import React from "react";

export default function Header({ children }: Readonly<{children: React.ReactNode}>) {

  const [blur, setBlur] = React.useState('');
  const [open, setOpen] = React.useState('');
  const headerRef = React.useRef<HTMLDivElement | null>(null);
  const navMenuRef = React.useRef<HTMLDivElement | null>(null);
  const openMenuRef = React.useRef<HTMLDivElement | null>(null);
  const closeMenuRef = React.useRef<HTMLDivElement | null>(null);

  const togleMenu = () => navMenuRef.current?.classList.toggle('top-0');
  const activeLink = () => navMenuRef.current?.classList.toggle('active-link');
  openMenuRef.current.onclick = toggleMenu
  closeMenuRef.current.onclick = toggleMenu

  React.useEffect(() => {
    const blurHeader = () => window.scrollY >= 50 ? setBlur('blur') : setBlur('');
    
    window.addEventListener('scroll', blurHeader);
  
    return () => {
      window.removeEventListener('scroll', blurHeader);
    }
  }, [])
  
  
  return (
    <header ref={headerRef} className={`header ${blur}`} id="header fixed w-full top-0 left-0 z-50">
      <nav className="nav section-container h-14 flex justify-between items-center xl:h-20">
        <Avatar className="nav-logo"
          alt="logo del hotel"
          src="./img/logo.webp"
          sx={{ width: 24, height: 24 }}
        />

        <div ref={navMenuRef} className={`nav-menu ${open}`}id="nav-menu">
            <ul className="nav- text-center flex flex-col gap-y-10">
              <li className="nav-item"><a href="#home" className="nav-link active-link relative text-background font-montserrat font-medium lg:flex-row lg:gap-x-16">Home</a></li>
              <li className="nav-item"><a href="#about" className="nav-link relative text-background font-montserrat font-medium lg:flex-row lg:gap-x-16">About</a></li>
              <li className="nav-item"><a href="#popular" className="nav-link relative text-background font-montserrat font-medium lg:flex-row lg:gap-x-16">Popular</a></li>
              <li className="nav-item"><a href="#explore" className="nav-link relative text-background font-montserrat font-medium lg:flex-row lg:gap-x-16">Explore</a></li>
            </ul>
            {/* <!-- close button --> */}
            <div ref={closeMenuRef} className="nav-close p-2 flex items-center justify-center text-background cursor-pointer relative top-4 right-6 lg:hidden" id="nav-close"><RiCloseLine className="w-6 h-6" /></div>
        </div>   

        {/* <!-- toggle button --> */}
        <div ref={openMenuRef} className="nav-toggle p-2 flex items-center justify-center text-background cursor-pointer lg:hidden" id="nav-toggle"><RiMenuFill className="w-6 h-6" /></div>
      </nav>
  </header>
  )
  
}