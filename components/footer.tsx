import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { Bracket, Ring, Ticks } from "@/components/decor";

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
    <p className="mb-4 inline-flex items-center gap-2.5 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-paper/70">
      <span className="h-px w-7 bg-paper/40" aria-hidden />
      {children}
    </p>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-terracotta text-paper">
      {/* Décor géométrique — éclairci pour le fond terracotta */}
      <Bracket corner="tr" className="right-5 top-10 text-paper/25" size={64} />
      <Ring size={220} className="-left-24 -bottom-24 border-paper/15 hidden lg:block" />
      <Ticks className="right-10 bottom-10 text-paper/25 hidden lg:flex" count={6} />

      <div className="container-x relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          {/* Logo, accroche, contact */}
          <div>
            <Wordmark className="[&>span]:text-paper" />

            <p className="mt-4 max-w-xs text-sm text-paper/70">
              Isidore de Séville, patron des internautes. Des sites web
              sur-mesure pour les artisans et PME d&apos;Indre-et-Loire et de
              la Sarthe.
            </p>

            <div className="mt-6 space-y-2.5 text-sm">
              <a
                href="tel:+33688358912"
                className="flex items-center gap-2 text-paper/90 transition-colors hover:text-paper"
              >
                <Phone size={15} className="text-paper/60" />
                06 88 35 89 12
              </a>
              <a
                href="mailto:contact@isidoreweb.fr"
                className="flex items-center gap-2 text-paper/90 transition-colors hover:text-paper"
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
                  <a
                    href={l.href}
                    className="text-paper/80 transition-colors hover:text-paper"
                  >
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
                  <Link
                    href={l.href}
                    className="text-paper/80 transition-colors hover:text-paper"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-paper/20 pt-6 text-xs text-paper/60">
          © {year} Isidore web — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}