import { Loader2, PenLine, Sparkles, Wand2 } from "lucide-react";

const CHAR_LIMIT = 2000;

const EXAMPLE_PROMPT =
  "I am a 3rd year Computer Science student skilled in Python, Java, SQL and React. I have completed projects in customer behavior analysis and emotion detection. I have an Oracle AI certification and I am looking for a software development internship.";

interface PromptBoxProps {
  prompt: string;
  loading: boolean;
  onPromptChange: (value: string) => void;
  onGenerate: () => void;
}

/**
 * The prompt input card. "Generate Resume" triggers App.handleGenerate,
 * which currently returns mock data (see src/data/sampleResume.ts) — that
 * is the single place to swap in a real backend call later.
 */
export default function PromptBox({ prompt, loading, onPromptChange, onGenerate }: PromptBoxProps) {
  const canGenerate = prompt.trim().length >= 10 && !loading;

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6">
      <div className="rounded-3xl border border-pink-100 bg-white/90 p-6 shadow-xl shadow-pink-200/40 backdrop-blur-sm transition-shadow hover:shadow-2xl hover:shadow-purple-200/50 sm:p-8">
        {/* Card header */}
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 shadow-md shadow-pink-500/30">
            <PenLine className="h-5 w-5 text-white" />
          </span>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Tell us about yourself</h2>
            <p className="text-xs text-slate-500">
              Write naturally — the AI structures everything for you.
            </p>
          </div>
        </div>

        {/* Textarea */}
        <textarea
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value.slice(0, CHAR_LIMIT))}
          onKeyDown={(e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "Enter" && canGenerate) {
              onGenerate();
            }
          }}
          rows={7}
          maxLength={CHAR_LIMIT}
          placeholder={`Example: ${EXAMPLE_PROMPT}`}
          className="mt-5 w-full resize-none rounded-2xl border border-pink-100 bg-white/70 p-4 text-sm leading-relaxed text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
        />

        {/* Footer row: example helper, character counter, generate button */}
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => onPromptChange(EXAMPLE_PROMPT)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-600 transition-colors hover:text-purple-600"
            >
              <Wand2 className="h-3.5 w-3.5" />
              Try an example
            </button>
            <span
              className={`text-xs tabular-nums ${
                prompt.length >= CHAR_LIMIT ? "font-semibold text-red-500" : "text-slate-400"
              }`}
            >
              {prompt.length.toLocaleString()} / {CHAR_LIMIT.toLocaleString()} characters
            </span>
          </div>

          <button
            type="button"
            onClick={onGenerate}
            disabled={!canGenerate}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-lg"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating…
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Generate Resume
              </>
            )}
          </button>
        </div>

        {/* Trust line */}
        <p className="mt-5 border-t border-pink-100 pt-4 text-center text-[11px] font-medium text-slate-400">
          No signup needed · Works instantly · 8 professional templates
        </p>
      </div>
    </section>
  );
}
