/**
 * Réalisations, en dur pour l'instant (pas de CMS).
 * Pour ajouter un projet : copie un objet, remplis les champs,
 * et dépose l'image dans /public/projects/.
 *
 * Tant qu'il n'y a qu'un seul projet, la section Réalisations l'affiche
 * en grande carte "vitrine" (2 photos + détails). Dès qu'un 2e projet est
 * ajouté, elle bascule automatiquement en carrousel à boucle infinie.
 */

export type Project = {
  slug: string;
  title: string;
  summary: string;
  /** Chemin de la 1ère image dans /public (ex : /projects/domaine-vin.png) */
  image: string;
  /**
   * Chemin de la 2e image (optionnel). Utilisée uniquement dans l'affichage
   * "vitrine" (un seul projet). Si absente, la 1ère image est réutilisée.
   */
  image2?: string;
  /** Lien vers le site en ligne, ou undefined si non public */
  url?: string;
  tags: string[];
  /** Points clés affichés en liste dans l'affichage "vitrine" */
  details?: string[];
};

export const projects: Project[] = [
  {
    slug: "domaine-viticole",
    title: "Un site e-commerce pour un domaine viticole",
    summary:
      "Vente en ligne, gestion des déclarations réglementaires, expérience pensée pour un client final exigeant.",
    image: "/projects/domaine-vin.png",
    // TODO : remplace par une 2e capture (ex : /projects/domaine-vin-2.png)
    image2: "/projects/domaine-vin.png",
    url: "https://domaine-gaud.com",
    tags: ["E-commerce", "Sur-mesure", "Réglementaire"],
    details: [
      "Catalogue produits et panier avec paiement en ligne sécurisé",
      "Gestion des mentions légales et déclarations réglementaires liées à l'alcool",
      "Design fidèle à l'identité du domaine",
      "Optimisé pour le référencement local",
    ],
  },
];