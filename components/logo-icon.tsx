import { cn } from "@/lib/utils";

/**
 * Icône "Repère" : un pin ancré avec un halo de connexion.
 * Utilise les tokens de couleur existants (olive, terracotta, ink),
 * donc s'adapte automatiquement si la palette évolue.
 */
export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={cn("h-8 w-8", className)} aria-hidden="true">
      <circle
        cx="24"
        cy="16"
        r="9"
        className="stroke-olive fill-none"
        strokeWidth="1.6"
        opacity="0.45"
      />
      <circle cx="24" cy="16" r="5" className="fill-terracotta" />
      <rect x="20" y="24" width="8" height="20" rx="4" className="fill-ink" />
    </svg>
  );
}
