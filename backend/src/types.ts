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
