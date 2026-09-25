export type ExperienceItem = {
  id: string;
  org: string;
  role: string;
  start: string;
  end: string;
  current?: boolean;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "verisimple",
    org: "VeriSimple",
    role: "Mobile Developer Intern",
    start: "Jun 2026",
    end: "Sep 2026",
    bullets: [
      "Flutter/Dart modules for VeriSimple-Mobil",
      "Widget tree and render optimization",
      "Complex state management",
      "Futures/Streams and JSON serialization for REST APIs",
      "OOP, Clean Architecture, SOLID",
      "Git workflow with branching, commit standards, PRs and code reviews",
    ],
  },
  {
    id: "tulpar",
    org: "TULPAR-FF UAV Team",
    role: "Software Team Member",
    start: "2025",
    end: "Present",
    current: true,
    bullets: [
      "Autonomous UAV software integrating Raspberry Pi, LiDAR, telemetry, GPS and sensors for TEKNOFEST and AUVSI SUAS",
    ],
  },
  {
    id: "baditech",
    org: "Baditech",
    role: "Full Stack Mobile Developer",
    start: "Jul 2025",
    end: "May 2026",
    bullets: [
      "Flutter/Dart with Provider, Firebase Auth, REST integration against FastAPI + PostgreSQL",
      "Worked on VetApp and StudyFlow",
    ],
  },
  {
    id: "iotio",
    org: "Iotio",
    role: "Software Developer Intern",
    start: "Sep 2025",
    end: "Jan 2026",
    bullets: [
      "IoT architectures",
      "NFC-based mobile systems",
      "API integrations",
      "Performance optimization",
    ],
  },
  {
    id: "denizbank",
    org: "DenizBank DenizAşırı Internship Program",
    role: "Intern",
    start: "Jan 2025",
    end: "Aug 2025",
    bullets: [
      "Blockchain",
      "Banking applications",
      "Data science",
      "Agile transformation",
    ],
  },
  {
    id: "google-ai",
    org: "Google AI Technology Academy",
    role: "AI Web Development Trainee",
    start: "Jan 2025",
    end: "Aug 2025",
    bullets: [
      "AI applications",
      "ML solutions",
      "Google Project Management training",
    ],
  },
];

export const education = [
  {
    id: "iau",
    school: "Istanbul Aydin University",
    program: "B.Sc. Software Engineering",
    start: "Sep 2022",
    end: "Present",
    detail: "GPA 3.23 / 4.00",
  },
  {
    id: "sofito",
    school: "SoftITO",
    program: "Mobile Application Development",
    start: "Mar 2025",
    end: "Aug 2025",
    detail: "320 hours",
  },
  {
    id: "yetgen",
    school: "YetGen",
    program: "21st Century Competencies",
    start: "Apr 2024",
    end: "May 2024",
    detail: null,
  },
] as const;

export const achievements = [
  {
    id: "tubitak",
    title: "TÜBİTAK 2209",
    detail:
      "TÜBİTAK 2209 University Students Research Projects Support Program",
  },
  {
    id: "ideathon",
    title: "Ideathon 2nd place",
    detail: "Second place at an ideathon competition",
  },
  {
    id: "aws-gdg",
    title: "Community volunteer",
    detail: "AWS and Google Developer community volunteer",
  },
  {
    id: "events",
    title: "Builder circuit",
    detail: "Hackathons, bootcamps and ideathons",
  },
] as const;
