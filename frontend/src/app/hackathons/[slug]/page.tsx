import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HackathonDetailView } from "@/components/opportunities/HackathonDetailView";
import { hackathonService } from "@/lib/services/hackathonService";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const hackathon = await hackathonService.getHackathonBySlug(slug);

  if (!hackathon) {
    return {
      title: "Hackathon Not Found | InternAtlas",
    };
  }

  return {
    title: `${hackathon.title} — Hackathons`,
    description: hackathon.description.slice(0, 160),
    openGraph: {
      title: `${hackathon.title} | InternAtlas`,
      description: hackathon.description.slice(0, 160),
    },
  };
}

export default async function HackathonDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const hackathon = await hackathonService.getHackathonBySlug(slug);

  if (!hackathon) {
    notFound();
  }

  return (
    <>
      <Header />
      <HackathonDetailView hackathon={hackathon} />
      <Footer />
    </>
  );
}
