/**
 * Template 6 — Tech
 * Developer-focused resume with technical skills prominently displayed.
 * Best for: software engineers, developers, CS students.
 */
import type { ReactNode } from "react";
import type { ResumeData } from "../types";
import { contactItems } from "./shared";

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="mt-6 break-inside-avoid">
      <h2 className="font-mono text-[11px] font-bold text-pink-700">{`// ${label}`}</h2>
      <div className="mt-2.5 border-l-2 border-slate-200 pl-4">{children}</div>
    </section>
  );
}

export default function TechTemplate({ resume }: { resume: ResumeData }) {
  const contacts = contactItems(resume);
  return (
    <div className="w-full bg-white text-slate-700">
      {/* Terminal-style dark header */}
      <header className="bg-slate-950 px-8 py-7 text-white">
        <p className="font-mono text-[10px] text-pink-400">~/resume &gt; whoami</p>
        <h1 className="mt-1.5 text-[24px] font-bold text-white">{resume.name}</h1>
        {resume.title && (
          <p className="mt-1 font-mono text-[11px] text-fuchsia-300">{resume.title}</p>
        )}
        {contacts.length > 0 && (
          <p className="mt-3 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[9.5px] text-slate-400">
            {contacts.map((c, i) => (
              <span key={c}>
                {i > 0 && <span className="mr-2 text-slate-600">·</span>}
                {c}
              </span>
            ))}
          </p>
        )}
      </header>

      <div className="px-8 py-7">
        {/* Tech stack — displayed prominently near the top */}
        {resume.skills.length > 0 && (
          <section className="break-inside-avoid rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5">
            <h2 className="font-mono text-[11px] font-bold text-pink-700">// tech_stack</h2>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {resume.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-slate-200 bg-white px-2 py-0.5 font-mono text-[10px] text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {resume.summary && (
          <Section label="summary">
            <p className="text-[12.5px] leading-relaxed text-slate-600">{resume.summary}</p>
          </Section>
        )}

        {resume.education.length > 0 && (
          <Section label="education">
            <div className="space-y-3">
              {resume.education.map((edu) => (
                <div key={edu.id} className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="text-[13px] font-bold text-slate-900">{edu.degree}</p>
                    {edu.institution && (
                      <p className="mt-0.5 text-[12px] text-slate-500">{edu.institution}</p>
                    )}
                  </div>
                  {edu.year && (
                    <p className="shrink-0 font-mono text-[10.5px] text-slate-400">{edu.year}</p>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {resume.experience.length > 0 && (
          <Section label="experience">
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
                      <p className="shrink-0 font-mono text-[10.5px] text-slate-400">{exp.year}</p>
                    )}
                  </div>
                  {exp.points.length > 0 && (
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-[12.5px] leading-relaxed text-slate-600">
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
          <Section label="projects">
            <div className="space-y-3">
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
          <Section label="certifications">
            <ul className="list-disc space-y-1 pl-4 text-[12.5px] leading-relaxed text-slate-600">
              {resume.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </Section>
        )}

        {resume.achievements.length > 0 && (
          <Section label="achievements">
            <ul className="list-disc space-y-1 pl-4 text-[12.5px] leading-relaxed text-slate-600">
              {resume.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Section>
        )}
      </div>
    </div>
  );
}
