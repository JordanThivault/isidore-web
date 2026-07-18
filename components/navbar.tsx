"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#realisations", label: "Réalisations" },
  { href: "#engagements", label: "Mes engagements" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Transparente en haut du hero (clair), puis fond crème + ombre au scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile au clic en dehors (ou à l'échap), en plus du bouton
  // croix et du clic sur un lien — histoire de ne pas obliger à viser la
  // croix pour sortir du menu.
  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-ink transition-colors duration-300",
        solid
          ? "border-b border-line bg-paper/90 shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur-sm"
          : "border-b border-transparent"
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        {/* Gauche : logo */}
        <Link href="#top" aria-label="Isidore web — accueil" className="shrink-0">
          <Wordmark />
        </Link>

        {/* Centre : liens (desktop) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-ink-soft transition-colors hover:text-terracotta"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Droite : CTA */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm" variant="accent">
              Devis gratuit
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-current md:hidden"
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
          "overflow-hidden border-t bg-paper text-ink transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96 border-line" : "max-h-0 border-transparent"
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