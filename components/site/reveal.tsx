"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Hiding happens inside the observer callback, never before it. An element is
 * armed only once we have been told it is off-screen, so if the observer never
 * runs — no JS, no IntersectionObserver, a callback that never arrives — the
 * content simply stays visible as the static HTML rendered it.
 */
function handle(
  entries: IntersectionObserverEntry[],
  io: IntersectionObserver,
) {
  for (const entry of entries) {
    const el = entry.target;
    if (entry.isIntersecting) {
      // On screen. If it was armed below the fold this plays the reveal;
      // if it was on screen all along, `in-view` alone changes nothing.
      el.classList.add("in-view");
      io.unobserve(el);
    } else if (
      entry.rootBounds &&
      entry.boundingClientRect.top >= entry.rootBounds.bottom
    ) {
      // Entirely below the fold, so hiding it cannot be seen. Anything only
      // partially out of view is left alone rather than popped out.
      el.classList.add("reveal-armed");
    }
  }
}

/** One observer for the whole page — a guides index renders ~19 of these. */
let observer: IntersectionObserver | null = null;

function observe(el: Element) {
  observer ??= new IntersectionObserver(handle, {
    threshold: 0.2,
    rootMargin: "0px 0px -8% 0px",
  });
  observer.observe(el);
  return observer;
}

/** Adds the `in-view` class when scrolled into view, driving CSS reveals. */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = observe(el);
    return () => io.unobserve(el);
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
