"use client";

import { useActionState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const initialState: ContactState = { ok: false };

export function Contact() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);

  if (state.ok) {
    return (
      <section id="contact" className="border-b border-line">
        <div className="container-x py-20 md:py-24">
          <div className="mx-auto max-w-md rounded-card border border-line bg-paper-2 p-8 text-center">
            <CheckCircle2 className="mx-auto text-terracotta" size={32} />
            <h2 className="mt-4 text-2xl">Demande envoyée</h2>
            <p className="mt-2 text-ink-soft">
              {state.message ??
                "Merci, votre demande est bien partie. Je reviens vers vous rapidement."}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="border-b border-line">
      <div className="container-x grid gap-12 py-20 md:grid-cols-[1fr_1.1fr] md:py-24">
        <div className="max-w-md">
          <p className="eyebrow mb-5">Contact</p>
          <h2 className="text-3xl md:text-[2.25rem]">
            Un projet en tête ? Parlons-en.
          </h2>
          <p className="mt-5 text-ink-soft">
            Décrivez-moi votre activité et ce que vous cherchez — je reviens vers
            vous rapidement avec un premier retour.
          </p>
        </div>

        <form action={formAction} className="max-w-lg">
          {/* Honeypot anti-spam : caché aux humains, laissé vide.
              aria-hidden + tabIndex -1 pour ne pas gêner la navigation clavier. */}
          <div
            aria-hidden
            className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
          >
            <label htmlFor="website">Ne pas remplir</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid gap-5">
            <div>
              <Label htmlFor="name">Nom</Label>
              <Input id="name" name="name" autoComplete="name" required />
              {state.errors?.name && (
                <p className="mt-1.5 text-sm text-terracotta">{state.errors.name}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
              {state.errors?.email && (
                <p className="mt-1.5 text-sm text-terracotta">{state.errors.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Votre projet</Label>
              <Textarea id="message" name="message" required />
              {state.errors?.message && (
                <p className="mt-1.5 text-sm text-terracotta">
                  {state.errors.message}
                </p>
              )}
            </div>

            {state.message && !state.ok && (
              <p className="text-sm text-terracotta">{state.message}</p>
            )}

            <Button type="submit" variant="accent" size="lg" disabled={pending}>
              {pending ? "Envoi…" : "Envoyer ma demande"}
            </Button>

            {/* Mention RGPD au moment de la collecte (obligatoire) */}
            <p className="text-xs leading-relaxed text-muted">
              Vos données sont utilisées uniquement pour répondre à votre demande.{" "}
              <Link
                href="/confidentialite"
                className="underline underline-offset-2 hover:text-ink"
              >
                Politique de confidentialité
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
