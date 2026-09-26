import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContestsListingClient } from "@/components/opportunities/ContestsListingClient";
import { contestService } from "@/lib/services/contestService";

export const metadata: Metadata = {
  title: "Contests — Coding, Design & Competitive Challenges",
  description:
    "Discover online and in-person contests in competitive programming, UI/UX craft, data analytics, debugging, and algorithms. Showcase your skills and win rewards.",
  openGraph: {
    title: "Contests | InternAtlas",
    description:
      "Explore competitive challenges, coding sprint arenas, algorithm face-offs, and design contests. Sharpen your skills and benchmark with top peers.",
  },
};

export default async function ContestsPage() {
  const [initialContests, metadata] = await Promise.all([
    contestService.getContests(),
    contestService.getFilterMetadata(),
  ]);

  return (
    <>
      <Header />
      <ContestsListingClient
        initialContests={initialContests}
        metadata={metadata}
      />
      <Footer />
    </>
  );
}
