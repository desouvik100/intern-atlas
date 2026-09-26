export type ContestMode = "Online" | "Offline" | "Hybrid";

export type ContestStatus = "Open" | "Closing Soon" | "Closed";

export interface ContestRound {
  title: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface ContestReward {
  position: string;
  amount: string;
  perks: string[];
}

export interface Contest {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  organizerName: string;
  organizerType?: "College" | "Corporate" | "Community" | "Platform";
  organizerLogo?: string;
  category: string;
  mode: ContestMode;
  location?: string;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  entryFee: string; // e.g. "Free" or "₹99"
  isFree: boolean;
  prize: string; // e.g. "₹2,00,000"
  prizeAmountNumber?: number;
  eligibility: string;
  teamSize: string; // e.g. "Individual" or "1 - 2 Members"
  minTeamSize?: number;
  maxTeamSize?: number;
  registeredCount: number;
  status: ContestStatus;
  poster?: string;
  registrationUrl: string;
  websiteUrl?: string;
  tags: string[];
  technologies?: string[];
  rules: string[];
  timeline: ContestRound[];
  rewards: ContestReward[];
  highlights?: string[];
  createdAt: string;
}

export interface ContestFilterState {
  search: string;
  category: string;
  mode: string;
  location: string;
  eligibility: string;
  feeType: "all" | "free" | "paid";
  status: string;
}

export type ContestSortOption =
  | "newest"
  | "deadline_soon"
  | "deadline_later"
  | "most_registered"
  | "alphabetical";
