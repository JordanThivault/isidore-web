"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";

export type ContactState = {
  ok: boolean;
  /** Message global (succès ou erreur serveur) */
  message?: string;
  /** Erreurs par champ, prêtes à afficher sous chaque input */
  errors?: Partial<Record<"name" | "email" | "message", string>>;
};

export async function sendContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // 1) Honeypot : un bot remplit ce champ caché, un humain jamais.
  //    On répond "ok" sans rien envoyer pour ne pas signaler le piège.
  if (formData.get("website")) {
    return { ok: true };
  }

  // 2) Validation des champs
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      ok: false,
      errors: {
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      },
    };
  }

  const { name, email, message } = parsed.data;

  // 3) Envoi de l'email via Resend
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Variables Resend manquantes (voir .env).");
    return {
      ok: false,
      message:
        "L'envoi est momentanément indisponible. Écrivez-moi directement par email en attendant.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Isidore web <${from}>`,
      to: [to],
      replyTo: email,
      subject: `Nouvelle demande — ${name}`,
      text: [`Nom : ${name}`, `Email : ${email}`, "", "Message :", message].join("\n"),
    });

    if (error) {
      console.error("Erreur Resend :", error);
      return {
        ok: false,
        message: "L'envoi a échoué. Réessayez dans un instant.",
      };
    }

    return {
      ok: true,
      message: "Merci, votre demande est bien partie. Je reviens vers vous rapidement.",
    };
  } catch (err) {
    console.error("Exception envoi contact :", err);
    return {
      ok: false,
      message: "Une erreur est survenue. Réessayez dans un instant.",
    };
  }
}
