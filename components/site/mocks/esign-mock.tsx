/** A document card where a signature writes itself (driven by .in-view). */
export default function EsignMock() {
  return (
    <div className="rounded-xl border border-line bg-paper p-3">
      <div className="rounded-lg bg-surface p-3.5 shadow-[0_1px_2px_rgba(13,34,66,0.06)]">
        <div className="space-y-1.5" aria-hidden="true">
          <div className="h-1.5 w-3/4 rounded-full bg-ink/10" />
          <div className="h-1.5 w-1/2 rounded-full bg-ink/10" />
        </div>
        <div className="mt-4 border-b border-dashed border-ink/25 pb-1">
          <span className="sig-write inline-block font-script text-2xl leading-none text-pen">
            John Smith
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between text-[10px] text-ink-soft">
          <span>Signature — Director</span>
          <span className="pop-late inline-flex items-center gap-1 rounded-full bg-mint-soft px-2 py-0.5 font-semibold text-mint">
            ✓ Signed
          </span>
        </div>
      </div>
    </div>
  );
}
