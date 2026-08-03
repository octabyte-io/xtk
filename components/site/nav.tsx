import Link from "next/link";
import Logo from "./logo";
import ButtonLink from "./button-link";
import { GET_STARTED_PATH } from "@/lib/site";

/**
 * Pricing points at the /pricing page rather than the home-page #pricing
 * anchor: the page carries the plan detail, the trial terms and the refund
 * policy, and it was previously reachable only from the footer.
 */
const links = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#esign", label: "E-signatures" },
  { href: "/pricing", label: "Pricing" },
  { href: "/guides", label: "Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support" },
];

export default function Nav({ active }: { active?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="XTK home">
          <Logo />
        </Link>
        {/* gap-4 until lg: seven links at gap-8 overflow the md container. */}
        <nav className="hidden items-center gap-4 md:flex lg:gap-8" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={l.href === active ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-ink ${
                l.href === active ? "text-ink" : "text-ink-soft"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        {/* Not in `links`: this is the CTA, and duplicating it as a nav item
            would overflow the md container. */}
        <ButtonLink href={GET_STARTED_PATH} className="!h-10 !px-5 !text-sm">
          Get started
        </ButtonLink>
      </div>
    </header>
  );
}
