import { Bracket, Ring, ThinLine, Crosshair } from "@/components/decor";

export function Pricing() {
  return (
    <section
      id="tarifs"
      className="relative flex min-h-[60svh] items-center overflow-hidden border-b border-line bg-terracotta"
    >
      {/* Décor géométrique — éclairci pour le fond terracotta */}
      <Bracket corner="tl" className="left-5 top-10 text-paper/30" size={64} />
      <Bracket corner="br" className="bottom-10 right-5 text-paper/30" size={64} />
      <Ring size={190} className="-right-16 -top-12 border-paper/20 hidden lg:block" />
      <ThinLine className="left-0 bottom-1/3 w-16 bg-paper/25 lg:w-32" />
      <Crosshair className="left-14 bottom-12 text-paper/40 hidden lg:block" />

      <div className="container-x relative w-full py-16 md:py-20">
        {/* Eyebrow en haut à gauche, comme les autres sections */}
        <p className="mb-12 inline-flex items-center gap-2.5 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-paper/70 md:mb-16">
          <span className="h-px w-7 bg-paper/70" aria-hidden />
          Tarifs
        </p>

        {/* Bloc central */}
        <div className="text-center">
          <p className="text-[clamp(1.25rem,2.4vw,1.75rem)] font-medium text-paper/85">
            Des prix justes, pour un projet sur-mesure.
          </p>

          <p className="mt-5 whitespace-nowrap font-display text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-none text-paper">
            À partir de 1200&nbsp;€
          </p>

          <p className="mx-auto mt-6 max-w-lg leading-relaxed text-paper/75">
            Site vitrine one-page, livré en 14 jours. Un devis détaillé et sans
            surprise pour tout projet plus ambitieux.
          </p>
        </div>
      </div>
    </section>
  );
}