import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExploreCategories } from "@/components/sections/ExploreCategories";
import { OpportunitySection } from "@/components/sections/OpportunitySection";
import { CompetitionsBanner } from "@/components/sections/CompetitionsBanner";
import { HackathonsBanner } from "@/components/sections/HackathonsBanner";
import { BeyondJobs } from "@/components/sections/BeyondJobs";
import { BottomCTA } from "@/components/sections/BottomCTA";

import { listInternships } from "@internatlas/backend/internship-db";
import type { Category, Opportunity } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const categories: Category[] = [
  {
    id: "internships",
    type: "internship",
    label: "Internships",
    description: "Gain real-world experience",
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
    description: "Build. Solve. Create.",
    iconKey: "zap",
  },
  {
    id: "events",
    type: "event",
    label: "Events",
    description: "Learn and connect",
    iconKey: "calendar",
  },
  {
    id: "contests",
    type: "contest",
    label: "Contests",
    description: "Challenge yourself",
    iconKey: "star",
  },
  {
    id: "quizzes",
    type: "quiz",
    label: "Quizzes",
    description: "Test your knowledge",
    iconKey: "clipboard",
  },
];

export default async function HomePage() {
  const internships = await listInternships();

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

        <BeyondJobs />

        <BottomCTA />
      </main>

      <Footer />
    </>
  );
}