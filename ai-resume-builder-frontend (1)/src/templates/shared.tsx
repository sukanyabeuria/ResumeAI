/**
 * Small helpers shared by all resume templates.
 */
import type { ResumeData } from "../types";

/** Non-empty contact items in a consistent order. */
export function contactItems(resume: ResumeData): string[] {
  return [resume.email, resume.phone, resume.location, resume.linkedin, resume.github].filter(
    (v) => v.trim().length > 0
  );
}

/** Initials from a full name (used by the Student template avatar). */
export function initials(name: string): string {
  return (
    name
      .trim()
      .split(/\s+/)
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "R"
  );
}

/** A title + optional subtitle + right-aligned meta (year / period) row. */
export function Row({
  title,
  subtitle,
  right,
}: {
  title: string;
  subtitle?: string;
  right?: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <div className="min-w-0">
        <p className="text-[13px] font-bold text-slate-900">{title}</p>
        {subtitle ? <p className="mt-0.5 text-[12px] text-slate-500">{subtitle}</p> : null}
      </div>
      {right ? <p className="shrink-0 text-[11px] font-medium text-slate-400">{right}</p> : null}
    </div>
  );
}

/** Standard bullet list used in most templates. */
export function Bullets({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`list-disc space-y-1 pl-4 text-[12.5px] leading-relaxed text-slate-600 ${className}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
