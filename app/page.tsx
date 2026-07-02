import Nav from "@/components/site/nav";
import Hero from "@/components/site/hero";
import HowItWorks from "@/components/site/how-it-works";
import Features from "@/components/site/features";
import EsignSpotlight from "@/components/site/esign-spotlight";
import DriveTrust from "@/components/site/drive-trust";
import Faq from "@/components/site/faq";
import CtaBand from "@/components/site/cta-band";
import Footer from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Features />
        <EsignSpotlight />
        <DriveTrust />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
