import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Wordmark } from "@/components/wordmark";

/**
 * Gabarit commun aux pages légales.
 * Le contenu réel (mentions obligatoires) reste à rédiger et à faire
 * relire avant la mise en ligne publique.
 */
export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-line">
        <div className="container-x flex h-16 items-center justify-between">
          <Link href="/" aria-label="Retour à l'accueil">
            <Wordmark />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-terracotta"
          >
            <ArrowLeft size={16} />
            Accueil
          </Link>
        </div>
      </header>

      <main className="container-x max-w-2xl py-16 md:py-20">
        <h1 className="text-3xl md:text-4xl">{title}</h1>
        <div className="mt-8 space-y-4 text-ink-soft [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:text-ink [&_strong]:text-ink">
          {children}
        </div>
      </main>

      <footer className="border-t border-line">
        <div className="container-x py-8 text-xs text-muted">
          © {new Date().getFullYear()} Isidore web
        </div>
      </footer>
    </div>
  );
}
