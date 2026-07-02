import Logo from "./logo";
import ButtonLink from "./button-link";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#esign", label: "E-signatures" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="XTK home">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <ButtonLink href="#get-xtk" className="!h-10 !px-5 !text-sm">
          Get XTK
        </ButtonLink>
      </div>
    </header>
  );
}
