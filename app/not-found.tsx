import type { Metadata } from "next";
import Link from "next/link";
import { Compass } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { Button } from "@/components/ui/button";
import { Bracket, Ring, Crosshair, Dots } from "@/components/decor";

export const metadata: Metadata = { title: "Page introuvable" };

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="border-b border-line">
        <div className="container-x flex h-16 items-center">
          <Link href="/" aria-label="Retour à l'accueil">
            <Wordmark />
          </Link>
        </div>
      </header>

      <main className="relative flex flex-1 items-center overflow-hidden">
        {/* Décor géométrique — se trace au chargement, page courte donc pas
            besoin d'attendre le scroll (pas de DecorReveal ici). */}
        <Bracket
          corner="tl"
          className="left-6 top-10 hidden text-terracotta/40 md:block"
          size={64}
          draw
        />
        <Bracket
          corner="br"
          className="bottom-10 right-6 hidden text-terracotta/40 md:block"
          size={64}
          draw
          delay={150}
        />
        <Ring
          size={160}
          className="-right-16 top-1/4 hidden text-line-strong animate-float-slow lg:block"
          draw
          delay={100}
        />
        <Crosshair
          className="left-1/4 bottom-16 hidden text-terracotta/50 lg:block"
          size={16}
          draw
          delay={300}
        />
        <Dots className="right-14 bottom-14 hidden text-line-strong lg:grid" cols={4} rows={4} />

        <div className="container-x relative w-full py-20 text-center">
          <p className="eyebrow mb-6">Erreur 404</p>

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-line-strong text-terracotta">
            <Compass size={26} strokeWidth={1.5} />
          </div>

          <h1 className="text-[clamp(2rem,4.5vw,3.25rem)]">
            Cette page s&apos;est perdue en chemin.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-ink-soft">
            Même saint Isidore, saint patron du numérique, n&apos;a pas retrouvé sa
            trace. On va prier saint Antoine de Padoue — les objets perdus,
            c&apos;est plutôt son rayon.
          </p>

          <div className="mt-8 flex justify-center">
            <Link href="/">
              <Button variant="accent" size="lg">
                Retour à l&apos;accueil
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-line">
        <div className="container-x py-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} Isidore web
        </div>
      </footer>
    </div>
  );
}