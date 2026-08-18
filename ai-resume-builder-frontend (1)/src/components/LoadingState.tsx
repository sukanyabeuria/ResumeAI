/** Loading card shown between clicking "Generate Resume" and the preview. */
export default function LoadingState() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6">
      <div className="flex flex-col items-center gap-5 rounded-3xl border border-pink-100 bg-white/90 px-6 py-16 text-center shadow-xl shadow-pink-200/40 backdrop-blur-sm">
        {/* Simple spinner ring with the pink → purple brand gradient */}
        <span className="relative flex h-14 w-14">
          <span className="absolute inset-0 rounded-full border-4 border-pink-100" />
          <span className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-pink-500 border-r-purple-500" />
        </span>

        <div>
          <p className="text-base font-semibold text-slate-900">
            Creating your resume
            <span className="animate-pulse">…</span>
          </p>
          <p className="mt-1.5 text-sm text-slate-500">
            AI is organizing your information into professional sections.
          </p>
        </div>
      </div>
    </div>
  );
}
