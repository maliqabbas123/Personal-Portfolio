import Image from "next/image";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { techBadges } from "@/lib/data";
import { Badge } from "./section";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-10 sm:pb-24 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 lg:min-h-[720px] lg:flex-row lg:items-center">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1 text-sm text-cyan-100">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            Simple systems scale. Thoughtful systems last.
          </div>

          <p className="mb-4 text-base font-medium text-zinc-400">Abbas Ahmed</p>
          <h1 className="text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
            Full Stack Software Engineer
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            I build practical software at the intersection of web development,
            backend systems, and AI workflows.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-100"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.08]"
            >
              Contact Me
              <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {techBadges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/70 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="h-24 bg-gradient-to-r from-cyan-300/20 via-blue-400/15 to-emerald-300/20">
              <div className="h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.16),transparent_22rem)]" />
            </div>

            <div className="px-5 pb-5">
              <div className="relative -mt-14 flex items-end justify-between gap-4">
                <div className="relative h-32 w-32 overflow-hidden rounded-3xl border-4 border-zinc-950 bg-zinc-900 shadow-xl shadow-black/40 sm:h-36 sm:w-36">
                  <Image
                    src="/abbas-ahmed.jpeg"
                    alt="Portrait of Abbas Ahmed"
                    fill
                    priority
                    sizes="(max-width: 640px) 128px, 144px"
                    className="object-cover object-[50%_22%]"
                  />
                </div>
                <div className="mb-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1 text-xs font-medium text-emerald-200">
                  Open to build
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-2xl font-semibold text-white">Abbas Ahmed</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Full Stack Software Engineer building web products, backend
                  systems, and practical AI workflows.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
                  <MapPin className="h-4 w-4 text-cyan-300" />
                  Pakistan · React · FastAPI · LangGraph
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                <div>
                  <p className="text-lg font-semibold text-white">AI</p>
                  <p className="mt-1 text-xs text-zinc-500">Workflows</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">API</p>
                  <p className="mt-1 text-xs text-zinc-500">Backends</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">UX</p>
                  <p className="mt-1 text-xs text-zinc-500">Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
