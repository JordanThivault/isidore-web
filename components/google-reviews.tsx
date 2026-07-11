import { Star } from "lucide-react";

type Review = {
  name: string;
  rating: number;
  text: string;
};

/** Avis de démonstration — remplace par tes vrais avis Google quand tu les auras
 *  (ou passe-les en prop `reviews`). */
const placeholderReviews: Review[] = [
  {
    name: "Marie L.",
    rating: 5,
    text: "Site livré rapidement et exactement comme je l'imaginais. Un seul interlocuteur, c'est un vrai confort.",
  },
  {
    name: "Thomas R.",
    rating: 5,
    text: "Très à l'écoute, de bons conseils et un rendu moderne. Je recommande sans hésiter.",
  },
  {
    name: "Sophie D.",
    rating: 5,
    text: "Accompagnement au top, du devis à la mise en ligne. Mon site est rapide et bien référencé.",
  },
];

type GoogleReviewsProps = {
  /** Note moyenne, ex : 4.9 */
  rating?: number;
  /** Nombre d'avis */
  count?: number;
  /** Lien vers la fiche Google (facultatif) */
  href?: string;
  /** Avis à afficher (placeholder par défaut) */
  reviews?: Review[];
};

export function GoogleReviews({
  rating = 4.9,
  count = 12,
  href,
  reviews = placeholderReviews,
}: GoogleReviewsProps) {
  const full = Math.round(rating);

  return (
    <section className="flex min-h-[40svh] items-center border-b border-line bg-paper-2">
      <div className="container-x w-full py-14 md:py-16">
        {/* En-tête : note globale */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">Avis clients</p>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-semibold text-ink md:text-5xl">
                {rating.toFixed(1)}
                <span className="text-2xl text-muted">/5</span>
              </span>
              <span className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < full
                        ? "fill-terracotta text-terracotta"
                        : "text-line-strong"
                    }
                  />
                ))}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">{count} avis Google</p>
          </div>

          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-terracotta underline underline-offset-4 transition-colors hover:text-terracotta-soft"
            >
              Voir tous les avis
            </a>
          )}
        </div>

        {/* Cartes d'avis */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-card border border-line bg-paper p-5"
            >
              <span className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < r.rating
                        ? "fill-terracotta text-terracotta"
                        : "text-line-strong"
                    }
                  />
                ))}
              </span>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {r.text}
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-ink">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}