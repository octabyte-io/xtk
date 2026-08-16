import type { Metadata } from "next";
import LegalLayout from "@/components/site/legal/legal-layout";
import { A, H2, LI, P, Strong, UL } from "@/components/site/legal/prose";
import { company } from "@/lib/legal";
import { pageMetadata } from "@/lib/metadata";
import { BOOK_A_CALL_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Support",
  description:
    "Get help with OctaByte XTK — contact support, report a problem, or read the FAQ.",
  path: "/support",
});

export default function Support() {
  return (
    <LegalLayout
      path="/support"
      eyebrow="Help"
      title="Support"
      lede="We’re here to help you get the most out of XTK inside Xero Practice Manager."
      activeNav="/support"
    >
      <H2 id="contact">Contact us</H2>
      <P>
        Email <A href={`mailto:${company.supportEmail}`}>{company.supportEmail}</A>{" "}
        and we’ll get back to you. Please include your Practice name and, if it’s
        about a specific action, what you were doing when the problem happened.
      </P>

      <H2 id="book-a-call">Book a call</H2>
      <P>
        If it’s easier to talk it through,{" "}
        <A href={BOOK_A_CALL_URL}>book twenty minutes</A>. It suits the questions
        that are awkward to write down — whether XTK fits how your practice
        already works, or whether it’s the wrong tool for you. We’ll tell you if
        it is.
      </P>

      <H2 id="in-app">From inside XTK</H2>
      <P>
        The fastest way to reach us is the <Strong>Support</Strong> tab in the XTK
        panel inside Xero Practice Manager — you can describe the issue and attach a
        screenshot, and it reaches us with the context we need already attached.
      </P>

      <H2 id="common">Common topics</H2>
      <UL>
        <LI>
          <Strong>Getting started</Strong> — installing the extension, connecting
          your Google Drive or OneDrive, and opening your first client. See the{" "}
          <A href="/guides">user guides</A>.
        </LI>
        <LI>
          <Strong>Documents, e-signatures &amp; the client portal</Strong> —
          step-by-step walkthroughs of every feature live in the{" "}
          <A href="/guides">guides section</A>.
        </LI>
        <LI>
          <Strong>Billing &amp; trials</Strong> — how the {""}
          30-day trial and subscription work: see{" "}
          <A href="/pricing">Pricing</A> and the{" "}
          <A href="/legal/refunds">Refund &amp; Cancellation Policy</A>.
        </LI>
        <LI>
          <Strong>Privacy &amp; data</Strong> — how we handle your data and how to
          delete it: see the <A href="/legal/privacy">Privacy Policy</A> and{" "}
          <A href="/legal/data-deletion">Your data rights</A>.
        </LI>
      </UL>

      <H2 id="status">Something broken?</H2>
      <P>
        If XTK isn’t loading inside Practice Manager, try reloading the tab and
        confirming the extension is enabled. If it persists, email{" "}
        <A href={`mailto:${company.supportEmail}`}>{company.supportEmail}</A> with
        your browser and a description, and we’ll investigate quickly.
      </P>
    </LegalLayout>
  );
}
