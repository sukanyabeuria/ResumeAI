/**
 * Template 7 — Executive
 * Elegant premium-looking layout.
 * Best for: experienced professionals, leadership roles.
 */
import type { ReactNode } from "react";
import type { ResumeData } from "../types";
import { Bullets, contactItems, Row } from "./shared";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8 break-inside-avoid">
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-slate-300" />
        <h2 className="text-[10.5px] font-bold uppercase tracking-[0.32em] text-slate-900">
          {title}
        </h2>
        <span className="h-px flex-1 bg-slate-300" />
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function ExecutiveTemplate({ resume }: { resume: ResumeData }) {
  const contacts = contactItems(resume);
  return (
    <div className="w-full bg-white px-11 py-10 text-slate-700">
      {/* Centered serif header with a double rule */}
      <header className="text-center">
        <h1 className="font-serif text-[30px] font-semibold tracking-wide text-slate-900">
          {resume.name}
        </h1>
        {resume.title && (
          <p className="mt-2 text-[10.5px] font-semibold uppercase tracking-[0.38em] text-slate-500">
            {resume.title}
          </p>
        )}
        {contacts.length > 0 && (
          <p className="mt-3.5 text-[10.5px] leading-relaxed text-slate-500">
            {contacts.map((c, i) => (
              <span key={c}>
                {i > 0 && <span className="mx-2 text-slate-300">•</span>}
                {c}
              </span>
            ))}
          </p>
        )}
        <div className="mx-auto mt-6 max-w-[560px]">
          <div className="h-[2.5px] w-full bg-slate-900" />
          <div className="mt-[3px] h-px w-full bg-slate-300" />
        </div>
      </header>

      {resume.summary && (
        <Section title="Professional Summary">
          <p className="text-center text-[12.5px] leading-relaxed text-slate-600">
            {resume.summary}
          </p>
        </Section>
      )}

      {resume.skills.length > 0 && (
        <Section title="Core Competencies">
          <div className="flex flex-wrap justify-center gap-2">
            {resume.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 px-3 py-1 text-[10.5px] font-medium text-slate-600"
              >
                {skill}
              </span>
            ))}
          </div>
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
        <Section title="Professional Experience">
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
