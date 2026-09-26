import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CompetitionDetailView } from "@/components/opportunities/CompetitionDetailView";
import { competitionService } from "@/lib/services/competitionService";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const competition = await competitionService.getCompetitionBySlug(slug);

  if (!competition) {
    return {
      title: "Competition Not Found | InternAtlas",
    };
  }

  return {
    title: `${competition.title} — Competitions`,
    description: competition.description.slice(0, 160),
    openGraph: {
      title: `${competition.title} | InternAtlas`,
      description: competition.description.slice(0, 160),
    },
  };
}

export default async function CompetitionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const competition = await competitionService.getCompetitionBySlug(slug);

  if (!competition) {
    notFound();
  }

  return (
    <>
      <Header />
      <CompetitionDetailView competition={competition} />
      <Footer />
    </>
  );
}
