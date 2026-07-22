/** Placeholder tokens cycling into real client values. */

const pairs = [
  { token: "[CLIENT:NAME]", value: "Acme Trading Ltd" },
  { token: "[CLIENT:ADDRESS_PHYSICAL:CITY]", value: "Wellington" },
  { token: "[CLIENT:CONTACT:FIRST]", value: "John" },
];

export default function TemplatesMock() {
  return (
    <div className="rounded-xl border border-line bg-paper p-4">
      <div className="mb-3 flex items-center justify-between text-[11px] font-medium text-ink-soft">
        <span>Engagement Letter.docx</span>
        <span className="rounded-full bg-pen-soft px-2 py-0.5 font-semibold text-pen">
          Filled from Client Snapshot
        </span>
      </div>
      <div className="space-y-2">
        {pairs.map((p) => (
          <div
            key={p.token}
            className="grid rounded-lg bg-surface px-3 py-2 shadow-[0_1px_2px_rgba(13,34,66,0.06)]"
          >
            <span className="token-raw truncate font-mono text-xs text-pen">
              {p.token}
            </span>
            <span className="token-filled truncate text-xs font-semibold text-ink">
              {p.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
