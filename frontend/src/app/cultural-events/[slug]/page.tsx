import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CulturalDetailView } from "@/components/opportunities/CulturalDetailView";
import { culturalService } from "@/lib/services/culturalService";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await culturalService.getEventBySlug(slug);

  if (!event) {
    return {
      title: "Cultural Event Not Found | InternAtlas",
    };
  }

  return {
    title: `${event.title} — ${event.organizerName} | InternAtlas`,
    description: event.shortDescription || event.description.slice(0, 160),
    openGraph: {
      title: `${event.title} | InternAtlas`,
      description: event.shortDescription || event.description.slice(0, 160),
    },
  };
}

export default async function CulturalEventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = await culturalService.getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <Header />
      <CulturalDetailView event={event} />
      <Footer />
    </>
  );
}
