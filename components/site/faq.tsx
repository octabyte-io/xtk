import SectionHeading from "./section-heading";
import FaqAccordion, { type FaqItem } from "./faq-accordion";
import JsonLd from "@/components/json-ld";
import { faqPageJsonLd } from "@/lib/structured-data";

const faqs: FaqItem[] = [
  {
    q: "Where do my files live?",
    a: "In your practice's own Google Drive or OneDrive, in one folder per client. XTK operates on them in place: operations that need a document engine — downloads, zips, PDF merges, generating from a template — stream the bytes through our backend in flight, but nothing is written to disk or kept in our database, and portal shares are markers pointing at your files, not duplicates.",
    more: { href: "/guides/how-xtk-handles-your-data", label: "How XTK handles your data" },
  },
  {
    q: "Do my clients need an account?",
    a: "Not for signing or uploading. Signature requests and document requests work through secure one-off links. The client portal is the one surface with a login, for clients you invite to an ongoing document exchange.",
    more: { href: "/guides/set-up-client-portal", label: "Set up the client portal" },
  },
  {
    q: "Which browsers does XTK support?",
    a: "Chrome and Firefox. Install the extension, open Xero Practice Manager, and the XTK launcher appears in XPM's navigation.",
    more: { href: "/guides/getting-started-with-xtk", label: "Getting started with XTK" },
  },
  {
    q: "How does XTK read my client data?",
    a: "Live from the XPM tab you already have open, using your own authenticated Xero session. XTK doesn't hold a copy of your client database on its servers.",
    more: { href: "/legal/privacy", label: "Privacy Policy" },
  },
  {
    q: "Does the whole practice share one setup?",
    a: "Yes. Your practice connects one Drive and one billing subscription; every team member you invite works against the same client folders, templates and portals.",
    more: { href: "/guides/invite-your-team", label: "Invite your team" },
  },
];

export default function Faq() {
  return (
    <section id="faq" className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <JsonLd data={faqPageJsonLd(faqs)} />
      <SectionHeading
        eyebrow="FAQ"
        title="Questions practices ask us"
      />
      <div className="mt-10 sm:mt-12">
        <FaqAccordion items={faqs} reveal />
      </div>
    </section>
  );
}
