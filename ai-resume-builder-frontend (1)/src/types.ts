/**
 * Shared types for resume data.
 * All 8 resume templates accept the SAME ResumeData object.
 * A future backend (e.g. Flask) can return exactly this shape.
 */

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  year: string;
  points: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  skills: string[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  certifications: string[];
  achievements: string[];
}
