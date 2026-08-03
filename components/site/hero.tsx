import ButtonLink from "./button-link";
import XpmMock from "./xpm-mock";
import { chromeStoreHref, firefoxStoreHref } from "@/lib/site";

function SigUnderline() {
  return (
    <svg
      className="sig-underline absolute -bottom-2 left-0 w-full"
      viewBox="0 0 300 14"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M4 10 C 60 2, 120 12, 170 7 S 260 4, 296 8"
        stroke="var(--pen)"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength="1"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero-wash overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span
            className="hero-rise inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium text-ink-soft"
            style={{ animationDelay: "0ms" }}
          >
            <span className="size-1.5 rounded-full bg-mint" aria-hidden="true" />
            Chrome &amp; Firefox extension for Xero Practice Manager
          </span>
          <h1
            className="hero-rise font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            The{" "}
            <span className="relative whitespace-nowrap">
              missing half
              <SigUnderline />
            </span>{" "}
            of Practice Manager.
          </h1>
          <p
            className="hero-rise max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            XTK adds document management, e-signatures, client portals and
            template automation to XPM — in a panel that opens right inside it,
            backed by your practice&apos;s own Google Drive or OneDrive.
          </p>
          <div
            className="hero-rise flex flex-col items-center gap-3 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <ButtonLink href={chromeStoreHref()}>Add to Chrome</ButtonLink>
            <ButtonLink href={firefoxStoreHref()} variant="secondary">
              Add to Firefox
            </ButtonLink>
          </div>
          <p
            className="hero-rise text-sm text-ink-soft"
            style={{ animationDelay: "380ms" }}
          >
            Free trial for your whole practice. Set up in minutes.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl sm:mt-16">
          <XpmMock />
        </div>
      </div>
    </section>
  );
}
