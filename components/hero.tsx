import { Star, Phone, CalendarDays, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-svh items-center border-b border-line bg-paper"
    >
      <div className="container-x grid w-full items-center gap-12 py-28 md:grid-cols-[1.05fr_1fr] md:py-32">
        {/* Colonne texte + infos */}
        <div className="reveal">
          <p className="eyebrow mb-5">
            Création de sites web — Indre-et-Loire, Sarthe
          </p>

          <h1 className="text-[clamp(2.5rem,5.5vw,4rem)] font-semibold leading-[1.05] text-ink">
            Un site pensé pour votre activité.
          </h1>

          <p className="mt-6 max-w-md text-lg text-ink-soft">
            Conçu pour vos besoins, livré à partir de 14 jours.
          </p>

          {/* Infos : note Google + contact/dispos, sous le titre */}
          <div className="mt-8 space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className="fill-terracotta text-terracotta"
                  />
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
                <CalendarDays
                  size={15}
                  strokeWidth={1.75}
                  className="text-terracotta"
                />
                Du lundi au samedi
              </li>
              <li className="flex items-center gap-1.5">
                <Clock size={15} strokeWidth={1.75} className="text-terracotta" />
                Réponse en moins de 24 h
              </li>
            </ul>
          </div>

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

        {/* Colonne visuel — placeholder (remplace par ton image quand tu l'auras) */}
        <div className="reveal" style={{ animationDelay: "120ms" }}>
        <Image
          src="/hero.png"
          alt="Visuel de présentation"
          width={800}
          height={600}
          className="h-auto w-full"
        />
      </div>
      </div>
    </section>
  );
}