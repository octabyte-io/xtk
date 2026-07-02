import Reveal from "./reveal";

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "center" | "left";
}) {
  const alignCls =
    align === "center" ? "items-center text-center mx-auto" : "items-start";
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignCls}`}>
      <span className="inline-flex w-fit items-center rounded-full bg-accent-soft px-3.5 py-1 text-sm font-medium text-accent-deep">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {lede && (
        <p className="text-lg leading-relaxed text-ink-soft">{lede}</p>
      )}
    </Reveal>
  );
}
