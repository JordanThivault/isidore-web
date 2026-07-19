"use client";

import { useActionState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Bracket, Ring, ThinLine, Crosshair, Square } from "@/components/decor";
import { DecorReveal } from "@/components/decor-reveal";
import { Stamp } from "@/components/stamp";
import { Reveal } from "@/components/motion/reveal";

const initialState: ContactState = { ok: false };

/** Décor commun aux deux états de la section — se trace au scroll. */
function Decor() {
  return (
    <DecorReveal>
      <Bracket corner="tl" className="top-12 left-4 hidden md:block" size={64} draw />
      <Bracket
        corner="br"
        className="right-4 bottom-12 hidden md:block"
        size={64}
        draw
        delay={150}
      />
      <Ring
        size={200}
        className="-right-20 bottom-16 hidden opacity-60 lg:block"
        draw
        delay={300}
      />
      <Square
        size={70}
        rotate={-10}
        className="bottom-20 left-10 hidden opacity-70 lg:block"
        draw
        delay={450}
      />
      <ThinLine className="top-1/4 right-0 w-20 lg:w-32" draw delay={200} />
      <Crosshair className="top-10 left-1/3 hidden lg:block" draw delay={550} />
    </DecorReveal>
  );
}

export function Contact() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);

  if (state.ok) {
    return (
      <section id="contact" className="border-line bg-paper relative overflow-hidden border-b">
        <Decor />
        <div className="container-x relative w-full py-16 md:py-20">
          <Reveal className="rounded-card border-line bg-paper-2 mx-auto max-w-md border p-8 text-center">
            <CheckCircle2 className="text-terracotta mx-auto" size={32} />
            <h2 className="mt-4 text-2xl">Demande envoyée</h2>
            <p className="text-ink-soft mt-2">
              {state.message ??
                "Merci, votre demande est bien partie. Je reviens vers vous rapidement."}
            </p>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="border-line bg-paper relative overflow-hidden border-b">
      <Decor />
      <div className="container-x relative grid items-center gap-10 py-16 md:grid-cols-[1fr_1.1fr] md:py-20 lg:grid-cols-[1fr_1.1fr_auto] lg:gap-12">
        <Reveal className="max-w-md">
          <p className="eyebrow mb-5">Contact</p>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)]">Un projet en tête ? Parlons-en.</h2>
          <p className="text-ink-soft mt-5">
            Décrivez-moi votre activité et ce que vous cherchez — je reviens vers vous rapidement
            avec un premier retour.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form action={formAction} className="max-w-lg">
            {/* Honeypot anti-spam : caché aux humains, laissé vide. */}
            <div
              aria-hidden
              className="absolute top-[-9999px] left-[-9999px] h-0 w-0 overflow-hidden"
            >
              <label htmlFor="website">Ne pas remplir</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-5">
              <div>
                <Label htmlFor="name">Nom</Label>
                <Input id="name" name="name" autoComplete="name" required />
                {state.errors?.name && (
                  <p className="text-terracotta mt-1.5 text-sm">{state.errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" autoComplete="email" required />
                {state.errors?.email && (
                  <p className="text-terracotta mt-1.5 text-sm">{state.errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Votre projet</Label>
                <Textarea id="message" name="message" required />
                {state.errors?.message && (
                  <p className="text-terracotta mt-1.5 text-sm">{state.errors.message}</p>
                )}
              </div>

              {state.message && !state.ok && (
                <p className="text-terracotta text-sm">{state.message}</p>
              )}

              <Button type="submit" variant="accent" size="lg" disabled={pending}>
                {pending ? "Envoi…" : "Envoyer ma demande"}
              </Button>

              {/* Mention RGPD au moment de la collecte (obligatoire) */}
              <p className="text-muted text-xs leading-relaxed">
                Vos données sont utilisées uniquement pour répondre à votre demande.{" "}
                <Link
                  href="/confidentialite"
                  className="hover:text-ink underline underline-offset-2"
                >
                  Politique de confidentialité
                </Link>
                .
              </p>
            </div>
          </form>
        </Reveal>

        {/* Tampon à droite */}
        <Reveal delay={0.2} className="hidden lg:block">
          <Stamp />
        </Reveal>
      </div>
    </section>
  );
}
