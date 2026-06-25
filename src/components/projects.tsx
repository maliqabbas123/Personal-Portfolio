import { ExternalLink, GitBranch } from "lucide-react";
import { projects } from "@/lib/data";
import { Section } from "./section";

function hasRealLink(value?: string) {
  return Boolean(value && value.trim() && value !== "#");
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected projects and engineering work."
      description="A few examples of the systems, workflows, and product features I have worked on across full stack development, AI, backend architecture, and data-driven applications."
      className="border-y border-white/8 bg-white/[0.02]"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => {
          const showGithub = hasRealLink(project.github);
          const showDemo = hasRealLink(project.demo);

          return (
            <article
              key={project.title}
              className="group flex min-h-[260px] flex-col rounded-2xl border border-white/10 bg-zinc-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-2xl hover:shadow-cyan-950/25 sm:p-6"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-blue-400" />
                {project.status ? (
                  <span className="shrink-0 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-1 text-xs font-medium text-cyan-100">
                    {project.status}
                  </span>
                ) : null}
              </div>

              <h3 className="text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400 sm:text-base">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(showGithub || showDemo) && (
                <div className="mt-6 flex gap-3">
                  {showGithub && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-cyan-200"
                    >
                      <GitBranch className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                  {showDemo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-cyan-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
