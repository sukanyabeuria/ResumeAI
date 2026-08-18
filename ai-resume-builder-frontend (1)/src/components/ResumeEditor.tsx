/**
 * ResumeEditor — "Customize Your Resume" form.
 * Every change updates the resume state in App, so the preview updates
 * instantly. "Save Changes" shows a confirmation toast.
 */
import { Plus, Save, Trash2 } from "lucide-react";
import type { Education, Experience, Project, ResumeData } from "../types";

const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

const fieldCls =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition-all focus:border-pink-400 focus:ring-4 focus:ring-pink-100";
const labelCls = "mb-1 block text-[11px] font-semibold uppercase tracking-wide text-slate-500";

/* ------------------------------ tiny inputs ------------------------------ */

function Field({
  label,
  value,
  onChange,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className={labelCls}>{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} className={fieldCls} />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  rows = 3,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className={labelCls}>{label}</span>
      <textarea
        value={value}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className={`${fieldCls} resize-none leading-relaxed`}
      />
    </label>
  );
}

function GroupTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-pink-700">{children}</h4>
  );
}

function ItemBox({
  title,
  onRemove,
  children,
}: {
  title: string;
  onRemove: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative rounded-xl border border-slate-200 bg-slate-50/50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wide text-slate-600">{title}</span>
        <button
          type="button"
          onClick={onRemove}
          className="rounded-md p-1.5 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500"
          aria-label="Remove item"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function AddButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-pink-300 px-3 py-2 text-xs font-semibold text-slate-500 transition-all hover:border-fuchsia-400 hover:bg-fuchsia-50 hover:text-fuchsia-600"
    >
      <Plus className="h-3.5 w-3.5" />
      {label}
    </button>
  );
}

/* ------------------------------- main form ------------------------------- */

interface ResumeEditorProps {
  resume: ResumeData;
  onUpdate: (resume: ResumeData) => void;
  onSave: () => void;
}

export default function ResumeEditor({ resume, onUpdate, onSave }: ResumeEditorProps) {
  /* Generic immutable update helpers */
  const update = <K extends keyof ResumeData>(key: K, value: ResumeData[K]) =>
    onUpdate({ ...resume, [key]: value });

  const patchItem = <T extends { id: string }>(list: T[], index: number, patch: Partial<T>): T[] =>
    list.map((item, i) => (i === index ? { ...item, ...patch } : item));

  return (
    <div className="rounded-2xl border border-pink-100 bg-white/90 p-6 shadow-xl shadow-pink-200/40 backdrop-blur-sm">
      {/* Card header */}
      <div className="flex items-center justify-between gap-4 border-b border-pink-100 pb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Resume Details</h3>
          <p className="text-xs text-slate-500">Changes update the preview instantly.</p>
        </div>
        <button
          type="button"
          onClick={onSave}
          className="hidden shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-pink-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/40 sm:inline-flex"
        >
          <Save className="h-3.5 w-3.5" />
          Save Changes
        </button>
      </div>

      <div className="mt-6 space-y-8">
        {/* --- Personal details --- */}
        <div>
          <GroupTitle>Personal Details</GroupTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" value={resume.name} onChange={(v) => update("name", v)} />
            <Field label="Professional Title" value={resume.title} onChange={(v) => update("title", v)} />
            <Field label="Email" value={resume.email} onChange={(v) => update("email", v)} />
            <Field label="Phone" value={resume.phone} onChange={(v) => update("phone", v)} />
            <Field label="Location" value={resume.location} onChange={(v) => update("location", v)} />
            <Field label="LinkedIn" value={resume.linkedin} onChange={(v) => update("linkedin", v)} />
            <Field
              label="GitHub"
              value={resume.github}
              onChange={(v) => update("github", v)}
              className="sm:col-span-2"
            />
          </div>
        </div>

        {/* --- Professional summary --- */}
        <div>
          <GroupTitle>Professional Summary</GroupTitle>
          <TextArea rows={4} label="" value={resume.summary} onChange={(v) => update("summary", v)} />
        </div>

        {/* --- Skills --- */}
        <div>
          <GroupTitle>Technical Skills</GroupTitle>
          <TextArea
            rows={2}
            label="Skills (comma separated)"
            value={resume.skills.join(", ")}
            onChange={(v) =>
              update(
                "skills",
                v.split(",").map((s) => s.trim()).filter(Boolean)
              )
            }
          />
        </div>

        {/* --- Education --- */}
        <div>
          <GroupTitle>Education</GroupTitle>
          <div className="space-y-3">
            {resume.education.map((edu, i) => (
              <ItemBox
                key={edu.id}
                title={`Entry ${i + 1}`}
                onRemove={() => update("education", resume.education.filter((_, x) => x !== i))}
              >
                <Field
                  label="Degree"
                  value={edu.degree}
                  onChange={(v) => update("education", patchItem(resume.education, i, { degree: v } as Partial<Education>))}
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field
                    label="Institution"
                    value={edu.institution}
                    onChange={(v) => update("education", patchItem(resume.education, i, { institution: v } as Partial<Education>))}
                  />
                  <Field
                    label="Year"
                    value={edu.year}
                    onChange={(v) => update("education", patchItem(resume.education, i, { year: v } as Partial<Education>))}
                  />
                </div>
              </ItemBox>
            ))}
          </div>
          <div className="mt-3">
            <AddButton
              label="Add Education"
              onClick={() =>
                update("education", [
                  ...resume.education,
                  { id: uid(), degree: "", institution: "", year: "" },
                ])
              }
            />
          </div>
        </div>

        {/* --- Work experience --- */}
        <div>
          <GroupTitle>Work Experience</GroupTitle>
          <div className="space-y-3">
            {resume.experience.map((exp, i) => (
              <ItemBox
                key={exp.id}
                title={`Role ${i + 1}`}
                onRemove={() => update("experience", resume.experience.filter((_, x) => x !== i))}
              >
                <Field
                  label="Job Title"
                  value={exp.role}
                  onChange={(v) => update("experience", patchItem(resume.experience, i, { role: v } as Partial<Experience>))}
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field
                    label="Company"
                    value={exp.company}
                    onChange={(v) => update("experience", patchItem(resume.experience, i, { company: v } as Partial<Experience>))}
                  />
                  <Field
                    label="Year"
                    value={exp.year}
                    onChange={(v) => update("experience", patchItem(resume.experience, i, { year: v } as Partial<Experience>))}
                  />
                </div>
                <TextArea
                  rows={3}
                  label="Key Points (one per line)"
                  value={exp.points.join("\n")}
                  onChange={(v) =>
                    update(
                      "experience",
                      patchItem(resume.experience, i, {
                        points: v.split("\n").map((s) => s.trim()).filter(Boolean),
                      } as Partial<Experience>)
                    )
                  }
                />
              </ItemBox>
            ))}
          </div>
          <div className="mt-3">
            <AddButton
              label="Add Experience"
              onClick={() =>
                update("experience", [
                  ...resume.experience,
                  { id: uid(), role: "", company: "", year: "", points: [] },
                ])
              }
            />
          </div>
        </div>

        {/* --- Projects --- */}
        <div>
          <GroupTitle>Projects</GroupTitle>
          <div className="space-y-3">
            {resume.projects.map((project, i) => (
              <ItemBox
                key={project.id}
                title={`Project ${i + 1}`}
                onRemove={() => update("projects", resume.projects.filter((_, x) => x !== i))}
              >
                <Field
                  label="Project Name"
                  value={project.name}
                  onChange={(v) => update("projects", patchItem(resume.projects, i, { name: v } as Partial<Project>))}
                />
                <TextArea
                  rows={2}
                  label="Description"
                  value={project.description}
                  onChange={(v) => update("projects", patchItem(resume.projects, i, { description: v } as Partial<Project>))}
                />
              </ItemBox>
            ))}
          </div>
          <div className="mt-3">
            <AddButton
              label="Add Project"
              onClick={() =>
                update("projects", [
                  ...resume.projects,
                  { id: uid(), name: "", description: "" },
                ])
              }
            />
          </div>
        </div>

        {/* --- Certifications --- */}
        <div>
          <GroupTitle>Certifications</GroupTitle>
          <div className="space-y-2.5">
            {resume.certifications.map((cert, i) => (
              <div key={`${cert}-${i}`} className="flex items-center gap-2">
                <input
                  value={cert}
                  onChange={(e) =>
                    update(
                      "certifications",
                      resume.certifications.map((c, x) => (x === i ? e.target.value : c))
                    )
                  }
                  className={fieldCls}
                />
                <button
                  type="button"
                  onClick={() =>
                    update("certifications", resume.certifications.filter((_, x) => x !== i))
                  }
                  className="rounded-md p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500"
                  aria-label="Remove certification"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <AddButton
              label="Add Certification"
              onClick={() => update("certifications", [...resume.certifications, ""])}
            />
          </div>
        </div>

        {/* --- Achievements --- */}
        <div>
          <GroupTitle>Achievements</GroupTitle>
          <div className="space-y-2.5">
            {resume.achievements.map((item, i) => (
              <div key={`${item}-${i}`} className="flex items-center gap-2">
                <input
                  value={item}
                  onChange={(e) =>
                    update(
                      "achievements",
                      resume.achievements.map((a, x) => (x === i ? e.target.value : a))
                    )
                  }
                  className={fieldCls}
                />
                <button
                  type="button"
                  onClick={() =>
                    update("achievements", resume.achievements.filter((_, x) => x !== i))
                  }
                  className="rounded-md p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500"
                  aria-label="Remove achievement"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <AddButton
              label="Add Achievement"
              onClick={() => update("achievements", [...resume.achievements, ""])}
            />
          </div>
        </div>
      </div>

      {/* Mobile save button */}
      <div className="mt-8 border-t border-pink-100 pt-5">
        <button
          type="button"
          onClick={onSave}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/40 sm:hidden"
        >
          <Save className="h-4 w-4" />
          Save Changes
        </button>
      </div>
    </div>
  );
}
