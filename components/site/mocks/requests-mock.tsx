const items = [
  { name: "Bank statements — Jan–Mar", state: "Provided", done: true },
  { name: "Photo ID (director)", state: "Provided", done: true },
  { name: "Loan agreement", state: "Outstanding", done: false },
];

export default function RequestsMock() {
  return (
    <div className="rounded-xl border border-line bg-paper p-3">
      <ul className="space-y-1.5">
        {items.map((i) => (
          <li
            key={i.name}
            className="flex items-center gap-2 rounded-lg bg-surface px-2.5 py-2 text-xs font-medium text-ink shadow-[0_1px_2px_rgba(13,34,66,0.06)]"
          >
            <span
              className={`flex size-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${
                i.done ? "bg-mint text-white" : "border border-dashed border-ink/30 text-transparent"
              }`}
              aria-hidden="true"
            >
              ✓
            </span>
            <span className="truncate">{i.name}</span>
            <span
              className={`ml-auto shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                i.done ? "bg-mint-soft text-mint" : "bg-amber-soft text-amber"
              }`}
            >
              {i.state}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
