/**
 * Template 3 — Minimal
 * Very clean design with lots of whitespace.
 * Best for: simple professional resumes.
 */
import type { ReactNode } from "react";
import type { ResumeData } from "../types";
import { Bullets, contactItems, Row } from "./shared";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8 break-inside-avoid">
      <h2 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default function MinimalTemplate({ resume }: { resume: ResumeData }) {
  const contacts = contactItems(resume);
  return (
    <div className="w-full bg-white px-12 py-11 text-slate-700">
      <header className="pb-7">
        <h1 className="text-[26px] font-semibold tracking-tight text-slate-900">{resume.name}</h1>
        {resume.title && (
          <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.32em] text-slate-400">
            {resume.title}
          </p>
        )}
        {contacts.length > 0 && (
          <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[10.5px] text-slate-400">
            {contacts.map((c, i) => (
              <span key={c} className="flex items-center gap-3">
                {i > 0 && <span className="text-slate-200">/</span>}
                {c}
              </span>
            ))}
          </p>
        )}
        <div className="mt-6 h-px w-full bg-slate-200" />
      </header>

      {resume.summary && (
        <Section title="Profile">
          <p className="text-[12.5px] leading-relaxed text-slate-600">{resume.summary}</p>
        </Section>
      )}

      {resume.skills.length > 0 && (
        <Section title="Skills">
          <p className="text-[12.5px] leading-relaxed text-slate-600">
            {resume.skills.join("  ·  ")}
          </p>
        </Section>
      )}

      {resume.education.length > 0 && (
        <Section title="Education">
          <div className="space-y-4">
            {resume.education.map((edu) => (
              <Row key={edu.id} title={edu.degree} subtitle={edu.institution} right={edu.year} />
            ))}
          </div>
        </Section>
      )}

      {resume.experience.length > 0 && (
        <Section title="Experience">
          <div className="space-y-5">
            {resume.experience.map((exp) => (
              <div key={exp.id}>
                <Row title={exp.role} subtitle={exp.company} right={exp.year} />
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
                <p className="text-[13px] font-semibold text-slate-900">{project.name}</p>
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
