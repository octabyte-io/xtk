import SectionHeading from "./section-heading";
import FeatureCard from "./feature-card";
import DocumentsMock from "./mocks/documents-mock";
import EsignMock from "./mocks/esign-mock";
import PortalMock from "./mocks/portal-mock";
import RequestsMock from "./mocks/requests-mock";
import EmailMock from "./mocks/email-mock";
import TemplatesMock from "./mocks/templates-mock";

export default function Features() {
  return (
    <section id="features" className="border-y border-line bg-surface/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Features"
          title="One panel, the whole client workflow"
          lede="Everything below happens against the client you have open in XPM — files, signatures, portals and templates stay in context."
        />
        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3">
          <FeatureCard
            className="md:col-span-2"
            title="Document management, in your Drive"
            body="Browse, upload, rename, move and favourite client files. Merge PDFs and convert DOCX to PDF without leaving the panel — every file lives in the client's own folder in your Google Drive or OneDrive."
            mock={<DocumentsMock />}
          />
          <FeatureCard
            delay={120}
            title="E-signatures"
            body="Place signature, date and text fields on any client PDF, set the signing order, and send. Recipients sign from a secure link — no account needed."
            mock={<EsignMock />}
          />
          <FeatureCard
            title="Client portal"
            body="Invite clients to a secure portal and share files or folders as markers — the originals stay exactly where they are in your Drive."
            mock={<PortalMock />}
          />
          <FeatureCard
            delay={120}
            title="Document requests"
            body="Ask for records with one upload link and watch each item flip from outstanding to provided as files stream into the client's folder."
            mock={<RequestsMock />}
          />
          <FeatureCard
            delay={240}
            title="Email, from your inbox"
            body="Send from a shared practice Gmail or Outlook — or your own — with every message wrapped in your practice's branded shell."
            mock={<EmailMock />}
          />
          <FeatureCard
            className="md:col-span-3"
            title="Template automation"
            body="Drop placeholders into .docx documents, emails and folder structures, and XTK fills them from the client's live XPM details — names, addresses, contacts — the moment you generate."
            mock={<TemplatesMock />}
          />
        </div>
      </div>
    </section>
  );
}
