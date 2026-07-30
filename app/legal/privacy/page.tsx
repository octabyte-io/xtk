import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import LegalLayout from "@/components/site/legal/legal-layout";
import {
  A,
  Callout,
  H2,
  H3,
  LI,
  P,
  Strong,
  UL,
} from "@/components/site/legal/prose";
import { LEGAL_UPDATED, company } from "@/lib/legal";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How OctaByte XTK collects, uses, shares and protects data across the browser extension, web portal and backend.",
  path: "/legal/privacy",
});

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      path="/legal/privacy"
      eyebrow="Legal"
      title="Privacy Policy"
      lede="How XTK handles personal data across the browser extension, the client portal and our backend."
      updated={LEGAL_UPDATED.privacy}
    >
      <P>
        This policy explains how <Strong>{company.legalName}</Strong> (“we”, “us”,
        the operator of {company.product}) collects, uses and protects personal
        data when you use the XTK browser extension, the XTK web portal at{" "}
        <A href={company.portal}>{company.portal}</A>, and this website. XTK is an
        independent product layered on top of Xero Practice Manager (“XPM”) and is
        not affiliated with or endorsed by Xero Limited.
      </P>

      <H2 id="roles">Our two roles</H2>
      <P>
        XTK processes data in two capacities, and it matters which one applies:
      </P>
      <UL>
        <LI>
          <Strong>As a controller</Strong> — for the accounts of the accountants
          and their staff who sign up to XTK (a “Practice”): registration details,
          billing data, and product usage.
        </LI>
        <LI>
          <Strong>As a processor</Strong> — for the client and document data a
          Practice manages through XTK on behalf of its own clients. The Practice
          is the controller of that data; we process it under their instructions
          and our{" "}
          <A href="/legal/dpa">Data Processing Addendum</A>.
        </LI>
      </UL>

      <H2 id="data-we-collect">Data we collect</H2>
      <H3>Account &amp; billing data</H3>
      <UL>
        <LI>Name and email address of each user in a Practice.</LI>
        <LI>Authentication data (hashed passwords, session tokens).</LI>
        <LI>
          Subscription and billing identifiers held by our payments processor
          (see below). We do not store full card numbers.
        </LI>
      </UL>

      <H3>Connected-service data</H3>
      <P>
        When a Practice connects a storage or mail provider, XTK stores encrypted
        OAuth tokens so it can act on the Practice’s behalf:
      </P>
      <UL>
        <LI>
          <Strong>Google Drive / Gmail</Strong> — to store the Practice’s
          documents in its own Drive and to send mail from a connected mailbox.
        </LI>
        <LI>
          <Strong>Microsoft OneDrive / SharePoint / Outlook</Strong> — the same,
          for Practices that connect Microsoft instead.
        </LI>
      </UL>
      <P>
        OAuth tokens are encrypted at rest. We are specific about what each grant
        actually covers:
      </P>
      <UL>
        <LI>
          <Strong>Storage is a full drive scope.</Strong> Google’s consent screen
          describes it as “see, edit, create, and delete all your Google Drive
          files”, and Microsoft’s equivalent is comparable. We request that scope
          because XTK has to work with the client documents your Practice already
          keeps in its own Drive, which a narrower “files this app created” scope
          cannot do.
        </LI>
        <LI>
          <Strong>Containment is our guarantee, not Google’s restriction.</Strong>{" "}
          Every storage operation is checked on our server before your provider is
          called, so it can only act inside the Main Storage Folder you designate
          and, within it, the folder of the client you have open. That limit is
          enforced by XTK’s own server-side checks — Google and Microsoft do not
          narrow the grant for us.
        </LI>
        <LI>
          <Strong>Mail is send-only.</Strong> Where you connect Gmail or Outlook so
          invites and requests come from your own address, only the send
          permission is granted. XTK cannot read your mailbox.
        </LI>
      </UL>

      <H3>Client &amp; document data</H3>
      <P>
        On behalf of a Practice, XTK handles the documents, e-signature requests
        and document-request submissions that flow between the Practice and its
        clients — including files, signer names and email addresses, and signature
        records. Where a client uses the portal, we process their name, email and
        the documents they exchange. This data belongs to the Practice; we process
        it as described in the Data Processing Addendum.
      </P>
      <Callout title="XTK has no Xero connection of its own">
        XTK is not a Xero OAuth application and holds no Xero credentials. It reads
        client details (names, contacts, addresses) from Xero’s own APIs inside your
        already-authenticated Xero tab, only while you have the relevant client
        open, and Xero’s access token never leaves that page. So there is{" "}
        <Strong>no server-side route from XTK to your Xero data</Strong>, and the
        snapshot the panel works from lives in the tab and is discarded when you
        close or refresh it.
      </Callout>
      <P>
        Some client details do reach our backend, though — the ones you act on — and
        we would rather be precise than absolute:
      </P>
      <UL>
        <LI>
          Sending an e-signature or document request stores that request, including
          the client’s name, the recipient’s name and email address, and your
          subject and message.
        </LI>
        <LI>
          Inviting a portal contact stores their name and email address, and each
          notification stores a summary line naming the client, files and
          recipients involved.
        </LI>
        <LI>
          Generating a document from a template sends the set of filled-in values
          you confirmed in the fill dialog to our backend, because that is where
          the document engine runs. They are used to render your file and are not
          stored.
        </LI>
      </UL>
      <P>
        What our backend never holds is a{" "}
        <Strong>Xero credential or token</Strong>, any{" "}
        <Strong>server-side access to your Xero account</Strong>, or the{" "}
        <Strong>contents of your documents</Strong> — the operations that need a
        document engine (downloads, zips, PDF merges, template generation and
        flattening a signed PDF) stream bytes through our backend in flight, but
        nothing is written to disk or kept in our database. Nothing in Xero beyond
        client details, contacts and custom fields is read at all — not jobs,
        timesheets, invoices or the ledger.
      </P>

      <H3>Diagnostics</H3>
      <P>
        We use an error-monitoring service to capture crashes and performance
        traces across the extension, portal and backend. Where session replay is
        enabled it may record masked interactions to help us reproduce faults;
        sensitive fields are masked and this feature is governed by a remote
        kill-switch. See <A href="/legal/cookies">Cookies &amp; tracking</A> for
        details and controls.
      </P>

      <H2 id="how-we-use">How we use data</H2>
      <UL>
        <LI>To provide, operate and secure the XTK extension, portal and backend.</LI>
        <LI>To store and move your documents through the providers you connect.</LI>
        <LI>To send transactional mail (invites, notifications, support replies).</LI>
        <LI>To process subscriptions and prevent fraud.</LI>
        <LI>To diagnose faults and improve reliability.</LI>
        <LI>To comply with our legal obligations.</LI>
      </UL>

      <H2 id="legal-bases">Legal bases (GDPR / UK GDPR)</H2>
      <P>Where the GDPR or UK GDPR applies, we rely on:</P>
      <UL>
        <LI>
          <Strong>Contract</Strong> — to deliver the service to Practices that
          subscribe.
        </LI>
        <LI>
          <Strong>Legitimate interests</Strong> — to secure, maintain and improve
          the product (balanced against your rights).
        </LI>
        <LI>
          <Strong>Consent</Strong> — where required, e.g. optional diagnostics /
          session replay.
        </LI>
        <LI>
          <Strong>Legal obligation</Strong> — for tax, accounting and compliance
          records.
        </LI>
      </UL>

      <H2 id="google-limited-use">Google API Services — Limited Use</H2>
      <P>
        XTK’s use and transfer of information received from Google APIs adheres to
        the{" "}
        <A href="https://developers.google.com/terms/api-services-user-data-policy">
          Google API Services User Data Policy
        </A>
        , including its Limited Use requirements. Specifically:
      </P>
      <UL>
        <LI>
          We use Google user data only to provide and improve the features you
          enable (Drive storage and Gmail send).
        </LI>
        <LI>
          We do not transfer or sell this data to third parties except as needed
          to provide the service, for security, or to comply with law.
        </LI>
        <LI>
          We do not use Google user data for advertising, and humans do not read
          it except with your consent, for security, to comply with law, or where
          it is aggregated/anonymised.
        </LI>
      </UL>

      <H2 id="sharing">Who we share data with</H2>
      <P>
        We share data with the sub-processors that make XTK work — storage and
        mail providers, our payments processor, error monitoring and email
        delivery, and hosting. The current list, purposes and regions are on our{" "}
        <A href="/legal/subprocessors">Sub-processors</A> page. We do not sell
        personal data.
      </P>

      <H2 id="retention">Retention</H2>
      <P>
        We keep account and billing data for as long as a Practice is active and
        as required for legal and tax purposes afterward. Documents stored in a
        Practice’s connected Drive remain under the Practice’s control in its own
        provider. On account closure we delete or return Practice data in line with
        the Data Processing Addendum and{" "}
        <A href="/legal/data-deletion">Your data rights</A>.
      </P>

      <H2 id="security">Security</H2>
      <UL>
        <LI>Documents are encrypted in transit and at rest.</LI>
        <LI>OAuth tokens are encrypted at rest with per-environment keys.</LI>
        <LI>Access to production data is restricted and logged.</LI>
      </UL>

      <H2 id="transfers">International transfers</H2>
      <P>
        Some sub-processors are located outside your country. Where personal data
        is transferred internationally, we rely on appropriate safeguards such as
        the Standard Contractual Clauses. Regions are listed on the{" "}
        <A href="/legal/subprocessors">Sub-processors</A> page.
      </P>

      <H2 id="your-rights">Your rights</H2>
      <P>
        Depending on where you live, you may have rights to access, correct,
        delete, port or restrict your personal data, and to object to certain
        processing. If XTK holds your data on behalf of a Practice (as a
        processor), please contact that Practice; we will assist them in responding.
        See <A href="/legal/data-deletion">Your data rights &amp; deletion</A> for
        how to make a request.
      </P>

      <H2 id="children">Children</H2>
      <P>
        XTK is a business tool and is not directed to children. We do not knowingly
        collect data from anyone under 16.
      </P>

      <H2 id="changes">Changes to this policy</H2>
      <P>
        We may update this policy from time to time. Material changes will be
        reflected in the “Last updated” date above and, where appropriate, notified
        in-product.
      </P>

      <H2 id="contact">Contact us</H2>
      <P>
        Questions or requests about privacy: <A href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</A>.
      </P>
      <P>
        {company.shortName} is operated by {company.legalName}
        {company.registeredAddress ? `, ${company.registeredAddress}` : ""}
        {company.companyNumber ? ` · Company no. ${company.companyNumber}` : ""}.
      </P>
    </LegalLayout>
  );
}
