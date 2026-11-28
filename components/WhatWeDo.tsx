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
    <section id="what-we-do" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">How we build</h2>
        <dl className="mt-14 grid gap-12 sm:grid-cols-3">
          {VALUES.map((value) => (
            <div key={value.title}>
              <dt className="text-base font-medium text-ink">{value.title}</dt>
              <dd className="mt-3 leading-relaxed text-muted">{value.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
