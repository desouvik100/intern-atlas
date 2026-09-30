import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FestivalDetailView } from "@/components/opportunities/FestivalDetailView";
import { festivalService } from "@/lib/services/festivalService";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const festival = await festivalService.getFestivalBySlug(slug);

  if (!festival) {
    return {
      title: "Festival Not Found | InternAtlas",
    };
  }

  return {
    title: `${festival.title} — ${festival.collegeName} | InternAtlas`,
    description: festival.description.slice(0, 160),
    openGraph: {
      title: `${festival.title} | InternAtlas`,
      description: festival.description.slice(0, 160),
    },
  };
}

export default async function CollegeFestivalDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const festival = await festivalService.getFestivalBySlug(slug);

  if (!festival) {
    notFound();
  }

  return (
    <>
      <Header />
      <FestivalDetailView festival={festival} />
      <Footer />
    </>
  );
}
