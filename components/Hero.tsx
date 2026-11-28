import { HERO_LINE_A, HERO_LINE_B, HERO_SUPPORTING } from "@/lib/constants";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Single restrained accent glow — the one bold moment on the page. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent-soft blur-[140px]"
      />
      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-24 sm:pb-28 sm:pt-32">
        <h1 className="rise max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-7xl">
          {HERO_LINE_A}
          <span className="block text-muted">{HERO_LINE_B}</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
          {HERO_SUPPORTING}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-surface transition-opacity hover:opacity-90"
          >
            See our work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
