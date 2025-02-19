export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
