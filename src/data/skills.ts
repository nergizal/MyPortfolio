export type SkillGroupId =
  | "mobile"
  | "backend"
  | "databases"
  | "aiml"
  | "languages"
  | "web"
  | "iot"
  | "tools";

export type SkillGroup = {
  id: SkillGroupId;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "mobile",
    items: [
      "Flutter",
      "Dart",
      "Provider",
      "Futures / Streams",
      "JSON serialization",
      "REST API integration",
      "Widget tree & render performance",
      "Responsive UI",
      "NFC-based mobile systems",
    ],
  },
  {
    id: "backend",
    items: [
      "Python",
      "FastAPI",
      "RESTful API design",
      "SQLAlchemy",
      "Microservices",
      "RabbitMQ",
      "Redis",
      "MVC",
      "OOP",
      "SOLID",
      "Clean Architecture",
      "Firebase Authentication",
    ],
  },
  {
    id: "databases",
    items: ["PostgreSQL", "MongoDB", "SQLite", "Redis"],
  },
  {
    id: "aiml",
    items: [
      "Machine Learning",
      "NLP",
      "TF-IDF",
      "Scikit-Learn",
      "LLM integration",
      "Prompt engineering",
      "Google Gemini API",
      "Text / symptom classification",
    ],
  },
  {
    id: "languages",
    items: ["Python", "Dart", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    id: "web",
    items: ["React", "Express.js", "Mapping APIs", "API integration"],
  },
  {
    id: "iot",
    items: [
      "Raspberry Pi",
      "LiDAR",
      "GPS",
      "Telemetry",
      "Sensor integration",
      "NFC",
    ],
  },
  {
    id: "tools",
    items: [
      "Git (branching, PRs, code review)",
      "GitHub",
      "Agile",
      "Software testing",
    ],
  },
];

export const marqueeTech = [
  "Flutter",
  "Dart",
  "FastAPI",
  "PostgreSQL",
  "Firebase",
  "React",
  "TypeScript",
  "Python",
  "Scikit-Learn",
] as const;
