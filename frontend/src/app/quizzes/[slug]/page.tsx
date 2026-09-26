import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuizDetailView } from "@/components/opportunities/QuizDetailView";
import { quizService } from "@/lib/services/quizService";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const quiz = await quizService.getQuizBySlug(slug);

  if (!quiz) {
    return {
      title: "Quiz Not Found | InternAtlas",
    };
  }

  return {
    title: `${quiz.title} — Quizzes`,
    description: quiz.description.slice(0, 160),
    openGraph: {
      title: `${quiz.title} | InternAtlas`,
      description: quiz.description.slice(0, 160),
    },
  };
}

export default async function QuizDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const quiz = await quizService.getQuizBySlug(slug);

  if (!quiz) {
    notFound();
  }

  return (
    <>
      <Header />
      <QuizDetailView quiz={quiz} />
      <Footer />
    </>
  );
}
