import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Bracket, Ring, Crosshair, Dots } from "@/components/decor";

export const metadata: Metadata = { title: "Page introuvable" };

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="border-line border-b">
        <div className="container-x flex h-16 items-center">
          <Link href="/" aria-label="Retour à l'accueil">
            <Image
              src="/logo.png"
              alt="Isidore web"
              width={230}
              height={49}
              className="h-12 w-auto"
            />
          </Link>
        </div>
      </header>

      <main className="relative flex flex-1 items-center overflow-hidden">
        <Bracket
          corner="tl"
          className="text-terracotta/40 top-10 left-6 hidden md:block"
          size={64}
          draw
        />
        <Bracket
          corner="br"
          className="text-terracotta/40 right-6 bottom-10 hidden md:block"
          size={64}
          draw
          delay={150}
        />
        <Ring
          size={160}
          className="text-line-strong animate-float-slow top-1/4 -right-16 hidden lg:block"
          draw
          delay={100}
        />
        <Crosshair
          className="text-terracotta/50 bottom-16 left-1/4 hidden lg:block"
          size={16}
          draw
          delay={300}
        />
        <Dots className="text-line-strong right-14 bottom-14 hidden lg:grid" cols={4} rows={4} />

        <div className="container-x relative w-full py-20 text-center">
          <p className="eyebrow mb-6">Erreur 404</p>

          <div className="border-line-strong mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border">
            <Image
              src="/icon.png"
              alt=""
              width={32}
              height={32}
              className="h-12 w-12 object-contain"
            />
          </div>

          <h1 className="text-[clamp(2rem,4.5vw,3.25rem)]">
            Cette page s&apos;est perdue en chemin.
          </h1>

          <p className="text-ink-soft mx-auto mt-5 max-w-md">
            Même saint Isidore, saint patron du numérique, n&apos;a pas retrouvé sa trace. On va
            prier saint Antoine de Padoue — les objets perdus, c&apos;est plutôt son rayon.
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

      <footer className="border-line border-t">
        <div className="container-x text-muted py-8 text-center text-xs">
          © {new Date().getFullYear()} Isidore web
        </div>
      </footer>
    </div>
  );
}
