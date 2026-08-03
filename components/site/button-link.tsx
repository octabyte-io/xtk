import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-accent-deep shadow-[0_10px_24px_-12px_rgba(13,34,66,0.5)]",
  secondary:
    "bg-surface text-ink border border-line hover:border-accent hover:text-accent-deep",
  ghost: "text-ink-soft hover:text-ink",
};

/**
 * The store-listing CTAs point off-site, so — as in ./prose-link.tsx — an
 * external href renders a plain <a> with target/rel. Internal ones keep going
 * through next/link, which applies the GitHub Pages `basePath` for us.
 */
export default function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  const cls = `inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-medium transition-colors ${styles[variant]} ${className}`;

  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
