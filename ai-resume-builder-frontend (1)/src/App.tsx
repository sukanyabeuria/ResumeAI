import { useRef, useState } from "react";
import { Check, Pencil } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PromptBox from "./components/PromptBox";
import LoadingState from "./components/LoadingState";
import TemplateSelector from "./components/TemplateSelector";
import ResumeEditor from "./components/ResumeEditor";
import ResumePreview from "./components/ResumePreview";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import DreamyBackground from "./components/DreamyBackground";
import { sampleResume } from "./data/sampleResume";
import { getTemplate, type TemplateId } from "./templates";
import type { ResumeData } from "./types";

type Status = "idle" | "loading" | "done";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [resume, setResume] = useState<ResumeData | null>(null);
  const [templateId, setTemplateId] = useState<TemplateId>("modern");
  const [toast, setToast] = useState<string | null>(null);

  const promptRef = useRef<HTMLDivElement>(null);
  const templatesRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  /* Small confirmation toast (e.g. "Changes saved"). */
  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2400);
  };

  /* -----------------------------------------------------------------------
     "Generate Resume" — currently returns mock data from
     src/data/sampleResume.ts so the whole flow works with NO backend.

     BACKEND CONNECTION POINT:
     Replace the setTimeout below with a real request later, e.g.:
       const res = await fetch("/generate-resume", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ prompt: prompt.trim() }),
       });
       setResume(await res.json());
  ----------------------------------------------------------------------- */
  const handleGenerate = () => {
    if (prompt.trim().length < 10 || status === "loading") return;
    setStatus("loading");

    window.setTimeout(() => {
      setResume(JSON.parse(JSON.stringify(sampleResume)) as ResumeData);
      setTemplateId("modern");
      setStatus("done");
      window.setTimeout(() => {
        templatesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    }, 1800);
  };

  /* Select a template and scroll the user to the editor + preview. */
  const handleSelectTemplate = (id: TemplateId) => {
    setTemplateId(id);
    showToast(`${getTemplate(id).name} template applied`);
    window.setTimeout(() => {
      editorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const scrollToEditor = () =>
    editorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const scrollToTemplates = () =>
    templatesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  /* "Generate Again" — clear everything and go back to the prompt card. */
  const handleGenerateAgain = () => {
    setResume(null);
    setStatus("idle");
    window.setTimeout(() => {
      promptRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  return (
    <div className="relative min-h-screen">
      {/* Decorative dreamy pink-purple background layer */}
      <DreamyBackground />

      <Navbar />

      <main>
        <Hero />

        {/* -------- Step 1: prompt input -------- */}
        <div ref={promptRef} id="prompt" className="scroll-mt-24">
          <PromptBox
            prompt={prompt}
            loading={status === "loading"}
            onPromptChange={setPrompt}
            onGenerate={handleGenerate}
          />
        </div>

        {/* -------- Loading state -------- */}
        {status === "loading" && (
          <div className="pt-12">
            <LoadingState />
          </div>
        )}

        {/* -------- Steps 2–4: templates, editor, live preview -------- */}
        {status === "done" && resume && (
          <>
            <div ref={templatesRef}>
              <TemplateSelector
                resume={resume}
                selectedId={templateId}
                onSelect={handleSelectTemplate}
              />
            </div>

            <section
              ref={editorRef}
              id="editor"
              className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-20 pt-4 sm:px-6"
            >
              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50/80 px-4 py-1.5 text-xs font-semibold text-purple-700 shadow-sm">
                  <Pencil className="h-3.5 w-3.5" />
                  Live editing
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Customize Your Resume
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
                  Edit any field below — your resume preview updates instantly.
                </p>
              </div>

              <div className="mt-10 grid items-start gap-8 lg:grid-cols-[440px_minmax(0,1fr)]">
                <ResumeEditor
                  resume={resume}
                  onUpdate={setResume}
                  onSave={() => showToast("Changes saved to your resume")}
                />
                <ResumePreview
                  resume={resume}
                  templateId={templateId}
                  onEdit={scrollToEditor}
                  onChangeTemplate={scrollToTemplates}
                  onGenerateAgain={handleGenerateAgain}
                />
              </div>
            </section>
          </>
        )}

        <HowItWorks />
      </main>

      <Footer />

      {/* -------- Toast -------- */}
      {toast && (
        <div className="toast-in fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 px-4 py-3 text-sm font-medium text-white shadow-2xl shadow-purple-500/40">
          <Check className="h-4 w-4 text-white" />
          {toast}
        </div>
      )}
    </div>
  );
}
