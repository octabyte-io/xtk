"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

// The <video> src and poster are plain attributes, so Next does not apply the
// GitHub Pages basePath to them the way it does for next/link and next/image.
// Same manual injection as ./guide-body.tsx and ../optimized-image.tsx.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** 103.1s as cut. Written out rather than rounded to "90 seconds". */
const DURATION = "1:43";

/**
 * False in the exported HTML, true once React takes over — the plain way to
 * render something only on the client, with no setState inside an effect.
 */
const noop = () => () => {};
function useHydrated() {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
}

function PlayGlyph() {
  return (
    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" aria-hidden="true">
      <path d="M3 2.6a1 1 0 0 1 1.52-.85l14.4 8.7a1.4 1.4 0 0 1 0 2.4l-14.4 8.7A1 1 0 0 1 3 20.7V2.6Z" fill="currentColor" />
    </svg>
  );
}

/**
 * The demo film, poster-first. `preload="none"` means the 6 MB file is not
 * fetched until someone presses play — the poster carries the page until then.
 *
 * The overlay renders only after mount, so with JavaScript off the browser's
 * own controls are never covered by a button that cannot do anything.
 */
export default function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hydrated = useHydrated();
  const [started, setStarted] = useState(false);

  function start() {
    setStarted(true);
    videoRef.current?.play();
  }

  return (
    <section
      id="demo"
      className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28"
    >
      <SectionHeading
        eyebrow="See it work"
        title="The panel, opening inside Practice Manager"
        lede="Under two minutes, and no sound needed — the captions are burned in. It follows one document from the client's own folder to signed, certified, and filed back beside the original."
      />

      <Reveal className="mt-12 sm:mt-16">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-line bg-ink shadow-[0_40px_80px_-40px_rgba(13,34,66,0.35)]">
          <video
            ref={videoRef}
            className="block aspect-video w-full"
            src={`${basePath}/video/xtk-demo.mp4`}
            poster={`${basePath}/video/xtk-demo-poster.jpg`}
            preload="none"
            // Two play buttons otherwise: the browser paints its control bar
            // over the poster, and native controls live in a shadow root that
            // always sits above our overlay. Off only while the overlay is up,
            // so the exported HTML — which never renders the overlay — keeps
            // them and stays playable with JavaScript off.
            controls={!hydrated || started}
            playsInline
            onPlay={() => setStarted(true)}
            aria-label="XTK demo: a client's documents, a PDF sent for signature, signed by the client, and the signed file back in the practice's own storage"
          />

          {hydrated && !started && (
            <button
              type="button"
              onClick={start}
              className="group absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-4 bg-ink/15 transition-colors hover:bg-ink/25"
            >
              <span className="flex size-[72px] items-center justify-center rounded-full bg-surface pl-1 text-accent-deep shadow-[0_16px_40px_-12px_rgba(13,34,66,0.6)] transition-transform group-hover:scale-105">
                <PlayGlyph />
              </span>
              <span className="rounded-full bg-ink/85 px-4 py-1.5 text-sm font-medium text-white">
                Watch the demo · {DURATION}
              </span>
            </button>
          )}
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-ink-soft">
          Acme Trading Ltd, its contacts and its documents are dummy data.
          Nothing in this recording is a real practice, client or file.
        </p>
      </Reveal>
    </section>
  );
}
