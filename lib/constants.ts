// -----------------------------------------------------------------------------
// Content constants — single source of truth.
//
// ⚠️ COMPANY_NAME is legally significant (Meta Business Verification / Udyam).
// It must stay EXACTLY "AppAddress" — one word, two capital A's. Never inline
// the company name anywhere else; always reference COMPANY_NAME so it can never
// drift out of sync.
// -----------------------------------------------------------------------------

export const COMPANY_NAME = "AppAddress";

export const TAGLINE = "We build highly effective, custom-made products.";

export const HERO_SUPPORTING =
  "A product house crafting software that solves real problems — built to be effective, tailored, and lasting.";

// Placeholder business contact. Will later be swapped for a business-domain
// address — change it here and it updates everywhere.
export const CONTACT_EMAIL = "alphanikbusiness@gmail.com";

export type Product = {
  name: string;
  blurb: string;
  url: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "RemindPulse",
    blurb:
      "Automated WhatsApp appointment reminders for clinics. Fewer no-shows, less manual follow-up.",
    url: "https://remindpulse.appaddress.net",
  },
];

export const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const COPYRIGHT_YEAR = 2026;
