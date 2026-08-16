import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import Breadcrumbs from "@/components/site/breadcrumbs";
import ButtonLink from "@/components/site/button-link";
import GuideBody from "@/components/site/guide-body";
import Reveal from "@/components/site/reveal";
import FaqAccordion, { type FaqItem } from "@/components/site/faq-accordion";
import JsonLd from "@/components/json-ld";
import type { GuideBlock } from "@/lib/guides";
import { company, pricing } from "@/lib/legal";
import { pageMetadata } from "@/lib/metadata";
import { BOOK_A_CALL_URL, CHROME_STORE_URL, FIREFOX_STORE_URL } from "@/lib/site";
import { faqPageJsonLd, howToJsonLd } from "@/lib/structured-data";

const TITLE = "Get started with XTK";
const DESCRIPTION =
  "Install the XTK extension in Chrome or Firefox, create your practice account and start working inside Xero Practice Manager — 30-day free trial, no card needed.";

export const metadata: Metadata = pageMetadata({
  title: "Get started",
  description: DESCRIPTION,
  path: "/get-started",
});

/**
 * The walkthrough, authored as guide blocks so it renders through GuideBody —
 * the same numbered steps, callouts and screenshots the /guides articles use —
 * and feeds howToJsonLd from the one array. This page is the short conversion
 * path; /guides/getting-started-with-xtk remains the long-form version.
 */
const walkthrough: GuideBlock[] = [
  { type: "h2", text: "Install the extension" },
  {
    type: "steps",
    steps: [
      {
        title: "Add XTK to your browser",
        text: "Use the button for your browser above. On the store listing, click Add to Chrome (or Add to Firefox) and confirm the permissions prompt.",
      },
      {
        title: "Pin the XTK icon",
        text: "Open your browser's extensions menu — the puzzle-piece icon — and pin XTK so its icon stays in the toolbar. That icon is how you check which account you're signed in as.",
      },
      {
        title: "Let it open the sign-in tab",
        text: "Right after installing, XTK opens its sign-in page in a new tab. If your practice already uses XTK, sign in there and skip to the tour below. Otherwise register your practice next.",
      },
    ],
  },
  { type: "h2", text: "Create your practice account" },
  {
    type: "p",
    text: [
      "The person who registers becomes the practice ",
      { text: "Admin", href: "/guides/invite-your-team" },
      " — the only role that can connect storage, invite colleagues and manage billing. If that should be a colleague, send them this page instead. Everyone else joins later by invitation, and no payment card is needed to start.",
    ],
  },
  {
    type: "steps",
    steps: [
      {
        title: "Open the registration form",
        text: [
          "On the sign-in page, click Create one under “No account yet?”, or go straight to ",
          // Literal rather than company.portal: content hrefs are typed `Href`.
          { text: "the registration page", href: "https://xtk.octabyte.app/register" },
          ".",
        ],
      },
      {
        title: "Fill in your practice details",
        text: "Enter your practice name, your email address, and a password of at least 8 characters, twice.",
        image: {
          src: "/images/guides/getting-started-with-xtk/01-register-form.png",
          alt: "The Create your XTK practice registration form filled in with a practice name, email and password",
          width: 1489,
          height: 812,
        },
      },
      {
        title: "Accept the terms and submit",
        text: [
          "Tick “I agree to the ",
          { text: "Terms of Service", href: "/legal/terms" },
          " and ",
          { text: "Privacy Policy", href: "/legal/privacy" },
          "”, then click Create practice.",
        ],
      },
      {
        title: "Click the link in your inbox",
        text: "XTK emails you a verification link. Click it within 15 minutes — that link is what activates your account.",
      },
    ],
  },
  { type: "h2", text: "Verify your email — your trial starts here" },
  {
    type: "p",
    text: [
      "The verification link signs you in and hands the session straight to the extension. When you see “All set. You can close this tab and open the XTK toolbar.”, setup is finished — there is nothing else to configure in the browser, and your ",
      { text: `${pricing.trialDays}-day free trial`, href: "/pricing" },
      " has begun.",
    ],
  },
  {
    type: "callout",
    title: "Two things worth knowing",
    text: `The verification link expires after 15 minutes, so click it promptly. And the trial starts at the moment you verify — not when you submitted the form — so you lose none of the ${pricing.trialDays} days by registering ahead of time.`,
  },
  { type: "h2", text: "Find XTK inside Practice Manager" },
  {
    type: "p",
    text: "Open Xero Practice Manager at practicemanager.xero.com — the Partner Hub product, not Xero Blue — or refresh the tab if it was already open. XTK appears automatically in four places:",
  },
  {
    type: "list",
    items: [
      "The XTK banner at the very top of every page, showing your trial status — “Trial — 30 days left” — with an Upgrade button for the Admin.",
      "The XTK launcher, the last item in Practice Manager's main navigation. It opens the full XTK panel: Document Storage, Email Templates, Team Members, Billing, My Account and Help & Support.",
      "The notification bell, the first icon in Practice Manager's top-right tools row and separate from Xero's own. It collects XTK activity such as completed signatures and client uploads.",
      [
        "Three new tabs on every client page: ",
        { text: "Documents", href: "/guides/manage-client-documents" },
        ", ",
        { text: "Signatures", href: "/guides/send-documents-for-signature" },
        " and ",
        { text: "Client Portal", href: "/guides/set-up-client-portal" },
        ". XTK's Documents tab replaces Xero's native one, which is hidden while the extension is active.",
      ],
    ],
  },
  {
    type: "p",
    text: "The XTK icon in your browser toolbar is a status window rather than a control panel: it shows the email you're signed in with, your trial countdown, and Upgrade and Log out buttons. Everything you actually do with XTK happens inside Practice Manager itself.",
  },
  {
    type: "callout",
    title: "No “forgot password” on the staff sign-in page",
    text: "Staff change their password from inside XTK: open the panel from the launcher, go to My Account, then Change password. Only your clients' portal sign-in has a self-serve reset — so keep your own password somewhere safe.",
  },
  { type: "h2", text: "If XTK doesn't appear" },
  {
    type: "list",
    items: [
      "Reload the Practice Manager tab. The extension only injects on page load, so a tab that was already open won't have it.",
      "Check the address bar reads practicemanager.xero.com. XTK does nothing on Xero Blue or any other website — that is by design.",
      "Click the XTK toolbar icon to confirm you're signed in, and with which email.",
      "Confirm the extension is enabled in your browser's extensions page — some managed browser profiles disable new extensions until an IT admin approves them.",
      "After you subscribe, reload Practice Manager. The banner does not refresh itself once payment goes through.",
      [
        "Still stuck? Email ",
        { text: company.supportEmail, href: `mailto:${company.supportEmail}` },
        " with your practice name and browser, or use the Support tab in the XTK panel.",
      ],
    ],
  },
];

const faqs: FaqItem[] = [
  {
    q: "Which browsers can I install XTK in?",
    a: FIREFOX_STORE_URL
      ? "Google Chrome and Firefox. The same extension is published for both and behaves identically — install it in whichever browser you use for Practice Manager."
      : "Google Chrome today. The Firefox build is finished and its Add-ons listing is in review, so Firefox users will be able to install it shortly. XTK behaves identically in both.",
  },
  {
    q: "When does the 30-day free trial start?",
    a: "When you click the verification link in your email — not when you submit the registration form. The trial covers your whole practice and needs no payment card.",
    more: { href: "/pricing", label: "See what the plan includes" },
  },
  {
    q: "Does XTK need access to my Xero account?",
    a: "No. XTK never asks you to authorise it with Xero and holds no server-side access to your Xero data. It reads client details live inside your own signed-in Practice Manager tab, and only on practicemanager.xero.com.",
    more: { href: "/guides/how-xtk-handles-your-data", label: "How XTK handles your data" },
  },
  {
    q: "Does everyone in the practice install it themselves?",
    a: "Yes — each person installs the extension in their own browser and signs in with their own account, but one subscription covers the whole practice. The Admin invites the team from the XTK panel once setup is done.",
    more: { href: "/guides/invite-your-team", label: "Invite your team" },
  },
  {
    q: "Where do my files end up?",
    a: "In your practice's own Google Drive, OneDrive or SharePoint, in one folder per client. Connecting that storage is the first thing to do after installing, and it is an Admin-only job.",
    more: { href: "/guides/connect-document-storage", label: "Connect document storage" },
  },
];

/** The extension glyph — the puzzle piece browsers use for extensions. */
function ExtensionIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 3.5a2 2 0 0 1 4 0V5h2.5A1.5 1.5 0 0 1 18 6.5V10h1.5a2 2 0 0 1 0 4H18v3.5a1.5 1.5 0 0 1-1.5 1.5H13v-1.5a2 2 0 0 0-4 0V19H6.5A1.5 1.5 0 0 1 5 17.5V14H6.5a2 2 0 0 0 0-4H5V6.5A1.5 1.5 0 0 1 6.5 5H10Z" />
    </svg>
  );
}

/** One browser's install card. `href === null` → the listing isn't live yet. */
function StoreCard({
  browser,
  store,
  href,
  blurb,
  pending,
}: {
  browser: string;
  store: string;
  href: string | null;
  blurb: string;
  pending?: string;
}) {
  const live = href !== null;
  return (
    <div
      className={`flex flex-col gap-4 rounded-3xl border p-6 sm:p-8 ${
        live ? "border-line bg-surface" : "border-line/70 bg-surface/60"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <span
          className={`flex size-11 items-center justify-center rounded-2xl ${
            live ? "bg-accent-soft text-accent-deep" : "bg-paper text-ink-soft"
          }`}
        >
          <ExtensionIcon className="size-6" />
        </span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            live ? "bg-mint-soft text-ink" : "bg-amber-soft text-ink"
          }`}
        >
          {live ? "Available now" : "In review"}
        </span>
      </div>
      <div>
        <h3 className="font-display text-xl font-bold tracking-tight text-ink">
          {browser}
        </h3>
        <p className="mt-1.5 leading-relaxed text-ink-soft">
          {live ? blurb : pending}
        </p>
      </div>
      {live ? (
        <ButtonLink href={href} className="w-fit">
          Add to {browser}
        </ButtonLink>
      ) : (
        <p className="text-sm text-ink-soft">
          Want a nudge when it lands?{" "}
          <a
            href={`mailto:${company.supportEmail}?subject=Tell%20me%20when%20XTK%20is%20on%20Firefox`}
            className="font-medium text-accent-deep underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent"
          >
            Email us
          </a>{" "}
          and we&apos;ll let you know.
        </p>
      )}
      <p className="mt-auto text-xs text-ink-soft">{store}</p>
    </div>
  );
}

function NextStepCard({
  href,
  label,
  blurb,
  delay,
}: {
  href: string;
  label: string;
  blurb: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <Link
        href={href}
        className="flex h-full flex-col gap-2 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent"
      >
        <h3 className="font-display text-base font-bold text-ink">{label}</h3>
        <p className="text-sm leading-relaxed text-ink-soft">{blurb}</p>
        <span className="mt-auto pt-3 text-sm font-medium text-accent-deep">
          Read the guide →
        </span>
      </Link>
    </Reveal>
  );
}

export default function GetStarted() {
  return (
    <>
      <JsonLd
        data={howToJsonLd({
          title: TITLE,
          description: DESCRIPTION,
          body: walkthrough,
        })}
      />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <Nav active="/get-started" />
      <main className="flex-1">
        <header className="hero-wash">
          <div className="mx-auto w-full max-w-6xl px-5 pb-10 pt-14 sm:px-8 sm:pt-18">
            <div className="hero-rise flex max-w-2xl flex-col gap-5">
              <Breadcrumbs
                items={[
                  { name: "Home", path: "/" },
                  { name: "Get started", path: "/get-started" },
                ]}
              />
              {/* Not "Get started" — the nav button, the breadcrumb and the h1
                  already say it. */}
              <span className="inline-flex w-fit items-center rounded-full bg-accent-soft px-3.5 py-1 text-sm font-medium text-accent-deep">
                Install &amp; set up
              </span>
              <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.15]">
                {TITLE}
              </h1>
              <p className="text-lg leading-relaxed text-ink-soft">
                Install the extension, create your practice account, and XTK
                appears inside Xero Practice Manager — about ten minutes, all in
                the browser you already use. Your {pricing.trialDays}-day free
                trial covers the whole practice and needs no credit card.
              </p>
            </div>
          </div>
        </header>

        {/* The primary action, above the fold and above the instructions. */}
        <div className="mx-auto w-full max-w-6xl px-5 pb-4 sm:px-8">
          <Reveal className="grid gap-5 sm:grid-cols-2">
            <StoreCard
              browser="Chrome"
              store="Chrome Web Store"
              href={CHROME_STORE_URL}
              blurb="Also works in Chromium browsers that install from the Chrome Web Store."
            />
            <StoreCard
              browser="Firefox"
              store="Firefox Add-ons"
              href={FIREFOX_STORE_URL}
              blurb="The same extension, with the same features, for Firefox."
              pending="The Firefox build is done and the Add-ons listing is with Mozilla for review. Chrome is ready today."
            />
          </Reveal>
        </div>

        <div className="mx-auto w-full max-w-3xl px-5 pb-16 sm:px-8">
          <GuideBody body={walkthrough} />
        </div>

        <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8">
          <Reveal className="flex max-w-2xl flex-col gap-3">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Finish setting up
            </h2>
            <p className="leading-relaxed text-ink-soft">
              XTK is installed, but it isn&apos;t connected to anything yet. Two
              short jobs finish the picture — both Admin-only, and storage comes
              first.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <NextStepCard
              href="/guides/connect-document-storage"
              label="1. Connect your storage"
              blurb="Point XTK at your practice's Google Drive, OneDrive or SharePoint. Do this one first."
              delay={0}
            />
            <NextStepCard
              href="/guides/connect-your-email"
              label="2. Connect your email"
              blurb="Let XTK send portal invites and document requests from your own Gmail or Outlook."
              delay={90}
            />
            <NextStepCard
              href="/guides/invite-your-team"
              label="3. Invite your team"
              blurb="Add colleagues as Members. One subscription covers everyone in the practice."
              delay={180}
            />
          </div>
          <Reveal delay={240}>
            <p className="mt-8 leading-relaxed text-ink-soft">
              Prefer the long version, with a screenshot at every step? Read{" "}
              <Link
                href="/guides/getting-started-with-xtk"
                className="font-medium text-accent-deep underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent"
              >
                Getting started with XTK
              </Link>
              , or browse{" "}
              <Link
                href="/guides"
                className="font-medium text-accent-deep underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent"
              >
                every user guide
              </Link>
              .
            </p>
          </Reveal>
        </section>

        <section
          aria-label="Frequently asked questions"
          className="mx-auto w-full max-w-3xl px-5 pb-16 sm:px-8"
        >
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Questions before you install
          </h2>
          <div className="mt-6">
            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* CtaBand's Firefox button falls back to /get-started, which would
            self-link here — so this page closes with the live stores only. */}
        <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
          <Reveal>
            <div className="hero-wash relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Ready when you are
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
                Install the extension, connect your Drive, and open your first
                client — your whole practice can be working in context today.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                {CHROME_STORE_URL && (
                  <ButtonLink href={CHROME_STORE_URL}>Add to Chrome</ButtonLink>
                )}
                {FIREFOX_STORE_URL && (
                  <ButtonLink href={FIREFOX_STORE_URL} variant="secondary">
                    Add to Firefox
                  </ButtonLink>
                )}
              </div>
              <p className="mt-5 text-sm text-ink-soft">
                {pricing.trialDays}-day free trial for your whole practice — no
                credit card required.
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                Rather talk to someone first?{" "}
                <a
                  href={BOOK_A_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent-deep underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent"
                >
                  Book twenty minutes
                </a>{" "}
                and tell us where your documents live now.
              </p>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
