"use client";
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

const scrollAnimation = () => {
  if (window) {
    // Ejecuta solo en el cliente
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 1000,
      delay: 200,
      reset: false,
    });

    sr.reveal(`.home-data, .explore-data, .explore-user, .footer-container`);
    sr.reveal(`.home-card`, { delay: 350, distance: '100px', interval: 100 });
    sr.reveal(`.about-data, .join-image`, { origin: 'right' });
    sr.reveal(`.about-image, .join-data`, { origin: 'left' });
    sr.reveal(`.popular-card`, { interval: 200 });
  };

};

export default function ScrollAnimations() {

  useEffect(() => {
    scrollAnimation();
  }, []);

  return null;
}
