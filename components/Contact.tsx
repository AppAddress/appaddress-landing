import { CONTACT_EMAIL } from "@/lib/constants";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">
          Let&rsquo;s talk
        </h2>
        <p className="mt-4 max-w-md leading-relaxed text-muted">
          Open to the right collaborations. The fastest way to reach us:
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-8 inline-block font-serif text-2xl text-ink underline decoration-line underline-offset-8 transition-colors hover:text-accent hover:decoration-accent sm:text-3xl"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}
