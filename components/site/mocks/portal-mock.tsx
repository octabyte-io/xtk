const shares = [
  { name: "Signed accounts", mode: "Read-only", modeCls: "bg-accent-soft text-accent-deep" },
  { name: "Upload your records", mode: "Read-write", modeCls: "bg-mint-soft text-mint" },
];

export default function PortalMock() {
  return (
    <div className="rounded-xl border border-line bg-paper p-3">
      <div className="mb-2 text-[11px] font-medium text-ink-soft">
        Acme&apos;s portal · 2 members
      </div>
      <ul className="space-y-1.5">
        {shares.map((s) => (
          <li
            key={s.name}
            className="flex items-center gap-2 rounded-lg bg-surface px-2.5 py-2 text-xs font-medium text-ink shadow-[0_1px_2px_rgba(13,34,66,0.06)]"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M1.5 4a1.5 1.5 0 0 1 1.5-1.5h3l1.5 2h5.5A1.5 1.5 0 0 1 14.5 6v6A1.5 1.5 0 0 1 13 13.5H3A1.5 1.5 0 0 1 1.5 12V4Z"
                fill="var(--accent)"
                opacity="0.6"
              />
            </svg>
            <span className="truncate">{s.name}</span>
            <span
              className={`ml-auto shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${s.modeCls}`}
            >
              {s.mode}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
