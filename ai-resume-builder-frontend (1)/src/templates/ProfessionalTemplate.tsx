/**
 * Template 4 — Professional
 * Corporate-style layout with strong section hierarchy.
 * Best for: business, corporate positions.
 */
import type { ReactNode } from "react";
import type { ResumeData } from "../types";
import { Bullets, contactItems, Row } from "./shared";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-6 break-inside-avoid">
      <h2 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-900">
        <span className="h-3.5 w-1 rounded-full bg-pink-600" />
        {title}
      </h2>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}

export default function ProfessionalTemplate({ resume }: { resume: ResumeData }) {
  const contacts = contactItems(resume);
  return (
    <div className="w-full bg-white text-slate-700">
      {/* Dark navy header band */}
      <header className="bg-slate-900 px-8 py-7 text-white">
        <h1 className="text-[26px] font-bold leading-tight">{resume.name}</h1>
        {resume.title && (
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-pink-400">
            {resume.title}
          </p>
        )}
        {contacts.length > 0 && (
          <p className="mt-3 text-[10.5px] leading-relaxed text-slate-300">
            {contacts.map((c, i) => (
              <span key={c}>
                {i > 0 && <span className="mx-1.5 text-slate-500">•</span>}
                {c}
              </span>
            ))}
          </p>
        )}
      </header>

      <div className="flex">
        {/* Main column */}
        <main className="min-w-0 flex-1 px-8 py-7">
          {resume.summary && (
            <Section title="Professional Summary">
              <p className="text-[12.5px] leading-relaxed text-slate-600">{resume.summary}</p>
            </Section>
          )}

          {resume.education.length > 0 && (
            <Section title="Education">
              <div className="space-y-3.5">
                {resume.education.map((edu) => (
                  <Row key={edu.id} title={edu.degree} subtitle={edu.institution} right={edu.year} />
                ))}
              </div>
            </Section>
          )}

          {resume.experience.length > 0 && (
            <Section title="Work Experience">
              <div className="space-y-4">
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
              <div className="space-y-3.5">
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
        </main>

        {/* Right rail */}
        <aside className="w-[200px] shrink-0 border-l border-slate-200 bg-slate-50 px-6 py-7">
          {resume.skills.length > 0 && (
            <div>
              <h3 className="inline-block border-b-2 border-pink-600 pb-0.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900">
                Core Skills
              </h3>
              <ul className="mt-3.5 space-y-2">
                {resume.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-[11px] text-slate-600">
                    <span className="mt-[5px] h-1 w-1 shrink-0 bg-pink-600" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
