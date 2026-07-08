import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Conditions générales de vente" };

export default function CGV() {
  return (
    <LegalPage title="Conditions générales de vente">
      <p className="rounded-md border border-line bg-paper-2 p-4 text-sm">
        <strong>À rédiger avant la mise en ligne.</strong> Les CGV encadrent tes
        prestations (devis, acompte, délais, livraison, propriété, paiement).
        Vu leur portée juridique, une relecture professionnelle est recommandée.
      </p>

      <h2>Objet</h2>
      <p>
        Les présentes conditions régissent les prestations de création de sites
        web proposées par Isidore web.
      </p>

      <h2>Devis et commande</h2>
      <p>[À compléter : validité du devis, acompte, bon pour accord…]</p>

      <h2>Délais et livraison</h2>
      <p>[À compléter : point de départ des délais, validation de la maquette…]</p>

      <h2>Paiement</h2>
      <p>[À compléter : modalités, échéances, pénalités de retard…]</p>
    </LegalPage>
  );
}
