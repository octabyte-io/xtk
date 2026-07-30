import Nav from "@/components/site/nav";
import Hero from "@/components/site/hero";
import HowItWorks from "@/components/site/how-it-works";
import Features from "@/components/site/features";
import EsignSpotlight from "@/components/site/esign-spotlight";
import DriveTrust from "@/components/site/drive-trust";
import Pricing from "@/components/site/pricing";
import Faq from "@/components/site/faq";
import LearnMore from "@/components/site/learn-more";
import CtaBand from "@/components/site/cta-band";
import Footer from "@/components/site/footer";
import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { softwareApplicationJsonLd } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/metadata";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: SITE_TITLE,
  absoluteTitle: true,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd()} />
      <Nav />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Features />
        <EsignSpotlight />
        <DriveTrust />
        <Pricing />
        <Faq />
        <LearnMore />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
