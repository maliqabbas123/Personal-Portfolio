import { ArrowUpRight, GitBranch, Link2, Mail } from "lucide-react";
import { contactLinks } from "@/lib/data";
import { Section } from "./section";

const icons = {
  Email: Mail,
  LinkedIn: Link2,
  GitHub: GitBranch,
};

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something practical."
      description="For project ideas, collaborations, or engineering conversations, reach out through any of these channels."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {contactLinks.map((link) => {
          const Icon = icons[link.label as keyof typeof icons];
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="group rounded-2xl border border-white/10 bg-zinc-950/60 p-5 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.055]"
            >
              <div className="mb-6 flex items-center justify-between">
                <Icon className="h-5 w-5 text-cyan-300" />
                <ArrowUpRight className="h-4 w-4 text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-200" />
              </div>
              <p className="font-semibold text-white">{link.label}</p>
              <p className="mt-2 break-words text-sm leading-6 text-zinc-400">{link.value}</p>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
