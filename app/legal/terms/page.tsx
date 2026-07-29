import type { Metadata } from "next";
import LegalLayout from "@/components/site/legal/legal-layout";
import { A, H2, LI, P, Strong, UL } from "@/components/site/legal/prose";
import { LEGAL_UPDATED, company, pricing } from "@/lib/legal";

export const metadata: Metadata = {
  alternates: { canonical: "/legal/terms" },
  title: "Terms of Service — XTK",
  description:
    "The terms governing use of the OctaByte XTK browser extension and web portal.",
};

export default function TermsOfService() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      lede="The agreement between your practice and XTK for using the extension and portal."
      updated={LEGAL_UPDATED.terms}
    >
      <P>
        These Terms of Service (“Terms”) are a contract between{" "}
        <Strong>{company.legalName}</Strong> (“we”, “us”), operator of{" "}
        {company.product} (“XTK”), and the practice or individual that registers
        for or uses XTK (“you”). By installing the extension, creating an account
        or using the portal, you agree to these Terms.
      </P>

      <H2 id="service">1. The service</H2>
      <P>
        XTK is a browser extension and companion web portal that adds document
        management, e-signatures, client portals and template automation to Xero
        Practice Manager. XTK is independent and is not affiliated with or endorsed
        by Xero Limited. Your use of Xero, Google and Microsoft services remains
        subject to those providers’ own terms.
      </P>

      <H2 id="accounts">2. Accounts, Practices &amp; roles</H2>
      <UL>
        <LI>
          Registering creates a “Practice” — the tenant that owns the subscription
          and its users. The first registrant is its Admin.
        </LI>
        <LI>
          The Admin may invite Members. You are responsible for activity under your
          accounts and for keeping credentials secure.
        </LI>
        <LI>You must provide accurate information and be authorised to bind your practice.</LI>
      </UL>

      <H2 id="trial-billing">3. Trials, fees &amp; billing</H2>
      <UL>
        <LI>
          New Practices get a <Strong>{pricing.trialDays}-day free trial</Strong>{" "}
          with full functionality and no card required.
        </LI>
        <LI>
          After the trial, continued use requires a subscription at{" "}
          {pricing.amount} {pricing.currency} per {pricing.interval} for the whole
          Practice, billed through our payments processor. Prices may change on
          notice.
        </LI>
        <LI>
          Subscriptions renew automatically until cancelled. You can cancel at any
          time; see the <A href="/legal/refunds">Refund &amp; Cancellation Policy</A>.
        </LI>
        <LI>
          If payment fails, access may become read-only or be suspended after a
          grace period.
        </LI>
      </UL>

      <H2 id="acceptable-use">4. Acceptable use</H2>
      <P>You agree not to:</P>
      <UL>
        <LI>Use XTK unlawfully or to store or send unlawful content.</LI>
        <LI>Attempt to breach security, reverse-engineer, or disrupt the service.</LI>
        <LI>Resell or provide XTK to third parties except as permitted.</LI>
        <LI>Circumvent usage limits or access data you are not authorised to access.</LI>
      </UL>

      <H2 id="your-data">5. Your data &amp; content</H2>
      <P>
        You retain all rights to the documents and data you and your clients put
        into XTK. Your documents live in the storage provider you connect and
        remain under your control there. Our handling of personal data is described
        in the <A href="/legal/privacy">Privacy Policy</A>; where we process data on
        your behalf, the <A href="/legal/dpa">Data Processing Addendum</A> applies.
      </P>

      <H2 id="ip">6. Intellectual property</H2>
      <P>
        XTK, including the extension, portal, and all related software and
        branding, is owned by {company.legalName} and its licensors. We grant you a
        limited, non-exclusive, non-transferable right to use XTK during your
        subscription. You may not copy, modify or create derivative works except as
        allowed by law.
      </P>

      <H2 id="third-party">7. Third-party services</H2>
      <P>
        XTK integrates with Xero, Google and Microsoft. We are not responsible for
        those services, their availability, or changes they make. You are
        responsible for maintaining your own accounts and permissions with them.
      </P>

      <H2 id="warranty">8. Warranties &amp; disclaimers</H2>
      <P>
        XTK is provided “as is” and “as available”. To the fullest extent permitted
        by law, we disclaim all implied warranties, including merchantability,
        fitness for a particular purpose and non-infringement. XTK is a tool that
        supports your practice; it does not provide accounting, tax or legal advice,
        and you remain responsible for your professional work.
      </P>

      <H2 id="liability">9. Limitation of liability</H2>
      <P>
        To the fullest extent permitted by law, we are not liable for indirect,
        incidental, special or consequential damages, or for lost profits or data.
        Our total liability arising out of or relating to XTK is limited to the
        amounts you paid us for the service in the 12 months before the event
        giving rise to the claim. Nothing limits liability that cannot be excluded
        by law.
      </P>

      <H2 id="termination">10. Suspension &amp; termination</H2>
      <UL>
        <LI>You may stop using XTK and cancel at any time.</LI>
        <LI>
          We may suspend or terminate access for breach of these Terms, non-payment,
          or to comply with law.
        </LI>
        <LI>
          On termination, your right to use XTK ends. Data handling on termination
          follows the <A href="/legal/data-deletion">data rights</A> and DPA.
        </LI>
      </UL>

      <H2 id="changes">11. Changes to these Terms</H2>
      <P>
        We may update these Terms. Material changes will be notified in-product or
        by email, and the “Last updated” date will change. Continued use after
        changes take effect means you accept them.
      </P>

      <H2 id="contact">12. Contact</H2>
      <P>
        Questions about these Terms: <A href={`mailto:${company.legalEmail}`}>{company.legalEmail}</A>.
      </P>
      <P>
        {company.shortName} is operated by {company.legalName}
        {company.registeredAddress ? `, ${company.registeredAddress}` : ""}
        {company.companyNumber ? ` · Company no. ${company.companyNumber}` : ""}.
      </P>
    </LegalLayout>
  );
}
