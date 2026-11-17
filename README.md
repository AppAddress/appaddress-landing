# AppAddress — Company Landing Page

The parent-company landing page for **AppAddress**, a product house. Single static
page served at the apex domain **`appaddress.net`**, hosted as its own Vercel project.

## Stack

- **Next.js 15 (App Router)** + **TypeScript** + **Tailwind CSS v4**
- Fully static (no server, database, or CMS). Single route (`/`).

## Project layout

```
app/
  layout.tsx       Root layout, fonts, metadata
  page.tsx         Composes the section components
  globals.css      Tailwind + brand design tokens (@theme)
components/        One component per section:
  Nav  Hero  WhatWeDo  Products  About  Contact  Footer
lib/
  constants.ts     ⭐ Single source of truth for all content
```

### Editing content

Everything editable — company name, tagline, contact email, product list — lives in
`lib/constants.ts`. **Do not inline these anywhere else.**

> ⚠️ `COMPANY_NAME` must stay exactly `AppAddress` (one word, two capital A's). It is
> used for Meta Business Verification / Udyam and must match those records byte-for-byte.

### Retheming

The brand accent (a deep indigo, deliberately **not** RemindPulse's teal) is a single
token — `--color-accent` in `app/globals.css`. Change it there and the whole site
restyles. A dedicated UI/UX polish pass is planned; components are kept clean and plain
to make that easy.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy (Vercel — new, separate project)

1. Push this repo to GitHub and **import it into Vercel as a new project** (do **not**
   reuse the RemindPulse project). Framework preset: **Next.js** (auto-detected).
2. In **Settings → Domains**, add:
   - `appaddress.net` (apex)
   - `www.appaddress.net` (set to redirect to the apex)
3. **DNS is on Cloudflare.** Add the records Vercel shows (an **A record** for the apex,
   a **CNAME** for `www`). Set them to **DNS only (grey cloud — NOT proxied)**; the orange
   proxy breaks Vercel verification/SSL. Do **not** change nameservers.
4. ⚠️ `remindpulse.appaddress.net` already points to the RemindPulse app on Cloudflare —
   **leave that record untouched.** Only add the apex `@` and `www`.
