import type { MetadataRoute } from "next";

// File-based sitemap, served at /sitemap.xml. Two routes today: the homepage
// and the privacy policy. Add new routes here as the site grows.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://appaddress.net";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
