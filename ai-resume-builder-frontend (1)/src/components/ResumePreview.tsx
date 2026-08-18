/**
 * ResumePreview — renders the selected template inside an A4 paper-style
 * container with a toolbar (Edit / Change Template / Download PDF /
 * Generate Again).
 *
 * "Download PDF" uses the browser's print functionality (window.print()).
 * Print CSS in src/index.css makes ONLY this resume card print, as A4.
 */
import { Download, LayoutTemplate, Pencil, Printer, RotateCcw } from "lucide-react";
import { getTemplate, type TemplateId } from "../templates";
import type { ResumeData } from "../types";

interface ResumePreviewProps {
  resume: ResumeData;
  templateId: TemplateId;
  onEdit: () => void;
  onChangeTemplate: () => void;
  onGenerateAgain: () => void;
}

const ghostBtn =
  "inline-flex items-center gap-2 rounded-xl border border-pink-100 bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm shadow-pink-100/50 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-fuchsia-300 hover:text-pink-600 hover:shadow-md hover:shadow-purple-200/50";

export default function ResumePreview({
  resume,
  templateId,
  onEdit,
  onChangeTemplate,
  onGenerateAgain,
}: ResumePreviewProps) {
  const def = getTemplate(templateId);
  const Template = def.component;

  return (
    <div>
      {/* ---------- Toolbar ---------- */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50/80 px-3.5 py-1.5 text-xs font-semibold text-pink-700 shadow-sm shadow-pink-200/50">
          <LayoutTemplate className="h-3.5 w-3.5 text-fuchsia-500" />
          {def.name} Template
        </span>

        <div className="flex flex-wrap gap-2.5">
          <button type="button" onClick={onEdit} className={ghostBtn}>
            <Pencil className="h-4 w-4" />
            Edit
          </button>
          <button type="button" onClick={onChangeTemplate} className={ghostBtn}>
            <LayoutTemplate className="h-4 w-4" />
            Change Template
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/40"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </button>
          <button type="button" onClick={onGenerateAgain} className={ghostBtn}>
            <RotateCcw className="h-4 w-4" />
            Generate Again
          </button>
        </div>
      </div>

      {/* ---------- A4 resume card (the only element printed) ---------- */}
      <div
        id="resume-print-area"
        className="w-full overflow-hidden rounded-lg bg-white shadow-xl shadow-purple-300/40 ring-1 ring-pink-200"
      >
        <Template resume={resume} />
      </div>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-slate-400">
        <Printer className="h-3.5 w-3.5 shrink-0 text-pink-400" />
        Tip: choose “Save as PDF” in the print dialog and enable “Background graphics”.
      </p>
    </div>
  );
}
