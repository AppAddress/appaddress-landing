import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { COMPANY_NAME, TAGLINE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

const OG_DESCRIPTION =
  "A product house crafting software that solves real problems — effective, tailored, and lasting.";

export const metadata: Metadata = {
  metadataBase: new URL("https://appaddress.net"),
  // `default` is used as-is on the homepage; `template` wraps every child
  // page's own title, e.g. the privacy page renders "Privacy Policy — AppAddress".
  title: {
    default: `${COMPANY_NAME} — ${TAGLINE}`,
    template: `%s — ${COMPANY_NAME}`,
  },
  description:
    "AppAddress is a product house that builds highly effective, custom-made software products. RemindPulse is its flagship.",
  applicationName: COMPANY_NAME,
  keywords: [
    COMPANY_NAME,
    "RemindPulse",
    "product house",
    "custom software development",
    "WhatsApp appointment reminders",
    "software studio India",
  ],
  authors: [{ name: COMPANY_NAME, url: "https://appaddress.net" }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  category: "technology",
  // og:image / twitter:image are injected automatically from the file-based
  // opengraph-image once that asset is added — no need to list them here.
  openGraph: {
    title: `${COMPANY_NAME} — ${TAGLINE}`,
    description: OG_DESCRIPTION,
    url: "https://appaddress.net",
    siteName: COMPANY_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} — ${TAGLINE}`,
    description: OG_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://appaddress.net",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
