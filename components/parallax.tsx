"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  src: string;
  alt: string;
  /** Classe du conteneur : positionnement + taille (ex : "absolute inset-0"). */
  className?: string;
  /**
   * Force de l'effet, en fraction de la hauteur de la section.
   * 0.2 = visible et sobre · 0.3–0.4 = marqué. À garder < 0.25 pour rester
   * dans la marge de débordement de l'image (voir -top/-height plus bas).
   */
  speed?: number;
  priority?: boolean;
  sizes?: string;
};

/**
 * Image en parallaxe, sans dépendance.
 * Le conteneur doit être positionné (relative/absolute) et avoir une hauteur.
 * L'image interne déborde de 25 % en haut et en bas pour ne jamais laisser
 * de vide pendant le décalage. Respecte prefers-reduced-motion.
 */
export function Parallax({
  src,
  alt,
  className,
  speed = 0.2,
  priority,
  sizes = "100vw",
}: ParallaxProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const el = wrap.current;
      const inner = layer.current;
      if (!el || !inner) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -1 quand la section arrive par le bas, +1 quand elle sort par le haut.
      const fromCenter =
        (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      // Décalage proportionnel à la hauteur RÉELLE de la section (le point clé).
      const shift = fromCenter * speed * el.offsetHeight;
      inner.style.transform = `translate3d(0, ${shift}px, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={wrap} className={cn("overflow-hidden", className)}>
      <div
        ref={layer}
        className="absolute inset-x-0 -top-[25%] h-[150%] will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    </div>
  );
}