import { MetadataRoute } from "next";
import { getAllResourceSlugs } from "@/lib/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://trustedops.example";

  const staticRoutes = [
    "",
    "/how-it-works",
    "/services",
    "/security",
    "/resources",
    "/contact",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const slugs = await getAllResourceSlugs();
  const resourceRoutes = slugs.map((slug) => ({
    url: `${base}/resources/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...resourceRoutes];
}
