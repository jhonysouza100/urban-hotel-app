"use client";

import Path from "@/interfaces/path.interface";
import TEXT from "@/lang/es.json";
import { RiWhatsappFill } from "@remixicon/react";
import { useEffect } from "react";
import Button from "./ui/Button";

interface AdSenseClickBaitButtonProps {
  path: Path;
}

function AdSenseClickBaitButton({ path }: AdSenseClickBaitButtonProps) {
  useEffect(() => {
    const button = document.querySelector<HTMLButtonElement>(".home-button");
    const banner = document.querySelector<HTMLElement>("#_1603817205");

    function handleClickPropagation(event: MouseEvent) {
      // Busca todas las etiquetas <a> dentro del elemento clickeado
      const targetElement = event.target as HTMLElement;
      const links = targetElement?.querySelectorAll<HTMLAnchorElement>("a");

      if (links) {
        links.forEach((link) => {
          // Dispara un evento de click en cada <a>
          link.click();
        });
      }
    }

    function handleClick() {
      banner?.click();
    }

    button?.addEventListener("click", handleClick);
    banner?.addEventListener("click", handleClickPropagation);
    
    return () => {
      button?.removeEventListener("click", handleClick);
      banner?.removeEventListener("click", handleClickPropagation);
    };
  }, []);

  return (
    <a
      href={`${path.whatsapp}`}
      target="_blank"
      className="home-button z-20"
      aria-label="Whatsapp">
      <Button
        text={TEXT.homeButtonTitle1}
        endIcon={<RiWhatsappFill />}
        className="bg-primary-2 rounded-md pointer-events-auto"
      />
    </a>
  );
}

export default AdSenseClickBaitButton;
