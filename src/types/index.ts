export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon?: string;
  color?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  logo: string;
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  skill?: string;
  email: string;
  location: string;
  avatar?: string;
  socialLinks: SocialLink[];
}

