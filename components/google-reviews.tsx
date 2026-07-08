import { Star } from "lucide-react";

type GoogleReviewsProps = {
  /** Note moyenne, ex : 4.9 */
  rating: number;
  /** Nombre d'avis */
  count: number;
  /** Lien vers la fiche Google (facultatif) */
  href?: string;
};

/**
 * Bandeau de preuve sociale.
 * Non affiché tant qu'il n'y a pas de vrais avis (voir app/page.tsx).
 * Quand ta fiche Google Business aura des avis, passe simplement
 * rating / count / href en props et décommente le composant dans page.tsx.
 */
export function GoogleReviews({ rating, count, href }: GoogleReviewsProps) {
  const full = Math.round(rating);

  const content = (
    <div className="container-x flex flex-wrap items-center gap-x-4 gap-y-2 py-5">
      <span className="text-sm font-semibold text-ink">{rating.toFixed(1)}/5</span>
      <span className="flex items-center gap-0.5" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={15}
            className={i < full ? "fill-terracotta text-terracotta" : "text-line-strong"}
          />
        ))}
      </span>
      <span className="text-sm text-muted">
        {count} avis Google clients
      </span>
    </div>
  );

  return (
    <section className="border-y border-line bg-paper-2">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-colors hover:bg-paper"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </section>
  );
}
