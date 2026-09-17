import type { Category, Opportunity } from "@/lib/types";
import { internships } from "@/data/internships";

export const latestInternships: Opportunity[] = internships.map(
  (internship) => ({
    id: String(internship.id),
    title: internship.title,
    organization: internship.company,
    type: "internship",
    location: `${internship.workMode} - ${internship.location}`,
    compensation: internship.stipend,
    applyBy: internship.applyBy,
    logoVariant: "startup",
    badges: ["Internship", internship.category],
    timeLabel: internship.posted,
    href: `/internships/${internship.slug}`,
  }),
);

export const latestJobs: Opportunity[] = [
  {
    id: "job-1",
    title: "Product Associate",
    organization: "Flipkart",
    type: "job",
    location: "Bengaluru, India",
    badges: ["Full-time", "Fresher"],
    timeLabel: "1 day ago",
    logoVariant: "yellow-F",
  },
  {
    id: "job-2",
    title: "Business Analyst",
    organization: "Deloitte",
    type: "job",
    location: "Gurugram, India",
    badges: ["Full-time", "Fresher"],
    timeLabel: "2 days ago",
    logoVariant: "green-D",
  },
  {
    id: "job-3",
    title: "Customer Success",
    organization: "Razorpay",
    type: "job",
    location: "Bengaluru, India",
    badges: ["Full-time", "Fresher"],
    timeLabel: "4 days ago",
    logoVariant: "blue-R",
  },
  {
    id: "job-4",
    title: "Associate - Tech",
    organization: "Jio",
    type: "job",
    location: "Mumbai, India",
    badges: ["Full-time", "Fresher"],
    timeLabel: "5 days ago",
    logoVariant: "blue-J",
  },
  {
    id: "job-5",
    title: "Operations Associate",
    organization: "OYO",
    type: "job",
    location: "Multiple locations",
    badges: ["Full-time", "Fresher"],
    timeLabel: "6 days ago",
    logoVariant: "red-O",
  },
];

export const categories: Category[] = [
  {
    id: "cat-1",
    type: "internship",
    label: "Internships",
    description: "Gain real-world experience",
    iconKey: "briefcase",
  },
  {
    id: "cat-2",
    type: "job",
    label: "Jobs",
    description: "Kickstart your career",
    iconKey: "user",
  },
  {
    id: "cat-3",
    type: "competition",
    label: "Competitions",
    description: "Showcase your skills",
    iconKey: "trophy",
  },
  {
    id: "cat-4",
    type: "hackathon",
    label: "Hackathons",
    description: "Build. Solve. Win.",
    iconKey: "zap",
  },
  {
    id: "cat-5",
    type: "scholarship",
    label: "Scholarships",
    description: "Fund your education",
    iconKey: "graduation",
  },
  {
    id: "cat-6",
    type: "workshops",
    label: "Workshops",
    description: "Learn from experts",
    iconKey: "clipboard",
  },
  {
    id: "cat-7",
    type: "college_fest",
    label: "College Festivals",
    description: "Celebrate campus life",
    iconKey: "users",
  },
  {
    id: "cat-8",
    type: "cultural",
    label: "Cultural Events",
    description: "Express. Perform. Belong.",
    iconKey: "star",
  },
];

export const competitions: Opportunity[] = [];

export const events: Opportunity[] = [];