export type EventMode = "Online" | "Offline" | "Hybrid";

export type EventStatus =
  | "Open"
  | "Closing Soon"
  | "Closed"
  | "Upcoming"
  | "Ongoing"
  | "Completed";

export interface EventSpeaker {
  name: string;
  role: string;
  organization: string;
  avatar?: string;
  bio?: string;
}

export interface EventAgendaItem {
  time: string;
  title: string;
  description?: string;
  speaker?: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  shortDescription?: string;
  organizerName: string;
  organizerType?: "Corporate" | "College" | "Community" | "Platform";
  organizerLogo?: string;
  organizerDescription?: string;
  category: string;
  eventType: string;
  mode: EventMode;
  location?: string;
  venue?: string;
  status: EventStatus;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  entryFee: string; // e.g. "Free" or "₹299"
  isFree: boolean;
  participantCount: number;
  registeredCount: number; // alias for opportunity card compatibility
  maxParticipants?: number;
  speakerCount?: number;
  duration?: string;
  thumbnail?: string;
  poster?: string;
  registrationUrl: string;
  websiteUrl?: string;
  createdAt: string;
  tags: string[];
  technologies?: string[];
  eligibility: string;
  agenda?: EventAgendaItem[];
  speakers?: EventSpeaker[];
  rules?: string[];
  highlights?: string[];
}

export interface EventFilterState {
  search: string;
  category: string;
  eventType: string;
  mode: string;
  location: string;
  eligibility: string;
  feeType: "all" | "free" | "paid";
  status: string;
}

export type EventSortOption =
  | "newest"
  | "deadline_soon"
  | "deadline_later"
  | "event_date_soon"
  | "most_registered"
  | "alphabetical";
