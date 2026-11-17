import { COMPANY_NAME, NAV_LINKS } from "@/lib/constants";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/85 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a
          href="#top"
          className="text-lg font-semibold tracking-tight text-ink"
        >
          {COMPANY_NAME}
        </a>
        <ul className="flex items-center gap-6 text-sm font-medium text-ink-soft">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
