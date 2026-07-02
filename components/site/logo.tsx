export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="28" height="28" rx="8" fill="var(--ink)" />
        {/* An X drawn as two pen strokes */}
        <path
          d="M8.5 8.5 C11 12, 17 16, 19.5 19.5"
          stroke="var(--accent)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M19.5 8.5 C17 12, 11 16, 8.5 19.5"
          stroke="#fff"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-xl font-bold tracking-tight text-ink">
        XTK
      </span>
    </span>
  );
}
