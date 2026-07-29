import type { Metadata } from "next";
import LegalLayout from "@/components/site/legal/legal-layout";
import { A, H2, LI, P, Strong, UL } from "@/components/site/legal/prose";
import { LEGAL_UPDATED, company } from "@/lib/legal";

export const metadata: Metadata = {
  alternates: { canonical: "/legal/cookies" },
  title: "Cookies & Tracking — XTK",
  description:
    "The cookies, local storage and diagnostics XTK uses across the website, portal and extension.",
};

export default function Cookies() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Cookies & tracking"
      lede="What XTK stores on your device and the diagnostics we collect — and how to control them."
      updated={LEGAL_UPDATED.cookies}
    >
      <P>
        {company.product} keeps the on-device storage and diagnostics to a minimum.
        We do not use advertising cookies or sell data. This notice explains what we
        use and why.
      </P>

      <H2 id="essential">Essential storage</H2>
      <UL>
        <LI>
          <Strong>Authentication &amp; session</Strong> — cookies and browser
          storage that keep you signed in to the portal and extension. Without
          these the service cannot work.
        </LI>
        <LI>
          <Strong>Extension local storage</Strong> — the extension stores
          preferences and cached state locally in your browser to function inside
          Xero Practice Manager.
        </LI>
      </UL>

      <H2 id="diagnostics">Diagnostics &amp; session replay</H2>
      <P>
        We use an error-monitoring service to capture crashes and performance
        traces across the extension, portal and backend. Where enabled, session
        replay records masked interactions to help us reproduce faults.
      </P>
      <UL>
        <LI>Sensitive fields and inputs are masked by default.</LI>
        <LI>
          Session replay in the extension is controlled by a remote kill-switch and
          is off unless the required disclosures and consent are in place.
        </LI>
        <LI>Diagnostics are used only to keep XTK reliable, not for advertising.</LI>
      </UL>

      <H2 id="controls">Your controls</H2>
      <UL>
        <LI>
          Manage or clear cookies and site data through your browser settings.
          Blocking essential cookies will break sign-in.
        </LI>
        <LI>
          To opt out of optional diagnostics, or to ask about the current status of
          session replay, contact{" "}
          <A href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</A>.
        </LI>
      </UL>

      <H2 id="more">More information</H2>
      <P>
        How this fits into our overall data handling is described in the{" "}
        <A href="/legal/privacy">Privacy Policy</A>, and the diagnostics provider is
        listed on the <A href="/legal/subprocessors">Sub-processors</A> page.
      </P>
    </LegalLayout>
  );
}
