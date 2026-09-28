import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScholarshipDetailView } from "@/components/opportunities/ScholarshipDetailView";
import { scholarshipService } from "@/lib/services/scholarshipService";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const scholarship = await scholarshipService.getScholarshipBySlug(slug);

  if (!scholarship) {
    return {
      title: "Scholarship Not Found | InternAtlas",
    };
  }

  return {
    title: `${scholarship.title} — Scholarships`,
    description: scholarship.description.slice(0, 160),
    openGraph: {
      title: `${scholarship.title} | InternAtlas`,
      description: scholarship.description.slice(0, 160),
    },
  };
}

export default async function ScholarshipDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const scholarship = await scholarshipService.getScholarshipBySlug(slug);

  if (!scholarship) {
    notFound();
  }

  return (
    <>
      <Header />
      <ScholarshipDetailView scholarship={scholarship} />
      <Footer />
    </>
  );
}
