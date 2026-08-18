/**
 * Template registry — all 8 resume templates, each accepting the same
 * resume data object. The selected template is rendered dynamically via:
 *
 *   const Template = getTemplate(templateId).component;
 *   <Template resume={resumeData} />
 */
import type { ComponentType } from "react";
import type { ResumeData } from "../types";
import ClassicTemplate from "./ClassicTemplate";
import ModernTemplate from "./ModernTemplate";
import MinimalTemplate from "./MinimalTemplate";
import ProfessionalTemplate from "./ProfessionalTemplate";
import CreativeTemplate from "./CreativeTemplate";
import TechTemplate from "./TechTemplate";
import ExecutiveTemplate from "./ExecutiveTemplate";
import StudentTemplate from "./StudentTemplate";

export type TemplateId =
  | "classic"
  | "modern"
  | "minimal"
  | "professional"
  | "creative"
  | "tech"
  | "executive"
  | "student";

export interface TemplateDef {
  id: TemplateId;
  name: string;
  description: string;
  bestFor: string[];
  component: ComponentType<{ resume: ResumeData }>;
}

export const TEMPLATES: TemplateDef[] = [
  {
    id: "classic",
    name: "Classic",
    description: "Traditional professional resume with a clean black-and-white design.",
    bestFor: ["Corporate jobs", "Internships", "Freshers"],
    component: ClassicTemplate,
  },
  {
    id: "modern",
    name: "Modern",
    description: "Modern layout with a colored sidebar for a bold first impression.",
    bestFor: ["Software developers", "Tech jobs"],
    component: ModernTemplate,
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Very clean design with lots of whitespace and quiet elegance.",
    bestFor: ["Simple professional resumes"],
    component: MinimalTemplate,
  },
  {
    id: "professional",
    name: "Professional",
    description: "Corporate-style layout with strong section hierarchy.",
    bestFor: ["Business", "Corporate positions"],
    component: ProfessionalTemplate,
  },
  {
    id: "creative",
    name: "Creative",
    description: "Modern visual design with subtle accent colors.",
    bestFor: ["Designers", "Creative professionals"],
    component: CreativeTemplate,
  },
  {
    id: "tech",
    name: "Tech",
    description: "Developer-focused resume with technical skills prominently displayed.",
    bestFor: ["Software engineers", "Developers", "CS students"],
    component: TechTemplate,
  },
  {
    id: "executive",
    name: "Executive",
    description: "Elegant premium-looking layout for seasoned professionals.",
    bestFor: ["Experienced professionals", "Leadership roles"],
    component: ExecutiveTemplate,
  },
  {
    id: "student",
    name: "Student",
    description: "Designed specifically for college students and freshers.",
    bestFor: ["Students", "Internships", "Entry-level jobs"],
    component: StudentTemplate,
  },
];

export const getTemplate = (id: TemplateId): TemplateDef =>
  TEMPLATES.find((t) => t.id === id) ?? TEMPLATES[0];
