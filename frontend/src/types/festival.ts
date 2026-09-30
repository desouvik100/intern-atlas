export type FestivalMode = "Offline" | "Online" | "Hybrid";

export type FestivalStatus =
  | "Open"
  | "Closing Soon"
  | "Closed"
  | "Upcoming"
  | "Ongoing"
  | "Completed";

export interface FestivalScheduleDay {
  day: string;
  date: string;
  title: string;
  events: string[];
}

export interface FestivalContact {
  email: string;
  phone?: string;
  website?: string;
}

export interface CollegeFestival {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  collegeName: string;
  collegeLocation: string;
  location: string;
  venue?: string;
  mode: FestivalMode;
  festivalType: string; // e.g. "Cultural", "Technical", "Sports", "Management", "Multi-Genre"
  category: string;     // e.g. "Cultural Fest", "Tech Fest", "Socio-Cultural", "Fine Arts"
  description: string;
  shortDescription: string;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  entryFee: string; // e.g. "Free", "₹200", "Free Entry"
  isFree: boolean;
  registrationStatus: FestivalStatus;
  status: FestivalStatus; // compatibility alias
  eligibility: string;
  organizer: string;
  organizerType?: "College Council" | "Student Body" | "University Gymkhana";
  contact?: FestivalContact;
  tags: string[];
  eventsCount?: number;
  footfall?: string;
  prizePool?: string;
  registeredCount: number;
  highlights?: string[];
  schedule?: FestivalScheduleDay[];
  registrationUrl: string;
  websiteUrl?: string;
  createdAt: string;
  poster?: string;
  thumbnail?: string;
}

export interface FestivalFilterState {
  search: string;
  category: string;
  festivalType: string;
  mode: string;
  location: string;
  eligibility: string;
  feeType: "all" | "free" | "paid";
  status: string;
}

export type FestivalSortOption =
  | "newest"
  | "deadline_soon"
  | "deadline_later"
  | "event_date_soon"
  | "most_registered"
  | "alphabetical";
