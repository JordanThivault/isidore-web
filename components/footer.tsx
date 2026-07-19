import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Bracket, Ring, Ticks } from "@/components/decor";
import { DecorReveal } from "@/components/decor-reveal";
import Image from "next/image";

const navigation = [
  { href: "#realisations", label: "Réalisations" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#engagements", label: "Mes engagements" },
  { href: "#contact", label: "Contact" },
];

const legal = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Confidentialité" },
  { href: "/cgv", label: "CGV" },
];

/** Petit label de colonne — équivalent de .eyebrow, adapté au fond terracotta. */
function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-paper/70 mb-4 inline-flex items-center gap-2.5 text-[0.72rem] font-medium tracking-[0.14em] uppercase">
      <span className="bg-paper/40 h-px w-7" aria-hidden />
      {children}
    </p>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-terracotta text-paper relative overflow-hidden">
      {/* Décor géométrique — éclairci pour le fond terracotta, se trace au scroll */}
      <DecorReveal>
        <Bracket corner="tr" className="text-paper/25 top-10 right-5" size={64} draw />
        <Ring
          size={220}
          className="text-paper/15 -bottom-24 -left-24 hidden lg:block"
          draw
          delay={200}
        />
        <Ticks className="text-paper/25 right-10 bottom-10 hidden lg:flex" count={6} />
      </DecorReveal>

      <div className="container-x relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          {/* Logo, accroche, contact */}
          <div>
            <Image
              src="/logo-footer3.png"
              alt="Isidore web"
              width={220}
              height={46}
              className="h-10 w-auto md:h-12"
            />

            <p className="text-paper/70 mt-4 max-w-xs text-sm">
              Des sites web sur-mesure pour les artisans et PME d&apos;Indre-et-Loire et de la
              Sarthe.
            </p>

            <div className="mt-6 space-y-2.5 text-sm">
              <a
                href="tel:+33688358912"
                className="text-paper/90 hover:text-paper flex items-center gap-2 transition-colors"
              >
                <Phone size={15} className="text-paper/60" />
                06 88 35 89 12
              </a>
              <a
                href="mailto:contact@isidoreweb.fr"
                className="text-paper/90 hover:text-paper flex items-center gap-2 transition-colors"
              >
                <Mail size={15} className="text-paper/60" />
                contact@isidoreweb.fr
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <ColumnTitle>Navigation</ColumnTitle>
            <ul className="space-y-2.5 text-sm">
              {navigation.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-paper/80 hover:text-paper transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <ColumnTitle>Informations</ColumnTitle>
            <ul className="space-y-2.5 text-sm">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-paper/80 hover:text-paper transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-paper/20 text-paper/60 mt-14 border-t pt-6 text-xs">
          © {year} Isidore web — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
