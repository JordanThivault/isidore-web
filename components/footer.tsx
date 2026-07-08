import Link from "next/link";
import { Wordmark } from "@/components/wordmark";

const legal = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Confidentialité" },
  { href: "/cgv", label: "CGV" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-paper">
      <div className="container-x py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Wordmark />
            {/* Clin d'œil discret à l'histoire de marque */}
            <p className="mt-3 max-w-xs text-sm text-muted">
              Isidore de Séville, patron des internautes. Des sites web
              sur-mesure pour les artisans et PME d&apos;Indre-et-Loire et de la
              Sarthe.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
            {legal.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-terracotta"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-xs text-muted">
          © {year} Isidore web — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
