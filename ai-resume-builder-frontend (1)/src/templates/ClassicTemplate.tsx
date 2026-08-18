/**
 * Template 1 — Classic
 * Traditional professional resume. Clean black-and-white design.
 * Best for: corporate jobs, internships, freshers.
 */
import type { ReactNode } from "react";
import type { ResumeData } from "../types";
import { contactItems } from "./shared";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-5 break-inside-avoid">
      <h2 className="border-b border-slate-300 pb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-900">
        {title}
      </h2>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}

export default function ClassicTemplate({ resume }: { resume: ResumeData }) {
  const contacts = contactItems(resume);
  return (
    <div className="w-full bg-white px-10 py-9 text-slate-800">
      {/* Centered header with a thick black rule */}
      <header className="border-b-[3px] border-slate-900 pb-4 text-center">
        <h1 className="font-serif text-[28px] font-bold tracking-wide text-slate-900">
          {resume.name}
        </h1>
        {resume.title && (
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {resume.title}
          </p>
        )}
        {contacts.length > 0 && (
          <p className="mt-2.5 text-[10.5px] leading-relaxed text-slate-600">
            {contacts.map((c, i) => (
              <span key={c}>
                {i > 0 && <span className="mx-1.5 text-slate-400">•</span>}
                {c}
              </span>
            ))}
          </p>
        )}
      </header>

      {resume.summary && (
        <Section title="Professional Summary">
          <p className="text-[12.5px] leading-relaxed text-slate-700">{resume.summary}</p>
        </Section>
      )}

      {resume.skills.length > 0 && (
        <Section title="Technical Skills">
          <p className="text-[12.5px] leading-relaxed text-slate-700">
            {resume.skills.join("  •  ")}
          </p>
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
                    <p className="text-[12px] text-slate-600">{edu.institution}</p>
                  )}
                </div>
                {edu.year && (
                  <p className="shrink-0 text-[11px] font-medium text-slate-500">{edu.year}</p>
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
                      <p className="text-[12px] italic text-slate-600">{exp.company}</p>
                    )}
                  </div>
                  {exp.year && (
                    <p className="shrink-0 text-[11px] font-medium text-slate-500">{exp.year}</p>
                  )}
                </div>
                {exp.points.length > 0 && (
                  <ul className="mt-1.5 list-disc space-y-1 pl-4 text-[12.5px] leading-relaxed text-slate-700">
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
                  <p className="text-[12.5px] leading-relaxed text-slate-700">
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
          <ul className="list-disc space-y-1 pl-4 text-[12.5px] leading-relaxed text-slate-700">
            {resume.certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </Section>
      )}

      {resume.achievements.length > 0 && (
        <Section title="Achievements">
          <ul className="list-disc space-y-1 pl-4 text-[12.5px] leading-relaxed text-slate-700">
            {resume.achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}
