export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="7" fill="#0077C7" />
        <g stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round">
          <path d="M5.5 10.5 16 22.5" />
          <path d="M16 10.5 5.5 22.5" />
        </g>
        <g
          stroke="#9BD7F5"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 9 V15.2" />
          <path d="M18.8 11 H23.2" />
          <path d="M21 16.8 V24" />
          <path d="M24.6 18 21.3 20.8" />
          <path d="M21.8 20.4 25 24" />
        </g>
      </svg>
      <span className="font-display text-xl font-bold tracking-tight text-ink">
        XTK
      </span>
    </span>
  );
}
