import { useState } from "react";
import { FileText, Menu, Sparkles, X } from "lucide-react";
import { GithubIcon } from "./icons";

/** Top navigation bar — logo, links, "AI Powered" badge and Create Resume CTA. */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Templates", href: "#templates" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "GitHub", href: "https://github.com", external: true },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-pink-100/80 bg-white/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 shadow-md shadow-pink-500/30">
            <FileText className="h-5 w-5 text-white" />
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Resume
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              AI
            </span>
          </span>
          {/* AI Powered badge */}
          <span className="ml-1 hidden items-center gap-1 rounded-full border border-pink-200 bg-pink-50/80 px-2.5 py-0.5 text-[11px] font-semibold text-pink-700 sm:inline-flex">
            <Sparkles className="h-3 w-3 text-fuchsia-500" />
            AI Powered
          </span>
        </a>

        {/* Desktop links + CTA */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-pink-600"
              >
                <GithubIcon className="h-4 w-4" />
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-600"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#prompt"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/40"
          >
            Create Resume
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-pink-50 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-pink-100/80 bg-white/90 px-4 py-3 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-pink-50 hover:text-pink-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#prompt"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/30"
            >
              Create Resume
            </a>
            <span className="mx-3 mt-3 inline-flex w-fit items-center gap-1 rounded-full border border-pink-200 bg-pink-50/80 px-2.5 py-0.5 text-[11px] font-semibold text-pink-700">
              <Sparkles className="h-3 w-3 text-fuchsia-500" />
              AI Powered
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
