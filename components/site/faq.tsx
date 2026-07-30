import Link from "next/link";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import JsonLd from "@/components/json-ld";
import { faqPageJsonLd } from "@/lib/structured-data";

/**
 * `q`/`a` are plain strings because they feed FAQPage JSON-LD. `more` is the
 * guide that answers the question in full — rendered under the answer, and
 * ignored by the structured data.
 */
const faqs: { q: string; a: string; more?: { href: string; label: string } }[] = [
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
      <div className="mt-10 space-y-3 sm:mt-12">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <details className="faq-item group rounded-2xl border border-line bg-surface px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-ink">
                {f.q}
                <span
                  className="faq-icon flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-medium text-accent-deep"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-ink-soft">{f.a}</p>
              {f.more && (
                <Link
                  href={f.more.href}
                  className="mt-3 inline-block text-sm font-medium text-accent-deep transition-colors hover:text-accent"
                >
                  {f.more.label} →
                </Link>
              )}
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
