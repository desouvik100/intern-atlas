import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Scholarships — Explore Student Grants & Financial Aid",
  description:
    "Discover merit-based, need-based, research, and international scholarships for college students. Apply for financial aid, fellowships, and academic grants.",
};

export default async function ScholarshipsPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Scholarships Page - Test</h1>
      <p>If you can see this, the route is working!</p>
      <p>Build time: {new Date().toISOString()}</p>
    </div>
  );
}
