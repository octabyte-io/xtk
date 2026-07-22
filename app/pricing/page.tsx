import type { Metadata } from "next";
import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import Pricing from "@/components/site/pricing";
import Faq from "@/components/site/faq";
import CtaBand from "@/components/site/cta-band";

export const metadata: Metadata = {
  title: "Pricing — XTK",
  description:
    "One simple plan with everything included, and a 30-day free trial for your whole practice. No per-seat pricing, no feature tiers.",
};

export default function PricingPage() {
  return (
    <>
      <Nav active="/#pricing" />
      <main className="flex-1">
        <Pricing />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
