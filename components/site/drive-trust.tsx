import Link from "next/link";
import Reveal from "./reveal";

const points = [
  {
    title: "Your storage, your ownership",
    body: "XTK connects to your practice's Google Drive or OneDrive and works on your files where they already sit. A download, zip or merge streams bytes through our backend in the moment, but nothing is written to disk or kept in our database — and portal shares are markers, not duplicates.",
  },
  {
    title: "A strict containment guarantee",
    body: "Every storage call is checked on our server before your provider is called, so it can only act inside the current client's folder. That limit is our own code, not a setting we ask you to trust Google with.",
  },
  {
    title: "Access you control",
    body: "One admin per practice, member management, and an access state that can lock the whole toolkit to read-only in one switch.",
  },
];

/** Concentric containment graphic: client folder inside main folder inside your Drive. */
function ContainmentGraphic() {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5 shadow-[0_32px_64px_-40px_rgba(13,34,66,0.3)]">
      <div className="rounded-xl border border-dashed border-accent/40 bg-accent-soft/40 p-4">
        <div className="mb-3 text-[11px] font-semibold text-accent-deep">
          Your Google Drive / OneDrive
        </div>
        <div className="rounded-lg border border-dashed border-accent/40 bg-surface p-4">
          <div className="mb-3 text-[11px] font-semibold text-ink">
            XTK — Client Files
          </div>
          <div className="rounded-lg bg-paper p-3.5 ring-2 ring-accent">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-ink">
                Acme Trading Ltd
              </span>
              <span className="rounded-full bg-accent px-2 py-0.5 text-[9px] font-bold text-white">
                Scope
              </span>
            </div>
            <div className="mt-2.5 space-y-1.5" aria-hidden="true">
              <div className="h-1.5 w-3/4 rounded-full bg-ink/10" />
              <div className="h-1.5 w-1/2 rounded-full bg-ink/10" />
              <div className="h-1.5 w-2/3 rounded-full bg-ink/10" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-[10px] font-medium text-ink-soft">
            <span className="size-1.5 rounded-full bg-mint" aria-hidden="true" />
            Every operation stays inside the highlighted folder
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DriveTrust() {
  return (
    <section className="border-y border-line bg-ink text-white">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1 text-sm font-medium text-white/90">
              Built on your Drive
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Your files stay in your Drive
            </h2>
            <p className="text-lg leading-relaxed text-white/70">
              XTK is a layer over storage you already own and trust — not
              another silo to migrate into or out of.
            </p>
            {/* Light link styling: accent-deep is unreadable on the ink panel. */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/guides/how-xtk-handles-your-data"
                className="text-sm font-medium text-white underline decoration-white/40 underline-offset-2 transition-colors hover:decoration-white"
              >
                How XTK handles your data →
              </Link>
              <Link
                href="/legal/privacy"
                className="text-sm font-medium text-white underline decoration-white/40 underline-offset-2 transition-colors hover:decoration-white"
              >
                Privacy Policy →
              </Link>
            </div>
          </Reveal>
          <ul className="mt-8 space-y-6">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <li>
                  <h3 className="font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-white/70">
                    {p.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={150}>
          <ContainmentGraphic />
        </Reveal>
      </div>
    </section>
  );
}
