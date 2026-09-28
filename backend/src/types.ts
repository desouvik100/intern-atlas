export type Internship = {
  id: number;
  slug: string;
  title: string;
  company: string;
  location: string;
  workMode: "Remote" | "On-site" | "Hybrid";
  stipend: string;
  duration: string;
  posted: string;
  applyBy: string;
  category: string;
  description: string;
  skills: string[];
  responsibilities: string[];
  requirements: string[];
  perks: string[];
};

export type ScholarshipTestimonial = {
  name: string;
  text: string;
  college?: string;
};

export type Scholarship = {
  id: number;
  slug: string;
  title: string;
  description: string;
  organizerName: string;
  organizerType?: string;
  organizerLogo?: string;
  scholarshipType: string;
  category: string;
  fieldOfStudy: string[];
  eligibility: string;
  amount: string;
  amountNumber?: number;
  awardCount: number;
  applicationDeadline: string;
  announcementDate: string;
  status: string;
  applicationMode: string;
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
};
