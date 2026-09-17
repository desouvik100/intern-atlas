import Header from "@/components/layout/Header";
import InternshipList from "@/components/InternshipList";

export default function InternshipsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <InternshipList />
    </div>
  );
}