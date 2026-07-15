import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Conditions générales de vente" };

export default function CGV() {
  return (
    <LegalPage title="Conditions générales de vente">
      <p className="text-sm text-muted">
        Isidore Web — Jordan Thivault, Entrepreneur Individuel
        <br />
        Version en vigueur au 01/01/2026
      </p>

      <h2>Article 1 — Objet et champ d&apos;application</h2>
      <p>
        Les présentes conditions générales de vente (ci-après « CGV »)
        s&apos;appliquent à toute prestation de conception, développement et
        livraison de site internet réalisée par Jordan Thivault, exerçant sous
        le nom commercial Isidore Web, Entrepreneur Individuel, SIRET 989 714
        902 00016, dont le siège est situé 26 B rue Aristide Briand,
        Château-du-Loir, 72500 Montval-sur-Loir (ci-après « le Prestataire »),
        au bénéfice de tout client professionnel (ci-après « le Client »).
      </p>
      <p>
        Toute commande de prestation implique l&apos;acceptation sans réserve
        des présentes CGV par le Client, qui déclare en avoir pris
        connaissance préalablement à la signature du devis. Ces CGV
        prévalent sur tout document du Client, sauf accord écrit et
        préalable du Prestataire.
      </p>
      <p>
        Les prestations d&apos;hébergement et de maintenance postérieures à
        la livraison font l&apos;objet d&apos;un contrat distinct, spécifique
        à chaque projet.
      </p>

      <h2>Article 2 — Devis et commande</h2>
      <p>
        Chaque prestation fait l&apos;objet d&apos;un devis détaillé et
        gratuit, précisant le périmètre, le délai indicatif et le prix. Le
        devis est valable 30 jours à compter de sa date d&apos;émission, sauf
        mention contraire.
      </p>
      <p>
        La commande est considérée comme ferme et définitive à réception du
        devis signé par le Client, précédé de la mention manuscrite « Bon
        pour accord », ou de toute acceptation écrite équivalente (email).
      </p>

      <h2>Article 3 — Déroulement de la prestation</h2>
      <p>
        Sauf indication contraire dans le devis, la prestation se déroule
        selon les étapes suivantes :
        <br />
        — Recueil des besoins et cadrage du projet ;
        <br />
        — Proposition d&apos;une direction artistique (maquette), soumise à
        validation écrite du Client avant le démarrage du développement
        complet, dans la limite du nombre de révisions précisé au devis ;
        <br />
        — Développement des fonctionnalités convenues ;
        <br />
        — Recette et corrections mineures ;
        <br />
        — Mise en ligne et livraison.
      </p>
      <p>
        Le Client s&apos;engage à fournir dans des délais raisonnables
        l&apos;ensemble des éléments nécessaires à la réalisation de la
        prestation (textes, visuels, accès, retours et validations). Tout
        retard imputable au Client dans la fourniture de ces éléments ou dans
        ses validations reporte d&apos;autant le délai de livraison, sans que
        le Prestataire puisse en être tenu responsable.
      </p>

      <h2>Article 4 — Prix et modalités de paiement</h2>
      <p>
        Les prix sont exprimés en euros. Sauf mention contraire portée sur le
        devis, la TVA n&apos;est pas applicable, conformément à l&apos;article
        293 B du Code Général des Impôts.
      </p>
      <p>
        Sauf modalités différentes précisées au devis, le paiement
        s&apos;effectue selon l&apos;échéancier suivant :
        <br />
        — 40 % du montant total à la signature du devis, à titre
        d&apos;acompte de démarrage ;
        <br />
        — 60 % du solde à la livraison de la prestation.
      </p>
      <p>
        Le règlement s&apos;effectue par virement bancaire, à réception de
        facture. Aucun escompte n&apos;est accordé en cas de paiement
        anticipé.
      </p>
      <p>
        En cas de retard de paiement, seront exigibles, conformément aux
        articles L441-10 et D441-5 du Code de commerce, des pénalités de
        retard calculées au taux d&apos;intérêt légal en vigueur majoré de 10
        points, ainsi qu&apos;une indemnité forfaitaire pour frais de
        recouvrement de 40 €.
      </p>

      <h2>Article 5 — Délais</h2>
      <p>
        Les délais de livraison indiqués au devis sont donnés à titre
        indicatif et engagent le Prestataire à une obligation de moyens. Ils
        tiennent compte de la disponibilité du Prestataire et de la
        réactivité du Client dans la validation des différentes étapes du
        projet. Un dépassement raisonnable du délai indicatif ne peut donner
        lieu à pénalité, indemnité ou annulation de la commande.
      </p>

      <h2>Article 6 — Propriété intellectuelle</h2>
      <p>
        Le code source développé spécifiquement pour le Client devient sa
        propriété à compter du paiement intégral et complet du prix convenu.
        Jusqu&apos;à cette date, il demeure la propriété du Prestataire.
      </p>
      <p>
        Les textes, photographies, vidéos, logos et autres contenus fournis
        par le Client pour l&apos;intégration au site restent sa pleine
        propriété intellectuelle. Le Client garantit disposer des droits
        nécessaires à leur utilisation et à leur publication, et garantit le
        Prestataire contre tout recours de tiers à ce titre.
      </p>
      <p>
        Le Prestataire conserve le droit de mentionner la réalisation du
        projet dans le cadre de sa communication commerciale (portfolio,
        book, réseaux professionnels), sauf refus exprès et écrit du Client.
      </p>

      <h2>Article 7 — Hébergement et maintenance</h2>
      <p>
        La présente prestation porte sur la conception et la livraison du
        site. Son hébergement, sa maintenance technique et son suivi après
        livraison ne sont pas compris dans le présent devis et font
        l&apos;objet d&apos;un contrat de maintenance distinct, proposé au
        Client à la livraison du projet.
      </p>

      <h2>Article 8 — Responsabilité</h2>
      <p>
        Le Prestataire est tenu à une obligation de moyens dans
        l&apos;exécution de sa prestation. Il ne saurait être tenu
        responsable des dysfonctionnements ou interruptions imputables à des
        prestataires techniques tiers (hébergement, paiement, messagerie,
        base de données), ni des conséquences d&apos;une modification du
        site effectuée par le Client ou un tiers non autorisé.
      </p>
      <p>
        La responsabilité du Prestataire, si elle devait être engagée, est
        limitée au montant effectivement versé par le Client au titre de la
        prestation concernée.
      </p>

      <h2>Article 9 — Données personnelles</h2>
      <p>
        Dans le cadre de la réalisation de la prestation, le Prestataire peut
        être amené à traiter des données à caractère personnel pour le
        compte du Client, notamment lors du développement de fonctionnalités
        de collecte de données (formulaires, comptes clients, commandes). Le
        Prestataire agit alors en qualité de sous-traitant au sens du
        Règlement Général sur la Protection des Données (RGPD) et
        s&apos;engage à la confidentialité de ces données et à leur
        utilisation aux seules fins de l&apos;exécution de la prestation.
      </p>
      <p>
        Le Client demeure responsable du traitement des données collectées
        via le site une fois celui-ci mis en ligne et exploité dans le cadre
        de son activité.
      </p>

      <h2>Article 10 — Annulation en cours de projet</h2>
      <p>
        En cas d&apos;annulation de la commande par le Client après
        signature du devis, l&apos;acompte versé reste acquis au
        Prestataire. Si l&apos;annulation intervient après le démarrage du
        développement, le Prestataire facture, en sus de l&apos;acompte, le
        travail effectivement réalisé au prorata du temps passé, sur la base
        du tarif journalier appliqué au projet.
      </p>

      <h2>Article 11 — Force majeure</h2>
      <p>
        Aucune des parties ne pourra être tenue responsable d&apos;un
        manquement à ses obligations résultant d&apos;un cas de force
        majeure au sens de l&apos;article 1218 du Code civil.
      </p>

      <h2>Article 12 — Droit applicable et litiges</h2>
      <p>
        Les présentes CGV sont soumises au droit français. En cas de litige,
        les parties s&apos;efforceront de trouver une solution amiable avant
        toute action judiciaire. À défaut, le litige relève de la compétence
        des tribunaux du ressort du siège du Prestataire.
      </p>

      <h2>Article 13 — Modification des CGV</h2>
      <p>
        Le Prestataire se réserve le droit de modifier les présentes CGV à
        tout moment. Les CGV applicables à une commande sont celles en
        vigueur à la date de signature du devis correspondant.
      </p>

      <p className="mt-8 text-xs text-muted">
        Isidore Web — Jordan Thivault — Entrepreneur Individuel — SIRET 989
        714 902 00016
      </p>
    </LegalPage>
  );
}