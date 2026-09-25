import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuizzesListingClient } from "@/components/opportunities/QuizzesListingClient";
import { quizService } from "@/lib/services/quizService";

export const metadata: Metadata = {
  title: "Quizzes — Knowledge & Technical Skill Challenges",
  description:
    "Test your technical understanding, aptitude, coding concepts, AI fundamentals, and business acumen. Compete in online quizzes and win cash prizes and certificates.",
  openGraph: {
    title: "Quizzes | InternAtlas",
    description:
      "Explore student knowledge challenges, speed quizzes, domain trivia, and placement aptitude sprints. Prove your mastery and benchmark with peers.",
  },
};

export default async function QuizzesPage() {
  const [initialQuizzes, metadata] = await Promise.all([
    quizService.getQuizzes(),
    quizService.getFilterMetadata(),
  ]);

  return (
    <>
      <Header />
      <QuizzesListingClient
        initialQuizzes={initialQuizzes}
        metadata={metadata}
      />
      <Footer />
    </>
  );
}
