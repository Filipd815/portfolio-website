export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  color: {
    from: string; // Hex color (e.g., "#8b5cf6")
    to: string; // Hex color (e.g., "#a855f7")
  };
  size: "small" | "medium" | "large" | "wide" | "tall";
  icon?: string; // Optional - use either icon or image
  image?: string; // Optional - path to image file in public folder (e.g., "/gallop-branding.png" or "/projects/bmw-e39.jpg")
  bannerImage?: string; // Optional - second image for project detail page banner
  link?: string; // Website URL
  github?: string;
  content?: string | string[]; // Detailed project description/content
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "gallop-branding",
    title: "Gallop Branding",
    description: "Gallop Branding is a branding agency website built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "SCSS"],
    color: {
      from: "#e3e3e3", // gray-500
      to: "#4b5563", // gray-600
    },
    size: "large",
    image: "/gallop-branding/gallop-branding.png",
    bannerImage: "/gallop-branding/gallop-branding-banner.png",
    link: "https://gallopbranding.com/",
    content: [
      "Gallop Branding is a Brooklyn-based creative agency dedicated to building genuine, relatable brands that resonate with audiences on a long-term emotional level. Led by Creative Director Shia Teichman, the agency moves beyond simple aesthetics to focus on designing the story of a business. The project emphasizes a research-driven process that blends boundless creativity with practical strategic marketing. By helping small and medium-sized businesses discover their unique identity, Gallop aims to transform brands from simple service providers into power brands that people understand, connect to, and advocate for."
    ],
  },
  {
    id: "2",
    slug: "bmw-e39-registry",
    title: "BMW E39 Registry",
    description: "A showcase gallery for classic BMW E39 5-Series vehicles (1995-2003).",
    tags: ["Next.js 14 (App Router)", "TypeScript (strict mode)", "CSS Modules with custom properties", "SQLite with Prisma ORM", "Zod schema validation", "ESLint + Prettier"],
    color: {
      from: "#8b5cf6", // violet-500
      to: "#9333ea", // purple-600
    },  
    size: "medium", 
    icon: "🚗",
    github: "https://github.com/filipd815/bmw-e39-registry",
    content: [
      "The E39 Registry is a full-stack web application dedicated to showcasing and cataloging classic BMW E39 5-Series vehicles (1995-2003). This project demonstrates modern web development practices while celebrating one of BMW's most iconic sports sedans."
    ],
  },
  {
    id: "3",
    slug: "ai-art-generator",
    title: "AI Art Generator",
    description: "Generate unique artwork using stable diffusion models.",
    tags: ["Python", "PyTorch", "React"],
    color: {
      from: "#ec4899", // pink-500
      to: "#e11d48", // rose-600
    },
    size: "small",
    icon: "🎨",
  },
  {
    id: "4",
    slug: "music-visualizer",
    title: "Music Visualizer",
    description: "Audio-reactive visual experiences synced to your music.",
    tags: ["WebGL", "Web Audio API"],
    color: {
      from: "#06b6d4", // cyan-500
      to: "#2563eb", // blue-600
    },
    size: "wide",
    icon: "🎵",
  },
  {
    id: "5",
    slug: "smart-home-hub",
    title: "Smart Home Hub",
    description: "Centralized IoT device management with automation.",
    tags: ["IoT", "Node.js", "MQTT"],
    color: {
      from: "#10b981", // emerald-500
      to: "#0d9488", // teal-600
    },
    size: "small",
    icon: "🏠",
  },
  {
    id: "6",
    slug: "code-editor",
    title: "Cloud Code Editor",
    description: "Browser-based IDE with collaborative editing and AI assistance.",
    tags: ["Monaco", "WebRTC", "TypeScript"],
    color: {
      from: "#6366f1", // indigo-500
      to: "#7c3aed", // violet-600
    },
    size: "tall",
    icon: "💻",
  },
  {
    id: "7",
    slug: "fitness-tracker",
    title: "Fitness Tracker",
    description: "Track workouts, nutrition, and progress with beautiful charts.",
    tags: ["React Native", "HealthKit"],
    color: {
      from: "#84cc16", // lime-500
      to: "#16a34a", // green-600
    },
    size: "medium",
    icon: "💪",
  },
  {
    id: "8",
    slug: "weather-app",
    title: "Weather Experience",
    description: "Immersive weather app with dynamic backgrounds.",
    tags: ["React", "OpenWeather API"],
    color: {
      from: "#0ea5e9", // sky-500
      to: "#4f46e5", // indigo-600
    },
    size: "small",
    icon: "🌤️",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

