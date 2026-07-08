/**
 * Réalisations, en dur pour l'instant (pas de CMS).
 * Pour ajouter un projet : copie un objet, remplis les champs,
 * et dépose l'image dans /public/projects/.
 */

export type Project = {
  slug: string;
  title: string;
  summary: string;
  /** Chemin de l'image dans /public (ex : /projects/domaine-vin.jpg) */
  image: string;
  /** Lien vers le site en ligne, ou undefined si non public */
  url?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "domaine-viticole",
    title: "Un site e-commerce pour un domaine viticole",
    summary:
      "Vente en ligne, gestion des déclarations réglementaires, expérience pensée pour un client final exigeant.",
    image: "/projects/domaine-vin.jpg",
    url: undefined, // renseigne l'URL publique quand c'est possible
    tags: ["E-commerce", "Sur-mesure", "Réglementaire"],
  },
];
