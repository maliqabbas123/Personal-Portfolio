import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`relative px-6 py-20 sm:py-24 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow ? (
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-cyan-300/80">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-4 text-base leading-8 text-zinc-400 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-zinc-300 shadow-sm shadow-black/20">
      {children}
    </span>
  );
}
