import Image from "next/image";
import { Bracket, Ring, ThinLineY, Crosshair } from "@/components/decor";

export function About() {
  return (
    <section
      id="a-propos"
      className="relative min-h-[50svh] overflow-hidden border-b border-line bg-paper-2"
    >
      {/* Décor géométrique */}
      <Bracket corner="br" className="bottom-8 right-4 hidden lg:block" size={72} />
      <Ring size={170} className="-left-20 bottom-8 hidden opacity-70 lg:block" />
      <ThinLineY className="right-1/4 bottom-0 h-14 hidden lg:block" />
      <Crosshair className="left-10 bottom-28 hidden lg:block" />

      {/* Pas de padding haut sur le conteneur : il est reporté sur l'eyebrow et
          le texte, pour que la photo puisse toucher le bord haut de la section. */}
      <div className="container-x relative grid items-start gap-x-10 gap-y-8 pb-14 md:grid-cols-[auto_auto_1fr] md:gap-x-12 md:pb-16">
        {/* Eyebrow — haut à gauche */}
        <p className="eyebrow pt-14 md:pt-16">À propos</p>

        {/* Photo — au centre, collée au bord haut, sans arrondi */}
        <div className="relative mx-auto h-[34vh] w-full max-w-md overflow-hidden bg-paper md:mx-0 md:h-[46svh] md:w-[24rem]">
          <Image
            src="/jordan.jpg"
            alt="Jordan, développeur web freelance"
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
          />
        </div>

        {/* Texte — à droite */}
        <div className="pt-0 md:pt-16">
          <h2 className="text-[clamp(2rem,3.5vw,3rem)]">
            Bonjour, moi c&apos;est <span className="text-terracotta">Jordan</span>.
          </h2>

          <div className="mt-6 space-y-4 text-ink-soft">
            <p>
              Avant de devenir développeur, j&apos;ai passé plus de dix ans dans
              le commerce, de vendeur à responsable de magasin. Cette expérience
              me permet aujourd&apos;hui de comprendre les réalités des
              entreprises, qu&apos;elles travaillent en B2B ou en B2C. Je sais
              qu&apos;un site web doit avant tout être un outil qui apporte des
              clients et facilite le quotidien.
            </p>
            <p>
              Développeur full stack depuis 2023 et freelance depuis 2025, je
              conçois des sites modernes et pensés pour répondre à vos objectifs.
              Avec moi, pas d&apos;intermédiaire : vous échangez directement avec
              la personne qui réalise votre projet.
            </p>
            <p>
              Ce qui compte le plus pour moi, c&apos;est une relation basée sur
              l&apos;écoute, la transparence et une communication simple. Je
              prends le temps de comprendre vos besoins pour créer une solution
              qui vous ressemble et vous accompagne sur le long terme.
            </p>
          </div>

          {/* Signature */}
          <p className="mt-7 font-signature text-4xl leading-none text-ink">
            Jordan
          </p>
        </div>
      </div>
    </section>
  );
}