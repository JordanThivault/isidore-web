"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Bracket, Ring, ThinLineY, Ticks } from "@/components/decor";

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
    <section
      id="realisations"
      className="relative flex min-h-svh items-center overflow-hidden border-b border-line bg-paper-2"
    >
      {/* Décor géométrique */}
      <Bracket corner="tl" className="left-4 top-12 hidden md:block" size={64} />
      <Ring size={190} className="-right-20 top-1/4 hidden opacity-60 lg:block" />
      <ThinLineY className="left-1/3 bottom-0 h-16 hidden lg:block" />
      <Ticks className="bottom-12 left-8 hidden lg:flex" count={5} />

      <div className="container-x relative w-full py-20 md:py-24">
        <p className="eyebrow mb-5">Réalisations</p>
        <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] md:whitespace-nowrap">
          Des sites conçus sur-mesure.
        </h2>

        {/* Flèches de navigation */}
        <div className="mt-8 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Réalisation précédente"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line-strong text-ink transition-colors hover:bg-paper"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Réalisation suivante"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line-strong text-ink transition-colors hover:bg-paper"
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
                  <article className="grid overflow-hidden rounded-card border border-line bg-paper md:grid-cols-[0.85fr_1fr]">
                    {/* Capture pleine page : format portrait conservé */}
                    <div className="relative h-[38svh] overflow-hidden bg-paper-2 md:h-[52svh]">
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
                            className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="mt-4 text-xl leading-snug md:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm text-ink-soft">{project.summary}</p>

                      {details && (
                        <ul className="mt-5 space-y-2">
                          {details.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2.5 text-sm text-ink-soft"
                            >
                              <span
                                className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-terracotta"
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
                          className="group mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-terracotta"
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
      </div>
    </section>
  );
}