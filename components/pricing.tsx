export function Pricing() {
  return (
    <section
      id="tarifs"
      className="flex min-h-[80svh] items-center border-b border-line bg-paper-2"
    >
      <div className="container-x w-full py-14 md:py-16">
        {/* Eyebrow aligné comme les autres sections (en haut, à gauche) */}
        <p className="eyebrow mb-6">Tarifs</p>

        {/* Visuel central — placeholder pour ton logo (à remplacer quand il sera prêt) */}
        <div className="mx-auto mb-10 flex h-24 w-24 items-center justify-center rounded-full border border-line bg-paper text-[0.7rem] uppercase tracking-[0.14em] text-muted md:h-28 md:w-28">
          Logo
        </div>

        <p className="mb-10 text-center text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-snug text-ink md:whitespace-nowrap">
          Des prix justes, pour un projet sur mesure.
        </p>

        {/* Toute la phrase sur une ligne, même couleur et même taille */}
        <p className="whitespace-nowrap text-center font-display text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-none text-ink">
          À partir de 1200&nbsp;€
        </p>

        <p className="mt-6 text-center text-ink-soft md:whitespace-nowrap">
          Site vitrine one-page, livré en 14 jours. Un devis détaillé et sans surprise pour tout projet plus ambitieux.
        </p>
      </div>
    </section>
  );
}

