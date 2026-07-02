/**
 * A stylized browser window showing Xero Practice Manager with the XTK
 * panel sliding in — the hero's thesis: XTK lives inside XPM.
 */

function FolderIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M1.5 4a1.5 1.5 0 0 1 1.5-1.5h3l1.5 2h5.5A1.5 1.5 0 0 1 14.5 6v6A1.5 1.5 0 0 1 13 13.5H3A1.5 1.5 0 0 1 1.5 12V4Z"
        fill="var(--amber)"
        opacity="0.85"
      />
    </svg>
  );
}

function FileIcon({ color = "var(--accent)" }: { color?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 1.5h5.5L13 5v8A1.5 1.5 0 0 1 11.5 14.5h-7A1.5 1.5 0 0 1 3 13V3A1.5 1.5 0 0 1 4 1.5Z"
        fill={color}
        opacity="0.8"
      />
    </svg>
  );
}

function GhostLine({ w }: { w: string }) {
  return <div className={`h-2 rounded-full bg-ink/10 ${w}`} />;
}

const panelFiles = [
  { icon: <FolderIcon />, name: "FY25 — Tax", meta: "12 files" },
  { icon: <FolderIcon />, name: "Permanent", meta: "8 files" },
  { icon: <FileIcon />, name: "2025 Tax Return.pdf", meta: "Awaiting signature", hot: true },
  { icon: <FileIcon color="var(--mint)" />, name: "Engagement Letter.pdf", meta: "Signed" },
  { icon: <FileIcon color="var(--pen)" />, name: "Financial Statements.docx", meta: "From template" },
];

export default function XpmMock() {
  return (
    <div
      className="hero-rise relative overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_40px_80px_-40px_rgba(13,34,66,0.35)]"
      style={{ animationDelay: "350ms" }}
      role="img"
      aria-label="The XTK panel opening inside Xero Practice Manager"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-line bg-paper px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#f6635f]" />
          <span className="size-2.5 rounded-full bg-[#f5bd4f]" />
          <span className="size-2.5 rounded-full bg-[#61c554]" />
        </div>
        <div className="mx-auto flex h-6 w-full max-w-xs items-center justify-center rounded-md bg-ink/5 px-3 text-[11px] font-medium text-ink-soft">
          practicemanager.xero.com
        </div>
        <div className="w-10" aria-hidden="true" />
      </div>

      <div className="relative flex h-[340px] sm:h-[400px]">
        {/* XPM app */}
        <div className="min-w-0 flex-1">
          {/* XPM top bar */}
          <div className="flex items-center gap-4 bg-ink px-4 py-2.5 text-[11px] font-medium text-white/75 sm:gap-5">
            <span className="font-semibold text-white">Practice Manager</span>
            <span className="hidden sm:inline">Dashboard</span>
            <span className="text-white">Clients</span>
            <span className="hidden sm:inline">Jobs</span>
            <span className="hidden sm:inline">Time</span>
            <span className="launcher-glow ml-auto rounded-full px-2.5 py-1 font-semibold">
              XTK
            </span>
          </div>
          {/* XPM client page */}
          <div className="space-y-4 p-4 sm:p-5">
            <div>
              <div className="text-sm font-semibold text-ink">
                Acme Trading Ltd
              </div>
              <div className="mt-0.5 text-[11px] text-ink-soft">
                Client · Companies · GST registered
              </div>
            </div>
            <div className="flex gap-4 border-b border-line pb-2 text-[11px] font-medium text-ink-soft">
              <span className="border-b-2 border-accent pb-2 text-accent-deep">
                Details
              </span>
              <span>Jobs</span>
              <span className="hidden sm:inline">Notes</span>
              <span className="hidden sm:inline">Invoices</span>
            </div>
            <div className="space-y-3">
              <GhostLine w="w-3/4" />
              <GhostLine w="w-1/2" />
              <GhostLine w="w-2/3" />
              <GhostLine w="w-2/5" />
              <GhostLine w="w-3/5" />
            </div>
          </div>
        </div>

        {/* XTK panel sliding in */}
        <div className="xtk-panel-slide absolute inset-y-0 right-0 flex w-[58%] flex-col border-l border-line bg-surface shadow-[-24px_0_48px_-24px_rgba(13,34,66,0.25)] sm:w-[46%]">
          <div className="flex items-center justify-between border-b border-line px-3.5 py-2.5">
            <span className="font-display text-[13px] font-bold text-ink">
              XTK
            </span>
            <span className="rounded-full bg-mint-soft px-2 py-0.5 text-[10px] font-semibold text-mint">
              Connected
            </span>
          </div>
          <div className="flex gap-3 border-b border-line px-3.5 py-2 text-[10px] font-medium text-ink-soft">
            <span className="rounded-md bg-accent-soft px-2 py-1 font-semibold text-accent-deep">
              Documents
            </span>
            <span className="py-1">E-sign</span>
            <span className="py-1">Portal</span>
            <span className="hidden py-1 sm:inline">Templates</span>
          </div>
          <ul className="flex-1 space-y-0.5 overflow-hidden px-2 py-2">
            {panelFiles.map((f) => (
              <li
                key={f.name}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${
                  f.hot ? "bg-pen-soft" : ""
                }`}
              >
                {f.icon}
                <span className="truncate text-[11px] font-medium text-ink">
                  {f.name}
                </span>
                <span
                  className={`ml-auto shrink-0 text-[9px] ${
                    f.hot ? "font-semibold text-pen" : "text-ink-soft"
                  }`}
                >
                  {f.meta}
                </span>
              </li>
            ))}
          </ul>
          <div className="border-t border-line px-3.5 py-2.5">
            <div className="flex items-center justify-center rounded-lg bg-ink py-1.5 text-[10px] font-semibold text-white">
              Upload to client folder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
