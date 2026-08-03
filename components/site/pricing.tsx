import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import ButtonLink from "./button-link";
import { A } from "./prose-link";
import { GET_STARTED_PATH } from "@/lib/site";

const included = [
  "Every XTK feature — e-signatures, client portal, document requests and templates",
  "Your whole team on one practice subscription",
  "Connected to your own Google Drive or OneDrive",
  "Works in Chrome and Firefox, inside Xero Practice Manager",
];

function CheckIcon() {
  return (
    <span
      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-deep"
      aria-hidden="true"
    >
      <svg viewBox="0 0 12 12" className="size-3" fill="none">
        <path
          d="M2.5 6.5 5 9l4.5-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Pricing({
  /**
   * Off on /pricing, where the page's own <h1> header already says this — the
   * section heading is only needed when this sits among the home page's
   * sections.
   */
  showHeading = true,
}: {
  showHeading?: boolean;
} = {}) {
  return (
    <section
      id="pricing"
      className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${showHeading ? "py-20 sm:py-28" : "pb-20 sm:pb-28"}`}
    >
      {showHeading && (
        <SectionHeading
          eyebrow="Pricing"
          title="Try everything free for 30 days"
          lede="No credit card, no feature tiers, no per-seat surprises. Start your trial, put your whole practice on it, and only pay if it earns its keep."
        />
      )}
      <Reveal delay={120}>
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_32px_64px_-40px_rgba(13,34,66,0.3)] sm:mt-12">
          <div className="grid sm:grid-cols-[5fr_6fr]">
            <div className="hero-wash flex flex-col justify-center gap-5 border-b border-line px-6 py-10 sm:border-b-0 sm:border-r sm:px-10">
              <span className="inline-flex w-fit items-center rounded-full bg-mint/20 px-3.5 py-1 text-sm font-medium text-ink">
                30-day free trial · no credit card
              </span>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold tracking-tight text-ink">
                    $59
                  </span>
                  <span className="text-lg text-ink-soft">USD / month</span>
                </div>
                <p className="mt-2 text-sm text-ink-soft">
                  after your trial ends — cancel anytime
                </p>
              </div>
              <ButtonLink href={GET_STARTED_PATH} className="w-fit">
                Start free trial
              </ButtonLink>
            </div>
            <div className="px-6 py-10 sm:px-10">
              <h3 className="font-display text-base font-bold text-ink">
                One plan, everything included
              </h3>
              <ul className="mt-5 space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                <A href="/guides/billing-trial-and-subscription">
                  How the trial and billing work
                </A>
                {" · "}
                <A href="/legal/refunds">Refunds</A>
                {" · "}
                <A href="/support">Questions?</A>
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
