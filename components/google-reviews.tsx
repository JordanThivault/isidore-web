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
  /** Lien vers la fiche Google (facultatif) */
  href?: string;
  /** Avis à afficher (placeholder par défaut) */
  reviews?: Review[];
};

/**
 * Bandeau d'avis — pensé pour être rendu À L'INTÉRIEUR d'une section
 * (actuellement le Hero) : pas de <section>, pas de fond, pas de hauteur.
 * Il hérite donc du fond de son parent.
 *
 * Pour le futur carrousel : le wrapper `overflow-hidden` est déjà là, il
 * suffira d'animer la piste (.reviews-track) en translateX et de dupliquer
 * le tableau `reviews` pour une boucle infinie.
 */
export function GoogleReviews({ href, reviews = placeholderReviews }: GoogleReviewsProps) {
  return (
    <div className="container-x w-full">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow">Avis clients</p>

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta hover:text-terracotta-soft text-sm font-medium underline underline-offset-4 transition-colors"
          >
            Voir tous les avis
          </a>
        )}
      </div>

      {/* Piste des avis — deviendra le carrousel */}
      <div className="mt-4 overflow-hidden">
        <div className="reviews-track grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-card border-line bg-paper flex flex-col border p-3.5"
            >
              <span className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={
                      i < r.rating ? "fill-terracotta text-terracotta" : "text-line-strong"
                    }
                  />
                ))}
              </span>
              <blockquote className="text-ink-soft mt-2 flex-1 text-xs leading-relaxed">
                {r.text}
              </blockquote>
              <figcaption className="text-ink mt-2.5 text-xs font-medium">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
