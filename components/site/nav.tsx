import Link from "next/link";
import Logo from "./logo";
import ButtonLink from "./button-link";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#esign", label: "E-signatures" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/guides", label: "Guides" },
  { href: "/blog", label: "Blog" },
];

export default function Nav({ active }: { active?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="XTK home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
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
        <ButtonLink href="/#get-xtk" className="!h-10 !px-5 !text-sm">
          Get XTK
        </ButtonLink>
      </div>
    </header>
  );
}
