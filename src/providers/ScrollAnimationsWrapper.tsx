"use client";

import { useEffect } from 'react';

// Importamos generatePdf de forma dinámica solo en el cliente
const scrollAnimation = () => {
  import('@/utils/scrollReveal').then(module => {
    module.scrollAnimation();
  });
};

function ScrollAnimationsWrapper({ children }: Readonly<{children?: React.ReactNode;}>) {
  useEffect(() => {
    scrollAnimation();
  }, [])
  
  return (
    <div>
      {children}
    </div>
  );
}

export default ScrollAnimationsWrapper;