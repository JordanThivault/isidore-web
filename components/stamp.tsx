import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Tampon circulaire à texte tournant — signature visuelle de la marque.
 * Le texte suit un cercle via <textPath>, l'anneau tourne lentement.
 * Purement décoratif : aria-hidden.
 */
export function Stamp({
  className,
  text = " devis gratuit · À votre écoute · ",
  repeat = 2,
}: {
  className?: string;
  /** Termine par un séparateur pour que la boucle reste lisible. */
  text?: string;
  /** Nombre de répétitions du texte autour du cercle. */
  repeat?: number;
}) {
  return (
    <div aria-hidden className={cn("relative h-32 w-32 flex-none md:h-40 md:w-40", className)}>
      {/* Anneau de texte tournant */}
      <svg
        viewBox="0 0 200 200"
        className="text-muted h-full w-full animate-[spin_28s_linear_infinite] motion-reduce:animate-none"
      >
        <defs>
          <path
            id="stamp-path"
            d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
            fill="none"
          />
        </defs>
        <text
          fill="currentColor"
          fontSize="13"
          letterSpacing="2.5"
          style={{ textTransform: "uppercase" }}
        >
          <textPath href="#stamp-path" startOffset="0">
            {text.repeat(repeat)}
          </textPath>
        </text>
      </svg>

      {/* Cercle fin + pictogramme au centre */}
      <span className="border-line-strong pointer-events-none absolute inset-[26%] rounded-full border" />
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Image
          src="/icon-source.png"
          alt=""
          width={40}
          height={40}
          className="h-10 w-12 object-contain"
        />
      </span>
    </div>
  );
}
