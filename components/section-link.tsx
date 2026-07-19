import { cn } from "@/lib/utils";
import { DecorReveal } from "@/components/decor-reveal";

/**
 * Bande à hauteur nulle à placer ENTRE deux <section>, pas à l'intérieur
 * d'une section (voir page.tsx). Elle sert de repère de positionnement pour
 * une forme du décor (Ring, Square, Arc…) centrée exactement sur le trait
 * qui sépare les deux blocs.
 *
 * Contrairement au décor habituel — enfermé dans l'overflow-hidden de sa
 * section — celle-ci vit hors de tout conteneur qui rogne : la forme peut
 * donc réellement chevaucher la fin d'une section et le début de la
 * suivante, ce qui crée un vrai lien visuel entre les deux plutôt qu'un
 * décor propre à chaque bloc isolé.
 *
 * Usage : passe la forme en enfant, positionnée en absolu et centrée
 * verticalement sur la frontière avec `top-1/2 -translate-y-1/2`.
 *
 *   <SectionLink>
 *     <Square size={64} rotate={12} className="left-16 top-1/2 -translate-y-1/2 text-terracotta/40" animate="float" draw />
 *   </SectionLink>
 */
export function SectionLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative z-10 hidden h-0 lg:block", className)}>
      <div className="container-x relative h-0">
        <DecorReveal>{children}</DecorReveal>
      </div>
    </div>
  );
}
