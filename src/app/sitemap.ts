import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/awakenData";

const BASE = "https://www.awakenbg.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/menu",
    "/cakes",
    "/our-story",
    "/take-and-bake",
    "/holiday",
    "/contact",
    "/faq",
  ].map((route) => ({
    url: `${BASE}${route}`,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${BASE}/products/${p.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
