import type { Metadata } from "next";
import { site } from "@/data/site";

// site.url boşsa Vercel domainini veya localhost'u güvenli URL olarak belirle
const defaultUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : "http://localhost:3000";

const safeUrl = site.url || defaultUrl;

export const siteMetadata: Metadata = {
  metadataBase: new URL(safeUrl),
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
  authors: [{ name: site.name, url: safeUrl }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: safeUrl,
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
    canonical: safeUrl,
  },
};