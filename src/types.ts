export interface HistoryItem {
  id: string;
  year: string;
  date: string;
  title: string;
  description: string;
  category: 'founding' | 'production' | 'certification' | 'innovation';
  highlight?: boolean;
}

export interface PhilosophyItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  points: string[];
  keyOutcome: string;
}

export interface OrgTeam {
  id: string;
  name: string;
  leader: string;
  roles: string[];
  keyTasks: string[];
  color: string;
}

export interface ProductItem {
  id: string;
  name: string;
  koreanName: string;
  category: 'headliner' | 'nvh' | 'trim' | 'electronic';
  description: string;
  features: string[];
  applications: string[];
  specs: Record<string, string>;
  image: string;
  badge?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  issuer: string;
  description: string;
  badgeCode: string;
}

export interface EsgItem {
  category: 'E' | 'S' | 'G';
  title: string;
  subtitle: string;
  points: string[];
  icon: string;
}
