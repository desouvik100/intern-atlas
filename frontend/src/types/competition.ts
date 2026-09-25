export type OpportunityMode = "Online" | "Offline" | "Hybrid";

export type OpportunityStatus = "Open" | "Closing Soon" | "Closed";

export interface CompetitionRound {
  title: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface CompetitionReward {
  position: string;
  amount: string;
  perks: string[];
}

export interface Competition {
  id: string;
  slug: string;
  title: string;
  description: string;
  organizerName: string;
  organizerType?: "College" | "Corporate" | "Startup" | "Community";
  organizerLogo?: string;
  category: string;
  mode: OpportunityMode;
  location?: string;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  entryFee: string; // e.g. "Free" or "₹199"
  isFree: boolean;
  prize: string; // e.g. "₹1,50,000" or "Certificates & Swag"
  prizeAmountNumber?: number; // for sorting by prize value
  eligibility: string; // e.g. "College Students, Engineering, MBA"
  teamSize: string; // e.g. "1 - 4 Members"
  minTeamSize?: number;
  maxTeamSize?: number;
  registeredCount: number;
  status: OpportunityStatus;
  poster?: string;
  registrationUrl: string;
  websiteUrl?: string;
  tags: string[];
  rules: string[];
  timeline: CompetitionRound[];
  rewards: CompetitionReward[];
  highlights?: string[];
  createdAt: string;
}

export interface CompetitionFilterState {
  search: string;
  category: string;
  mode: string;
  location: string;
  eligibility: string;
  feeType: "all" | "free" | "paid";
  status: string;
}

export type CompetitionSortOption =
  | "newest"
  | "deadline_soon"
  | "deadline_later"
  | "most_registered"
  | "alphabetical";
