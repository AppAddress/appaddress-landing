import { COMPANY_NAME, CONTACT_EMAIL, COPYRIGHT_YEAR } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {COPYRIGHT_YEAR} {COMPANY_NAME}
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="transition-colors hover:text-accent"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
}
