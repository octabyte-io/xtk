import type { Metadata } from "next";
import LegalLayout from "@/components/site/legal/legal-layout";
import { A, Callout, H2, LI, OL, P, Strong, UL } from "@/components/site/legal/prose";
import { LAST_UPDATED, company } from "@/lib/legal";

export const metadata: Metadata = {
  alternates: { canonical: "/legal/data-deletion" },
  title: "Your Data Rights & Deletion — XTK",
  description:
    "How to access, export or delete your data from OctaByte XTK, and what happens when you do.",
};

export default function DataDeletion() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Your data rights & deletion"
      lede="How to access, export or delete your data — and exactly what happens when you do."
      updated={LAST_UPDATED}
    >
      <P>
        You can request access to, correction of, export of, or deletion of your
        personal data held by {company.product}. This page explains how, and how it
        differs depending on whether you are a practice or one of a practice’s
        clients.
      </P>

      <Callout title="Who to ask">
        If you are a <Strong>client of an accounting practice</Strong> that uses
        XTK, that practice controls your data. Please contact them first — we hold
        their data as a processor and will assist them in responding to you.
      </Callout>

      <H2 id="in-product">Delete data yourself</H2>
      <UL>
        <LI>
          <Strong>Documents</Strong> live in your connected Google Drive / OneDrive.
          Deleting them there removes them from your storage provider.
        </LI>
        <LI>
          <Strong>Requests, signatures and portal data</Strong> can be removed from
          within the portal and extension.
        </LI>
        <LI>
          <Strong>Team members</Strong> can be removed by your Admin.
        </LI>
      </UL>

      <H2 id="close-account">Close your account</H2>
      <P>To delete your Practice and the account data we hold, either:</P>
      <OL>
        <LI>Cancel your subscription and request closure from account settings; or</LI>
        <LI>
          Email <A href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</A>{" "}
          from your account email with the subject “Delete my account”.
        </LI>
      </OL>

      <H2 id="what-happens">What we delete</H2>
      <UL>
        <LI>Your account, profile and authentication data.</LI>
        <LI>Encrypted OAuth tokens for connected storage and mail providers.</LI>
        <LI>Practice records, requests and signature metadata we hold on our backend.</LI>
      </UL>
      <P>
        Documents already stored in your own Drive/OneDrive stay under your control
        there — closing your XTK account does not delete files in your storage
        provider.
      </P>

      <H2 id="retention">What we may keep</H2>
      <P>
        We may retain limited records where required by law (for example, billing
        and tax records) or to resolve disputes and enforce agreements. Backups are
        purged on our normal rotation. Anything retained is protected and access is
        restricted.
      </P>

      <H2 id="timing">Timing</H2>
      <P>
        We aim to action verified deletion requests within 30 days. We may need to
        verify your identity first to protect your data.
      </P>

      <H2 id="other-rights">Other rights</H2>
      <P>
        Depending on your location you may also have rights to access, correct,
        port, restrict or object to processing. See the{" "}
        <A href="/legal/privacy">Privacy Policy</A> for the full description, and
        contact <A href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</A>{" "}
        to exercise any of them. You also have the right to complain to your local
        data protection authority.
      </P>
    </LegalLayout>
  );
}
