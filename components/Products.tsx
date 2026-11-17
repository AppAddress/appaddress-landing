import { PRODUCTS } from "@/lib/constants";

export function Products() {
  return (
    <section id="products" className="border-b border-line bg-surface-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
          Products
        </h2>
        <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug text-ink">
          Software we&rsquo;ve built, shipping in the real world.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <li
              key={product.name}
              className="flex flex-col rounded-xl border border-line bg-surface p-6 transition-shadow hover:shadow-sm"
            >
              <h3 className="text-xl font-semibold text-ink">{product.name}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">
                {product.blurb}
              </p>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
              >
                Visit
                <span aria-hidden>&rarr;</span>
                <span className="sr-only">{product.name} (opens in a new tab)</span>
              </a>
            </li>
          ))}

          {/* Portfolio signal: more products to come. */}
          <li className="flex flex-col items-start justify-center rounded-xl border border-dashed border-line bg-transparent p-6">
            <h3 className="text-xl font-semibold text-muted">More products</h3>
            <p className="mt-3 leading-relaxed text-muted">Coming soon.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
