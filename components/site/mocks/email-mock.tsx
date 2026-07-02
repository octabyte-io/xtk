export default function EmailMock() {
  return (
    <div className="rounded-xl border border-line bg-paper p-3">
      <div className="overflow-hidden rounded-lg bg-surface shadow-[0_1px_2px_rgba(13,34,66,0.06)]">
        <div className="flex items-center gap-2 bg-ink px-3 py-2">
          <span className="flex size-4 items-center justify-center rounded bg-accent text-[8px] font-bold text-white">
            A
          </span>
          <span className="text-[10px] font-semibold text-white">
            Acme Accounting
          </span>
        </div>
        <div className="space-y-1.5 p-3" aria-hidden="true">
          <div className="h-1.5 w-5/6 rounded-full bg-ink/10" />
          <div className="h-1.5 w-2/3 rounded-full bg-ink/10" />
          <div className="mt-2 inline-block rounded-md bg-accent px-2.5 py-1 text-[9px] font-semibold text-white">
            Review &amp; sign
          </div>
        </div>
      </div>
      <div className="mt-2 text-[10px] font-medium text-ink-soft">
        Sent from jo@acmeaccounting.com via Gmail
      </div>
    </div>
  );
}
