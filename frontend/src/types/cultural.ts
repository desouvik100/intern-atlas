export type CulturalEventMode = "Offline" | "Online" | "Hybrid";

export type CulturalEventStatus =
  | "Open"
  | "Closing Soon"
  | "Closed"
  | "Upcoming"
  | "Ongoing";

export interface CulturalScheduleDay {
  day: string;
  date: string;
  title: string;
  events: string[];
}

export interface CulturalContact {
  email: string;
  phone?: string;
  website?: string;
}

export interface CulturalEvent {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  organizerName: string;
  organizerType?: "College Council" | "Student Body" | "Cultural Society" | "University Guild";
  location: string;
  venue?: string;
  mode: CulturalEventMode;
  category: string; // e.g. "Music & Bands", "Dance & Choreo", "Dramatics & Theatre", "Literary & Poetry", "Fine Arts & Photo", "Fashion & Lifestyle"
  description: string;
  shortDescription: string;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  entryFee: string;
  isFree: boolean;
  status: CulturalEventStatus;
  registrationStatus: CulturalEventStatus;
  eligibility: string;
  teamSize?: string;
  prizePool?: string;
  registeredCount: number;
  tags: string[];
  highlights?: string[];
  rules?: string[];
  schedule?: CulturalScheduleDay[];
  contact?: CulturalContact;
  registrationUrl: string;
  websiteUrl?: string;
  poster?: string;
  createdAt: string;
}

export interface CulturalFilterState {
  search: string;
  category: string;
  mode: string;
  location: string;
  eligibility: string;
  feeType: "all" | "free" | "paid";
  status: string;
}

export type CulturalSortOption =
  | "newest"
  | "deadline_soon"
  | "deadline_later"
  | "event_date_soon"
  | "most_registered"
  | "alphabetical";
