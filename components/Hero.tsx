import { COMPANY_NAME, TAGLINE, HERO_SUPPORTING } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line"
    >
      {/* Subtle, restrained accent wash — no stock imagery. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-soft to-transparent"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <p className="mb-5 inline-block rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted">
          Product house
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-7xl">
          {COMPANY_NAME}
        </h1>
        <p className="mt-6 max-w-2xl text-2xl font-medium text-ink sm:text-3xl">
          {TAGLINE}
        </p>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          {HERO_SUPPORTING}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-strong"
          >
            See our products
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-line bg-surface px-6 py-3 text-base font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
