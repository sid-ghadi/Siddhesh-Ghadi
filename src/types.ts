export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface SkillCategory {
  badge?: string;
  category: string;
  description: string;
  skills?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  type?: string;
  description: string;
}

export interface SecondaryEducation {
  year: string;
  institution: string;
  degree: string;
  score?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  specialization: string;
  year: string;
  location: string;
  coursework?: string[];
  secondary?: SecondaryEducation[];
}

export interface ProfileData {
  name: string;
  eyebrow: string;
  title: string;
  positioning: string;
  summary: string;
  location: string;
  email: string;
  phone?: string;
  linkedin: string;
  github?: string;
  status: string;
  coordinates: string;
  education: EducationItem;
  experiences: ExperienceItem[];
  skillCategories: SkillCategory[];
  certifications: CertificationItem[];
}
