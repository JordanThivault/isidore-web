import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function Confidentialite() {
  return (
    <LegalPage title="Politique de confidentialité">
      <p className="rounded-md border border-line bg-paper-2 p-4 text-sm">
        <strong>À compléter avant la mise en ligne.</strong> Adapte le contenu à
        ce que tu collectes réellement.
      </p>

      <h2>Données collectées</h2>
      <p>
        Le formulaire de contact collecte votre nom, votre email et le message
        que vous rédigez. Ces informations servent uniquement à répondre à votre
        demande.
      </p>

      <h2>Conservation</h2>
      <p>
        Vos données sont conservées le temps nécessaire au traitement de votre
        demande, puis supprimées. Elles ne sont ni revendues, ni transmises à des
        tiers à des fins commerciales.
      </p>

      <h2>Mesure d&apos;audience</h2>
      <p>
        Ce site utilise Vercel Analytics, une mesure d&apos;audience sans cookie
        et sans donnée personnelle identifiante.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
        rectification et de suppression de vos données. Pour l&apos;exercer :
        contact@isidoreweb.fr.
      </p>
    </LegalPage>
  );
}
