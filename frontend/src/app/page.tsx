import { Header }              from "@/components/layout/Header";
import { Footer }              from "@/components/layout/Footer";
import { HeroSection }         from "@/components/sections/HeroSection";
import { ExploreCategories }   from "@/components/sections/ExploreCategories";
import { OpportunitySection }  from "@/components/sections/OpportunitySection";
import { CompetitionsBanner }  from "@/components/sections/CompetitionsBanner";
import { HackathonsBanner }    from "@/components/sections/HackathonsBanner";
import { BeyondJobs }          from "@/components/sections/BeyondJobs";
import { Testimonial }         from "@/components/sections/Testimonial";
import { BottomCTA }           from "@/components/sections/BottomCTA";

import {
  latestInternships,
  latestJobs,
  categories,
} from "@/data/mock-opportunities";

export default function HomePage() {
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
          opportunities={latestInternships} 
          viewAllLabel="View all internships"
          bgWhite={false}
        />
        
        <CompetitionsBanner />
        
        <HackathonsBanner />
        
        <OpportunitySection 
          eyebrow="LATEST"
          title="Entry-level jobs to kickstart"
          highlightText="your career."
          opportunities={latestJobs} 
          viewAllLabel="View all jobs"
          bgWhite={false}
        />
        
        <BeyondJobs />
        
        <Testimonial />
        
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
