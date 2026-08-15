export type NavTab = 'home' | 'services' | 'roi-quiz' | 'resources' | 'case-studies' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'megaphone' | 'briefcase' | 'users' | 'user-check';
  badgeColor: string;
  coreCapabilities: string[];
  imageType: 'recruitment-post' | 'webinar-banner' | 'thought-leadership' | 'linkedin-event';
  imagePlaceholderTitle?: string;
  imagePlaceholderSubtitle?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating?: number;
  highlightMetric?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  snippet: string;
  category: 'LinkedIn Operations' | 'Recruitment Marketing' | 'Employer Brand' | 'Executive Presence';
  categoryColor?: string;
  authorName: string;
  authorInitials: string;
  readTime: string;
  publishedDate: string;
  imageType: 'dashboard-team' | 'network-diagram' | 'mobile-mockup' | 'office-team';
  content?: string[];
  keyTakeaways?: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  subtitle: string;
  tags: string[];
  heroImage: string;
  metrics: {
    value: string;
    label: string;
    description: string;
    icon: 'user-plus' | 'clock' | 'briefcase' | 'trending-up';
  }[];
  challenge: string;
  strategySteps: {
    step: number;
    title: string;
    description: string;
  }[];
  quote: {
    text: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  description?: string;
  options: {
    id: string;
    title: string;
    subtitle: string;
    leakageWeight: number; // 0 to 10
    hoursWastedEst: number; // hrs per month
  }[];
}

export interface QuizState {
  currentStep: number;
  answers: Record<number, string>;
  isCompleted: boolean;
  score?: number;
  hoursWasted?: number;
  costLoss?: number;
}
