"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Enveloppe légère autour d'un groupe de formes `decor` : déclenche leurs
 * tracés (`draw`) seulement quand la section entre dans le viewport, plutôt
 * qu'au chargement de la page. Sans ça, tout ce qui est plus bas que le hero
 * se serait déjà dessiné hors champ avant que tu ne le voies.
 *
 * Ne touche pas au positionnement : ce `<div>` reste `static`, donc les
 * formes `absolute` à l'intérieur continuent de se positionner par rapport
 * à la section (qui est `relative`), pas par rapport à cette enveloppe.
 *
 * Un seul déclenchement (pas de replay en remontant/redescendant).
 */
export function DecorReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={inView ? "decor-group in-view" : "decor-group"}>
      {children}
    </div>
  );
}