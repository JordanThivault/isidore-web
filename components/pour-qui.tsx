import { Search, PhoneOff, Handshake, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Bracket, Ring, ThinLine, Crosshair } from "@/components/decor";
import { DecorReveal } from "@/components/decor-reveal";
import { Reveal } from "@/components/motion/reveal";

type Profil = {
  icon: LucideIcon;
  text: string;
};

const profils: Profil[] = [
  {
    icon: Search,
    text: "Vous avez une activité locale et vos clients ne vous trouvent pas sur Google.",
  },
  {
    icon: PhoneOff,
    text: "Vous avez déjà un site, mais il ne génère aucun appel, aucune demande.",
  },
  {
    icon: Handshake,
    text: "Vous voulez travailler avec quelqu'un qui comprend votre métier — pas un prestataire qui livre et disparaît.",
  },
  {
    icon: Rocket,
    text: "Vous voulez un site livré rapidement, sans vous noyer dans les détails techniques.",
  },
];

export function PourQui() {
  return (
    <section id="pour-qui" className="border-line bg-paper relative overflow-hidden border-b">
      {/* Décor géométrique — se trace quand la section entre dans le viewport */}
      <DecorReveal>
        <Bracket corner="tr" className="top-10 right-4 hidden md:block" size={64} draw />
        <Ring
          size={180}
          className="bottom-10 -left-20 hidden opacity-70 lg:block"
          draw
          delay={150}
        />
        <ThinLine className="top-1/4 left-0 w-16 lg:w-28" draw delay={300} />
        <Crosshair className="right-10 bottom-16 hidden lg:block" draw delay={450} />
      </DecorReveal>

      <div className="container-x relative w-full py-16 md:py-20">
        <Reveal>
          <p className="eyebrow mb-5">Site web créé en Indre-et-Loire et Sarthe</p>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)]">Vous vous reconnaissez ?</h2>
          <p className="text-ink-soft mt-5">
            Artisan, commerçant ou indépendant en Indre-et-Loire ou en Sarthe, vous êtes au bon
            endroit.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12">
          {profils.map(({ icon: Icon, text }, i) => (
            <Reveal key={text} delay={0.1 + i * 0.08} className="h-full">
              <article className="group rounded-card border-line bg-paper-2 hover:border-terracotta hover:bg-terracotta flex h-full items-center gap-4 border p-5 transition-colors duration-300">
                <span className="border-line bg-paper text-terracotta group-hover:text-paper flex h-14 w-14 flex-none items-center justify-center rounded-md border transition-colors duration-300 group-hover:border-white/25 group-hover:bg-white/10">
                  <Icon size={26} strokeWidth={1.5} />
                </span>
                <p className="text-ink-soft group-hover:text-paper text-sm leading-relaxed transition-colors duration-300">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
