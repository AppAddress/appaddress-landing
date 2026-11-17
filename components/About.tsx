import { COMPANY_NAME } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
          About
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-ink-soft">
          <p>
            {/* COMPANY_NAME is the exact legal name — Meta verification anchor. */}
            <span className="font-semibold text-ink">{COMPANY_NAME}</span> is the
            company behind RemindPulse, our flagship product.
          </p>
          <p>
            We are India-based, building software with global ambition — a product
            house focused on shipping effective, custom-made tools that last.
          </p>
        </div>
      </div>
    </section>
  );
}
