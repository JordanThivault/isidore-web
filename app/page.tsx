import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Realisations } from "@/components/realisations";
import { PourQui } from "@/components/pour-qui";
import { Pricing } from "@/components/pricing";
import { Engagements } from "@/components/engagements";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <PourQui />
        <Realisations />
        <Engagements />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}