import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Realisations } from "@/components/realisations";
import { PourQui } from "@/components/pour-qui";
import { Pricing } from "@/components/pricing";
import { Engagements } from "@/components/engagements";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { SectionLink } from "@/components/section-link";
import { Square, Arc, Ring, Crosshair } from "@/components/decor";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <SectionLink>
          <Arc size={110} className="text-terracotta/40 top-1/2 left-10 -translate-y-1/2" draw />
        </SectionLink>

        <About />

        <SectionLink>
          <Square
            size={56}
            rotate={14}
            className="text-terracotta/40 top-1/2 right-16 -translate-y-1/2"
            animate="float"
            draw
          />
        </SectionLink>

        <PourQui />

        <SectionLink>
          <Ring
            size={64}
            className="text-line-strong animate-drift top-1/2 left-1/3 -translate-y-1/2"
            draw
          />
        </SectionLink>

        <Realisations />

        <SectionLink>
          <Square
            size={50}
            rotate={-16}
            className="text-terracotta/40 top-1/2 left-14 -translate-y-1/2"
            animate="float-slow"
            draw
          />
        </SectionLink>

        <Engagements />

        <SectionLink>
          <Arc size={90} className="text-terracotta/45 top-1/2 right-1/4 -translate-y-1/2" draw />
        </SectionLink>

        <Pricing />

        <SectionLink>
          <Crosshair
            size={20}
            className="text-terracotta/50 top-1/2 left-1/2 -translate-y-1/2"
            draw
          />
        </SectionLink>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
