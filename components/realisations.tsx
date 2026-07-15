"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";

export function Realisations() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Défile d'une carte vers la gauche (-1) ou la droite (+1).
  const scrollByCard = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 24; // gap-6
    const amount = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  // Rotation automatique (pause au survol / focus), désactivée si l'utilisateur
  // préfère réduire les animations.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let paused = false;
    const pause = () => (paused = true);
    const resume = () => (paused = false);
    el.addEventListener("pointerenter", pause);
    el.addEventListener("pointerleave", resume);
    el.addEventListener("focusin", pause);
    el.addEventListener("focusout", resume);

    const id = window.setInterval(() => {
      if (paused) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByCard(1);
      }
    }, 3500);

    return () => {
      window.clearInterval(id);
      el.removeEventListener("pointerenter", pause);
      el.removeEventListener("pointerleave", resume);
      el.removeEventListener("focusin", pause);
      el.removeEventListener("focusout", resume);
    };
  }, []);

  // Largeur d'une carte selon le viewport (1 / 2 / 3 visibles).
  const slideWidth = "w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]";

  return (
    <section
      id="realisations"
      className="flex min-h-svh items-center border-b border-line bg-paper-2"
    >
      <div className="container-x w-full py-20 md:py-24">
        <p className="eyebrow mb-5">Réalisations</p>
        <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] md:whitespace-nowrap">
          Des sites conçus sur-mesure.
        </h2>

        {/* Flèches de navigation */}
        <div className="mt-8 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Réalisation précédente"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line-strong text-ink transition-colors hover:bg-paper-2"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Réalisation suivante"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line-strong text-ink transition-colors hover:bg-paper-2"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Piste du carrousel */}
        <div
          ref={trackRef}
          className="mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => {
            const card = (
              <article className="group flex h-full w-full flex-col overflow-hidden rounded-card border border-line bg-paper transition-colors hover:border-line-strong">
                <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 46vw, 340px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center text-xs text-muted">
                    Capture à ajouter
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl leading-snug">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-ink-soft">
                    {project.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.url && (
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-terracotta">
                      Voir le projet
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  )}
                </div>
              </article>
            );

            return project.url ? (
              <a
                key={project.slug}
                data-card
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={slideWidth}
              >
                {card}
              </a>
            ) : (
              <div key={project.slug} data-card className={slideWidth}>
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}