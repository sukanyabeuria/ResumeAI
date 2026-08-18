/**
 * Template 8 — Student
 * Designed specifically for college students and freshers.
 * Best for: students, internships, entry-level jobs.
 */
import type { ReactNode } from "react";
import type { ResumeData } from "../types";
import { Bullets, contactItems, initials } from "./shared";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-6 break-inside-avoid">
      <h2 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-900">
        <span className="h-3.5 w-1 rounded-full bg-gradient-to-b from-pink-600 to-fuchsia-600" />
        {title}
      </h2>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}

export default function StudentTemplate({ resume }: { resume: ResumeData }) {
  const contacts = contactItems(resume);
  return (
    <div className="w-full bg-white px-10 py-9 text-slate-700">
      {/* Header with avatar initial */}
      <header className="flex items-center gap-5 border-b border-slate-200 pb-6">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-600 to-fuchsia-600 text-xl font-bold text-white">
          {initials(resume.name)}
        </div>
        <div className="min-w-0">
          <h1 className="text-[24px] font-bold leading-tight text-slate-900">{resume.name}</h1>
          {resume.title && (
            <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-pink-700">
              {resume.title}
            </p>
          )}
          {contacts.length > 0 && (
            <p className="mt-1.5 text-[10.5px] leading-relaxed text-slate-500">
              {contacts.map((c, i) => (
                <span key={c}>
                  {i > 0 && <span className="mx-1.5 text-slate-300">•</span>}
                  {c}
                </span>
              ))}
            </p>
          )}
        </div>
      </header>

      {/* Education highlighted for students */}
      {resume.education.length > 0 && (
        <section className="mt-6 break-inside-avoid rounded-xl border border-pink-100 bg-pink-50/70 px-5 py-4">
          <h2 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-pink-700">
            <span className="h-3.5 w-1 rounded-full bg-pink-600" />
            Education
          </h2>
          <div className="mt-3 space-y-3">
            {resume.education.map((edu) => (
              <div key={edu.id} className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="text-[13px] font-bold text-slate-900">{edu.degree}</p>
                  {edu.institution && (
                    <p className="mt-0.5 text-[12px] text-slate-600">{edu.institution}</p>
                  )}
                </div>
                {edu.year && (
                  <p className="shrink-0 rounded-full border border-pink-100 bg-white px-2.5 py-0.5 text-[10.5px] font-semibold text-pink-700">
                    {edu.year}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.summary && (
        <Section title="About Me">
          <p className="text-[12.5px] leading-relaxed text-slate-600">{resume.summary}</p>
        </Section>
      )}

      {resume.skills.length > 0 && (
        <Section title="Skills">
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-rose-100 bg-rose-50 px-2.5 py-1 text-[10.5px] font-medium text-rose-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>
      )}

      {resume.experience.length > 0 && (
        <Section title="Experience">
          <div className="space-y-4">
            {resume.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="text-[13px] font-bold text-slate-900">{exp.role}</p>
                    {exp.company && (
                      <p className="mt-0.5 text-[12px] text-slate-500">{exp.company}</p>
                    )}
                  </div>
                  {exp.year && (
                    <p className="shrink-0 text-[11px] font-medium text-slate-400">{exp.year}</p>
                  )}
                </div>
                {exp.points.length > 0 && (
                  <div className="mt-2">
                    <Bullets items={exp.points} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {resume.projects.length > 0 && (
        <Section title="Projects">
          <div className="space-y-4">
            {resume.projects.map((project) => (
              <div key={project.id}>
                <p className="text-[13px] font-bold text-slate-900">{project.name}</p>
                {project.description && (
                  <p className="mt-0.5 text-[12.5px] leading-relaxed text-slate-600">
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
          <Bullets items={resume.certifications} />
        </Section>
      )}

      {resume.achievements.length > 0 && (
        <Section title="Achievements">
          <Bullets items={resume.achievements} />
        </Section>
      )}
    </div>
  );
}
