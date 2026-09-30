import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FestivalsListingClient } from "@/components/opportunities/FestivalsListingClient";
import { festivalService } from "@/lib/services/festivalService";

export const metadata: Metadata = {
  title: "College Festivals — Cultural Fests, Pro-Nites, Rock Battles & Campus Carnivals",
  description:
    "Discover premier college festivals, collegiate cultural events, battle of the bands, pro-nites, and sports fests across top universities in India.",
  openGraph: {
    title: "College Festivals | InternAtlas",
    description:
      "Explore India's largest college cultural festivals, concerts, dance battles, dramatics, and pro-nites. Experience vibrant campus life and showcase youth talent.",
  },
};

export default async function CollegeFestivalsPage() {
  const [initialFestivals, metadata] = await Promise.all([
    festivalService.getFestivals(),
    festivalService.getFilterMetadata(),
  ]);

  return (
    <>
      <Header />
      <FestivalsListingClient
        initialFestivals={initialFestivals}
        metadata={metadata}
      />
      <Footer />
    </>
  );
}