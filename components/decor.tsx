import { cn } from "@/lib/utils";

/**
 * Formes géométriques décoratives, semées dans toutes les sections.
 * Purement visuelles : aria-hidden + pointer-events-none, positionnées en
 * absolu → la section parente doit être `relative overflow-hidden`.
 *
 * Couleur : toutes utilisent currentColor et acceptent une surcharge via
 * className (ex. text-paper/25 sur les fonds terracotta, text-terracotta/30
 * pour marquer davantage).
 *
 * Animation : ajoute une classe animate-* via className.
 *   animate-float / animate-float-slow  → flottement vertical
 *   animate-drift                       → dérive lente en diagonale
 *   animate-spin-slow                   → rotation très lente
 *   animate-pulse-soft                  → respiration de l'opacité
 *   animate-draw                        → tracé qui se dessine (SVG uniquement)
 * Tout est désactivé automatiquement si prefers-reduced-motion est actif.
 */

/** Classe de base commune — sert aussi de cible au garde-fou reduced-motion. */
const base = "decor pointer-events-none absolute";

/** Coin d'équerre — deux traits fins formant un angle. */
export function Bracket({
  className,
  corner = "tl",
  size = 56,
  strokeWidth = 1,
  draw = false,
}: {
  className?: string;
  corner?: "tl" | "tr" | "bl" | "br";
  size?: number;
  strokeWidth?: number;
  /** Anime le tracé au chargement. */
  draw?: boolean;
}) {
  const rotation = { tl: 0, tr: 90, br: 180, bl: 270 }[corner];

  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      className={cn(base, "text-line-strong", className)}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M1 56V1h55"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
        pathLength={draw ? 1 : undefined}
        className={draw ? "animate-draw" : undefined}
      />
    </svg>
  );
}

/** Cercle vide, contour fin. */
export function Ring({
  className,
  size = 120,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      aria-hidden
      style={{ width: size, height: size }}
      className={cn(base, "rounded-full border border-line-strong", className)}
    />
  );
}

/** Arc de cercle (quart), plus léger qu'un anneau complet. */
export function Arc({
  className,
  size = 140,
  strokeWidth = 1,
}: {
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={cn(base, "text-line-strong", className)}
    >
      <path
        d="M100,50 A50,50 0 0,0 50,0"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Trait fin horizontal. Donne-lui une largeur via className (ex. w-32). */
export function ThinLine({ className }: { className?: string }) {
  return <span aria-hidden className={cn(base, "h-px bg-line-strong", className)} />;
}

/** Trait fin vertical. Donne-lui une hauteur via className (ex. h-24). */
export function ThinLineY({ className }: { className?: string }) {
  return <span aria-hidden className={cn(base, "w-px bg-line-strong", className)} />;
}

/** Trait fin en diagonale. */
export function Diagonal({
  className,
  length = 120,
  angle = -45,
}: {
  className?: string;
  length?: number;
  angle?: number;
}) {
  return (
    <span
      aria-hidden
      style={{ width: length, transform: `rotate(${angle}deg)` }}
      className={cn(base, "h-px origin-left bg-line-strong", className)}
    />
  );
}

/** Petite croix / repère, façon marque de coupe. */
export function Crosshair({
  className,
  size = 14,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      className={cn(base, "text-terracotta/50", className)}
    >
      <path d="M7 0v14M0 7h14" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/** Suite de petits traits verticaux, façon règle graduée. */
export function Ticks({
  className,
  count = 5,
}: {
  className?: string;
  count?: number;
}) {
  return (
    <span
      aria-hidden
      className={cn(base, "flex items-end gap-2 text-line-strong", className)}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="w-px bg-current"
          style={{ height: 12 + (i % 3) * 10 }}
        />
      ))}
    </span>
  );
}

/** Grille de points — texture discrète. */
export function Dots({
  className,
  cols = 5,
  rows = 5,
  gap = 12,
}: {
  className?: string;
  cols?: number;
  rows?: number;
  gap?: number;
}) {
  return (
    <span
      aria-hidden
      style={{ gridTemplateColumns: `repeat(${cols}, ${gap}px)` }}
      className={cn(base, "grid text-line-strong", className)}
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <span key={i} style={{ height: gap }} className="flex items-center">
          <span className="h-[2px] w-[2px] rounded-full bg-current" />
        </span>
      ))}
    </span>
  );
}

/** Carré vide, légèrement tourné. */
export function Square({
  className,
  size = 64,
  rotate = 12,
}: {
  className?: string;
  size?: number;
  rotate?: number;
}) {
  return (
    <span
      aria-hidden
      style={{ width: size, height: size, transform: `rotate(${rotate}deg)` }}
      className={cn(base, "rounded-sm border border-line-strong", className)}
    />
  );
}

/** Petit plus, façon repère d'imprimerie. */
export function Plus({
  className,
  size = 10,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      className={cn(base, "text-line-strong", className)}
    >
      <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}