import Image from "next/image";

export function About() {
  return (
    <section
      id="a-propos"
      className="flex min-h-[50svh] items-center border-b border-line bg-paper"
    >
      <div className="container-x w-full py-14 md:py-16">
        {/* Eyebrow en haut à gauche, comme les autres sections */}
        <p className="eyebrow mb-8">À propos</p>

        {/* Deux colonnes façon hero : photo à gauche, texte à droite */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          {/* Photo */}
          <div className="relative h-[42vh] w-full overflow-hidden rounded-card border border-line bg-paper-2 md:h-[55svh]">
            {/* Remplace par ta photo : /public/jordan.jpg */}
            <Image
              src="/jordan.jpg"
              alt="Jordan, développeur web freelance"
              fill
              sizes="(max-width: 768px) 100vw, 520px"
              className="object-cover"
            />
          </div>

          {/* Texte */}
          <div>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)]">
              Bonjour, moi c&apos;est Jordan.
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
          </div>
        </div>
      </div>
    </section>
  );
}