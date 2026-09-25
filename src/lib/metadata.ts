import type { Metadata } from "next";
import { site } from "@/data/site";

export const siteMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: `${site.pitch} ${site.lookingFor}.`,
  keywords: [
    "Nergiz Alıcı",
    "Flutter",
    "FastAPI",
    "full-stack mobile developer",
    "AI/ML",
    "Istanbul",
    "junior software engineer",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Full-Stack Mobile Developer`,
    description: site.pitch,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Full-Stack Mobile Developer`,
    description: site.pitch,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: site.url,
  },
};
