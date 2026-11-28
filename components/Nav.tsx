import { COMPANY_NAME, NAV_LINKS } from "@/lib/constants";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/80 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
      >
        <a href="#top" className="font-serif text-xl tracking-tight text-ink">
          {COMPANY_NAME}
        </a>
        <ul className="flex items-center gap-8 text-sm text-muted">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
