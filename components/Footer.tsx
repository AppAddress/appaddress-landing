import Link from "next/link";
import { COMPANY_NAME, CONTACT_EMAIL, COPYRIGHT_YEAR } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {COPYRIGHT_YEAR} {COMPANY_NAME}
        </p>
        <nav
          aria-label="Legal"
          className="flex items-center gap-6"
        >
          <Link
            href="/privacy"
            className="transition-colors hover:text-accent"
          >
            Privacy Policy
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="transition-colors hover:text-accent"
          >
            {CONTACT_EMAIL}
          </a>
        </nav>
      </div>
    </footer>
  );
}
