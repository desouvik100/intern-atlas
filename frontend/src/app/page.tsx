import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExploreCategories } from "@/components/sections/ExploreCategories";
import { OpportunitySection } from "@/components/sections/OpportunitySection";
import { CompetitionsBanner } from "@/components/sections/CompetitionsBanner";
import { HackathonsBanner } from "@/components/sections/HackathonsBanner";
import { BeyondJobs } from "@/components/sections/BeyondJobs";
import { Testimonial } from "@/components/sections/Testimonial";
import { BottomCTA } from "@/components/sections/BottomCTA";

import type { Category, Opportunity } from "@/lib/types";
import type { Internship } from "@internatlas/backend/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const categories: Category[] = [
  {
    id: "internships",
    type: "internship",
    label: "Internships",
    description: "Gain real-world experience",
    iconKey: "user",
  },
  {
    id: "jobs",
    type: "job",
    label: "Jobs",
    description: "Kickstart your career",
    iconKey: "briefcase",
  },
  {
    id: "competitions",
    type: "competition",
    label: "Competitions",
    description: "Showcase your skills",
    iconKey: "trophy",
  },
  {
    id: "hackathons",
    type: "hackathon",
    label: "Hackathons",
    description: "Build. Solve. Win",
    iconKey: "zap",
  },
  {
    id: "scholarships",
    type: "scholarship",
    label: "Scholarships",
    description: "Fund your education",
    iconKey: "graduation",
  },
  {
    id: "workshops",
    type: "workshops",
    label: "Workshops",
    description: "Learn from experts",
    iconKey: "clipboard",
  },
  {
    id: "college-festivals",
    type: "college_fest",
    label: "College Festivals",
    description: "Celebrate campus life",
    iconKey: "users",
  },
  {
    id: "cultural-events",
    type: "cultural",
    label: "Cultural Events",
    description: "Express. Perform. Belong.",
    iconKey: "star",
  },
];

export default async function HomePage() {
  let internships: Internship[] = [];

  try {
    const { listInternships } = await import(
      "@internatlas/backend/internship-db"
    );
    internships = await listInternships();
  } catch (error) {
    console.error("Unable to load homepage internships:", error);
  }

  const opportunities: Opportunity[] = internships.slice(0, 6).map(
    (internship) => ({
      id: String(internship.id),
      title: internship.title,
      organization: internship.company,
      type: "internship",
      location: `${internship.workMode} · ${internship.location}`,
      compensation: internship.stipend,
      applyBy: internship.applyBy,
      badges: internship.category ? [internship.category] : [],
      timeLabel: internship.posted,
      logoVariant: "startup",
      href: `/internships/${internship.slug}`,
    }),
  );

  const jobOpportunities: Opportunity[] = [
    {
      id: "j1",
      title: "Product Associate",
      organization: "Flipkart",
      type: "job",
      location: "Bengaluru, India",
      compensation: "",
      applyBy: "",
      badges: ["Full-time", "Fresher"],
      timeLabel: "",
      logoVariant: "startup",
      href: "/jobs",
    },
    {
      id: "j2",
      title: "Business Analyst",
      organization: "Deloitte",
      type: "job",
      location: "Gurugram, India",
      compensation: "",
      applyBy: "",
      badges: ["Full-time", "Fresher"],
      timeLabel: "",
      logoVariant: "enterprise",
      href: "/jobs",
    },
    {
      id: "j3",
      title: "Customer Success",
      organization: "Razorpay",
      type: "job",
      location: "Bengaluru, India",
      compensation: "",
      applyBy: "",
      badges: ["Full-time", "Fresher"],
      timeLabel: "",
      logoVariant: "startup",
      href: "/jobs",
    },
    {
      id: "j4",
      title: "Associate - Tech",
      organization: "Jio",
      type: "job",
      location: "Mumbai, India",
      compensation: "",
      applyBy: "",
      badges: ["Full-time", "Fresher"],
      timeLabel: "",
      logoVariant: "startup",
      href: "/jobs",
    },
    {
      id: "j5",
      title: "Operations Associate",
      organization: "OYO",
      type: "job",
      location: "Multiple locations",
      compensation: "",
      applyBy: "",
      badges: ["Full-time", "Fresher"],
      timeLabel: "",
      logoVariant: "startup",
      href: "/jobs",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#F8FAFC]/50">
        <HeroSection />

        <ExploreCategories categories={categories} />

        <OpportunitySection
          eyebrow="FEATURED"
          title="Top internships"
          highlightText="this week."
          opportunities={opportunities}
          viewAllLabel="View all internships"
          viewAllHref="/internships"
          
        />

        <CompetitionsBanner />

        <HackathonsBanner />

        <OpportunitySection
          eyebrow="LATEST"
          title="Entry-level jobs to kickstart"
          highlightText="your career."
          opportunities={jobOpportunities}
          viewAllLabel="View all jobs"
          viewAllHref="/jobs"
        />

        <BeyondJobs />

        <Testimonial />

        <BottomCTA />
      </main>

      <Footer />
    </>
  );
}