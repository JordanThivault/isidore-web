"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#engagements", label: "Mes engagements" },
  { href: "/#tarifs", label: "Tarifs" },
  { href: "/#contact", label: "Contact" },
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
        "text-ink fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-line bg-paper/90 border-b shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur-sm"
          : "border-b border-transparent"
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        {/* Gauche : logo */}
        <Link href="/" aria-label="Isidore web — accueil" className="shrink-0">
          <Image
            src="/logo3.png"
            alt="Isidore web"
            width={230}
            height={49}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>

        {/* Centre : liens (desktop) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-ink-soft hover:text-terracotta transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Droite : CTA */}
        <div className="hidden md:block">
          <Link href="/#contact">
            <Button size="sm" variant="accent">
              Devis gratuit
            </Button>
          </Link>
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
          "bg-paper text-ink overflow-hidden border-t transition-[max-height] duration-300 md:hidden",
          open ? "border-line max-h-96" : "max-h-0 border-transparent"
        )}
      >
        <ul className="container-x text-ink-soft flex flex-col gap-1 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="hover:text-terracotta block py-2 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Link href="/#contact" onClick={() => setOpen(false)}>
              <Button variant="accent" className="w-full">
                Devis gratuit
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
