import type { PostBlock } from "@/lib/posts";

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-ink">
          {block.text}
        </h2>
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
  }
}

export default function PostBody({ body }: { body: PostBlock[] }) {
  return (
    <div>
      {body.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}
