import { timeline } from "@/lib/data";
import { Section } from "./section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Work"
      title="A flexible timeline for the work you will edit next."
      description="Generic for now, with enough structure to describe roles, systems, AI workflows, and product engineering."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/50 via-white/10 to-transparent md:block" />
        <div className="space-y-5">
          {timeline.map((item) => (
            <article
              key={item.role}
              className="relative rounded-2xl border border-white/10 bg-zinc-950/60 p-6 md:ml-12"
            >
              <span className="absolute -left-[3.2rem] top-7 hidden h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_0_6px_rgba(34,211,238,0.12)] md:block" />
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300/80">
                {item.label}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
              <p className="mt-4 text-base leading-7 text-zinc-400">{item.description}</p>
              <ul className="mt-5 grid gap-2 text-sm leading-6 text-zinc-300 sm:grid-cols-3">
                {item.points.map((point) => (
                  <li key={point} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
