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
 * Animation : deux façons de l'activer.
 *   1) prop `draw` (+ `delay` en ms) → tracé qui se dessine au chargement,
 *      une fois, comme si la forme apparaissait au crayon. Dispo sur
 *      Bracket, Ring, Arc, ThinLine, ThinLineY, Diagonal, Crosshair, Plus, Square.
 *   2) classe `animate-*` passée en className (Ring/Arc) ou prop `animate`
 *      (Square, qui a une rotation statique — voir plus bas) → mouvement
 *      continu : animate-float / animate-float-slow / animate-drift /
 *      animate-spin-slow / animate-pulse-soft.
 * Les deux sont combinables : une forme peut se dessiner à l'arrivée PUIS
 * flotter en continu (le tracé anime le trait, le mouvement anime le
 * conteneur — pas de conflit).
 * Tout est désactivé automatiquement si prefers-reduced-motion est actif.
 */

/** Classe de base commune — sert aussi de cible au garde-fou reduced-motion. */
const base = "decor pointer-events-none absolute";

/** Style d'animation-delay, factorisé pour tous les tracés. */
function delayStyle(delay?: number): React.CSSProperties | undefined {
  return delay ? { animationDelay: `${delay}ms` } : undefined;
}

/** Coin d'équerre — deux traits fins formant un angle. */
export function Bracket({
  className,
  corner = "tl",
  size = 56,
  strokeWidth = 1,
  draw = false,
  delay,
}: {
  className?: string;
  corner?: "tl" | "tr" | "bl" | "br";
  size?: number;
  strokeWidth?: number;
  /** Anime le tracé au chargement. */
  draw?: boolean;
  /** Délai avant le tracé, en ms (pour faire des vagues entre plusieurs formes). */
  delay?: number;
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
        style={draw ? delayStyle(delay) : undefined}
      />
    </svg>
  );
}

/** Cercle vide, contour fin (SVG — nécessaire pour le tracé animé). */
export function Ring({
  className,
  size = 120,
  strokeWidth = 1,
  draw = false,
  delay,
}: {
  className?: string;
  size?: number;
  strokeWidth?: number;
  /** Anime le tracé au chargement (le cercle se dessine). */
  draw?: boolean;
  delay?: number;
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
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
        pathLength={draw ? 1 : undefined}
        className={draw ? "animate-draw" : undefined}
        style={draw ? delayStyle(delay) : undefined}
      />
    </svg>
  );
}

/** Arc de cercle (quart), plus léger qu'un anneau complet. */
export function Arc({
  className,
  size = 140,
  strokeWidth = 1,
  draw = false,
  delay,
}: {
  className?: string;
  size?: number;
  strokeWidth?: number;
  draw?: boolean;
  delay?: number;
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
        pathLength={draw ? 1 : undefined}
        className={draw ? "animate-draw" : undefined}
        style={draw ? delayStyle(delay) : undefined}
      />
    </svg>
  );
}

/**
 * Trait fin horizontal. Donne-lui une largeur via className (ex. w-32).
 * `draw` fait pousser le trait de gauche à droite au chargement.
 */
export function ThinLine({
  className,
  draw = false,
  delay,
}: {
  className?: string;
  draw?: boolean;
  delay?: number;
}) {
  return (
    <span
      aria-hidden
      style={draw ? delayStyle(delay) : undefined}
      className={cn(
        base,
        "h-px origin-left bg-line-strong",
        draw && "animate-line-x",
        className
      )}
    />
  );
}

/**
 * Trait fin vertical. Donne-lui une hauteur via className (ex. h-24).
 * `draw` fait pousser le trait de haut en bas au chargement.
 */
export function ThinLineY({
  className,
  draw = false,
  delay,
}: {
  className?: string;
  draw?: boolean;
  delay?: number;
}) {
  return (
    <span
      aria-hidden
      style={draw ? delayStyle(delay) : undefined}
      className={cn(
        base,
        "w-px origin-top bg-line-strong",
        draw && "animate-line-y",
        className
      )}
    />
  );
}

/**
 * Trait fin en diagonale. La rotation statique est portée par le conteneur
 * externe et le tracé (scaleX) par un enfant interne — les deux transforms
 * ne se marchent donc pas dessus, contrairement à une seule couche qui
 * cumulerait rotate() et le scaleX() de l'animation.
 */
export function Diagonal({
  className,
  length = 120,
  angle = -45,
  draw = false,
  delay,
}: {
  className?: string;
  length?: number;
  angle?: number;
  draw?: boolean;
  delay?: number;
}) {
  return (
    <span
      aria-hidden
      style={{ width: length, transform: `rotate(${angle}deg)` }}
      className={cn(base, "h-px", className)}
    >
      <span
        style={draw ? delayStyle(delay) : undefined}
        className={cn(
          "block h-full w-full origin-left bg-line-strong",
          draw && "animate-line-x"
        )}
      />
    </span>
  );
}

/** Petite croix / repère, façon marque de coupe. */
export function Crosshair({
  className,
  size = 14,
  strokeWidth = 1,
  draw = false,
  delay,
}: {
  className?: string;
  size?: number;
  strokeWidth?: number;
  draw?: boolean;
  delay?: number;
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
      <path
        d="M7 0v14M0 7h14"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        pathLength={draw ? 1 : undefined}
        className={draw ? "animate-draw" : undefined}
        style={draw ? delayStyle(delay) : undefined}
      />
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

/**
 * Carré vide, légèrement tourné.
 * La rotation statique vit sur le conteneur externe ; le tracé (dasharray)
 * et le mouvement continu (prop `animate`) vivent sur le SVG interne. Comme
 * pour Diagonal, ça évite qu'une animation de transform (float, drift…)
 * écrase le rotate() fixe — le bug qu'on avait sur l'ancienne version.
 */
export function Square({
  className,
  size = 64,
  rotate = 12,
  strokeWidth = 1,
  draw = false,
  delay,
  animate,
}: {
  className?: string;
  size?: number;
  rotate?: number;
  strokeWidth?: number;
  draw?: boolean;
  delay?: number;
  /** Mouvement continu appliqué au SVG interne : "float" | "float-slow" | "drift" | "spin-slow" | "pulse-soft". */
  animate?: "float" | "float-slow" | "drift" | "spin-slow" | "pulse-soft";
}) {
  return (
    <span
      aria-hidden
      style={{ width: size, height: size, transform: `rotate(${rotate}deg)` }}
      className={cn(base, "text-line-strong", className)}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        className={cn("h-full w-full", animate && `animate-${animate}`)}
      >
        <rect
          x="4"
          y="4"
          width="92"
          height="92"
          rx="4"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
          pathLength={draw ? 1 : undefined}
          className={draw ? "animate-draw" : undefined}
          style={draw ? delayStyle(delay) : undefined}
        />
      </svg>
    </span>
  );
}

/** Petit plus, façon repère d'imprimerie. */
export function Plus({
  className,
  size = 10,
  strokeWidth = 1,
  draw = false,
  delay,
}: {
  className?: string;
  size?: number;
  strokeWidth?: number;
  draw?: boolean;
  delay?: number;
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
      <path
        d="M5 0v10M0 5h10"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        pathLength={draw ? 1 : undefined}
        className={draw ? "animate-draw" : undefined}
        style={draw ? delayStyle(delay) : undefined}
      />
    </svg>
  );
}