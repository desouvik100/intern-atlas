import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EventsListingClient } from "@/components/opportunities/EventsListingClient";
import { eventService } from "@/lib/services/eventService";

export const metadata: Metadata = {
  title: "Events — Conferences, Workshops, Meetups & Tech Summits",
  description:
    "Discover technology conferences, developer meetups, coding workshops, webinars, and career expos. Network with industry experts and build in-demand skills.",
  openGraph: {
    title: "Events | InternAtlas",
    description:
      "Explore conferences, developer workshops, webinars, and networking experiences. Meet peers, learn from leaders, and advance your engineering journey.",
  },
};

export default async function EventsPage() {
  const [initialEvents, metadata] = await Promise.all([
    eventService.getEvents(),
    eventService.getFilterMetadata(),
  ]);

  return (
    <>
      <Header />
      <EventsListingClient
        initialEvents={initialEvents}
        metadata={metadata}
      />
      <Footer />
    </>
  );
}