import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CulturalListingClient } from "@/components/opportunities/CulturalListingClient";
import { culturalService } from "@/lib/services/culturalService";

export const metadata: Metadata = {
  title: "Cultural Events — Music Battles, Dance Championships & Theatre | InternAtlas",
  description:
    "Discover collegiate cultural competitions, national dance championships, rock band battles, street plays, poetry slams, and fine arts festivals.",
  openGraph: {
    title: "Cultural Events | InternAtlas",
    description:
      "Explore premier college cultural events, stage competitions, musical battles, and creative arts across top Indian universities.",
  },
};

export default async function CulturalEventsPage() {
  const [initialEvents, metadata] = await Promise.all([
    culturalService.getEvents(),
    culturalService.getFilterMetadata(),
  ]);

  return (
    <>
      <Header />
      <CulturalListingClient
        initialEvents={initialEvents}
        metadata={metadata}
      />
      <Footer />
    </>
  );
}