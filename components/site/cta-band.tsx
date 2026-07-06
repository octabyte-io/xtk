import Reveal from "./reveal";
import ButtonLink from "./button-link";

export default function CtaBand() {
  return (
    <section id="get-xtk" className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
      <Reveal>
        <div className="hero-wash relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Give Practice Manager its missing half
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
            Install the extension, connect your Drive, and open your first
            client — your whole practice can be working in context today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="#">Add to Chrome</ButtonLink>
            <ButtonLink href="#" variant="secondary">
              Add to Firefox
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm text-ink-soft">
            30-day free trial for your whole practice — no credit card required.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
