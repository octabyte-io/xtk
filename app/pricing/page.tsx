import type { Metadata } from "next";
import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import Pricing from "@/components/site/pricing";
import Faq from "@/components/site/faq";
import CtaBand from "@/components/site/cta-band";
import Breadcrumbs from "@/components/site/breadcrumbs";
import JsonLd from "@/components/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { pricing } from "@/lib/legal";
import { softwareApplicationJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: `XTK pricing — one plan per practice, ${pricing.trialDays}-day free trial`,
  absoluteTitle: true,
  description: `XTK pricing: ${pricing.amount} ${pricing.currency} a ${pricing.interval} per practice, with every feature and your whole team included. Start with a ${pricing.trialDays}-day free trial, no credit card.`,
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd()} />
      <Nav active="/pricing" />
      <main className="flex-1">
        {/* The page's own h1 — the sections below only go down to h2. */}
        <header className="hero-wash">
          <div className="mx-auto w-full max-w-6xl px-5 pb-10 pt-14 sm:px-8 sm:pt-18">
            <div className="hero-rise flex max-w-2xl flex-col gap-4">
              <Breadcrumbs
                items={[
                  { name: "Home", path: "/" },
                  { name: "Pricing", path: "/pricing" },
                ]}
              />
              <span className="inline-flex w-fit items-center rounded-full bg-accent-soft px-3.5 py-1 text-sm font-medium text-accent-deep">
                Pricing
              </span>
              <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.15]">
                One plan for your whole practice
              </h1>
              <p className="text-lg leading-relaxed text-ink-soft">
                XTK is {pricing.amount} {pricing.currency} per {pricing.interval}{" "}
                for the whole practice — every feature, every team member, no
                per-seat maths. Start with a {pricing.trialDays}-day free trial and
                only pay once it has earned its keep.
              </p>
            </div>
          </div>
        </header>
        <Pricing showHeading={false} />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
