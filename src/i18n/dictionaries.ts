export type Locale = "en" | "tr";

type Messages = {
  nav: Record<
    "home" | "about" | "skills" | "projects" | "experience" | "contact" | "cv",
    string
  >;
  hero: Record<
    "status" | "ctaProjects" | "ctaCv" | "ctaContact" | "basedIn",
    string
  >;
  about: Record<
    | "kicker"
    | "title"
    | "story"
    | "education"
    | "location"
    | "learning"
    | "community"
    | "competitions",
    string
  >;
  skills: {
    kicker: string;
    title: string;
    groups: Record<
      | "mobile"
      | "backend"
      | "databases"
      | "aiml"
      | "languages"
      | "web"
      | "iot"
      | "tools",
      string
    >;
  };
  projects: {
    kicker: string;
    title: string;
    subtitle: string;
    filters: Record<"all" | "mobile" | "aiml" | "backend" | "web" | "iot", string>;
    github: string;
    demo: string;
    experiments: string;
    caseStudy: string;
    overview: string;
    role: string;
    architecture: string;
    stack: string;
    features: string;
    challenges: string;
    next: string;
    prev: string;
    back: string;
  };
  experience: Record<"kicker" | "title" | "present", string>;
  achievements: Record<"kicker" | "title", string>;
  contact: Record<
    | "kicker"
    | "title"
    | "subtitle"
    | "name"
    | "email"
    | "message"
    | "send"
    | "sending"
    | "success"
    | "error"
    | "copy"
    | "copied",
    string
  >;
  footer: Record<"built", string>;
  command: Record<
    | "placeholder"
    | "empty"
    | "sections"
    | "projects"
    | "actions"
    | "themeLight"
    | "themeDark"
    | "langEn"
    | "langTr"
    | "github"
    | "linkedin",
    string
  >;
  notFound: Record<"title" | "body" | "home", string>;
  a11y: Record<
    "skip" | "menu" | "close" | "theme" | "language" | "command",
    string
  >;
};

export const dictionaries: Record<Locale, Messages> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      cv: "Download CV",
    },
    hero: {
      status: "Open to junior / internship roles",
      ctaProjects: "View Projects",
      ctaCv: "Download CV",
      ctaContact: "Contact",
      basedIn: "Based in Istanbul, Türkiye",
    },
    about: {
      kicker: "About",
      title: "I learn by shipping products people can actually use.",
      story:
        "I'm Nergiz Alıcı — a software engineering student and full-stack mobile developer focused on Flutter, FastAPI microservices, LLM-powered products, and autonomous UAV software. I grow through competition teams (TEKNOFEST, AUVSI SUAS), hackathons, and the AWS and Google Developer communities. Goal: become a junior engineer who turns ideas into working, user-facing products.",
      education: "Education",
      location: "Location",
      learning: "Currently learning",
      community: "Community",
      competitions: "Competitions",
    },
    skills: {
      kicker: "Skills",
      title: "A stack I actually use to ship.",
      groups: {
        mobile: "Mobile",
        backend: "Backend & APIs",
        databases: "Databases",
        aiml: "AI & ML",
        languages: "Languages",
        web: "Web",
        iot: "IoT & Embedded",
        tools: "Tools",
      },
    },
    projects: {
      kicker: "Projects",
      title: "Selected work",
      subtitle: "Filter by surface. Featured pieces sit larger in the grid.",
      filters: {
        all: "All",
        mobile: "Mobile",
        aiml: "AI-ML",
        backend: "Backend",
        web: "Web",
        iot: "IoT",
      },
      github: "GitHub",
      demo: "Live demo",
      experiments: "More experiments",
      caseStudy: "Case study",
      overview: "Overview",
      role: "My role",
      architecture: "Architecture",
      stack: "Tech stack",
      features: "Key features",
      challenges: "Challenges & what I learned",
      next: "Next",
      prev: "Previous",
      back: "All projects",
    },
    experience: {
      kicker: "Experience",
      title: "Where the work happened",
      present: "Present",
    },
    achievements: {
      kicker: "Signal",
      title: "Achievements & community",
    },
    contact: {
      kicker: "Contact",
      title: "Let's build something together",
      subtitle:
        "Junior and internship roles, product collaborations, or a sharp technical conversation — write me.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending…",
      success: "Sent. I'll get back to you.",
      error: "Something went wrong. Email me directly instead.",
      copy: "Copy email",
      copied: "Copied",
    },
    footer: {
      built: "Built with Next.js, deployed on Vercel",
    },
    command: {
      placeholder: "Jump, switch, or open…",
      empty: "No matches",
      sections: "Sections",
      projects: "Projects",
      actions: "Actions",
      themeLight: "Switch to light",
      themeDark: "Switch to dark",
      langEn: "Language: English",
      langTr: "Language: Turkish",
      github: "Open GitHub",
      linkedin: "Open LinkedIn",
    },
    notFound: {
      title: "This route doesn't exist",
      body: "The page is gone — or it never shipped.",
      home: "Back home",
    },
    a11y: {
      skip: "Skip to content",
      menu: "Open menu",
      close: "Close",
      theme: "Toggle theme",
      language: "Toggle language",
      command: "Open command palette",
    },
  },
  tr: {
    nav: {
      home: "Ana sayfa",
      about: "Hakkımda",
      skills: "Yetenekler",
      projects: "Projeler",
      experience: "Deneyim",
      contact: "İletişim",
      cv: "CV indir",
    },
    hero: {
      status: "Junior / staj rollerine açığım",
      ctaProjects: "Projelere bak",
      ctaCv: "CV indir",
      ctaContact: "İletişim",
      basedIn: "İstanbul, Türkiye",
    },
    about: {
      kicker: "Hakkımda",
      title: "Öğreniyorum, çünkü gerçekten kullanılan ürünler çıkarıyorum.",
      story:
        "Ben Nergiz Alıcı — yazılım mühendisliği öğrencisi ve full-stack mobil geliştiriciyim. Flutter uygulamaları, FastAPI mikroservisleri, LLM tabanlı ürünler ve otonom İHA yazılımı üzerine çalışıyorum. TEKNOFEST ve AUVSI SUAS yarışma ekiplerinde, hackathonlarda, AWS ve Google Developer topluluklarında aktifim. Hedefim: fikirleri çalışan, kullanıcıya dokunan ürünlere çeviren bir junior mühendis olmak.",
      education: "Eğitim",
      location: "Konum",
      learning: "Şu an öğrendiğim",
      community: "Topluluk",
      competitions: "Yarışmalar",
    },
    skills: {
      kicker: "Yetenekler",
      title: "Gerçekten ürün çıkardığım yığın.",
      groups: {
        mobile: "Mobil",
        backend: "Backend & API'ler",
        databases: "Veritabanları",
        aiml: "YZ & ML",
        languages: "Diller",
        web: "Web",
        iot: "IoT & Gömülü",
        tools: "Araçlar",
      },
    },
    projects: {
      kicker: "Projeler",
      title: "Seçili işler",
      subtitle: "Yüzeye göre filtrele. Öne çıkanlar ızgarada daha geniş durur.",
      filters: {
        all: "Tümü",
        mobile: "Mobil",
        aiml: "YZ-ML",
        backend: "Backend",
        web: "Web",
        iot: "IoT",
      },
      github: "GitHub",
      demo: "Canlı demo",
      experiments: "Diğer denemeler",
      caseStudy: "Vaka çalışması",
      overview: "Özet",
      role: "Rolüm",
      architecture: "Mimari",
      stack: "Teknoloji yığını",
      features: "Öne çıkan özellikler",
      challenges: "Zorluklar ve öğrendiklerim",
      next: "Sonraki",
      prev: "Önceki",
      back: "Tüm projeler",
    },
    experience: {
      kicker: "Deneyim",
      title: "İşin geçtiği yerler",
      present: "Devam ediyor",
    },
    achievements: {
      kicker: "Sinyal",
      title: "Başarılar ve topluluk",
    },
    contact: {
      kicker: "İletişim",
      title: "Birlikte bir şey inşa edelim",
      subtitle:
        "Junior ve staj rolleri, ürün işbirlikleri veya net bir teknik sohbet — yazın.",
      name: "Ad",
      email: "E-posta",
      message: "Mesaj",
      send: "Gönder",
      sending: "Gönderiliyor…",
      success: "Gönderildi. Dönüş yapacağım.",
      error: "Bir şey ters gitti. Doğrudan e-posta atın.",
      copy: "E-postayı kopyala",
      copied: "Kopyalandı",
    },
    footer: {
      built: "Next.js ile yazıldı, Vercel'de yayınlandı",
    },
    command: {
      placeholder: "Atla, değiştir veya aç…",
      empty: "Eşleşme yok",
      sections: "Bölümler",
      projects: "Projeler",
      actions: "Eylemler",
      themeLight: "Açık temaya geç",
      themeDark: "Koyu temaya geç",
      langEn: "Dil: İngilizce",
      langTr: "Dil: Türkçe",
      github: "GitHub'ı aç",
      linkedin: "LinkedIn'i aç",
    },
    notFound: {
      title: "Bu rota yok",
      body: "Sayfa kaybolmuş — ya da hiç yayınlanmamış.",
      home: "Ana sayfa",
    },
    a11y: {
      skip: "İçeriğe atla",
      menu: "Menüyü aç",
      close: "Kapat",
      theme: "Temayı değiştir",
      language: "Dili değiştir",
      command: "Komut paletini aç",
    },
  },
} as const;

export type Dictionary = Messages;
