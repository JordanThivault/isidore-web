import Image from "next/image";

export function About() {
  return (
    <section
      id="a-propos"
      className="flex min-h-[60svh] items-center border-b border-line bg-paper"
    >
      <div className="container-x grid gap-10 py-12 md:grid-cols-[auto_1fr] md:gap-14 md:py-16">
        {/* Photo */}
        <div className="mx-auto md:mx-0">
          <div className="relative h-40 w-40 overflow-hidden rounded-card border border-line bg-paper-2 md:h-52 md:w-52">
            {/* Remplace par ta photo : /public/jordan.jpg */}
            <Image
              src="/jordan.jpg"
              alt="Jordan, développeur web freelance"
              fill
              sizes="208px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center text-xs text-muted">
              Photo à ajouter
            </div>
          </div>
        </div>

        {/* Texte */}
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">À propos</p>
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
    </section>
  );
}