import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Realisations } from "@/components/realisations";
import { Pricing } from "@/components/pricing";
import { Engagements } from "@/components/engagements";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
// import { GoogleReviews } from "@/components/google-reviews";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Bandeau avis Google — à activer quand ta fiche aura de vrais avis :
            <GoogleReviews rating={4.9} count={12} href="https://..." /> */}

        <About />
        <Realisations />
        <Pricing />
        <Engagements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
