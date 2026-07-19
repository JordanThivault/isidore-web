import { Bracket, Ring, ThinLine, Crosshair } from "@/components/decor";
import { DecorReveal } from "@/components/decor-reveal";
import { Reveal } from "@/components/motion/reveal";

export function Pricing() {
  return (
    <section
      id="tarifs"
      className="border-line bg-terracotta relative flex min-h-[60svh] items-center overflow-hidden border-b"
    >
      {/* Décor géométrique — éclairci pour le fond terracotta, se trace au scroll */}
      <DecorReveal>
        <Bracket corner="tl" className="text-paper/30 top-10 left-5" size={64} draw />
        <Bracket
          corner="br"
          className="text-paper/30 right-5 bottom-10"
          size={64}
          draw
          delay={150}
        />
        <Ring
          size={190}
          className="text-paper/20 -top-12 -right-16 hidden lg:block"
          draw
          delay={300}
        />
        <ThinLine className="bg-paper/25 bottom-1/3 left-0 w-16 lg:w-32" draw delay={450} />
        <Crosshair className="text-paper/40 bottom-12 left-14 hidden lg:block" draw delay={600} />
      </DecorReveal>

      <div className="container-x relative w-full py-16 md:py-20">
        <Reveal>
          {/* Eyebrow en haut à gauche, comme les autres sections */}
          <p className="text-paper/70 mb-12 inline-flex items-center gap-2.5 text-[0.72rem] font-medium tracking-[0.14em] uppercase md:mb-16">
            <span className="bg-paper/70 h-px w-7" aria-hidden />
            Tarifs
          </p>

          {/* Bloc central */}
          <div className="text-center">
            <p className="text-paper/85 text-[clamp(1.25rem,2.4vw,1.75rem)] font-medium">
              Des prix justes, pour un projet sur-mesure.
            </p>

            <p className="font-display text-paper mt-5 text-[clamp(2.25rem,6vw,4.5rem)] leading-none font-semibold whitespace-nowrap">
              À partir de 1200&nbsp;€
            </p>

            <p className="text-paper/75 mx-auto mt-6 max-w-lg leading-relaxed">
              Site vitrine one-page, livré en 14 jours. Un devis détaillé et sans surprise pour tout
              projet plus ambitieux.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
