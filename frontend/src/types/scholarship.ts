export type ScholarshipType =
  | "Merit-Based"
  | "Need-Based"
  | "Sports"
  | "Arts"
  | "Research"
  | "Minority"
  | "General";

export type ScholarshipStatus = "Open" | "Closing Soon" | "Closed";

export type ApplicationMode = "Online" | "Offline" | "Both";

export interface ScholarshipTestimonial {
  name: string;
  text: string;
  college?: string;
}

export interface Scholarship {
  id: string;
  slug: string;
  title: string;
  description: string;
  organizerName: string;
  organizerType?: "University" | "Government" | "Corporate" | "NGO";
  organizerLogo?: string;
  scholarshipType: ScholarshipType;
  category: string;
  fieldOfStudy: string[];
  eligibility: string;
  amount: string;
  amountNumber?: number;
  awardCount: number;
  applicationDeadline: string;
  announcementDate: string;
  status: ScholarshipStatus;
  applicationMode: ApplicationMode;
  applicationFee: string;
  isFree: boolean;
  renewableYearly: boolean;
  benefits: string[];
  requirements: string[];
  selectionProcess: string[];
  applicationUrl: string;
  websiteUrl?: string;
  tags: string[];
  applicantsCount: number;
  createdAt: string;
  highlights?: string[];
  testimonials?: ScholarshipTestimonial[];
}

export interface ScholarshipFilterState {
  search: string;
  scholarshipType: string;
  category: string;
  fieldOfStudy: string;
  eligibility: string;
  applicationMode: string;
  feeType: "all" | "free" | "paid";
  status: string;
  amount: "all" | "under_25k" | "25k_to_100k" | "above_100k";
}

export type ScholarshipSortOption =
  | "newest"
  | "deadline_soon"
  | "deadline_later"
  | "most_applicants"
  | "highest_amount"
  | "alphabetical";