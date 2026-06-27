import {
  Bot,
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  type LucideIcon,
} from "lucide-react";

export const techBadges = ["React", "FastAPI", "LangGraph", "PostgreSQL", "Azure"];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Braces,
    skills: ["Python", "FastAPI", "Node.js", "Express", "Pydantic"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "SQLAlchemy", "Alembic", "SQLModel"],
  },
  {
    title: "AI / LLM",
    icon: Bot,
    skills: ["LangGraph", "LangChain", "RAG", "AI Agents", "Prompt Engineering"],
  },
  {
    title: "Tools / Cloud",
    icon: Cloud,
    skills: ["Git", "GitHub", "Docker", "Linux", "Azure", "GitHub Actions"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  status?: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "SalesVision",
    description:
      "A full-stack sales analytics dashboard with KPI cards, revenue trends, category breakdowns, top products, recent orders, filters, and an optional natural-language query endpoint.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "TanStack Query", "Recharts"],
    status: "Public Project",
    github: "https://github.com/maliqabbas123/SalesVision",
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern developer portfolio built with Next.js, TypeScript, Tailwind CSS, reusable components, and structured content sections for projects, skills, work, philosophy, and contact.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Portfolio"],
    status: "Public Project",
    github: "https://github.com/maliqabbas123/Personal-Portfolio",
  },
  {
    title: "Medial AI Finance Assistant",
    description:
      "An AI-powered finance assistant built around Xero data, designed to answer business questions, generate reports, and guide users through financial reasoning workflows.",
    tags: ["LangGraph", "FastAPI", "PostgreSQL", "Xero", "Azure"],
    status: "Private / Case Study",
  },
  {
    title: "LangGraph Chatbot Workflow",
    description:
      "A structured chatbot pipeline using query classification, context resolution, business entity matching, SQL generation, validation, execution, and final answer formatting.",
    tags: ["LangGraph", "LangChain", "LLM", "SQL", "RAG"],
    status: "Private / Case Study",
  },
  {
    title: "AI Reporting & Account Review System",
    description:
      "Report generation workflows for AI charts, flux analysis, account review, and management reporting with validation, reusable backend modules, and frontend form flows.",
    tags: ["FastAPI", "React", "Reports", "PostgreSQL", "Azure"],
    status: "Private / Case Study",
  },
  {
    title: "Full Stack SaaS Architecture",
    description:
      "Backend and frontend architecture work across authentication, billing, file storage, profile media, deployment, and clean service boundaries for scalable product development.",
    tags: ["Next.js", "FastAPI", "Stripe", "Azure Blob", "GitHub Actions"],
    status: "Private / Case Study",
  },
];

export type TimelineItem = {
  role: string;
  label: string;
  description: string;
  points: string[];
};

export const timeline: TimelineItem[] = [
  {
    role: "Software Engineer",
    label: "Full Stack & AI Product Engineering",
    description:
      "Building product features across frontend, backend, data, cloud, and AI-powered workflows.",
    points: [
      "Built and improved full stack product flows using React, Next.js, FastAPI, and PostgreSQL",
      "Worked on AI chatbot systems involving LangGraph, SQL generation, validation, and response formatting",
      "Improved maintainability through modular backend structure, reusable services, and clearer boundaries",
    ],
  },
  {
    role: "AI Workflow Engineering",
    label: "LangGraph, RAG & Finance Reasoning",
    description:
      "Designed structured LLM workflows for business data queries and finance-related assistant behavior.",
    points: [
      "Worked on query classification, context resolution, clarification handling, and entity matching",
      "Integrated LLM workflows with database-backed execution and reporting features",
      "Focused on safe, grounded, and understandable AI responses instead of generic chatbot behavior",
    ],
  },
  {
    role: "Backend Systems",
    label: "APIs, Data Models & Cloud",
    description:
      "Built backend systems that support product workflows, integrations, storage, billing, and deployment.",
    points: [
      "Worked with FastAPI, SQLAlchemy, Alembic, PostgreSQL, Azure Blob Storage, and background jobs",
      "Implemented webhook-driven workflows, scheduled jobs, and deployment improvements",
      "Focused on reliable APIs, clean schema design, and production-oriented engineering decisions",
    ],
  },
];

export const currentlyImproving = [
  "Public project polish",
  "System design",
  "AI engineering",
  "Backend architecture",
  "Technical writing",
];

export const contactLinks = [
  {
    label: "Email",
    value: "maliq.abbas123@gmail.com",
    href: "mailto:maliq.abbas123@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/malikabbas123",
    href: "https://www.linkedin.com/in/malikabbas123/",
  },
  {
    label: "GitHub",
    value: "github.com/maliqabbas123",
    href: "https://github.com/maliqabbas123",
  },
];

export const workflowHighlights = [
  {
    icon: GitBranch,
    title: "Systems thinking",
    text: "Readable boundaries, predictable data flow, and code that stays easy to change.",
  },
  {
    icon: Bot,
    title: "AI pragmatism",
    text: "LLM workflows designed around real product needs, not novelty for its own sake.",
  },
  {
    icon: Database,
    title: "Backend depth",
    text: "APIs, schemas, and infrastructure choices that support product growth.",
  },
];
