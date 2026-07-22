import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Prose primitives for policy / content pages. Deliberately mirrors the visual
 * language of `components/site/post-body.tsx` so legal pages read as part of the
 * same site rather than a bolt-on.
 */

export function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-12 scroll-mt-24 font-display text-2xl font-bold tracking-tight text-ink first:mt-0"
    >
      {children}
    </h2>
  );
}

export function H3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3
      id={id}
      className="mt-8 scroll-mt-24 font-display text-lg font-bold text-ink"
    >
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-5 text-lg leading-relaxed text-ink-soft">{children}</p>;
}

/** Short, muted intro line under a heading. */
export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 text-lg leading-relaxed text-ink-soft">{children}</p>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-5 flex list-disc flex-col gap-2.5 pl-5 text-lg leading-relaxed text-ink-soft">
      {children}
    </ul>
  );
}

export function OL({ children }: { children: ReactNode }) {
  return (
    <ol className="mt-5 flex list-decimal flex-col gap-2.5 pl-5 text-lg leading-relaxed text-ink-soft marker:font-semibold">
      {children}
    </ol>
  );
}

export function LI({ children }: { children: ReactNode }) {
  return <li className="pl-1 marker:text-accent">{children}</li>;
}

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

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

export function Callout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="mt-8 rounded-2xl border border-accent/25 bg-accent-soft/50 p-5">
      <p className="text-sm font-semibold text-accent-deep">{title}</p>
      <div className="mt-1.5 leading-relaxed text-ink-soft">{children}</div>
    </aside>
  );
}

/** A simple bordered table, horizontally scrollable on small screens. */
export function Table({
  head,
  rows,
}: {
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
      <table className="w-full min-w-[36rem] border-collapse text-left text-[15px]">
        <thead>
          <tr className="bg-surface">
            {head.map((h) => (
              <th
                key={h}
                className="border-b border-line px-4 py-3 font-display font-bold text-ink"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="align-top">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="border-b border-line px-4 py-3 leading-relaxed text-ink-soft last:border-b-0"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
