import { Navbar } from "@/components/navbar";
import { Bracket, Ring, Crosshair, Dots } from "@/components/decor";
import { DecorReveal } from "@/components/decor-reveal";

/**
 * Gabarit commun aux pages légales.
 * Le contenu réel (mentions obligatoires) reste à rédiger et à faire
 * relire avant la mise en ligne publique.
 */
export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* Décor géométrique — se trace au scroll, comme sur le reste du site */}
      <DecorReveal>
        <Bracket
          corner="tl"
          className="text-line-strong top-24 left-6 hidden md:block"
          size={56}
          draw
        />
        <Ring
          size={200}
          className="text-line-strong top-1/3 -right-20 hidden lg:block"
          draw
          delay={150}
        />
        <Crosshair
          className="text-terracotta/40 bottom-24 left-1/4 hidden lg:block"
          size={14}
          draw
          delay={250}
        />
        <Dots className="text-line-strong right-10 bottom-16 hidden lg:grid" cols={4} rows={4} />
      </DecorReveal>

      {/* pt-32/md:pt-40 = hauteur de la Navbar fixed (h-16/h-20) + la même
          respiration que l'ancien py-16/py-20, pour ne pas coller le titre
          sous la barre. */}
      <main className="container-x relative max-w-2xl pt-32 pb-16 md:pt-40 md:pb-20">
        <h1 className="text-3xl md:text-4xl">{title}</h1>
        <div className="text-ink-soft [&_h2]:text-ink [&_strong]:text-ink mt-8 space-y-4 [&_h2]:mt-8 [&_h2]:text-xl">
          {children}
        </div>
      </main>

      <footer className="border-line relative border-t">
        <div className="container-x text-muted py-8 text-xs">
          © {new Date().getFullYear()} Isidore web
        </div>
      </footer>
    </div>
  );
}
