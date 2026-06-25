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
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    title: "AI Finance Assistant",
    description:
      "A practical assistant concept for finance workflows, combining retrieval, reasoning, and clean user-facing reporting.",
    tags: ["Next.js", "LangGraph", "RAG", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "LangGraph Workflow Engine",
    description:
      "A modular workflow system for orchestrating AI agents, state transitions, human review, and tool execution.",
    tags: ["Python", "LangGraph", "FastAPI", "Agents"],
    github: "#",
    demo: "#",
  },
  {
    title: "FastAPI SaaS Backend",
    description:
      "A production-style backend foundation with auth-ready APIs, database migrations, validation, and service boundaries.",
    tags: ["FastAPI", "SQLAlchemy", "Alembic", "Pydantic"],
    github: "#",
    demo: "#",
  },
  {
    title: "React Dashboard System",
    description:
      "A responsive dashboard interface for data-heavy products, focused on clean interaction patterns and reusable UI.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Charts"],
    github: "#",
    demo: "#",
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
    label: "Product-focused engineering",
    description:
      "Building maintainable software across frontend, backend, data, cloud, and AI-powered workflows.",
    points: [
      "Full stack development with modern web frameworks",
      "Backend systems designed around clear APIs and data models",
      "AI chatbot workflows with practical product constraints",
    ],
  },
  {
    role: "Full Stack Development",
    label: "Web, APIs, and databases",
    description:
      "Turning product ideas into usable applications with a focus on reliability, clarity, and iteration speed.",
    points: [
      "Frontend interfaces built with React, Next.js, and TypeScript",
      "FastAPI and Node.js services for application logic",
      "PostgreSQL-backed systems with migrations and clean schema design",
    ],
  },
  {
    role: "AI Workflow Engineering",
    label: "LLM systems and automation",
    description:
      "Exploring agentic workflows, retrieval systems, and structured LLM applications that solve concrete problems.",
    points: [
      "LangGraph workflows for multi-step AI processes",
      "RAG patterns for grounded responses",
      "Prompt and tool design for dependable AI features",
    ],
  },
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
