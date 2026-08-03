import { plainText, type Inline } from "@/lib/inline";
import { renderInline } from "./inline-text";

/**
 * The article table, shared by guide bodies and post bodies. Lifted out of
 * guide-body.tsx when posts gained a `table` block — the two article renderers
 * are otherwise separate components, but a comparison table should not look
 * like two different tables depending on which silo it sits in.
 *
 * Headers and captions are plain strings by definition (see the block types);
 * cells are `Inline`, so a cell may carry a link.
 */
export default function ContentTable({
  head,
  rows,
  caption,
  codeColumns = [],
}: {
  head: string[];
  rows: Inline[][];
  caption?: string;
  /** Column indices rendered in monospace, e.g. a placeholder-token column. */
  codeColumns?: number[];
}) {
  // Code columns hold literal tokens like [CLIENT:NAME] — always plain text,
  // never a link, so they flatten rather than render inline nodes.
  const cell = (value: Inline, col: number) =>
    codeColumns.includes(col) ? (
      <code className="whitespace-nowrap rounded bg-accent-soft/60 px-1.5 py-0.5 font-mono text-[13px] text-accent-deep">
        {plainText(value)}
      </code>
    ) : (
      renderInline(value)
    );
  return (
    <figure className="mt-6">
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table className="w-full border-collapse text-left text-[15px] leading-relaxed">
          <thead>
            <tr className="border-b border-line bg-accent-soft/40">
              {head.map((h, i) => (
                <th
                  key={i}
                  scope="col"
                  className="px-4 py-2.5 font-display text-sm font-bold tracking-tight text-ink"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={r} className="border-b border-line/60 last:border-b-0">
                {row.map((c, i) => (
                  <td key={i} className="px-4 py-2.5 align-top text-ink-soft">
                    {cell(c, i)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
