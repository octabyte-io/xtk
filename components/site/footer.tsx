import Link from "next/link";
import Logo from "./logo";

const columns: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Product",
    links: [
      { href: "/#features", label: "Features" },
      { href: "/#how-it-works", label: "How it works" },
      { href: "/#esign", label: "E-signatures" },
      { href: "/pricing", label: "Pricing" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/guides", label: "Guides" },
      { href: "/blog", label: "Blog" },
      { href: "/support", label: "Support" },
      { href: "/sitemap", label: "Sitemap" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/legal/privacy", label: "Privacy Policy" },
      { href: "/legal/terms", label: "Terms of Service" },
      { href: "/legal/dpa", label: "Data Processing" },
      { href: "/legal/subprocessors", label: "Sub-processors" },
      { href: "/legal/cookies", label: "Cookies & tracking" },
      { href: "/legal/refunds", label: "Refunds" },
      { href: "/legal/data-deletion", label: "Your data rights" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_2fr]">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="max-w-xs text-sm text-ink-soft">
            The toolkit for Xero Practice Manager.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading} className="flex flex-col gap-3">
              <h2 className="font-display text-sm font-bold text-ink">
                {col.heading}
              </h2>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-5 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} XTK</span>
          <span>
            XTK is an independent product and is not affiliated with or endorsed
            by Xero Limited.
          </span>
        </div>
      </div>
    </footer>
  );
}
