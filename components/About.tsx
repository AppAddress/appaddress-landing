import { COMPANY_NAME } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl leading-snug text-ink sm:text-4xl">
            {/* COMPANY_NAME is the exact legal name — Meta verification anchor. */}
            {COMPANY_NAME} is the company behind RemindPulse, our flagship
            product.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            We&rsquo;re an independent studio in Pune, India — building software
            with global ambition, focused on shipping effective, custom-made
            tools that last.
          </p>
        </div>
      </div>
    </section>
  );
}
