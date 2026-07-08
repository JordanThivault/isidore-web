import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section id="tarifs" className="border-b border-line bg-paper-2">
      <div className="container-x py-20 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow mb-5">Tarifs</p>
            <div className="flex items-baseline gap-3">
              <span className="text-sm text-muted">à partir de</span>
              <span className="font-serif text-5xl text-ink md:text-6xl">1200&nbsp;€</span>
            </div>
            <p className="mt-4 max-w-md text-ink-soft">
              Site vitrine one-page, livré en 14 jours. Un devis détaillé et sans
              surprise pour tout projet plus ambitieux.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a href="#contact">
              <Button variant="accent" size="lg" className="w-full">
                Devis gratuit
              </Button>
            </a>
            <a href="#realisations">
              <Button variant="outline" size="lg" className="w-full">
                Voir un exemple
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
