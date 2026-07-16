import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Auto-hébergées au build par next/font → pas d'appel à Google au runtime (RGPD).
// Bricolage Grotesque : grotesque un peu chaleureuse pour les grands titres.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

// Inter : sans-serif neutre et lisible pour le corps de texte.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Caveat : manuscrite, réservée à la signature du bloc "À propos".
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const siteUrl = "https://isidoreweb.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Isidore web — Création de sites web en Indre-et-Loire et Sarthe",
    template: "%s — Isidore web",
  },
  description:
    "Développeur web freelance entre Tours et Le Mans. Sites vitrines et e-commerce sur-mesure pour artisans et PME. Un seul interlocuteur, livré à partir de 14 jours.",
  keywords: [
    "création site internet",
    "développeur web freelance",
    "site vitrine",
    "Indre-et-Loire",
    "Sarthe",
    "Château-du-Loir",
    "artisan",
    "PME",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Isidore web",
    title: "Isidore web — Création de sites web sur-mesure",
    description:
      "Sites vitrines et e-commerce pour artisans et PME en Indre-et-Loire et Sarthe. Un seul interlocuteur, du devis à la mise en ligne.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${bricolage.variable} ${inter.variable} ${caveat.variable}`}
    >
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}