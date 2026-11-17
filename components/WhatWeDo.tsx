const VALUES = [
  {
    title: "Effective",
    body: "Products that deliver measurable outcomes, not features for their own sake.",
  },
  {
    title: "Custom-made",
    body: "Purpose-built for a real need, not generic templates.",
  },
  {
    title: "Built to last",
    body: "Reliable, maintained, and designed to grow.",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
          What we do
        </h2>
        <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug text-ink">
          A product house that builds its own software end-to-end — and is open to
          the right collaborations.
        </p>

        <dl className="mt-14 grid gap-10 sm:grid-cols-3">
          {VALUES.map((value) => (
            <div key={value.title}>
              <dt className="text-lg font-semibold text-ink">{value.title}</dt>
              <dd className="mt-2 leading-relaxed text-muted">{value.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
