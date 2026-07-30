import { geistMono } from "@/app/fonts";
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
                <Figure
                  src={step.image.src}
                  alt={step.image.alt}
                  width={step.image.width}
                  height={step.image.height}
                />
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Table({
  head,
  rows,
  caption,
  codeColumns = [],
}: {
  head: string[];
  rows: string[][];
  caption?: string;
  codeColumns?: number[];
}) {
  const cell = (text: string, col: number) =>
    codeColumns.includes(col) ? (
      <code className="whitespace-nowrap rounded bg-accent-soft/60 px-1.5 py-0.5 font-mono text-[13px] text-accent-deep">
        {text}
      </code>
    ) : (
      text
    );
  return (
    <figure className="mt-6">
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table className="w-full border-collapse text-left text-[15px] leading-relaxed">
          <thead>
            <tr className="border-b border-line bg-accent-soft/40">
              {head.map((h, i) => (
                <th
                  key={i}
                  scope="col"
                  className="px-4 py-2.5 font-display text-sm font-bold tracking-tight text-ink"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={r} className="border-b border-line/60 last:border-b-0">
                {row.map((c, i) => (
                  <td key={i} className="px-4 py-2.5 align-top text-ink-soft">
                    {cell(c, i)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
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
    case "table":
      return (
        <Table
          head={block.head}
          rows={block.rows}
          caption={block.caption}
          codeColumns={block.codeColumns}
        />
      );
    case "video": {
      return (
        <figure className="mt-6">
          {/* width/height reserve the aspect ratio before metadata arrives, and
              preload="metadata" keeps a below-the-fold clip off the initial
              load. The first frame stands in as the poster. */}
          <video
            src={`${basePath}${block.src}`}
            aria-label={block.alt}
            width={block.width}
            height={block.height}
            preload="metadata"
            className="h-auto w-full rounded-2xl border border-line"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
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
    <div className={geistMono.variable}>
      {body.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}
