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
          <Arc
            size={110}
            className="left-10 top-1/2 -translate-y-1/2 text-terracotta/40"
            draw
          />
        </SectionLink>

        <About />

        <SectionLink>
          <Square
            size={56}
            rotate={14}
            className="right-16 top-1/2 -translate-y-1/2 text-terracotta/40"
            animate="float"
            draw
          />
        </SectionLink>

        <PourQui />

        <SectionLink>
          <Ring
            size={64}
            className="left-1/3 top-1/2 -translate-y-1/2 text-line-strong animate-drift"
            draw
          />
        </SectionLink>

        <Realisations />

        <SectionLink>
          <Square
            size={50}
            rotate={-16}
            className="left-14 top-1/2 -translate-y-1/2 text-terracotta/40"
            animate="float-slow"
            draw
          />
        </SectionLink>

        <Engagements />

        <SectionLink>
          <Arc
            size={90}
            className="right-1/4 top-1/2 -translate-y-1/2 text-terracotta/45"
            draw
          />
        </SectionLink>

        <Pricing />

        <SectionLink>
          <Crosshair
            size={20}
            className="left-1/2 top-1/2 -translate-y-1/2 text-terracotta/50"
            draw
          />
        </SectionLink>

        <Contact />
      </main>
      <Footer />
    </>
  );
}