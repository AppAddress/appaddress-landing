import type { MetadataRoute } from "next";

// File-based robots. Next serves this at /robots.txt. The whole site is public
// and crawlable; the only thing we point crawlers to is the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://appaddress.net/sitemap.xml",
  };
}
