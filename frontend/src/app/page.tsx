import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { OpportunitySection } from "@/components/sections/OpportunitySection";
import { BottomCTA } from "@/components/sections/BottomCTA";

import { listInternships } from "@internatlas/backend/internship-db";
import type { Opportunity } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

        <OpportunitySection
          eyebrow="OPPORTUNITIES"
          title="Latest internships"
          highlightText="for students."
          opportunities={opportunities}
          viewAllLabel="View all internships"
          viewAllHref="/internships"
        />

        <BottomCTA />
      </main>

      <Footer />
    </>
  );
}