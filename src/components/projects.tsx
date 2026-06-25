import { ExternalLink, GitBranch } from "lucide-react";
import { projects } from "@/lib/data";
import { Section } from "./section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Polished project placeholders ready for real case studies."
      description="These cards are structured so you can swap in live repositories, screenshots, and deeper project notes later."
      className="border-y border-white/8 bg-white/[0.02]"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex min-h-[290px] flex-col rounded-2xl border border-white/10 bg-zinc-950/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-2xl hover:shadow-cyan-950/25"
          >
            <div className="mb-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-blue-400" />
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 flex-1 text-base leading-7 text-zinc-400">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-7 flex gap-3">
              <a
                href={project.github}
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-cyan-200"
              >
                <GitBranch className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={project.demo}
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-cyan-200"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
