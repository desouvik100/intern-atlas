import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CompetitionsListingClient } from "@/components/opportunities/CompetitionsListingClient";
import { competitionService } from "@/lib/services/competitionService";

export const metadata: Metadata = {
  title: "Competitions — Explore Student Challenges & Contests",
  description:
    "Discover high-impact student competitions, hackathons, case studies, and engineering challenges. Win cash prizes, certificates, and job fast-tracks.",
  openGraph: {
    title: "Competitions | InternAtlas",
    description:
      "Explore top student competitions and case challenges. Connect with mentors, win prizes, and fast-track your career.",
  },
};

export default async function CompetitionsPage() {
  const [initialCompetitions, metadata] = await Promise.all([
    competitionService.getCompetitions(),
    competitionService.getFilterMetadata(),
  ]);

  return (
    <>
      <Header />
      <CompetitionsListingClient
        initialCompetitions={initialCompetitions}
        metadata={metadata}
      />
      <Footer />
    </>
  );
}