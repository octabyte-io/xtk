import type { Metadata } from "next";
import LegalLayout from "@/components/site/legal/legal-layout";
import { A, Callout, H2, LI, P, Strong, UL } from "@/components/site/legal/prose";
import { LEGAL_UPDATED, company } from "@/lib/legal";

export const metadata: Metadata = {
  alternates: { canonical: "/legal/dpa" },
  title: "Data Processing Addendum — XTK",
  description:
    "The DPA governing XTK's processing of personal data on behalf of practices under GDPR / UK GDPR.",
};

export default function DPA() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Data Processing Addendum"
      lede="How XTK processes personal data on behalf of your practice, and the commitments we make as your processor."
      updated={LEGAL_UPDATED.dpa}
    >
      <Callout title="When this applies">
        This DPA forms part of the <A href="/legal/terms">Terms of Service</A> and
        applies where {company.product} processes personal data on your behalf. For
        that data, your practice is the <Strong>controller</Strong> and{" "}
        {company.legalName} is the <Strong>processor</Strong>. For your own account
        and billing data, our role is set out in the{" "}
        <A href="/legal/privacy">Privacy Policy</A>.
      </Callout>

      <H2 id="definitions">1. Definitions</H2>
      <P>
        “Controller”, “Processor”, “Data Subject”, “Personal Data”, “Processing”
        and “Sub-processor” have the meanings given in the GDPR / UK GDPR.
        “Applicable Data Protection Law” means the data protection laws that apply
        to your use of XTK.
      </P>

      <H2 id="scope">2. Scope &amp; roles</H2>
      <UL>
        <LI>You (the Practice) are the controller; we act only as your processor.</LI>
        <LI>
          We process personal data only to provide XTK and on your documented
          instructions, including as set out in the Terms and this DPA.
        </LI>
        <LI>
          We will inform you if, in our opinion, an instruction infringes Applicable
          Data Protection Law.
        </LI>
      </UL>

      <H2 id="details">3. Details of processing</H2>
      <UL>
        <LI>
          <Strong>Subject matter:</Strong> provision of document management,
          e-signatures, client portal and template features.
        </LI>
        <LI>
          <Strong>Duration:</Strong> for the term of your subscription plus any
          retention period in the Terms.
        </LI>
        <LI>
          <Strong>Nature &amp; purpose:</Strong> storing and moving documents,
          sending mail you initiate, and managing signature and request workflows.
        </LI>
        <LI>
          <Strong>Types of personal data:</Strong> names, email addresses, contact
          details, document contents, and e-signature records of your clients and
          signers.
        </LI>
        <LI>
          <Strong>Categories of data subjects:</Strong> your staff, clients and
          the signers you invite.
        </LI>
      </UL>

      <H2 id="obligations">4. Our obligations</H2>
      <UL>
        <LI>Process personal data only on your documented instructions.</LI>
        <LI>Ensure persons authorised to process it are bound by confidentiality.</LI>
        <LI>
          Implement appropriate technical and organisational security measures
          (encryption in transit and at rest, encrypted OAuth tokens, restricted
          production access).
        </LI>
        <LI>
          Assist you, taking into account the nature of processing, with data
          subject requests and with your obligations on security, breach
          notification and impact assessments.
        </LI>
        <LI>
          Notify you without undue delay after becoming aware of a personal data
          breach.
        </LI>
      </UL>

      <H2 id="subprocessors">5. Sub-processors</H2>
      <P>
        You provide general authorisation for us to engage the sub-processors
        listed on our <A href="/legal/subprocessors">Sub-processors</A> page. We
        impose data protection terms on each and remain responsible for their
        performance. We will give notice of intended changes so you can object on
        reasonable data-protection grounds.
      </P>

      <H2 id="transfers">6. International transfers</H2>
      <P>
        Where processing involves transfers outside your jurisdiction, we rely on a
        lawful transfer mechanism such as the Standard Contractual Clauses, which
        are incorporated by reference where applicable.
      </P>

      <H2 id="rights">7. Data subject requests</H2>
      <P>
        XTK provides features that let you access, correct, export and delete data
        within your Practice. Where a data subject contacts us directly, we will
        refer them to you and assist you in responding.
      </P>

      <H2 id="deletion">8. Return &amp; deletion</H2>
      <P>
        On termination, and at your choice, we will delete or return the personal
        data we process on your behalf, and delete existing copies unless law
        requires storage. Documents held in your connected storage provider remain
        under your control there. See <A href="/legal/data-deletion">Your data rights</A>.
      </P>

      <H2 id="audit">9. Audits</H2>
      <P>
        We will make available information reasonably necessary to demonstrate
        compliance with this DPA and allow for and contribute to audits, subject to
        reasonable confidentiality and security safeguards.
      </P>

      <H2 id="contact">10. Contact</H2>
      <P>
        To request a signed copy of this DPA or ask a question, contact{" "}
        <A href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</A>.
      </P>
    </LegalLayout>
  );
}
