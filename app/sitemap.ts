import { MetadataRoute } from "next";
import { getAllResourceSlugs } from "@/lib/mdx";
import { SERVICES } from "@/lib/services-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://trustedops.team";

  const staticRoutes = [
    "",
    "/how-it-works",
    "/services",
    "/resources",
    "/contact",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const categoryRoutes = SERVICES.map((cat) => ({
    url: `${base}/services/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const slugs = await getAllResourceSlugs();
  const resourceRoutes = slugs.map((slug) => ({
    url: `${base}/resources/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...resourceRoutes];
}
