export type QuizMode = "Online" | "Offline" | "Hybrid";

export type QuizStatus = "Open" | "Closing Soon" | "Closed";

export type QuizDifficulty = "Beginner" | "Intermediate" | "Advanced";

export interface QuizRound {
  title: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string;
  duration?: string;
  questionCount?: number;
}

export interface QuizReward {
  position: string;
  amount: string;
  perks: string[];
}

export interface Quiz {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  shortDescription?: string;
  organizerName: string;
  organizerType?: "College" | "Corporate" | "Community" | "Platform";
  organizerLogo?: string;
  category: string;
  mode: QuizMode;
  location?: string;
  status: QuizStatus;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  entryFee: string; // e.g. "Free" or "₹49"
  isFree: boolean;
  prizePool: string; // e.g. "₹50,000"
  prizeAmountNumber?: number;
  participantCount: number;
  registeredCount: number; // alias for opportunity card compatibility
  maxParticipants?: number;
  duration: string; // e.g. "30 mins", "45 mins"
  questionCount: number; // e.g. 30, 45, 60
  difficulty: QuizDifficulty;
  eligibility: string;
  languages: string[];
  tags: string[];
  technologies?: string[];
  thumbnail?: string;
  poster?: string;
  registrationUrl: string;
  websiteUrl?: string;
  createdAt: string;
  rules: string[];
  instructions: string[];
  rounds: QuizRound[];
  rewards: QuizReward[];
  highlights?: string[];
}

export interface QuizFilterState {
  search: string;
  category: string;
  mode: string;
  location: string;
  difficulty: string;
  eligibility: string;
  feeType: "all" | "free" | "paid";
  status: string;
}

export type QuizSortOption =
  | "newest"
  | "deadline_soon"
  | "deadline_later"
  | "most_registered"
  | "alphabetical";
