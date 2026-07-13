import { Wallet, Gauge, ShieldCheck, UserRound, ListChecks } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Engagement = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const engagements: Engagement[] = [
  {
    icon: Wallet,
    title: "Pas de frais serveur imprévus",
    body: "Hébergement moderne, coût de maintenance faible et prévisible dès le départ.",
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
  {
    icon: UserRound,
    title: "Un seul interlocuteur",
    body: "Vous me parlez à moi, du devis à la maintenance.",
  },
  {
    icon: ListChecks,
    title: "Un point à chaque étape",
    body: "Vous savez toujours où en est votre projet, jamais dans le flou.",
  },
];

export function Engagements() {
  return (
    <section
      id="engagements"
      className="flex min-h-[80svh] items-center border-b border-line bg-paper"
    >
      <div className="container-x w-full py-16 md:py-20">
        <p className="eyebrow mb-5">Mes engagements</p>
        <h2 className="text-[clamp(2rem,4vw,3.25rem)]">
          Ce sur quoi vous pouvez compter.
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-5">
          {engagements.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group flex flex-col rounded-card border border-line bg-paper-2 p-5 transition-colors duration-300 hover:border-terracotta hover:bg-terracotta"
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-md border border-line bg-paper text-terracotta transition-colors duration-300 group-hover:border-white/25 group-hover:bg-white/10 group-hover:text-paper">
                <Icon size={18} strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink transition-colors duration-300 group-hover:text-paper">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft transition-colors duration-300 group-hover:text-paper/90">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}