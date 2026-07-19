import Image from "next/image";
import { Bracket, Ring, ThinLineY, Crosshair } from "@/components/decor";
import { DecorReveal } from "@/components/decor-reveal";
import { Reveal } from "@/components/motion/reveal";

export function About() {
  return (
    <section
      id="a-propos"
      className="border-line bg-paper-2 relative min-h-[50svh] overflow-hidden border-b"
    >
      {/* Décor géométrique — se trace quand la section entre dans le viewport */}
      <DecorReveal>
        <Bracket corner="br" className="right-4 bottom-8 hidden lg:block" size={72} draw />
        <Ring
          size={170}
          className="bottom-8 -left-20 hidden opacity-70 lg:block"
          draw
          delay={150}
        />
        <ThinLineY className="right-1/4 bottom-0 hidden h-14 lg:block" draw delay={300} />
        <Crosshair className="bottom-28 left-10 hidden lg:block" draw delay={450} />
      </DecorReveal>

      {/* Pas de padding haut sur le conteneur : il est reporté sur l'eyebrow et
          le texte, pour que la photo puisse toucher le bord haut de la section. */}
      <div className="container-x relative grid items-start gap-x-10 gap-y-8 pb-14 md:grid-cols-[auto_auto_1fr] md:gap-x-12 md:pb-16">
        {/* Eyebrow — haut à gauche */}
        <p className="eyebrow pt-14 md:pt-16">À propos</p>

        {/* Photo — synchronisée avec le premier trait du décor (delay 0) */}
        <Reveal className="bg-paper relative mx-auto h-[34vh] w-full max-w-md overflow-hidden md:mx-0 md:h-[46svh] md:w-[24rem]">
          <Image
            src="/jordan.jpg"
            alt="Jordan, développeur web freelance"
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
          />
        </Reveal>

        {/* Texte — délai 150ms, aligné sur le Ring du décor */}
        <Reveal delay={0.15} className="pt-0 md:pt-16">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)]">
            Bonjour, moi c&apos;est <span className="text-terracotta">Jordan</span>.
          </h2>

          <div className="text-ink-soft mt-6 space-y-4">
            <p>
              Avant de devenir développeur, j&apos;ai passé plus de dix ans dans le commerce, de
              vendeur à responsable de magasin. Cette expérience me permet aujourd&apos;hui de
              comprendre les réalités des entreprises, qu&apos;elles travaillent en B2B ou en B2C.
              Je sais qu&apos;un site web doit avant tout être un outil qui apporte des clients et
              facilite le quotidien.
            </p>
            <p>
              Développeur full stack depuis 2023 et freelance depuis 2025, je conçois des sites
              modernes et pensés pour répondre à vos objectifs. Avec moi, pas d&apos;intermédiaire :
              vous échangez directement avec la personne qui réalise votre projet.
            </p>
            <p>
              Ce qui compte le plus pour moi, c&apos;est une relation basée sur l&apos;écoute, la
              transparence et une communication simple. Je prends le temps de comprendre vos besoins
              pour créer une solution qui vous ressemble et vous accompagne sur le long terme.
            </p>
          </div>

          {/* Signature */}
          <p className="font-signature text-ink mt-7 text-4xl leading-none">Jordan</p>
        </Reveal>
      </div>
    </section>
  );
}
