export type HackathonMode = "Online" | "Offline" | "Hybrid";

export type HackathonStatus = "Open" | "Closing Soon" | "Closed";

export interface HackathonRound {
  id?: string;
  title: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface HackathonReward {
  position: string;
  amount: string;
  perks: string[];
}

export interface Hackathon {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  organizerName: string;
  organizerType?: "College" | "Corporate" | "Startup" | "Community";
  organizerLogo?: string;
  category: string;
  mode: HackathonMode;
  location?: string;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  entryFee: string; // e.g. "Free" or "₹199"
  isFree: boolean;
  prize: string; // e.g. "₹3,00,000"
  prizeAmountNumber?: number;
  eligibility: string;
  teamSize: string; // e.g. "2 - 4 Members"
  minTeamSize?: number;
  maxTeamSize?: number;
  registeredCount: number;
  status: HackathonStatus;
  poster?: string;
  registrationUrl: string;
  websiteUrl?: string;
  tags: string[];
  technologies: string[];
  rules: string[];
  timeline: HackathonRound[];
  rewards: HackathonReward[];
  highlights?: string[];
  createdAt: string;
}

export interface HackathonFilterState {
  search: string;
  category: string;
  mode: string;
  location: string;
  eligibility: string;
  feeType: "all" | "free" | "paid";
  status: string;
}

export type HackathonSortOption =
  | "newest"
  | "deadline_soon"
  | "deadline_later"
  | "most_registered"
  | "alphabetical";
