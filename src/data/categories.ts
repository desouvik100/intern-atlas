import type { Category } from "@/lib/types";

// Navigation content, not listing data — these are the sections of the site.
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
