import { GithubIcon, LinkedinIcon } from "./icons";

/** Simple footer with branding and social links. */
export default function Footer() {
  return (
    <footer className="border-t border-pink-200/70 bg-white/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <p className="text-sm font-medium text-slate-600">
          <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text font-bold text-transparent">
            ResumeAI
          </span>{" "}
          — Build better resumes with AI.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-pink-600"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-purple-600"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
