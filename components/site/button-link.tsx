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
  return (
    <Link
      href={href}
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-medium transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
