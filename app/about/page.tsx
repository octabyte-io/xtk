import type { Metadata } from "next";
import LegalLayout from "@/components/site/legal/legal-layout";
import { A, H2, LI, P, Strong, UL } from "@/components/site/legal/prose";
import { company } from "@/lib/legal";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About — XTK",
  description:
    "What OctaByte XTK is, who makes it, and how it works with Xero Practice Manager.",
};

export default function About() {
  return (
    <LegalLayout
      eyebrow="Company"
      title="About XTK"
      lede="XTK gives Xero Practice Manager its missing half — documents, e-signatures, client portals and templates, right where you already work."
      activeNav="/about"
    >
      <H2 id="what">What XTK is</H2>
      <P>
        {company.product} is a browser extension and companion web portal that
        layers document management on top of Xero Practice Manager. It opens in a
        panel inside Practice Manager, so your team works with client documents,
        signatures and requests without leaving XPM. XTK is an independent product
        and is not affiliated with or endorsed by Xero Limited.
      </P>

      <H2 id="does">What it does</H2>
      <UL>
        <LI>
          <Strong>Documents</Strong> — every client’s files, stored in your own
          Google Drive or Microsoft OneDrive / SharePoint.
        </LI>
        <LI>
          <Strong>E-signatures</Strong> — send documents for signing, including
          no-account signing for clients.
        </LI>
        <LI>
          <Strong>Client portal</Strong> — a secure place for clients to receive,
          upload and sign documents.
        </LI>
        <LI>
          <Strong>Templates</Strong> — generate documents from templates using your
          live client data.
        </LI>
      </UL>

      <H2 id="data">How it handles your data</H2>
      <P>
        Your documents live in the storage provider you connect — they stay under
        your control. XTK is not a Xero application and holds no Xero credentials:
        it reads client details from Xero’s own APIs inside the tab you have already
        authenticated, so nothing on our servers can reach your Xero account. The
        details you act on — the client named on a signature request, say — do reach
        our backend, and our <A href="/legal/privacy">Privacy Policy</A> sets out
        exactly which. See also the{" "}
        <A href="/legal/subprocessors">Sub-processors</A> we rely on.
      </P>

      <H2 id="works">Where it works</H2>
      <P>
        XTK runs in Chrome and Firefox, inside Practice Manager at
        practicemanager.xero.com, with a companion portal at{" "}
        <A href={company.portal}>{company.portal}</A>.
      </P>

      <H2 id="contact">Get in touch</H2>
      <P>
        Questions, feedback or partnership enquiries:{" "}
        <A href={`mailto:${company.supportEmail}`}>{company.supportEmail}</A>. See
        also <A href="/support">Support</A>.
      </P>
      <P>
        {company.product} is operated by <Strong>{company.legalName}</Strong>
        {company.registeredAddress ? `, ${company.registeredAddress}` : ""}.
      </P>
    </LegalLayout>
  );
}
