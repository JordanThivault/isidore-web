import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales">
      <p className="rounded-md border border-line bg-paper-2 p-4 text-sm">
        <strong>À compléter avant la mise en ligne.</strong> Cette page comporte
        des mentions obligatoires (identité, SIRET, hébergeur…). Fais-la relire
        si besoin.
      </p>

      <h2>Éditeur du site</h2>
      <p>
        Jordan [Nom] — micro-entreprise
        <br />
        Adresse : [à compléter], Château-du-Loir (72)
        <br />
        SIRET : [à compléter]
        <br />
        Email : contact@isidoreweb.fr
        <br />
        Responsable de la publication : Jordan [Nom]
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
        L&apos;ensemble des contenus de ce site (textes, visuels, code) est la
        propriété de leur auteur, sauf mention contraire. Toute reproduction sans
        autorisation est interdite.
      </p>
    </LegalPage>
  );
}
