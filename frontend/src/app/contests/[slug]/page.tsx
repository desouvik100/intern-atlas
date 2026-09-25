import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContestDetailView } from "@/components/opportunities/ContestDetailView";
import { contestService } from "@/lib/services/contestService";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const contest = await contestService.getContestBySlug(slug);

  if (!contest) {
    return {
      title: "Contest Not Found | InternAtlas",
    };
  }

  return {
    title: `${contest.title} — Contests`,
    description: contest.description.slice(0, 160),
    openGraph: {
      title: `${contest.title} | InternAtlas`,
      description: contest.description.slice(0, 160),
    },
  };
}

export default async function ContestDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const contest = await contestService.getContestBySlug(slug);

  if (!contest) {
    notFound();
  }

  return (
    <>
      <Header />
      <ContestDetailView contest={contest} />
      <Footer />
    </>
  );
}
