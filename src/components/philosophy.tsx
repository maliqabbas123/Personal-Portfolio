import { Section } from "./section";

export function Philosophy() {
  return (
    <Section className="border-y border-white/8 bg-white/[0.02]">
      <div className="mx-auto max-w-4xl text-center">
        <blockquote className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
          &quot;Simple systems scale. Thoughtful systems last.&quot;
        </blockquote>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
          I care about software that is understandable under pressure:
          maintainable architecture, explicit data models, useful abstractions,
          and the discipline to learn deeply before adding complexity.
        </p>
      </div>
    </Section>
  );
}
