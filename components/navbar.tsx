"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#realisations", label: "Réalisations" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#engagements", label: "Mes engagements" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-sm">
      <nav className="container-x flex h-16 items-center justify-between">
        <Link href="#top" aria-label="Isidore web — accueil">
          <Wordmark />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-sm text-ink-soft">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="transition-colors hover:text-terracotta"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact">
            <Button size="sm" variant="accent">
              Devis gratuit
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-ink"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-line transition-[max-height] duration-300",
          open ? "max-h-80" : "max-h-0"
        )}
      >
        <ul className="container-x flex flex-col gap-1 py-4 text-ink-soft">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 transition-colors hover:text-terracotta"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button variant="accent" className="w-full">
                Devis gratuit
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
