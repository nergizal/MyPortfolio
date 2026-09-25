export type ProjectCategory = "mobile" | "aiml" | "backend" | "web" | "iot";

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  featured: boolean;
  categories: ProjectCategory[];
  tech: string[];
  github?: string;
  demo?: string;
  mockup?: "studyflow" | "vetapp" | "moodify" | "istanbulkart";
  cover: {
    from: string;
    to: string;
  };
  overview: string;
  role: string;
  architecture: string;
  features: string[];
  challenges: string;
};

export const projects: Project[] = [
  {
    slug: "real-time-fraud-detection",
    title: "Real-Time Fraud Detection System",
    oneLiner:
      "Real-time e-commerce anomaly and fraud monitoring platform built during an internship program.",
    featured: true,
    categories: ["backend", "web"],
    tech: ["FastAPI", "RabbitMQ", "Redis", "MongoDB", "MVC", "React"],
    cover: { from: "#7c3aed", to: "#22d3ee" },
    overview:
      "A real-time e-commerce anomaly and fraud monitoring platform. Microservice architecture with asynchronous messaging, caching, rule-based fraud detection, and a React front end.",
    role: "[ADD: my specific contribution]",
    architecture:
      "Microservices communicating asynchronously (RabbitMQ), caching with Redis, MongoDB persistence, MVC structure, React client.",
    features: [
      "Asynchronous messaging between services",
      "Caching",
      "Rule-based fraud detection",
      "React front end",
    ],
    challenges: "[ADD: challenges & what I learned]",
  },
  {
    slug: "studyflow",
    title: "StudyFlow",
    oneLiner:
      "Full-stack web + mobile productivity platform with Pomodoro, tasks, analytics and focus modes.",
    featured: true,
    categories: ["mobile", "web", "backend"],
    tech: ["Flutter", "React", "TypeScript", "Express", "MongoDB"],
    mockup: "studyflow",
    cover: { from: "#6366f1", to: "#34d399" },
    overview:
      "Full-stack web + mobile productivity platform with Pomodoro timer, task management, analytics dashboards and focus modes.",
    role: "Worked on StudyFlow at Baditech as a Full Stack Mobile Developer.",
    architecture:
      "Flutter mobile client, React + TypeScript web client, Express API, MongoDB.",
    features: [
      "Pomodoro timer",
      "Task management",
      "Analytics dashboards",
      "Focus modes",
    ],
    challenges: "[ADD: challenges & what I learned]",
  },
  {
    slug: "vetapp",
    title: "VetApp",
    oneLiner:
      "Veterinary appointment and pet management platform delivered at Baditech.",
    featured: true,
    categories: ["mobile", "backend"],
    tech: ["Flutter", "FastAPI", "PostgreSQL", "Firebase Auth"],
    mockup: "vetapp",
    cover: { from: "#0ea5e9", to: "#a78bfa" },
    overview:
      "Contributed to an appointment and pet management platform delivered at Baditech. Provider state management + Clean Architecture on the client.",
    role:
      "Full Stack Mobile Developer at Baditech. [ADD: my specific contribution]",
    architecture:
      "Flutter client with Provider and Clean Architecture; FastAPI + PostgreSQL backend; Firebase Authentication.",
    features: [
      "Appointment management",
      "Pet management",
      "Provider state management",
      "Clean Architecture on the client",
    ],
    challenges: "[ADD: challenges & what I learned]",
  },
  {
    slug: "diagnoai",
    title: "DiagnoAI",
    oneLiner: "AI-powered medical triage with an API layer and symptom classification.",
    featured: true,
    categories: ["aiml", "backend"],
    tech: ["FastAPI", "LLM integration", "Prompt engineering"],
    cover: { from: "#ec4899", to: "#22d3ee" },
    overview:
      "AI-powered triage system with an API layer and symptom classification workflows.",
    role: "[ADD: my specific contribution]",
    architecture:
      "FastAPI service layer with LLM integration and prompt-engineered symptom classification workflows.",
    features: [
      "API layer for triage",
      "Symptom classification workflows",
      "LLM integration and prompt engineering",
    ],
    challenges: "[ADD: challenges & what I learned]",
  },
  {
    slug: "moodify",
    title: "Moodify",
    oneLiner: "End-to-end mood-based music recommendation.",
    featured: true,
    categories: ["mobile", "aiml"],
    tech: ["Flutter", "FastAPI", "Google Gemini API", "Spotify Web API"],
    mockup: "moodify",
    cover: { from: "#f97316", to: "#8b5cf6" },
    overview:
      "Recommends music based on the user's mood end to end.",
    role: "[ADD: my specific contribution]",
    architecture:
      "Flutter client talking to a FastAPI backend that uses Google Gemini API and Spotify Web API.",
    features: ["Mood-based music recommendation, end to end"],
    challenges: "[ADD: challenges & what I learned]",
  },
  {
    slug: "rainwater-harvesting",
    title: "Rainwater Harvesting Suggestion System",
    oneLiner:
      "Geospatial scoring of precipitation, elevation, slope and soil suitability for rainwater harvesting.",
    featured: false,
    categories: ["web", "backend"],
    tech: ["Python", "FastAPI", "React", "Mapping APIs"],
    cover: { from: "#14b8a6", to: "#3b82f6" },
    overview:
      "Geospatial platform scoring precipitation, elevation, slope and soil suitability. Uses NASA POWER API and Open-Elevation data with map visualization.",
    role: "[ADD: my specific contribution]",
    architecture:
      "Python/FastAPI backend consuming NASA POWER API and Open-Elevation; React front end with mapping APIs.",
    features: [
      "Precipitation, elevation, slope and soil suitability scoring",
      "NASA POWER API",
      "Open-Elevation data",
      "Map visualization",
    ],
    challenges: "[ADD: challenges & what I learned]",
  },
  {
    slug: "istanbulkart-clone",
    title: "Istanbulkart Clone App",
    oneLiner:
      "Course final project replicating core Istanbulkart UX.",
    featured: false,
    categories: ["mobile"],
    tech: ["Flutter", "Dart", "Firebase", "Provider"],
    mockup: "istanbulkart",
    cover: { from: "#e11d48", to: "#fb923c" },
    overview:
      "Course final project replicating core Istanbulkart UX: authentication, card management, payment flows, responsive UI.",
    role: "Course final project.",
    architecture:
      "Flutter/Dart client with Provider and Firebase.",
    features: [
      "Authentication",
      "Card management",
      "Payment flows",
      "Responsive UI",
    ],
    challenges: "[ADD: challenges & what I learned]",
  },
  {
    slug: "carboncare",
    title: "CarbonCare",
    oneLiner: "Sustainability platform API for carbon footprint analysis and recommendations.",
    featured: false,
    categories: ["backend"],
    tech: ["FastAPI", "SQLAlchemy", "SQLite"],
    cover: { from: "#22c55e", to: "#0f766e" },
    overview:
      "Database and REST API design, carbon footprint analysis and recommendations.",
    role: "[ADD: my specific contribution]",
    architecture: "FastAPI with SQLAlchemy on SQLite.",
    features: [
      "Database and REST API design",
      "Carbon footprint analysis",
      "Recommendations",
    ],
    challenges: "[ADD: challenges & what I learned]",
  },
  {
    slug: "fake-news-detection",
    title: "Fake News Detection System",
    oneLiner: "ML pipeline and UI for fake news classification.",
    featured: false,
    categories: ["aiml"],
    tech: ["Python", "Scikit-Learn", "NLP", "TF-IDF"],
    cover: { from: "#64748b", to: "#8b5cf6" },
    overview: "ML pipeline and UI for fake news classification.",
    role: "[ADD: my specific contribution]",
    architecture:
      "Python ML pipeline using Scikit-Learn, NLP and TF-IDF, with a UI for classification.",
    features: ["Fake news classification pipeline", "UI for classification"],
    challenges: "[ADD: challenges & what I learned]",
  },
  {
    slug: "voice-assistant",
    title: "Voice Assistant",
    oneLiner: "Python voice assistant experiment.",
    featured: false,
    categories: ["aiml"],
    tech: ["Python"],
    cover: { from: "#1e1b4b", to: "#22d3ee" },
    overview: "Voice assistant built with Python.",
    role: "[ADD: my specific contribution]",
    architecture: "[ADD: architecture notes]",
    features: ["[ADD: key features]"],
    challenges: "[ADD: challenges & what I learned]",
  },
];

export const experiments = [
  {
    slug: "todo-api",
    title: "ToDo API",
    tech: ["FastAPI"],
  },
  {
    slug: "event-management",
    title: "Event Management App",
    tech: ["JavaScript"],
  },
  {
    slug: "ml-experiments",
    title: "ML experiments",
    tech: ["Jupyter", "ML algorithms", "text-to-image models"],
  },
  {
    slug: "java-oop",
    title: "Java OOP course projects",
    tech: ["Java", "OOP"],
  },
] as const;

export const projectFilters: { id: "all" | ProjectCategory }[] = [
  { id: "all" },
  { id: "mobile" },
  { id: "aiml" },
  { id: "backend" },
  { id: "web" },
  { id: "iot" },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
