# AppAddress — Parent Company Landing Page Brief

> **For the builder:** This is a self-contained brief for building the AppAddress
> company landing page in a **separate repository**, hosted as its **own Vercel project**
> at the apex domain **`appaddress.net`**. You should be able to build the whole thing
> from this file without further questions. Build the **basic, well-structured version
> now**; a dedicated UI/UX polish pass will happen later, so prioritize clean structure,
> correct content, and semantic markup over visual flourish — but keep it tasteful and
> uncluttered.

---

## 1. What this is & why it exists

**AppAddress** is the parent company. It is a **product house**: it builds its own
highly effective, custom-made software products. **RemindPulse** (automated WhatsApp
appointment reminders for clinics) is the flagship, product #1 of several to come.
AppAddress is **also open to client/collaboration work later**, but that is a quiet
secondary signal today — not a sales funnel.

This page has **three jobs at once**:
1. **Credibility + ambition** — make an investor, a customer doing due diligence, and a
   future hire all think *"this is a real, serious company that ships quality."*
2. **Product showcase** — present RemindPulse as proof, with room to add more products.
3. **Meta Business Verification evidence** — a reviewer will visit `appaddress.net` to
   confirm AppAddress is a legitimate business. The page must visibly carry the **exact
   legal name, a real product on its own domain, and a contact method.** (See §8.)

## 2. Audience (deliberately balanced)
Investor · prospective customer (clinic) · Meta verification reviewer · future hire.
No single one dominates; the page reads as a confident company homepage.

## 3. Goals / Non-goals / Anti-goals
- **Goals:** look like a credible, globally-minded product company; present RemindPulse;
  carry legal-name + contact for verification; be trivially extensible to more products.
- **Non-goals:** no login, no backend, no database, no CMS, no blog, no client-services
  sales flow, no pricing. It's a static brochure.
- **Anti-goals (failure even if it "works"):** looking like a flashy/generic startup
  template; overpromising client services; burying or omitting the legal name/contact
  (would undercut Meta verification); anything that makes it read as a single-app site
  rather than a *company* site.

## 4. Brand identity — build fresh
AppAddress has **no existing brand assets** — create a fresh identity, distinct from
RemindPulse (which owns a teal palette) yet able to sit *above* it and future products.

**Direction:** clean, modern, confident — a *quiet, premium software-studio* feel.
Generous whitespace, strong typography, restrained color (one disciplined accent, not
a rainbow), no stock-photo clutter. Think "established studio," not "launch-week hype."
Pick a tasteful accent that is **not** RemindPulse's teal so the parent stays visually
independent. A simple wordmark ("AppAddress") is enough — no need for a complex logo.
Light mode is fine as the default. Must be fully **responsive** (mobile-first).

## 5. Stack & build
- **Next.js (App Router) + TypeScript + Tailwind CSS.** Static — no server/data.
- Chosen for: Vercel-native zero-config deploy, Tailwind for the later UI/UX pass, and
  clean extension to more products / a future "Work with us" page.
- Single route (`/`) composed of section components. Keep each section its own component
  (`Hero`, `WhatWeDo`, `Products`, `About`, `Contact`, `Footer`) so sections are easy to
  reorder and extend.
- Accessibility baseline: semantic landmarks (`header`/`main`/`footer`/`section`),
  real headings hierarchy, alt text, keyboard-focusable links.

## 6. Page structure & content (single-page scroll)

Minimal sticky nav: **AppAddress** wordmark (left) · links Products / About / Contact
(right, anchor-scroll).

### Hero
- H1: **AppAddress**
- Tagline: **"We build highly effective, custom-made products."**
- One supporting line: *"A product house crafting software that solves real problems —
  built to be effective, tailored, and lasting."* (reword freely, keep the meaning)
- Two buttons: **See our products** (scrolls to Products) · **Get in touch** (scrolls to
  Contact).

### What we do
Short intro that AppAddress is a product house building its own products end-to-end,
with a quiet note that it's open to the right collaborations. Three value points:
- **Effective** — products that deliver measurable outcomes, not features for their own sake.
- **Custom-made** — purpose-built for a real need, not generic templates.
- **Built to last** — reliable, maintained, and designed to grow.

### Products
A responsive card grid, built to hold many; **one real card now**:
- **RemindPulse** — "Automated WhatsApp appointment reminders for clinics. Fewer no-shows,
  less manual follow-up." → link/button **Visit →** to `https://remindpulse.appaddress.net`
  (opens in new tab).
- Include one muted **"More products coming soon"** placeholder card to signal a portfolio.

### About
2–4 lines establishing legitimacy (this block is the Meta-reviewer's anchor):
- AppAddress is the company behind RemindPulse.
- India-based, with global ambition.
- **Must contain the exact legal name `AppAddress`** (byte-for-byte — see §8).

### Contact
- Primary: email **`alphanikbusiness@gmail.com`** as a `mailto:` link.
  *(Builder note: this is a placeholder business contact; it will later be swapped for a
  business-domain email — keep it in one easily-editable constant.)*
- One light line: *"Open to the right collaborations — reach out."* (the quiet client-work
  door; do not build a form or services pitch).

### Footer
`© 2026 AppAddress` · contact email · optional one-line legal/attribution.
Keep the legal name exact here too.

## 7. Content constants (put these in one config/constants file)
```
COMPANY_NAME   = "AppAddress"            // exact, one word, two capital A's
TAGLINE        = "We build highly effective, custom-made products."
CONTACT_EMAIL  = "alphanikbusiness@gmail.com"   // placeholder; swap later
PRODUCTS       = [
  { name: "RemindPulse",
    blurb: "Automated WhatsApp appointment reminders for clinics.",
    url: "https://remindpulse.appaddress.net" }
]
```

## 8. ⚠️ Non-negotiable for Meta Business Verification
- The legal name must appear as **`AppAddress`** — exactly that spelling (one word, capital
  A, capital A; no space, no "App Address", no "Appaddress"). It must match the Meta
  Business Portfolio and the Udyam registration **byte-for-byte**. Use the `COMPANY_NAME`
  constant everywhere so it can never drift.
- The page must show a **reachable contact** (the email above) and **link to a real product
  on its own domain** (RemindPulse). Keep all three (name + contact + product) visible
  without login.

## 9. Deploy (Vercel, separate project)
- New repo → import into Vercel as a **new project** (do **not** reuse the RemindPulse
  project). Framework preset: **Next.js** (auto-detected, zero config).
- Add custom domain **`appaddress.net`** (apex) **and** `www.appaddress.net` (redirect to
  apex) in the new project's **Settings → Domains**.
- DNS is on **Cloudflare**. For the apex, Vercel will provide an **A record** (and a CNAME
  for `www`). In Cloudflare set the record(s) to **DNS only (grey cloud, NOT proxied)** —
  the orange proxy breaks Vercel verification/SSL. Do **not** change nameservers.
- ⚠️ The subdomain `remindpulse.appaddress.net` already exists on Cloudflare pointing to the
  RemindPulse app — **leave that record untouched.** Only add apex `@` and `www`.

## 10. Scope discipline
Build **the basic version now**: correct structure, real content, responsive, accessible,
tasteful-but-plain. **Do not** over-design — a separate professional UI/UX pass comes later
and will handle refined visuals, motion, and polish. Leave the section components clean and
easy to restyle.
