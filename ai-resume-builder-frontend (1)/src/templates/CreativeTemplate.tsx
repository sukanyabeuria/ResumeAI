/**
 * Template 5 — Creative
 * Modern visual design with subtle accent colors.
 * Best for: designers, creative professionals.
 */
import type { ReactNode } from "react";
import type { ResumeData } from "../types";
import { contactItems } from "./shared";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-6 break-inside-avoid">
      <h2 className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-fuchsia-700">
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-600" />
        {title}
        <span className="ml-2 flex-1 border-b border-dashed border-fuchsia-200" />
      </h2>
      <div className="mt-3.5">{children}</div>
    </section>
  );
}

function TimelineEntry({
  title,
  subtitle,
  right,
  children,
}: {
  title: string;
  subtitle?: string;
  right?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative border-l-2 border-fuchsia-100 pb-4 pl-5 last:pb-0">
      <span className="absolute -left-[8px] top-1.5 h-4 w-4 rounded-full border-[3px] border-fuchsia-600 bg-white" />
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="text-[13px] font-bold text-slate-900">{title}</p>
          {subtitle && <p className="mt-0.5 text-[12px] text-slate-500">{subtitle}</p>}
        </div>
        {right && <p className="shrink-0 text-[10.5px] font-semibold text-fuchsia-600">{right}</p>}
      </div>
      {children}
    </div>
  );
}

export default function CreativeTemplate({ resume }: { resume: ResumeData }) {
  const contacts = contactItems(resume);
  return (
    <div className="w-full bg-white px-10 py-9 text-slate-700">
      <header className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-dashed border-fuchsia-200 pb-5">
        <div>
          <h1 className="text-[27px] font-extrabold tracking-tight text-slate-900">{resume.name}</h1>
          {resume.title && (
            <span className="mt-2 inline-block rounded-full bg-fuchsia-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-fuchsia-700">
              {resume.title}
            </span>
          )}
        </div>
        {contacts.length > 0 && (
          <div className="space-y-1 text-right text-[10.5px] text-slate-500">
            {contacts.map((c) => (
              <p key={c}>{c}</p>
            ))}
          </div>
        )}
      </header>

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
                className="rounded-full border border-fuchsia-200 bg-fuchsia-50 px-2.5 py-1 text-[10.5px] font-medium text-fuchsia-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>
      )}

      {resume.education.length > 0 && (
        <Section title="Education">
          <div className="mt-1">
            {resume.education.map((edu) => (
              <TimelineEntry
                key={edu.id}
                title={edu.degree}
                subtitle={edu.institution}
                right={edu.year}
              />
            ))}
          </div>
        </Section>
      )}

      {resume.experience.length > 0 && (
        <Section title="Work Experience">
          <div className="mt-1">
            {resume.experience.map((exp) => (
              <TimelineEntry key={exp.id} title={exp.role} subtitle={exp.company} right={exp.year}>
                {exp.points.length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-[12.5px] leading-relaxed text-slate-600">
                    {exp.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </TimelineEntry>
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
          <ul className="list-disc space-y-1 pl-4 text-[12.5px] leading-relaxed text-slate-600">
            {resume.certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </Section>
      )}

      {resume.achievements.length > 0 && (
        <Section title="Achievements">
          <ul className="list-disc space-y-1 pl-4 text-[12.5px] leading-relaxed text-slate-600">
            {resume.achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}
