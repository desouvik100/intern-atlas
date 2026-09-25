import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EventDetailView } from "@/components/opportunities/EventDetailView";
import { eventService } from "@/lib/services/eventService";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await eventService.getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found | InternAtlas",
    };
  }

  return {
    title: `${event.title} — Events`,
    description: event.description.slice(0, 160),
    openGraph: {
      title: `${event.title} | InternAtlas`,
      description: event.description.slice(0, 160),
    },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = await eventService.getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <Header />
      <EventDetailView event={event} />
      <Footer />
    </>
  );
}
