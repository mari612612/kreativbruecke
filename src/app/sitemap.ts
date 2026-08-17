import type { MetadataRoute } from "next";

const BASE_URL = "https://kreativbruecke.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/ueber-uns", "/projekte", "/kontakt", "/impressum", "/datenschutz"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
