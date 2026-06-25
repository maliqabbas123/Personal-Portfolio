import { workflowHighlights } from "@/lib/data";
import { Section } from "./section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering across product, systems, and AI."
      description="I am a software engineer from Pakistan working across frontend, backend, databases, cloud, and AI-powered workflows."
      className="border-y border-white/8 bg-white/[0.02]"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6 sm:p-8">
          <p className="text-lg leading-8 text-zinc-300">
            I enjoy turning complex product ideas into maintainable systems:
            interfaces that feel direct, APIs that are easy to reason about,
            databases that tell the truth, and AI workflows that fit the real
            job instead of adding unnecessary ceremony.
          </p>
          <p className="mt-6 text-base leading-8 text-zinc-400">
            My work sits between full stack product development and backend
            architecture, with a growing focus on LangGraph, LLM applications,
            RAG, and agentic workflows that can be shipped responsibly.
          </p>
        </div>
        <div className="grid gap-4">
          {workflowHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.05]"
              >
                <Icon className="mb-4 h-5 w-5 text-cyan-300" />
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
