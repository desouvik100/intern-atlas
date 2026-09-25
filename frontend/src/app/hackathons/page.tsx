import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HackathonsListingClient } from "@/components/opportunities/HackathonsListingClient";
import { hackathonService } from "@/lib/services/hackathonService";

export const metadata: Metadata = {
  title: "Hackathons — Discover & Build Innovative Projects",
  description:
    "Find student hackathons where you can build real-world software and hardware solutions, collaborate in teams, and win cash prizes, grants, and fast-track interviews.",
  openGraph: {
    title: "Hackathons | InternAtlas",
    description:
      "Explore top student hackathons, coding sprints, and hardware challenges. Collaborate, innovate, and showcase your skills.",
  },
};

export default async function HackathonsPage() {
  const [initialHackathons, metadata] = await Promise.all([
    hackathonService.getHackathons(),
    hackathonService.getFilterMetadata(),
  ]);

  return (
    <>
      <Header />
      <HackathonsListingClient
        initialHackathons={initialHackathons}
        metadata={metadata}
      />
      <Footer />
    </>
  );
}