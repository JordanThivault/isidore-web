import Image from "next/image";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function Hero() {
  const showcase = projects[0];

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-x grid items-center gap-12 py-20 md:grid-cols-[1.05fr_1fr] md:py-28">
        {/* Colonne texte */}
        <div className="reveal">
          <p className="eyebrow mb-5">Création de sites web — Indre-et-Loire, Sarthe</p>

          <h1 className="text-[2.5rem] leading-[1.1] sm:text-[3.25rem]">
            Un site pensé pour votre activité.
          </h1>

          <p className="mt-6 max-w-md text-lg text-ink-soft">
            Conçu pour vos besoins, livré à partir de 14 jours.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact">
              <Button variant="accent" size="lg">
                Devis gratuit
              </Button>
            </a>
            <a href="#realisations">
              <Button variant="ghost" size="lg">
                Voir une réalisation
              </Button>
            </a>
          </div>
        </div>

        {/* Colonne visuel : aperçu de réalisation dans un cadre "navigateur" */}
        <div className="reveal" style={{ animationDelay: "120ms" }}>
          <figure className="overflow-hidden rounded-card border border-line bg-paper-2 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            </div>
            <div className="relative aspect-[4/3] bg-paper">
              {/* Remplace par la vraie capture : /public/projects/domaine-vin.jpg */}
              <Image
                src={showcase.image}
                alt={showcase.title}
                fill
                sizes="(max-width: 768px) 100vw, 520px"
                className="object-cover"
                priority
              />
              {/* Fallback visuel tant que l'image n'est pas ajoutée */}
              <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center text-sm text-muted">
                Aperçu du site — à ajouter
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
