import { ArrowDown, Layers, Sparkles } from "lucide-react";
import MiniResume from "./MiniResume";
import ModernTemplate from "../templates/ModernTemplate";
import { sampleResume } from "../data/sampleResume";

/** Hero section — headline, subtitle, CTA and a small resume preview visual. */
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Extra dreamy pink / purple glow accents behind the hero */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-pink-300/50 blur-3xl" />
        <div className="absolute -right-24 top-8 h-96 w-96 rounded-full bg-purple-300/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-24 pt-16 text-center sm:px-6 sm:pt-24">
        {/* Small badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-pink-700 shadow-sm shadow-pink-200/50 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-fuchsia-500" />
          AI-Powered Resume Generator
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Build Your Resume with{" "}
          <span className="bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
            One Prompt
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
          Describe your skills, education and experience. Choose a template and
          create a professional resume in seconds.
        </p>

        {/* Primary CTA */}
        <div className="mt-9">
          <a
            href="#prompt"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/40"
          >
            Create My Resume
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>

        {/* Resume preview visual */}
        <div className="relative mx-auto mt-16 max-w-sm">
          <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-pink-300/60 to-purple-300/60 blur-2xl" />
          <div className="-rotate-2 rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 p-[3px] shadow-2xl shadow-purple-500/30 transition-transform duration-300 hover:rotate-0">
            <div className="overflow-hidden rounded-[13px] bg-white">
              <MiniResume>
                <ModernTemplate resume={sampleResume} />
              </MiniResume>
            </div>
          </div>

          {/* Floating badges */}
          <span className="absolute -right-4 top-8 flex items-center gap-1.5 rounded-full border border-pink-200 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-lg shadow-pink-200/50 backdrop-blur-sm sm:-right-10">
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-500" />
            AI Generated
          </span>
          <span className="absolute -left-4 bottom-10 flex items-center gap-1.5 rounded-full border border-purple-200 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-lg shadow-purple-200/50 backdrop-blur-sm sm:-left-10">
            <Layers className="h-3.5 w-3.5 text-pink-500" />
            8 Templates
          </span>
        </div>
      </div>
    </section>
  );
}
