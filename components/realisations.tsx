"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Bracket, Ring, ThinLineY, Ticks } from "@/components/decor";
import { DecorReveal } from "@/components/decor-reveal";
import { Reveal } from "@/components/motion/reveal";

/**
 * Infos complémentaires par slug, gardées ici pour ne pas toucher
 * à data/projects.ts.
 */
const extras: Record<string, { details?: string[] }> = {
  "domaine-viticole": {
    details: [
      "Catalogue produits et paiement en ligne sécurisé",
      "Déclarations réglementaires liées à la vente d'alcool",
      "Design fidèle à l'identité du domaine",
      "Optimisé pour le référencement local",
    ],
  },
};

export function Realisations() {
  // Boucle infinie : on cadre la vraie liste par un clone du dernier projet
  // au début et un clone du premier à la fin. Quand on atteint un clone, on
  // saute sans animation vers la vraie carte équivalente.
  const slides = [projects[projects.length - 1], ...projects, projects[0]];

  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const lockRef = useRef(false);
  const pausedRef = useRef(false);

  const go = (dir: number) => {
    if (lockRef.current) return;
    lockRef.current = true;
    setAnimate(true);
    setIndex((i) => i + dir);
  };

  // Défilement automatique, en pause au survol / focus clavier.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!pausedRef.current) go(1);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  const handleTransitionEnd = () => {
    lockRef.current = false;
    if (index === slides.length - 1) {
      setAnimate(false);
      setIndex(1);
    } else if (index === 0) {
      setAnimate(false);
      setIndex(projects.length);
    }
  };

  // Si on vient de sauter sans animation, aucun transitionend ne se déclenche :
  // on relâche le verrou manuellement.
  useEffect(() => {
    if (!animate) {
      lockRef.current = false;
      // Réactive l'animation au tick suivant pour le prochain déplacement.
      const id = window.requestAnimationFrame(() => setAnimate(true));
      return () => window.cancelAnimationFrame(id);
    }
  }, [animate]);

  return (
    <section id="realisations" className="border-line bg-paper-2 relative overflow-hidden border-b">
      {/* Décor géométrique — se trace quand la section entre dans le viewport */}
      <DecorReveal>
        <Bracket corner="tl" className="top-12 left-4 hidden md:block" size={64} draw />
        <Ring
          size={190}
          className="top-1/4 -right-20 hidden opacity-60 lg:block"
          draw
          delay={150}
        />
        <ThinLineY className="bottom-0 left-1/3 hidden h-16 lg:block" draw delay={300} />
        <Ticks className="bottom-12 left-8 hidden lg:flex" count={5} />
      </DecorReveal>

      <div className="container-x relative w-full py-16 md:py-20">
        <Reveal>
          <p className="eyebrow mb-5">Réalisations</p>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] md:whitespace-nowrap">
            Des sites conçus sur-mesure.
          </h2>

          {/* Flèches de navigation */}
          <div className="mt-8 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Réalisation précédente"
              className="border-line-strong text-ink hover:bg-paper flex h-10 w-10 items-center justify-center rounded-md border transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Réalisation suivante"
              className="border-line-strong text-ink hover:bg-paper flex h-10 w-10 items-center justify-center rounded-md border transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Fenêtre du carrousel */}
          <div
            className="mt-6 overflow-hidden"
            onPointerEnter={() => (pausedRef.current = true)}
            onPointerLeave={() => (pausedRef.current = false)}
            onFocus={() => (pausedRef.current = true)}
            onBlur={() => (pausedRef.current = false)}
          >
            {/* Piste : largeur = N × la fenêtre, on translate d'une fenêtre à la fois */}
            <div
              onTransitionEnd={handleTransitionEnd}
              className="flex"
              style={{
                width: `${slides.length * 100}%`,
                transform: `translateX(-${index * (100 / slides.length)}%)`,
                transition: animate ? "transform 500ms ease" : "none",
              }}
            >
              {slides.map((project, i) => {
                const details = extras[project.slug]?.details;

                return (
                  <div
                    key={`${project.slug}-${i}`}
                    style={{ width: `${100 / slides.length}%` }}
                    className="flex-none"
                  >
                    <article className="rounded-card border-line bg-paper grid overflow-hidden border md:grid-cols-[0.85fr_1fr]">
                      {/* Capture pleine page : format portrait conservé */}
                      <div className="bg-paper-2 relative h-[30svh] overflow-hidden md:h-[40svh]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover object-top"
                          priority={i === 1}
                        />
                      </div>

                      {/* Texte à droite */}
                      <div className="flex flex-col justify-center p-6 md:p-10">
                        <div className="flex flex-wrap items-center gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="border-line text-muted rounded-full border px-2.5 py-1 text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h3 className="mt-4 text-xl leading-snug md:text-2xl">{project.title}</h3>
                        <p className="text-ink-soft mt-3 text-sm">{project.summary}</p>

                        {details && (
                          <ul className="mt-5 space-y-2">
                            {details.map((point) => (
                              <li
                                key={point}
                                className="text-ink-soft flex items-start gap-2.5 text-sm"
                              >
                                <span
                                  className="bg-terracotta mt-1.5 h-1.5 w-1.5 flex-none rounded-full"
                                  aria-hidden
                                />
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}

                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group text-terracotta mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium"
                          >
                            Voir le site en ligne
                            <ArrowUpRight
                              size={16}
                              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </a>
                        )}
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
