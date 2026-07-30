import { caveat, geistMono } from "@/app/fonts";
import Reveal from "./reveal";

const flow = [
  {
    title: "Place fields on the PDF",
    body: "Signature, initials, text, date and checkbox fields — assigned per recipient, with signing order if you need it.",
  },
  {
    title: "Clients sign from a link",
    body: "Recipients open a secure tokenized link and sign on an XTK-owned page. No downloads, no accounts, no passwords.",
  },
  {
    title: "Get a certified document",
    body: "XTK flattens the signed PDF and files it with a Certificate of Completion and a full audit trail of every event.",
  },
];

const audit = [
  { t: "9:41 am", e: "Request viewed", who: "john@acmetrading.co" },
  { t: "9:43 am", e: "Signature added", who: "John Smith" },
  { t: "9:43 am", e: "Document completed", who: "Certificate issued" },
];

export default function EsignSpotlight() {
  return (
    <section
      id="esign"
      className={`${caveat.variable} ${geistMono.variable} mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28`}
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          {/* Signing surface mock */}
          <div className="relative">
            <div className="rounded-2xl border border-line bg-surface p-6 shadow-[0_32px_64px_-40px_rgba(13,34,66,0.35)] sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-semibold text-ink">
                  2025 Engagement Letter.pdf
                </span>
                <span className="rounded-full bg-pen-soft px-2.5 py-1 text-[11px] font-semibold text-pen">
                  1 of 2 signers
                </span>
              </div>
              <div className="space-y-2" aria-hidden="true">
                <div className="h-2 w-full rounded-full bg-ink/8" />
                <div className="h-2 w-5/6 rounded-full bg-ink/8" />
                <div className="h-2 w-2/3 rounded-full bg-ink/8" />
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="border-b border-dashed border-ink/25 pb-1">
                    <span className="sig-write inline-block font-script text-3xl leading-none text-pen">
                      John Smith
                    </span>
                  </div>
                  <div className="mt-1.5 text-[11px] text-ink-soft">
                    Signature — Director
                  </div>
                </div>
                <div>
                  <div className="border-b border-dashed border-ink/25 pb-1">
                    <span className="inline-block text-lg leading-none text-ink/30">
                      &nbsp;
                    </span>
                  </div>
                  <div className="mt-1.5 text-[11px] text-ink-soft">
                    Signature — Partner (next)
                  </div>
                </div>
              </div>
            </div>
            {/* Certificate card */}
            <div className="pop-late absolute -bottom-14 -right-2 w-72 rounded-xl border border-line bg-surface p-4 shadow-[0_24px_48px_-24px_rgba(13,34,66,0.4)] sm:-right-6">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-mint text-[11px] font-bold text-white">
                  ✓
                </span>
                <span className="text-xs font-bold text-ink">
                  Certificate of Completion
                </span>
              </div>
              <ul className="space-y-1">
                {audit.map((a) => (
                  <li
                    key={a.e}
                    className="flex items-baseline gap-2 text-[10px] text-ink-soft"
                  >
                    <span className="font-mono shrink-0">{a.t}</span>
                    <span className="whitespace-nowrap font-semibold text-ink">{a.e}</span>
                    <span className="ml-auto truncate">{a.who}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center rounded-full bg-pen-soft px-3.5 py-1 text-sm font-medium text-pen">
              E-signatures
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Signed, sealed, filed — without the per-envelope bill
            </h2>
            <p className="text-lg leading-relaxed text-ink-soft">
              Send DocuSign-style signature requests straight from a client&apos;s
              folder. The finished document lands back in the same folder,
              certified.
            </p>
          </Reveal>
          <ul className="mt-8 space-y-6">
            {flow.map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <li className="flex gap-4">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-pen-soft font-display text-sm font-bold text-pen">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{f.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">
                      {f.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
