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
const highlights = ["Design soigné", "Développement rapide", "SEO & Performance", "Accompagnement"];

export function Hero() {
  return (
    <section
      id="top"
      className="border-line bg-paper relative flex min-h-[calc(110svh-4rem)] flex-col justify-center overflow-hidden border-b pt-24 pb-8 md:py-10"
    >
      {/* Décor géométrique — la plupart des formes se tracent à l'arrivée
          (prop draw), avec un délai croissant pour un effet de vague plutôt
          qu'un "tout apparaît d'un coup". Les anneaux gardent en plus un
          mouvement continu une fois tracés. */}
      <Bracket
        corner="tl"
        className="text-terracotta/50 top-16 left-4 hidden md:block"
        size={72}
        draw
      />
      <Bracket
        corner="br"
        className="text-terracotta/50 right-4 bottom-16 hidden lg:block"
        size={72}
        draw
        delay={150}
      />
      <Ring
        size={240}
        className="text-line-strong animate-float-slow top-10 -right-24 hidden lg:block"
        draw
        delay={100}
      />
      <Ring
        size={90}
        className="text-terracotta/40 animate-drift top-8 right-1/4 hidden lg:block"
        draw
        delay={500}
      />
      <Arc
        size={160}
        className="text-line-strong bottom-1/4 -left-10 hidden lg:block"
        draw
        delay={250}
      />
      <Square
        size={70}
        rotate={-14}
        className="text-terracotta/35 bottom-10 left-1/4 hidden lg:block"
        animate="float"
        draw
        delay={350}
      />
      <ThinLine className="bg-line-strong top-1/3 right-0 w-24 lg:w-40" draw delay={200} />
      <ThinLine className="bg-terracotta/40 bottom-1/3 left-0 w-16 lg:w-28" draw delay={450} />
      <ThinLineY className="bg-line-strong top-0 left-1/3 hidden h-20 lg:block" draw delay={300} />
      <Diagonal
        length={140}
        angle={-38}
        className="top-6 right-1/3 hidden lg:block"
        draw
        delay={400}
      />
      <Ticks className="animate-pulse-soft bottom-24 left-6 hidden lg:flex" count={6} />
      <Dots className="text-line-strong top-1/2 right-10 hidden lg:grid" cols={5} rows={5} />
      <Crosshair
        className="text-terracotta/60 animate-pulse-soft right-16 bottom-32 hidden lg:block"
        size={16}
        draw
        delay={550}
      />
      <Crosshair
        className="text-terracotta/60 top-1/3 left-12 hidden lg:block"
        size={12}
        draw
        delay={600}
      />
      <Plus
        className="text-terracotta/50 bottom-16 left-1/2 hidden lg:block"
        size={12}
        draw
        delay={650}
      />

      {/* Bloc principal */}
      <div className="container-x relative grid w-full items-center gap-8 md:grid-cols-[1fr_1.2fr] md:gap-5">
        {/* Colonne texte + infos */}
        <div className="reveal">
          <p className="eyebrow mb-4">Création de sites web — Indre-et-Loire, Sarthe</p>

          <h1 className="text-ink text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-semibold">
            Un site pensé pour votre activité.
          </h1>

          <p className="text-ink-soft mt-4 max-w-md">
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
              <span className="text-ink font-semibold">4,9/5</span>
              <span className="text-muted">· 12 avis Google</span>
            </div>

            <ul className="text-ink-soft flex flex-wrap gap-x-5 gap-y-2">
              <li className="flex items-center gap-1.5">
                <Phone size={15} strokeWidth={1.75} className="text-terracotta" />
                <a
                  href="tel:+33688358912"
                  className="text-ink hover:text-terracotta font-medium transition-colors"
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
              <Button
                variant="accent"
                size="lg"
                className="relative overflow-hidden after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-transparent after:via-white/25 after:to-transparent after:transition-transform after:duration-700 hover:after:translate-x-full"
              >
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
        <div className="reveal flex items-center gap-5" style={{ animationDelay: "120ms" }}>
          <Image
            src="/hero.png"
            alt="Visuel de présentation"
            width={800}
            height={600}
            priority
            className="h-auto max-h-[60svh] w-full flex-1 object-contain md:max-h-[74svh]"
          />

          {/* Liste verticale de repères, façon annotations */}
          <ul className="hidden shrink-0 space-y-3 lg:mr-6 lg:block xl:mr-10">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="border-line-strong flex h-6 w-6 flex-none items-center justify-center rounded-sm border">
                  <span className="bg-terracotta h-1.5 w-1.5 rounded-full" aria-hidden />
                </span>
                <span className="text-ink-soft text-xs whitespace-nowrap">{item}</span>
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
        <span className="border-line-strong text-terracotta group-hover:border-terracotta flex h-9 w-9 items-center justify-center rounded-full border transition-colors">
          <ArrowDown size={15} className="animate-bounce" />
        </span>
        <span className="text-muted text-center text-[0.7rem] leading-tight tracking-[0.14em] uppercase">
          Scrollez
          <br />
          pour découvrir
        </span>
      </a>
    </section>
  );
}
