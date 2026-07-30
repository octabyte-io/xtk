import Link from "next/link";
import JsonLd from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export type Crumb = { name: string; path: string };

/**
 * The visible breadcrumb trail *and* its BreadcrumbList JSON-LD, from one array
 * — the two used to be separate, with only the JSON-LD ever rendered.
 *
 * On article pages this replaces the old "← All guides" / "← All posts"
 * back-link: it contains that link and adds the route above it. The trailing
 * crumb is the current page, so it is text rather than a link; guide titles run
 * long, so it truncates with the full title in `title`.
 */
export default function Breadcrumbs({
  items,
  className = "",
}: {
  items: Crumb[];
  className?: string;
}) {
  const last = items.length - 1;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-x-2 text-sm text-ink-soft">
          {items.map((item, i) => (
            <li key={item.path} className="flex min-w-0 items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="text-ink-soft/40">
                  /
                </span>
              )}
              {i === last ? (
                <span
                  aria-current="page"
                  title={item.name}
                  className="max-w-[14rem] truncate text-ink sm:max-w-md"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="font-medium transition-colors hover:text-ink"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
