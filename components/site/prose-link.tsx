import Link from "next/link";
import type { ReactNode } from "react";

/**
 * The canonical inline anchor. Lived in ./legal/prose.tsx until content bodies
 * needed it too (see ./inline-text.tsx); prose.tsx still re-exports it, so the
 * legal / about / support pages import it from either place.
 *
 * `href` stays `string` rather than the stricter `Href` from lib/inline: the
 * policy pages pass `company.portal` and `mailto:` values built at runtime, and
 * the type safety that matters lives at the authoring layer, where
 * `InlineLink.href` already pins every internal path.
 *
 * Internal links go through next/link, which applies `basePath` automatically —
 * a raw <a href="/…"> would break on the GitHub Pages sub-path deploy.
 */
export function A({ href, children }: { href: string; children: ReactNode }) {
  const external = /^https?:\/\//.test(href) || href.startsWith("mailto:");
  const cls =
    "font-medium text-accent-deep underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent";
  if (external) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("mailto:")
          ? {}
          : { target: "_blank", rel: "noopener noreferrer" })}
      >
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
