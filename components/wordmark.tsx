import { cn } from "@/lib/utils";

/**
 * Logo typographique en attendant le vrai logo.
 * "Isidore" en serif humaniste + "web" en sans-serif légère,
 * exactement le principe décidé pour l'identité.
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
      <span className="font-serif text-ink text-[1.35rem] tracking-tight">
        Isidore
      </span>
      <span className="font-sans font-light text-terracotta text-[1.05rem] tracking-wide">
        web
      </span>
    </span>
  );
}
