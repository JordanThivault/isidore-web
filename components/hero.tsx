import { Star, Phone, CalendarDays, Clock, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleReviews } from "@/components/google-reviews";
import {
  Bracket,
  Ring,
  Arc,
  ThinLine,
  ThinLineY,
  Diagonal,
  Ticks,
  Dots,
  Crosshair,
  Plus,
  Square,
} from "@/components/decor";
import Image from "next/image";

/** Petits repères listés à droite du visuel. */
const highlights = [
  "Design soigné",
  "Développement rapide",
  "SEO & Performance",
  "Accompagnement",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(110svh-4rem)] flex-col justify-center overflow-hidden border-b border-line bg-paper py-8 md:py-10"
    >
      {/* Décor géométrique */}
      <Bracket
        corner="tl"
        className="left-4 top-16 hidden text-terracotta/40 md:block"
        size={72}
        strokeWidth={1.5}
        draw
      />
      <Bracket
        corner="br"
        className="bottom-16 right-4 hidden text-terracotta/40 lg:block"
        size={72}
        strokeWidth={1.5}
        draw
      />
      <Ring
        size={240}
        className="-right-24 top-10 hidden animate-float-slow border-line-strong lg:block"
      />
      <Ring
        size={90}
        className="right-1/4 top-8 hidden animate-drift border-terracotta/30 lg:block"
      />
      <Arc size={160} className="-left-10 bottom-1/4 hidden text-line-strong lg:block" />
      <Square
        size={70}
        rotate={-14}
        className="left-1/4 bottom-10 hidden animate-float border-terracotta/25 lg:block"
      />
      <ThinLine className="right-0 top-1/3 w-24 bg-line-strong lg:w-40" />
      <ThinLine className="left-0 bottom-1/3 w-16 bg-terracotta/30 lg:w-28" />
      <ThinLineY className="left-1/3 top-0 hidden h-20 bg-line-strong lg:block" />
      <Diagonal
        length={140}
        angle={-38}
        className="right-1/3 top-6 hidden bg-terracotta/25 lg:block"
      />
      <Ticks className="bottom-24 left-6 hidden animate-pulse-soft lg:flex" count={6} />
      <Dots className="right-10 top-1/2 hidden text-line-strong lg:grid" cols={5} rows={5} />
      <Crosshair className="right-16 bottom-32 hidden animate-pulse-soft lg:block" size={16} />
      <Crosshair className="left-12 top-1/3 hidden lg:block" size={12} />
      <Plus className="left-1/2 bottom-16 hidden text-terracotta/40 lg:block" size={12} />

      {/* Bloc principal */}
      <div className="container-x relative grid w-full items-center gap-8 md:grid-cols-[1fr_1.2fr] md:gap-5">
        {/* Colonne texte + infos */}
        <div className="reveal">
          <p className="eyebrow mb-4">
            Création de sites web — Indre-et-Loire, Sarthe
          </p>

          <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] text-ink">
            Un site pensé pour votre activité.
          </h1>

          <p className="mt-4 max-w-md text-ink-soft">
            Conçu pour vos besoins, livré à partir de 14 jours.
          </p>

          {/* Infos : note Google + contact/dispos */}
          <div className="mt-5 space-y-2.5 text-sm">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="fill-terracotta text-terracotta" />
                ))}
              </span>
              <span className="font-semibold text-ink">4,9/5</span>
              <span className="text-muted">· 12 avis Google</span>
            </div>

            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-ink-soft">
              <li className="flex items-center gap-1.5">
                <Phone size={15} strokeWidth={1.75} className="text-terracotta" />
                <a
                  href="tel:+33688358912"
                  className="font-medium text-ink transition-colors hover:text-terracotta"
                >
                  06 88 35 89 12
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <CalendarDays size={15} strokeWidth={1.75} className="text-terracotta" />
                Du lundi au samedi
              </li>
              <li className="flex items-center gap-1.5">
                <Clock size={15} strokeWidth={1.75} className="text-terracotta" />
                Réponse en moins de 24 h
              </li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
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

        {/* Colonne visuel + repères à droite */}
        <div
          className="reveal flex items-center gap-5"
          style={{ animationDelay: "120ms" }}
        >
          <Image
            src="/hero.png"
            alt="Visuel de présentation"
            width={800}
            height={600}
            priority
            className="h-auto max-h-[60svh] w-full flex-1 object-contain md:max-h-[74svh]"
          />

          {/* Liste verticale de repères, façon annotations */}
          <ul className="hidden shrink-0 space-y-3 lg:block lg:mr-6 xl:mr-10">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-sm border border-line-strong">
                  <span className="h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden />
                </span>
                <span className="whitespace-nowrap text-xs text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Avis clients */}
      <div className="reveal mt-12 md:mt-16" style={{ animationDelay: "240ms" }}>
        <GoogleReviews />
      </div>

      {/* Indicateur de scroll — centré, sous les avis */}
      <a
        href="#a-propos"
        className="group mt-10 flex flex-col items-center gap-2 self-center"
        aria-label="Faire défiler vers la suite"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-terracotta transition-colors group-hover:border-terracotta">
          <ArrowDown size={15} className="animate-bounce" />
        </span>
        <span className="text-center text-[0.7rem] uppercase leading-tight tracking-[0.14em] text-muted">
          Scrollez
          <br />
          pour découvrir
        </span>
      </a>
    </section>
  );
}