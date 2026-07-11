import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative h-svh">
      {/* Image fixée au viewport : elle reste en place pendant que la section
          suivante (opaque) remonte par-dessus pour la recouvrir au scroll.
          Remplace par ta photo : /public/hero-bureau.jpg */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/hero-bureau.jpg"
          alt="Bureau : carnet, tasse de café et ordinateur"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Voile sombre pour la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-noir/75 via-noir/55 to-noir/85" />
      </div>

      {/* Contenu du hero, centré sur toute la hauteur. Il défile normalement
          au scroll (c'est le contenu qui bouge, l'image reste fixe). */}
      <div className="relative flex h-full items-center">
        <div className="container-x">
          <div className="reveal max-w-3xl">
            <p className="eyebrow eyebrow-light mb-6">
              Création de sites web — Indre-et-Loire, Sarthe
            </p>

            <h1 className="text-[clamp(2.75rem,6.5vw,5.25rem)] font-semibold leading-[1.02] text-paper">
              Un site pensé pour votre activité.
            </h1>

            <p className="mt-6 max-w-lg text-lg text-paper/75 md:text-xl">
              Conçu pour vos besoins, livré à partir de 14 jours.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact">
                <Button variant="accent" size="lg">
                  Devis gratuit
                </Button>
              </a>
              <a href="#realisations">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-transparent text-paper hover:bg-white/10"
                >
                  Voir une réalisation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}