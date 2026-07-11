export function Pricing() {
  return (
    <section
      id="tarifs"
      className="flex min-h-[40svh] items-center border-b border-line bg-paper-2"
    >
      <div className="container-x w-full py-14 md:py-16">
        {/* Eyebrow aligné comme les autres sections (en haut, à gauche) */}
        <p className="eyebrow mb-6">Tarifs</p>

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