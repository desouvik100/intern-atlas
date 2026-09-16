export type OpportunityType =
  | "internship"
  | "job"
  | "hackathon"
  | "competition"
  | "scholarship"
  | "event"
  | "contest"
  | "quiz"
  | "workshops"
  | "college_fest"
  | "cultural";

export type LogoVariant = "tcs" | "amazon" | "google" | "microsoft" | "default" | "startup" | "unstop" | "tata" | "isro" | "adobe" | "hackerearth";

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  type: OpportunityType;
  location: string;
  compensation?: string;
  applyBy?: string;
  daysLeft?: number;
  logoVariant: string;
  badges?: string[];
  timeLabel?: string;
}

export interface Category {
  id: string;
  type: OpportunityType;
  label: string;
  description: string;
  iconKey: CategoryIconKey;
}

export type CategoryIconKey =
  | "briefcase"
  | "user"
  | "zap"
  | "trophy"
  | "graduation"
  | "calendar"
  | "star"
  | "clipboard"
  | "users";

export interface FeaturedItem {
  id: string;
  title: string;
  type: string;
  subtitle: string;
  bgGradient: string;
  accentElement: React.ReactNode;
}
