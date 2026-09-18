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
  logoUrl?: string;
  companyWebsite?: string;
};

export const internships: Internship[] = [
  {
    id: 1,
    slug: "frontend-developer-intern-nova",
    title: "Frontend Developer Intern",
    company: "Nova Technologies",
    location: "Pune, Maharashtra",
    workMode: "Hybrid",
    stipend: "₹15,000/month",
    duration: "3 months",
    posted: "Today",
    applyBy: "30 Sep 2026",
    category: "Engineering",
    description:
      "Build fast and responsive web experiences using React and Next.js.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    responsibilities: [
      "Build responsive user interfaces",
      "Convert designs into reusable components",
      "Work closely with developers and designers",
    ],
    requirements: [
      "Basic understanding of React",
      "Knowledge of HTML, CSS and JavaScript",
      "Ability to learn and work in a team",
    ],
    perks: ["Certificate", "Flexible hours", "Recommendation letter"],
  },
  {
    id: 2,
    slug: "backend-developer-intern-cloudzen",
    title: "Backend Developer Intern",
    company: "CloudZen Labs",
    location: "Bengaluru, Karnataka",
    workMode: "Remote",
    stipend: "₹20,000/month",
    duration: "6 months",
    posted: "1 day ago",
    applyBy: "28 Sep 2026",
    category: "Engineering",
    description:
      "Develop secure APIs and scalable backend services for a growing platform.",
    skills: ["Node.js", "Express", "PostgreSQL", "REST API"],
    responsibilities: [
      "Develop and test REST APIs",
      "Design and maintain database models",
      "Improve backend performance",
    ],
    requirements: [
      "Knowledge of JavaScript or TypeScript",
      "Understanding of databases and APIs",
      "Basic Git and GitHub experience",
    ],
    perks: ["Certificate", "Remote work", "Mentorship"],
  },
  {
    id: 3,
    slug: "ui-ux-design-intern-pixelcraft",
    title: "UI/UX Design Intern",
    company: "PixelCraft Studio",
    location: "Mumbai, Maharashtra",
    workMode: "On-site",
    stipend: "₹12,000/month",
    duration: "3 months",
    posted: "2 days ago",
    applyBy: "25 Sep 2026",
    category: "Design",
    description:
      "Design clean interfaces and improve user journeys across web products.",
    skills: ["Figma", "Wireframing", "Prototyping", "User Research"],
    responsibilities: [
      "Create wireframes and prototypes",
      "Improve existing product screens",
      "Participate in user research",
    ],
    requirements: [
      "Basic knowledge of Figma",
      "Strong visual design sense",
      "A portfolio of design work",
    ],
    perks: ["Certificate", "Flexible hours", "Portfolio guidance"],
  },
  {
    id: 4,
    slug: "java-developer-intern-codebridge",
    title: "Java Developer Intern",
    company: "CodeBridge Solutions",
    location: "Hyderabad, Telangana",
    workMode: "Hybrid",
    stipend: "₹18,000/month",
    duration: "6 months",
    posted: "3 days ago",
    applyBy: "22 Sep 2026",
    category: "Engineering",
    description:
      "Build backend services using Java, Spring Boot and relational databases.",
    skills: ["Java", "Spring Boot", "MySQL", "Git"],
    responsibilities: [
      "Develop Spring Boot APIs",
      "Write clean and testable Java code",
      "Work with relational databases",
    ],
    requirements: [
      "Strong Core Java fundamentals",
      "Basic Spring Boot knowledge",
      "Understanding of SQL",
    ],
    perks: ["Certificate", "Job opportunity", "Mentorship"],
  },
];

export function getInternship(slug: string) {
  return internships.find((internship) => internship.slug === slug);
}