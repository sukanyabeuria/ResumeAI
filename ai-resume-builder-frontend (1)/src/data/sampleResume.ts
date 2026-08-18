/**
 * Mock resume data — makes the frontend fully functional with NO backend.
 *
 * ┌─────────────────────────────────────────────────────────────────────┐
 * │ BACKEND CONNECTION POINT                                            │
 * │ When a real backend exists, replace this with the response of       │
 * │ POST /generate-resume  (the returned JSON should match ResumeData). │
 * └─────────────────────────────────────────────────────────────────────┘
 */
import type { ResumeData } from "../types";

export const sampleResume: ResumeData = {
  name: "Sukanya Beuria",
  title: "Computer Science Student",
  email: "sukanya@example.com",
  phone: "+91 XXXXX XXXXX",
  location: "Bhubaneswar, India",
  linkedin: "linkedin.com/in/sukanyabeuria",
  github: "github.com/sukanyabeuria",

  summary:
    "Computer Science student passionate about software development, AI and data analysis. Strong foundation in Python, SQL and React, with hands-on projects in customer behavior analysis and emotion detection. Looking for a software development internship to apply my skills and grow.",

  skills: ["Python", "Java", "SQL", "React", "Power BI", "Machine Learning"],

  education: [
    {
      id: "edu-1",
      degree: "B.Tech in Computer Science",
      institution: "SOA University",
      year: "2024 – Present",
    },
  ],

  projects: [
    {
      id: "proj-1",
      name: "Customer Behavior Analysis",
      description:
        "Analyzed customer shopping data using Python and Power BI to uncover purchasing patterns and trends.",
    },
    {
      id: "proj-2",
      name: "Emotion Detection System",
      description:
        "Built a computer vision project to detect facial emotions in real time using deep learning.",
    },
  ],

  certifications: ["Oracle Agentic AI Certified Foundations Associate"],

  experience: [],

  achievements: [],
};
