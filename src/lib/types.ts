export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  imageHint?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  imageUrl: string;
  skills: string[];
  verifyUrl?: string; // Optional: Link to verify certificate
  imageHint?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TechnicalSkills {
  categories: SkillCategory[];
  toolsImage: {
    url: string;
    alt: string;
    imageHint?: string;
  };
}
