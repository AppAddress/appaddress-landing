import { CONTACT_EMAIL } from "@/lib/constants";

export function Contact() {
  return (
    <section id="contact" className="bg-surface-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
          Contact
        </h2>
        <p className="mt-4 text-2xl font-medium leading-snug text-ink">
          Get in touch.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          Open to the right collaborations — reach out.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-strong"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}
