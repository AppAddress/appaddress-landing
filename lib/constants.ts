// -----------------------------------------------------------------------------
// Content constants — single source of truth.
//
// ⚠️ COMPANY_NAME is legally significant (Meta Business Verification / Udyam).
// It must stay EXACTLY "AppAddress" — one word, two capital A's. Never inline
// the company name anywhere else; always reference COMPANY_NAME so it can never
// drift out of sync.
// -----------------------------------------------------------------------------

export const COMPANY_NAME = "AppAddress";

// Used in page metadata (title / OG). Kept separate from the hero copy below.
export const TAGLINE = "We build highly effective, custom-made products.";

// Hero display statement — set in the editorial serif, across two lines.
export const HERO_LINE_A = "A product house.";
export const HERO_LINE_B = "We build software that lasts.";

// Supporting line under the hero statement. Intentionally omits the company
// name (the nav wordmark and About section carry it) per the rule above.
export const HERO_SUPPORTING =
  "An independent studio in Pune, India — making effective, custom-made tools, and the home of RemindPulse.";

// Placeholder business contact. Will later be swapped for a business-domain
// address — change it here and it updates everywhere.
export const CONTACT_EMAIL = "alphanikbusiness@gmail.com";

export type Product = {
  name: string;
  blurb: string;
  url: string;
  status: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "RemindPulse",
    blurb:
      "WhatsApp appointment reminders for clinics — fewer no-shows, less manual follow-up.",
    url: "https://remindpulse.appaddress.net",
    status: "Live",
  },
];

export const NAV_LINKS = [
  { label: "Work", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const COPYRIGHT_YEAR = 2026;

// Date the privacy policy was last reviewed. Update this whenever the policy
// text on /privacy changes — reviewers (and users) check it, and a stale date
// reads as an unmaintained policy.
export const PRIVACY_LAST_UPDATED = "27 November 2026";
