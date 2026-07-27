import OptimizedImage from "@/components/optimized-image";
import type { GuideBlock, GuideStep } from "@/lib/guides";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function Figure({
  src,
  alt,
  caption,
  width = 1440,
  height = 900,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="mt-6">
      <OptimizedImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full rounded-2xl border border-line"
        sizes="(max-width: 768px) 100vw, 720px"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Steps({ title, steps }: { title?: string; steps: GuideStep[] }) {
  return (
    <div className="mt-6">
      {title && (
        <h3 className="font-display text-xl font-bold tracking-tight text-ink">
          {title}
        </h3>
      )}
      <ol className="mt-4 flex flex-col gap-5">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-4">
            <span
              className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-bold text-accent-deep"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-ink">{step.title}</p>
              <p className="mt-1 leading-relaxed text-ink-soft">{step.text}</p>
              {step.image && (
                <Figure src={step.image.src} alt={step.image.alt} />
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-ink">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-ink">
          {block.text}
        </h3>
      );
    case "p":
      return <p className="mt-5 text-lg leading-relaxed text-ink-soft">{block.text}</p>;
    case "list": {
      const cls = "mt-5 flex flex-col gap-2.5 pl-5 text-lg leading-relaxed text-ink-soft";
      const items = block.items.map((item, i) => (
        <li key={i} className="pl-1 marker:text-accent">
          {item}
        </li>
      ));
      return block.ordered ? (
        <ol className={`list-decimal ${cls} marker:font-semibold`}>{items}</ol>
      ) : (
        <ul className={`list-disc ${cls}`}>{items}</ul>
      );
    }
    case "quote":
      return (
        <blockquote className="mt-8 border-l-4 border-accent pl-5">
          <p className="font-display text-xl font-semibold leading-snug text-ink">
            {block.text}
          </p>
          {block.cite && <cite className="mt-2 block text-sm text-ink-soft not-italic">— {block.cite}</cite>}
        </blockquote>
      );
    case "callout":
      return (
        <aside className="mt-8 rounded-2xl border border-accent/25 bg-accent-soft/50 p-5">
          <p className="text-sm font-semibold text-accent-deep">{block.title}</p>
          <p className="mt-1.5 leading-relaxed text-ink-soft">{block.text}</p>
        </aside>
      );
    case "image":
      return (
        <Figure
          src={block.src}
          alt={block.alt}
          caption={block.caption}
          width={block.width}
          height={block.height}
        />
      );
    case "steps":
      return <Steps title={block.title} steps={block.steps} />;
    case "video": {
      const src = `${basePath}${block.src}`;
      return (
        <figure className="mt-6">
          {block.src.endsWith(".gif") ? (
            // Animated GIFs bypass the image optimizer (it would flatten them).
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={block.alt}
              loading="lazy"
              className="w-full rounded-2xl border border-line"
            />
          ) : (
            <video
              src={src}
              aria-label={block.alt}
              className="w-full rounded-2xl border border-line"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          )}
          {block.caption && (
            <figcaption className="mt-2 text-center text-sm text-ink-soft">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    }
  }
}

export default function GuideBody({ body }: { body: GuideBlock[] }) {
  return (
    <div>
      {body.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}
