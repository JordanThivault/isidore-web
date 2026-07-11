import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { GoogleReviews } from "@/components/google-reviews";
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
        <GoogleReviews />
        <About />
        <Realisations />
        <PourQui />
        <Pricing />
        <Engagements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}