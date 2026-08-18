import { Check, LayoutTemplate } from "lucide-react";
import type { TemplateDef } from "../templates";
import type { ResumeData } from "../types";
import MiniResume from "./MiniResume";

interface TemplateCardProps {
  def: TemplateDef;
  resume: ResumeData;
  selected: boolean;
  onSelect: () => void;
}

/**
 * A single template card: realistic miniature resume preview, name,
 * description, "best for" tags and a Use Template button.
 * The selected card gets a highlighted border + checkmark.
 */
export default function TemplateCard({ def, resume, selected, onSelect }: TemplateCardProps) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
        selected
          ? "border-transparent shadow-xl shadow-purple-300/50 ring-2 ring-pink-500"
          : "border-pink-100 shadow-lg shadow-pink-100/50 hover:border-fuchsia-300 hover:shadow-xl hover:shadow-purple-200/50"
      }`}
    >
      {/* Miniature resume preview */}
      <div className="h-64 overflow-hidden border-b border-pink-100 bg-slate-50">
        <MiniResume>
          <def.component resume={resume} />
        </MiniResume>
      </div>

      {/* Selected checkmark */}
      {selected && (
        <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/40">
          <Check className="h-4 w-4" />
        </span>
      )}

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-sm font-bold text-slate-900">{def.name}</h3>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">{def.description}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {def.bestFor.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gradient-to-r from-pink-50 to-purple-50 px-2 py-0.5 text-[10px] font-medium text-purple-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={onSelect}
          className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
            selected
              ? "border border-pink-300 bg-pink-50 text-pink-700"
              : "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white shadow-md shadow-pink-500/30 hover:shadow-lg hover:shadow-purple-500/40"
          }`}
        >
          {selected ? (
            <>
              <Check className="h-3.5 w-3.5" />
              Selected
            </>
          ) : (
            <>
              <LayoutTemplate className="h-3.5 w-3.5" />
              Use Template
            </>
          )}
        </button>
      </div>
    </div>
  );
}
