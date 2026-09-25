import { site } from "@/data/site";
import { projects } from "@/data/projects";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: site.url,
      lastModified: new Date(),
    },
    ...projectRoutes,
  ];
}
