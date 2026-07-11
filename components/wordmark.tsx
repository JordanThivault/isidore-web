import { cn } from "@/lib/utils";

/**
 * Logo typographique en attendant le vrai logo.
 * "Isidore" en display (hérite de la couleur du parent via text-current,
 * pour s'adapter à la navbar claire ou sombre) + "web" en terracotta.
 * Se remplace facilement par un SVG plus tard.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-1.5 leading-none select-none",
        className
      )}
    >
      <span className="font-display text-current text-[1.4rem] font-semibold tracking-tight">
        Isidore
      </span>
      <span className="font-sans text-terracotta text-[1.05rem] font-medium tracking-wide">
        web
      </span>
    </span>
  );
}