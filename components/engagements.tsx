import { Wallet, Gauge, ShieldCheck, ListChecks } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Bracket, Square, Ticks } from "@/components/decor";
import { DecorReveal } from "@/components/decor-reveal";
import { Reveal } from "@/components/motion/reveal";

type Engagement = {
  icon: LucideIcon;
  title: string;
  body: string;
};

/**
 * "Un seul interlocuteur" est passé dans le paragraphe d'intro (colonne de
 * gauche) plutôt que dans cette liste — 4 points en timeline, pas 5.
 */
const engagements: Engagement[] = [
  {
    icon: ListChecks,
    title: "Un point à chaque étape",
    body: "Vous savez toujours où en est votre projet, jamais dans le flou.",
  },
  {
    icon: Wallet,
    title: "Pas de frais imprévus",
    body: "Hébergement, nom de domaine, outils : tout est clair dès le départ.",
  },
  {
    icon: Gauge,
    title: "Rapide et bien référencé",
    body: "Des choix techniques pensés pour être récompensés par Google, pas juste pour faire joli.",
  },
  {
    icon: ShieldCheck,
    title: "Vos données respectées",
    body: "Aucune revente, aucun tracker publicitaire installé sans votre accord.",
  },
];

export function Engagements() {
  return (
    <section id="engagements" className="border-line bg-paper relative overflow-hidden border-b">
      {/* Décor géométrique — se trace quand la section entre dans le viewport */}
      <DecorReveal>
        <Bracket corner="tl" className="top-8 left-4 hidden md:block" size={64} draw />
        <Square
          size={64}
          rotate={14}
          className="-right-4 bottom-10 hidden opacity-70 lg:block"
          draw
          delay={250}
        />
      </DecorReveal>

      <div className="container-x relative grid gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-24">
        {/* Colonne gauche — intro, "un seul interlocuteur" y est dit en toutes lettres */}
        <Reveal>
          <p className="eyebrow mb-5">Mes engagements</p>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)]">Des garanties simples.</h2>
          <p className="text-ink-soft mt-6 max-w-sm">
            Un seul interlocuteur, du premier échange à la mise en ligne : vous me parlez
            directement, jamais à un ticket support ou un compte générique.
          </p>

          {/* Petit repère décoratif, en flux normal (pas en absolu comme le
              reste du décor de la section) — donc le twMerge dans cn()
              écrase "absolute" par "relative" via className. */}
          <Ticks className="relative mt-10" count={3} />
        </Reveal>

        {/* Colonne droite — timeline verticale à 4 points */}
        <div className="relative">
          {/* Trait continu derrière les puces ; les puces (bg-paper) le masquent
              par-dessus, ce qui donne l'effet de ligne qui traverse chaque point. */}
          <div aria-hidden className="bg-line absolute top-6 bottom-6 left-6 w-px md:left-7" />

          <ul className="space-y-10">
            {engagements.map(({ icon: Icon, title, body }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={i * 0.08}
                className="relative flex items-start gap-5"
              >
                {/* Rond avec flip 3D au survol : face avant claire, face
                    arrière terracotta — même icône des deux côtés. */}
                <div className="relative z-10 h-12 w-12 flex-none [perspective:800px] md:h-14 md:w-14">
                  <div className="relative h-full w-full transition-transform duration-500 ease-out [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] motion-reduce:transition-none motion-reduce:hover:[transform:none]">
                    <span className="border-line-strong bg-paper text-terracotta absolute inset-0 flex items-center justify-center rounded-full border [backface-visibility:hidden]">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <span className="bg-terracotta text-paper absolute inset-0 flex [transform:rotateY(180deg)] items-center justify-center rounded-full [backface-visibility:hidden]">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                  </div>
                </div>
                <div className="pt-2.5 md:pt-3.5">
                  <h3 className="text-lg leading-snug">{title}</h3>
                  <p className="text-ink-soft mt-1.5 text-sm">{body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
