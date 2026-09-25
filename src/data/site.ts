export const site = {
  name: "Nergiz Alıcı",
  firstName: "Nergiz",
  lastName: "Alıcı",
  title: "Software Engineering Student",
  location: "Istanbul, Türkiye",
  email: "nergizallici@gmail.com",
  github: {
    label: "GitHub",
    handle: "nergizal",
    href: "https://github.com/nergizal",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nergiz-al%C4%B1c%C4%B1/",
  },
  cvPath: "/Nergiz_Alici_CV.pdf",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nergizalici.vercel.app",
  openToWork: true,
  roles: [
    "Full-Stack Mobile Developer",
    "AI & ML Builder",
    "UAV Software Developer",
  ],
  pitch:
    "I learn by building: Flutter apps, FastAPI microservices, LLM-powered products and autonomous UAV software.",
  goal: "Grow as a junior engineer who turns ideas into working, user-facing products.",
  lookingFor: "Open to junior / internship roles",
  currentlyLearning: "Production Flutter systems, LLM product UX, UAV autonomy",
  community: "AWS & Google Developer communities",
  competitions: "TEKNOFEST · AUVSI SUAS",
} as const;

export type SiteConfig = typeof site;
