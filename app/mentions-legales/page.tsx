import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        Jordan Thivault — Isidore Web, Entrepreneur Individuel
        <br />
        Adresse : 26 B rue Aristide Briand, Château-du-Loir, 72500 Montval-sur-Loir
        <br />
        SIRET : 989 714 902 00016
        <br />
        Email : contact@isidoreweb.fr
        <br />
        Responsable de la publication : Jordan Thivault
      </p>

      <h2>Hébergement</h2>
      <p>
        Vercel Inc.
        <br />
        340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
        <br />
        vercel.com
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus de ce site (textes, visuels, code) est la propriété de leur
        auteur, sauf mention contraire. Toute reproduction sans autorisation est interdite.
      </p>
    </LegalPage>
  );
}
