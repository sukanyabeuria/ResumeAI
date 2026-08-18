import { Download, LayoutTemplate, MessageSquareText, Sparkles } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Describe Yourself",
    description: "Write your skills, education and experience in natural language.",
    icon: MessageSquareText,
    iconClasses: "bg-pink-50 text-pink-600",
  },
  {
    number: "02",
    title: "Generate Your Resume",
    description: "AI structures your information into a complete professional resume.",
    icon: Sparkles,
    iconClasses: "bg-fuchsia-50 text-fuchsia-600",
  },
  {
    number: "03",
    title: "Choose a Template",
    description: "Pick from 8 professionally designed resume layouts.",
    icon: LayoutTemplate,
    iconClasses: "bg-purple-50 text-purple-600",
  },
  {
    number: "04",
    title: "Edit & Download",
    description: "Fine-tune every detail and save your resume as a PDF.",
    icon: Download,
    iconClasses: "bg-rose-50 text-rose-500",
  },
];

/** Four-step explanation section. */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50/80 px-4 py-1.5 text-xs font-semibold text-purple-700 shadow-sm shadow-purple-200/50">
          Simple by design
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
          Four steps between you and a polished, interview-ready resume.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="group relative rounded-3xl border border-pink-100 bg-white/90 p-7 shadow-lg shadow-pink-100/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-fuchsia-300 hover:shadow-xl hover:shadow-purple-200/50"
          >
            <span className="absolute right-6 top-5 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent opacity-20 transition-opacity group-hover:opacity-40">
              {step.number}
            </span>

            <span
              className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm shadow-pink-100 ${step.iconClasses}`}
            >
              <step.icon className="h-6 w-6" />
            </span>

            <h3 className="mt-5 text-base font-bold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
