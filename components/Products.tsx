import { PRODUCTS } from "@/lib/constants";

// The products are presented as residents listed at the address — a real
// directory with dotted leaders, grounded in the brand name itself.
export function Products() {
  return (
    <section id="products" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">
          At this address
        </h2>
        <p className="mt-4 max-w-md leading-relaxed text-muted">
          The products we build and run.
        </p>

        <ul className="mt-14 border-t border-line">
          {PRODUCTS.map((product) => (
            <li key={product.name} className="border-b border-line">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-7"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-2xl text-ink transition-colors group-hover:text-accent">
                    {product.name}
                  </span>
                  <span
                    aria-hidden
                    className="hidden flex-1 -translate-y-[0.35rem] border-b border-dotted border-line sm:block"
                  />
                  <span className="inline-flex items-center gap-2 whitespace-nowrap text-sm text-ink">
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                    {product.status}
                  </span>
                </div>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                  {product.blurb}
                </p>
                <span className="sr-only">
                  {product.name} (opens in a new tab)
                </span>
              </a>
            </li>
          ))}

          {/* Portfolio signal: more products to come. */}
          <li className="border-b border-line py-7">
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-2xl text-muted">
                More products
              </span>
              <span
                aria-hidden
                className="hidden flex-1 -translate-y-[0.35rem] border-b border-dotted border-line sm:block"
              />
              <span className="whitespace-nowrap text-sm text-muted">Soon</span>
            </div>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
              In the workshop.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
