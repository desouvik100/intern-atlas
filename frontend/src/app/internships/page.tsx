import Header from "@/components/layout/Header";
import InternshipList from "@/components/InternshipList";
import { listInternships } from "@internatlas/backend/internship-db";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function InternshipsPage() {
  const internships = await listInternships();
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <InternshipList internships={internships} />
    </div>
  );
}