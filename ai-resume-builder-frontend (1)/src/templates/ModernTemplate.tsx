/**
 * Template 2 — Modern
 * Modern layout with a colored sidebar.
 * Best for: software developers, tech jobs.
 */
import type { ReactNode } from "react";
import type { ResumeData } from "../types";
import { contactItems } from "./shared";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-6 break-inside-avoid">
      <h2 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-pink-700">
        <span className="h-3 w-1 rounded-full bg-gradient-to-b from-pink-600 to-fuchsia-600" />
        {title}
      </h2>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}

export default function ModernTemplate({ resume }: { resume: ResumeData }) {
  const contacts = contactItems(resume);
  return (
    <div className="flex w-full bg-white text-slate-700">
      {/* Colored sidebar */}
      <aside className="w-[218px] shrink-0 bg-gradient-to-b from-rose-700 via-pink-700 to-fuchsia-700 px-6 py-8 text-white">
        <h1 className="text-[20px] font-bold leading-tight">{resume.name}</h1>
        {resume.title && (
          <p className="mt-1.5 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-pink-100/90">
            {resume.title}
          </p>
        )}

        {contacts.length > 0 && (
          <div className="mt-6 space-y-2 border-t border-white/15 pt-4">
            {contacts.map((c) => (
              <p key={c} className="break-words text-[9.5px] leading-relaxed text-pink-50/90">
                {c}
              </p>
            ))}
          </div>
        )}

        {resume.skills.length > 0 && (
          <div className="mt-6">
            <h2 className="text-[9px] font-bold uppercase tracking-[0.2em] text-pink-100/70">
              Skills
            </h2>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {resume.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded bg-white/15 px-2 py-0.5 text-[9px] font-medium text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </aside>

      {/* Main content */}
      <main className="min-w-0 flex-1 px-7 py-8">
        {resume.summary && (
          <Section title="Summary">
            <p className="text-[12px] leading-relaxed text-slate-600">{resume.summary}</p>
          </Section>
        )}

        {resume.education.length > 0 && (
          <Section title="Education">
            <div className="space-y-3">
              {resume.education.map((edu) => (
                <div key={edu.id} className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="text-[13px] font-bold text-slate-900">{edu.degree}</p>
                    {edu.institution && (
                      <p className="mt-0.5 text-[11.5px] text-slate-500">{edu.institution}</p>
                    )}
                  </div>
                  {edu.year && (
                    <p className="shrink-0 text-[10.5px] font-medium text-slate-400">{edu.year}</p>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {resume.experience.length > 0 && (
          <Section title="Work Experience">
            <div className="space-y-4">
              {resume.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="text-[13px] font-bold text-slate-900">{exp.role}</p>
                      {exp.company && (
                        <p className="mt-0.5 text-[11.5px] text-slate-500">{exp.company}</p>
                      )}
                    </div>
                    {exp.year && (
                      <p className="shrink-0 text-[10.5px] font-medium text-slate-400">{exp.year}</p>
                    )}
                  </div>
                  {exp.points.length > 0 && (
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-[12px] leading-relaxed text-slate-600">
                      {exp.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {resume.projects.length > 0 && (
          <Section title="Projects">
            <div className="space-y-3">
              {resume.projects.map((project) => (
                <div key={project.id}>
                  <p className="text-[13px] font-bold text-slate-900">{project.name}</p>
                  {project.description && (
                    <p className="mt-0.5 text-[12px] leading-relaxed text-slate-600">
                      {project.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {resume.certifications.length > 0 && (
          <Section title="Certifications">
            <ul className="list-disc space-y-1 pl-4 text-[12px] leading-relaxed text-slate-600">
              {resume.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </Section>
        )}

        {resume.achievements.length > 0 && (
          <Section title="Achievements">
            <ul className="list-disc space-y-1 pl-4 text-[12px] leading-relaxed text-slate-600">
              {resume.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Section>
        )}
      </main>
    </div>
  );
}
