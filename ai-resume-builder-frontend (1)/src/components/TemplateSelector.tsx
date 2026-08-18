import { LayoutTemplate } from "lucide-react";
import { TEMPLATES, type TemplateId } from "../templates";
import type { ResumeData } from "../types";
import TemplateCard from "./TemplateCard";

interface TemplateSelectorProps {
  resume: ResumeData;
  selectedId: TemplateId;
  onSelect: (id: TemplateId) => void;
}

/**
 * "Choose Your Resume Template" section — responsive grid of 8 template
 * cards (4 columns on desktop, 2 on tablet, 1 on mobile).
 */
export default function TemplateSelector({ resume, selectedId, onSelect }: TemplateSelectorProps) {
  return (
    <section id="templates" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-16 pt-16 sm:px-6">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50/80 px-4 py-1.5 text-xs font-semibold text-purple-700 shadow-sm shadow-purple-200/50">
          <LayoutTemplate className="h-3.5 w-3.5 text-fuchsia-500" />
          8 professional designs
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Choose Your Resume Template
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
          Every template is fully editable and updates live with your resume
          information. Switch anytime.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEMPLATES.map((def) => (
          <TemplateCard
            key={def.id}
            def={def}
            resume={resume}
            selected={def.id === selectedId}
            onSelect={() => onSelect(def.id)}
          />
        ))}
      </div>
    </section>
  );
}
