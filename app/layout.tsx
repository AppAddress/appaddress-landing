import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { COMPANY_NAME, TAGLINE } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://appaddress.net"),
  title: `${COMPANY_NAME} — ${TAGLINE}`,
  description:
    "AppAddress is a product house that builds highly effective, custom-made software products. RemindPulse is its flagship.",
  openGraph: {
    title: `${COMPANY_NAME} — ${TAGLINE}`,
    description:
      "A product house crafting software that solves real problems — effective, tailored, and lasting.",
    url: "https://appaddress.net",
    siteName: COMPANY_NAME,
    type: "website",
  },
  alternates: {
    canonical: "https://appaddress.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans`}>{children}</body>
    </html>
  );
}
