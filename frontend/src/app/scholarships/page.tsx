import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScholarshipsListingClient } from "@/components/opportunities/ScholarshipsListingClient";
import { scholarshipService } from "@/lib/services/scholarshipService";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Scholarships — Explore Student Grants & Financial Aid",
  description:
    "Discover merit-based, need-based, research, and international scholarships for college students. Apply for financial aid, fellowships, and academic grants.",
  openGraph: {
    title: "Scholarships | InternAtlas",
    description:
      "Explore top student scholarships and academic grants. Apply for merit-based and need-based financial aid on InternAtlas.",
  },
};

export default async function ScholarshipsPage() {
  try {
    const [initialScholarships, metadata] = await Promise.all([
      scholarshipService.getScholarships(),
      scholarshipService.getFilterMetadata(),
    ]);

    return (
      <>
        <Header />
        <ScholarshipsListingClient
          initialScholarships={initialScholarships}
          metadata={metadata}
        />
        <Footer />
      </>
    );
  } catch (error) {
    console.error('Scholarships page error:', error);
    // Return a basic page with mock data as fallback
    const { MOCK_SCHOLARSHIPS } = await import('@/data/mock-scholarships');
    const metadata = await scholarshipService.getFilterMetadata(MOCK_SCHOLARSHIPS);
    
    return (
      <>
        <Header />
        <ScholarshipsListingClient
          initialScholarships={MOCK_SCHOLARSHIPS}
          metadata={metadata}
        />
        <Footer />
      </>
    );
  }
}
