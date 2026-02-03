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
    description: "Gallop Branding is a branding agency website.",
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
    slug: "pwrco",
    title: "PWRCO",
    description: "This website is a digital presence for PWRCO",
    tags: ["HTML", "CSS", "JavaScript", "SCSS"],
    color: {
      from: "#141e30", 
      to: "#243b55",
    },  
    size: "wide", 
    image: "/prwco/pwrco-branding.svg",
    bannerImage: "/prwco/pwrco-branding-banner.png",
    github: "https://github.com/Filipd815/pwrco",
    link: "https://pwrco-git-main-filipd815-6004s-projects.vercel.app/",
    content: [
      "This website is a digital presence for PWRCO, a company based in North York, Ontario, specializing in premier electrical and solar services. The specific URL is a development deployment (hosted on Vercel), representing a portfolio project or a site currently under construction."
    ],
  },
  {
    id: "3",
    slug: "advivus",
    title: "Advivus",
    description: "This website is a digital presence for Advivus",
    tags: ["HTML", "CSS", "JavaScript", "SCSS"],
    color: {
      from: "#000000", 
      to: "#000000",
    },  
    size: "wide", 
    image: "/advivus/advivus-branding.png",
    bannerImage: "/advivus/advivus-branding-banner.png",
    github: "https://github.com/Filipd815/advivus",
    link: "https://advivus-git-main-filipd815-6004s-projects.vercel.app/",
    content: [
      "This website is a digital presence for Advivus, a company based in North York, Ontario, specializing in premier electrical and solar services. The specific URL appears to be a development or staging deployment (hosted on Vercel), potentially representing a portfolio project or a site currently under construction."
    ],
  },
  {
    id: "4",
    slug: "rabbitx",
    title: "RabbitX",
    description: "This website is a digital presence for RabbitX",
    tags: ["HTML", "CSS", "JavaScript", "SCSS", "AOS", "LottieFiles"],
    color: {
      from: "#6027f0", // cyan-500
      to: "#8cfe56", // blue-600
    },
    size: "wide",
    image: "/rabbitx/rabbitx-branding.png",
    bannerImage: "/rabbitx/rabbitx-branding-banner.png",
    github: "https://github.com/Filipd815/rabbitx",
    link: "https://rabbitx-git-main-filipd815-6004s-projects.vercel.app/",
    content: [
      "RabbitX is a global, permissionless perpetual futures exchange built on Starknet (a Layer 2 scaling solution for Ethereum). It allows users to trade crypto derivatives with the speed and efficiency of a centralized exchange (low latency, milliseconds execution) while maintaining the security and self-custody of a decentralized platform. Key features include zero gas fees for trading, an orderbook model, and up to 50x leverage."
    ],
  },
  {
    id: "5",
    slug: "iape",
    title: "IApe",
    description: "This website is a digital presence for IApe",
    tags: ["HTML", "CSS", "JavaScript", "SCSS", "AOS", "LottieFiles"],
    color: {
      from: "#3140FC", // cyan-500
      to: "#091394", // blue-600
    },
    size: "small",
    image: "/iape/iape-branding.png",
    bannerImage: "/iape/iape-branding-banner.png",
    github: "https://github.com/Filipd815/iape",
    link: "https://iape-git-main-filipd815-6004s-projects.vercel.app/",
    content: [
      "IApe is a global, permissionless perpetual futures exchange built on Starknet (a Layer 2 scaling solution for Ethereum). It allows users to trade crypto derivatives with the speed and efficiency of a centralized exchange (low latency, milliseconds execution) while maintaining the security and self-custody of a decentralized platform. Key features include zero gas fees for trading, an orderbook model, and up to 50x leverage."
    ],
  },
  {
    id: "6",
    slug: "flowapp",
    title: "FlowApp",
    description: "This website is a digital presence for FlowApp",
    tags: ["HTML", "CSS", "JavaScript", "SCSS", "Canvas"],
    color: {
      from: "#0f2027", // cyan-500
      to: "#2c5364", // blue-600
    },
    size: "small",
    image: "/flowapp/flowapp-branding.png",
    bannerImage: "/flowapp/flowapp-branding-banner.png",
    link: "https://flowapp.techflowventures.com/",
    content: [
      "Flow – Personal Financial Advisor Application A comprehensive fintech platform designed to simplify personal finance management. The application syncs with user cash flow to generate actionable financial objectives, featuring educational modules and Plaid API integration for secure, real-time data tracking."
    ]
  },{
    id: "7",
    slug: "tanko",
    title: "Tanko Barbershop",
    description: "Tanko Barbershop - A sleek, responsive website",
    tags: ["HTML", "CSS", "JavaScript", "SCSS"],
    color: {
      from: "#000000", // cyan-500
      to: "#f8bf00", // blue-600
    },
    size: "small",
    image: "/tanko/tanko-branding.png",
    bannerImage: "/tanko/tanko-branding-banner.png",
    link: "https://tanko.rs/",
    content: [
      "Tanko Barbershop – A sleek, responsive website designed for a premium barbershop in downtown Belgrade. The site features a comprehensive service menu, integrated pricing lists, and a clear call-to-action for online bookings. The layout reflects the shop's blend of classic 1920s aesthetics and modern urban style."
    ]
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

