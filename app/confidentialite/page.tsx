import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function Confidentialite() {
  return (
    <LegalPage title="Politique de confidentialité">
      <h2>Données collectées</h2>
      <p>
        Le formulaire de contact est la seule source de collecte de données
        personnelles sur ce site. Il recueille votre nom, votre email et le
        message que vous rédigez. Ces informations servent uniquement à
        répondre à votre demande — aucun compte client, newsletter ou autre
        collecte n&apos;est mis en place.
      </p>

      <h2>Conservation</h2>
      <p>
        Vos données sont conservées le temps nécessaire au traitement de
        votre demande, puis supprimées une fois celle-ci traitée. Elles ne
        sont ni revendues, ni transmises à des tiers à des fins
        commerciales.
      </p>

      <h2>Sous-traitants</h2>
      <p>
        L&apos;envoi des emails générés par le formulaire de contact est géré
        par Resend, qui agit en tant que sous-traitant au sens du RGPD. Les
        données transitant par ce service sont limitées à celles saisies
        dans le formulaire (nom, email, message) et ne sont utilisées que
        pour l&apos;acheminement de l&apos;email.
      </p>

      <h2>Mesure d&apos;audience</h2>
      <p>
        Ce site utilise Vercel Analytics, une mesure d&apos;audience sans
        cookie et sans donnée personnelle identifiante.
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