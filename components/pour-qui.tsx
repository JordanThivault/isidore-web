import { Search, PhoneOff, Handshake, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
      className="flex min-h-[50svh] items-center border-b border-line bg-paper"
    >
      <div className="container-x w-full py-16 md:py-20">
        <p className="eyebrow mb-5">Site web créé en Indre-et-Loire et Sarthe</p>
        <h2 className="text-[clamp(2rem,4vw,3.25rem)]">Pour qui ?</h2>
        <p className="mt-5 max-w-2xl text-ink-soft">
          Artisan, commerçant ou indépendant en Indre-et-Loire ou en Sarthe, vous
          êtes exactement la cible de ce que je fais.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-12">
          {profils.map(({ icon: Icon, text }) => (
            <article
              key={text}
              className="group flex flex-col rounded-card border border-line bg-paper-2 p-6 transition-colors duration-300 hover:border-terracotta hover:bg-terracotta md:p-7"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-md border border-line bg-paper text-terracotta transition-colors duration-300 group-hover:border-white/25 group-hover:bg-white/10 group-hover:text-paper">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <p className="mt-5 leading-relaxed text-ink-soft transition-colors duration-300 group-hover:text-paper">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}