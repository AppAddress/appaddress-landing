import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import {
  COMPANY_NAME,
  CONTACT_EMAIL,
  PRIVACY_LAST_UPDATED,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy — ${COMPANY_NAME}`,
  description: `How ${COMPANY_NAME} and its product RemindPulse collect, use, and protect personal data, including WhatsApp appointment-reminder data.`,
  alternates: {
    canonical: "https://appaddress.net/privacy",
  },
};

// Small presentational helper so each clause reads the same way. Legal copy is
// long and repetitive; this keeps the markup honest to the content.
function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 space-y-4">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <div className="space-y-4 leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
      <header className="border-b border-line bg-surface/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-ink"
          >
            {COMPANY_NAME}
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-ink-soft transition-colors hover:text-accent"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted">
          Last updated {PRIVACY_LAST_UPDATED}
        </p>

        <div className="mt-12 space-y-12">
          <Section title="1. Who we are">
            <p>
              <span className="font-semibold text-ink">{COMPANY_NAME}</span> is a
              sole proprietorship registered in India (Udyam Registration No.
              UDYAM-MH-01-0327537), based in Pune, Maharashtra, India. This
              Privacy Policy explains how we handle personal data across{" "}
              {COMPANY_NAME} and our flagship product,{" "}
              <span className="font-semibold text-ink">RemindPulse</span>.
            </p>
            <p>
              For any question about this policy or your data, contact us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-accent underline underline-offset-2 hover:text-accent-strong"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section title="2. About RemindPulse">
            <p>
              RemindPulse is a service that sends automated appointment reminders
              to a clinic&apos;s patients over WhatsApp, to reduce no-shows and
              manual follow-up. Clinics are our customers; their patients are the
              people who receive reminder messages.
            </p>
            <p>
              Reminder messages are delivered through the WhatsApp Business
              Platform, operated by Meta Platforms, Inc. (&quot;Meta&quot;).
            </p>
          </Section>

          <Section title="3. Information we collect">
            <p>To provide RemindPulse, we collect and process:</p>
            <ul className="list-disc space-y-2 pl-6 marker:text-muted">
              <li>
                <span className="font-medium text-ink">
                  Patient phone numbers
                </span>{" "}
                — provided to us by the clinic, so that a reminder can be
                delivered to the correct recipient on WhatsApp.
              </li>
              <li>
                <span className="font-medium text-ink">Appointment details</span>{" "}
                — such as the patient&apos;s name and the date and time of the
                appointment, used to compose the reminder message.
              </li>
              <li>
                <span className="font-medium text-ink">Clinic account data</span>{" "}
                — the contact and login details of the clinic staff who use the
                service.
              </li>
            </ul>
            <p>
              We do not ask clinics to send us clinical or medical records, and
              RemindPulse is not intended to store diagnoses, treatment notes, or
              other sensitive health information.
            </p>
          </Section>

          <Section title="4. How we use information">
            <p>We use the information above only to:</p>
            <ul className="list-disc space-y-2 pl-6 marker:text-muted">
              <li>schedule and deliver appointment-reminder messages;</li>
              <li>
                operate, secure, support, and improve the RemindPulse service;
              </li>
              <li>
                communicate with clinic account holders about their use of the
                service.
              </li>
            </ul>
            <p>
              We do not sell personal data, and we do not use patient phone
              numbers or appointment details for advertising.
            </p>
          </Section>

          <Section title="5. Consent and legal basis">
            <p>
              Clinics are responsible for obtaining their patients&apos; consent
              to receive reminder messages and for providing patient data to us
              lawfully. We process patient data on the clinic&apos;s instructions
              for the limited purpose of sending reminders.
            </p>
          </Section>

          <Section title="6. How information is shared">
            <p>
              We share personal data only where it is necessary to run the
              service:
            </p>
            <ul className="list-disc space-y-2 pl-6 marker:text-muted">
              <li>
                <span className="font-medium text-ink">
                  Meta / WhatsApp Business Platform
                </span>{" "}
                — phone numbers and message content are transmitted to Meta in
                order to deliver reminders over WhatsApp. Meta&apos;s handling of
                that data is governed by Meta&apos;s own terms and policies.
              </li>
              <li>
                <span className="font-medium text-ink">Service providers</span> —
                the cloud hosting and database providers that store data on our
                behalf, under confidentiality obligations and only to run the
                service.
              </li>
              <li>
                <span className="font-medium text-ink">Legal requirements</span> —
                where we are required to disclose data by applicable law.
              </li>
            </ul>
            <p>We do not share personal data for any other purpose.</p>
          </Section>

          <Section title="7. Data retention">
            <p>
              We retain patient phone numbers and appointment details only for as
              long as the clinic maintains an active RemindPulse account and the
              data is needed to send reminders. When a clinic closes its account,
              or on a valid deletion request, we delete the associated personal
              data within 30 days, except where we are required to retain it by
              law.
            </p>
          </Section>

          <Section
            id="data-deletion"
            title="8. How to request deletion of your data"
          >
            <p>
              You can ask us to delete personal data we hold:
            </p>
            <ul className="list-disc space-y-2 pl-6 marker:text-muted">
              <li>
                <span className="font-medium text-ink">Patients</span> — if you
                received a reminder and want your number and appointment details
                removed, email{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent underline underline-offset-2 hover:text-accent-strong"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                from, or referencing, the relevant phone number, or ask the
                clinic that scheduled your appointment.
              </li>
              <li>
                <span className="font-medium text-ink">Clinics</span> — email us
                from your account address to request deletion of your account and
                all patient data held under it.
              </li>
            </ul>
            <p>
              We will confirm and complete verified deletion requests within 30
              days.
            </p>
          </Section>

          <Section title="9. Data security">
            <p>
              We use reasonable technical and organisational measures to protect
              personal data against unauthorised access, loss, or misuse. No
              method of transmission or storage is completely secure, but we work
              to protect your information and to limit who can access it.
            </p>
          </Section>

          <Section title="10. International data transfers">
            <p>
              We are based in India, and data may be processed in India and in
              other countries where our service providers (including Meta) operate.
              Where data is transferred across borders, we take steps to ensure it
              remains protected consistent with this policy.
            </p>
          </Section>

          <Section title="11. Children&apos;s privacy">
            <p>
              RemindPulse is a tool for clinics, not a service directed to
              children. We do not knowingly collect data directly from children.
              Where an appointment reminder concerns a minor, the data is provided
              and managed by the clinic under its own obligations.
            </p>
          </Section>

          <Section title="12. Changes to this policy">
            <p>
              We may update this policy from time to time. When we do, we will
              revise the &quot;Last updated&quot; date above. Material changes will
              be reflected on this page.
            </p>
          </Section>

          <Section title="13. Contact us">
            <p>
              Questions, requests, or complaints about this policy or your data
              can be sent to{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-accent underline underline-offset-2 hover:text-accent-strong"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>
        </div>
      </main>

      <Footer />
    </>
  );
}
