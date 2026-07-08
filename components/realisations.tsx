import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export function Realisations() {
  return (
    <section id="realisations" className="border-b border-line">
      <div className="container-x py-20 md:py-24">
        <p className="eyebrow mb-5">Réalisations</p>
        <h2 className="max-w-xl text-3xl md:text-[2.25rem]">
          Des sites conçus sur-mesure, pas des modèles recyclés.
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const card = (
              <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-paper transition-colors hover:border-line-strong">
                <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
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
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {card}
              </a>
            ) : (
              <div key={project.slug}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
