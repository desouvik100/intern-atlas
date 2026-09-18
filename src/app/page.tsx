import  Header               from "@/components/layout/Header";
import { Footer }              from "@/components/layout/Footer";
import { HeroSection }         from "@/components/sections/HeroSection";
import { ExploreCategories }   from "@/components/sections/ExploreCategories";
import { OpportunitySection }  from "@/components/sections/OpportunitySection";
import { CompetitionsBanner }  from "@/components/sections/CompetitionsBanner";
import { HackathonsBanner }    from "@/components/sections/HackathonsBanner";
import { BeyondJobs }          from "@/components/sections/BeyondJobs";
import { Testimonial }         from "@/components/sections/Testimonial";
import { BottomCTA }           from "@/components/sections/BottomCTA";

import { categories } from "@/data/categories";
import { listInternships } from "@/lib/internship-db";
import { listOpportunitiesByType } from "@/lib/opportunity-db";
import { resolveLogoUrl } from "@/lib/logo";
import type { Opportunity } from "@/lib/types";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [internships, latestJobs] = await Promise.all([
    listInternships(),
    listOpportunitiesByType("job", 8),
  ]);

  const latestInternships: Opportunity[] = internships
    .slice(0, 8)
    .map((internship) => ({
      id: String(internship.id),
      title: internship.title,
      organization: internship.company,
      type: "internship",
      location: `${internship.workMode} - ${internship.location}`,
      compensation: internship.stipend,
      applyBy: internship.applyBy,
      badges: ["Internship", internship.category],
      timeLabel: internship.posted,
      href: `/internships/${internship.slug}`,
      logoUrl: resolveLogoUrl(internship.logoUrl, internship.companyWebsite),
    }));

  return (
    <>
      <Header />
      <main className="bg-[#F8FAFC]/50">
        <HeroSection />
        <ExploreCategories categories={categories} />

        {latestInternships.length > 0 && (
          <OpportunitySection
            eyebrow="FEATURED"
            title="Top internships"
            highlightText="this week."
            opportunities={latestInternships}
            viewAllLabel="View all internships"
            bgWhite={false}
          />
        )}

        <CompetitionsBanner />

        <HackathonsBanner />

        {latestJobs.length > 0 && (
          <OpportunitySection
            eyebrow="LATEST"
            title="Entry-level jobs to kickstart"
            highlightText="your career."
            opportunities={latestJobs}
            viewAllLabel="View all jobs"
            bgWhite={false}
          />
        )}

        <BeyondJobs />

        <Testimonial />

        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
