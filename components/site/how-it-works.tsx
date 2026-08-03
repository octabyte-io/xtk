import Link from "next/link";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

const steps = [
  {
    n: "1",
    title: "Install the extension",
    body: "Add XTK to Chrome or Firefox. An XTK launcher appears in XPM's own navigation — nothing else to deploy.",
    guide: { href: "/get-started", label: "Install XTK" },
  },
  {
    n: "2",
    title: "Connect your Drive",
    body: "Link your practice's Google Drive or OneDrive. XTK creates one tidy folder per client and keeps everything inside it.",
    guide: { href: "/guides/connect-document-storage", label: "Connect your storage" },
  },
  {
    n: "3",
    title: "Open any client",
    body: "The panel slides in with that client's files, signatures, portal and templates — no tab switching, no copy-pasting names.",
    guide: { href: "/guides/manage-client-documents", label: "Manage client documents" },
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="How it works"
        title="From install to in-context in minutes"
        lede="XTK rides along with the XPM tab your team already has open — it reads client details live from your authenticated Xero session."
      />
      <ol className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 120}>
            <li className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface p-6">
              <span className="flex size-9 items-center justify-center rounded-full bg-accent-soft font-display text-base font-bold text-accent-deep">
                {s.n}
              </span>
              <h3 className="font-display text-lg font-bold text-ink">
                {s.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink-soft">
                {s.body}
              </p>
              <Link
                href={s.guide.href}
                className="mt-auto text-sm font-medium text-accent-deep transition-colors hover:text-accent"
              >
                {s.guide.label} →
              </Link>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
