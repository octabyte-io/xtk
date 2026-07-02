const rows = [
  { kind: "folder", name: "FY25 — Tax", meta: "" },
  { kind: "file", name: "2025 Tax Return.pdf", meta: "Merged from 3 PDFs" },
  { kind: "file", name: "Minutes.docx → PDF", meta: "Converted" },
  { kind: "file", name: "Trust Deed.pdf", meta: "★ Favourite", starred: true },
];

export default function DocumentsMock() {
  return (
    <div className="rounded-xl border border-line bg-paper p-3">
      <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium text-ink-soft">
        <span>Acme Trading Ltd</span>
        <span aria-hidden="true">›</span>
        <span className="text-ink">FY25 — Tax</span>
      </div>
      <ul className="space-y-1">
        {rows.map((r) => (
          <li
            key={r.name}
            className="flex items-center gap-2 rounded-lg bg-surface px-2.5 py-2 text-xs font-medium text-ink shadow-[0_1px_2px_rgba(13,34,66,0.06)]"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              {r.kind === "folder" ? (
                <path
                  d="M1.5 4a1.5 1.5 0 0 1 1.5-1.5h3l1.5 2h5.5A1.5 1.5 0 0 1 14.5 6v6A1.5 1.5 0 0 1 13 13.5H3A1.5 1.5 0 0 1 1.5 12V4Z"
                  fill="var(--amber)"
                  opacity="0.85"
                />
              ) : (
                <path
                  d="M4 1.5h5.5L13 5v8A1.5 1.5 0 0 1 11.5 14.5h-7A1.5 1.5 0 0 1 3 13V3A1.5 1.5 0 0 1 4 1.5Z"
                  fill="var(--accent)"
                  opacity="0.75"
                />
              )}
            </svg>
            <span className="truncate">{r.name}</span>
            {r.meta && (
              <span
                className={`ml-auto shrink-0 text-[10px] ${
                  r.starred ? "text-amber" : "text-ink-soft"
                }`}
              >
                {r.meta}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
