import { z } from "zod";

/**
 * Schéma de validation du formulaire de contact.
 * Utilisé côté serveur dans la Server Action (app/actions/contact.ts).
 * Les messages sont volontairement en français, prêts à afficher tels quels.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Merci d'indiquer votre nom.")
    .max(100, "Le nom est trop long."),
  email: z
    .string()
    .trim()
    .min(1, "Merci d'indiquer votre email.")
    .email("Cet email ne semble pas valide."),
  message: z
    .string()
    .trim()
    .min(10, "Décrivez votre projet en quelques mots (10 caractères minimum).")
    .max(3000, "Votre message est trop long."),
});

export type ContactInput = z.infer<typeof contactSchema>;
