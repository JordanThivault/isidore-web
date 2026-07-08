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
    title: "Un site rapide et bien référencé",
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
    <section id="engagements" className="border-b border-line">
      <div className="container-x py-20 md:py-24">
        <p className="eyebrow mb-5">Mes engagements</p>
        <h2 className="max-w-xl text-3xl md:text-[2.25rem]">
          Ce sur quoi vous pouvez compter.
        </h2>

        <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {engagements.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4">
              <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-md border border-line bg-paper-2 text-terracotta">
                <Icon size={18} strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="text-lg leading-snug">{title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
