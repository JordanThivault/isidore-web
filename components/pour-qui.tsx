import { Search, PhoneOff, Handshake, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Bracket, Ring, ThinLine, Crosshair } from "@/components/decor";
import { DecorReveal } from "@/components/decor-reveal";

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
    <section
      id="pour-qui"
      className="relative overflow-hidden border-b border-line bg-paper"
    >
      {/* Décor géométrique — se trace quand la section entre dans le viewport */}
      <DecorReveal>
        <Bracket corner="tr" className="right-4 top-10 hidden md:block" size={64} draw />
        <Ring size={180} className="-left-20 bottom-10 hidden opacity-70 lg:block" draw delay={150} />
        <ThinLine className="left-0 top-1/4 w-16 lg:w-28" draw delay={300} />
        <Crosshair className="right-10 bottom-16 hidden lg:block" draw delay={450} />
      </DecorReveal>

      <div className="container-x relative w-full py-16 md:py-20">
        <p className="eyebrow mb-5">Site web créé en Indre-et-Loire et Sarthe</p>
        <h2 className="text-[clamp(2rem,4vw,3.25rem)]">Vous vous reconnaissez ?</h2>
        <p className="mt-5 text-ink-soft">
          Artisan, commerçant ou indépendant en Indre-et-Loire ou en Sarthe,
          vous êtes au bon endroit.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12">
          {profils.map(({ icon: Icon, text }) => (
            <article
              key={text}
              className="group flex items-center gap-4 rounded-card border border-line bg-paper-2 p-5 transition-colors duration-300 hover:border-terracotta hover:bg-terracotta"
            >
              <span className="flex h-14 w-14 flex-none items-center justify-center rounded-md border border-line bg-paper text-terracotta transition-colors duration-300 group-hover:border-white/25 group-hover:bg-white/10 group-hover:text-paper">
                <Icon size={26} strokeWidth={1.5} />
              </span>
              <p className="text-sm leading-relaxed text-ink-soft transition-colors duration-300 group-hover:text-paper">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}