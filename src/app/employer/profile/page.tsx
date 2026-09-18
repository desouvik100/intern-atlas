import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowRight, Building2, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import { getCurrentEmployer } from "@/lib/employer-session";
import { ProfileForm } from "./ProfileForm";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function EmployerProfilePage() {
  const employer = await getCurrentEmployer();

  if (!employer) {
    redirect("/employer/login");
  }

  return (
    <div className="min-h-screen bg-[#f6f9ff] text-[#071c46]">
      <Header />

      <section className="border-b border-[#dbe7fa] bg-white">
        <div className="mx-auto max-w-[1080px] px-5 py-7 sm:px-8">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.1em] text-[#1769e8]">
            <Sparkles size={13} /> Account details
          </div>
          <h1 className="mt-2 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
            Your company profile.
          </h1>
          <p className="mt-2 text-[13px] text-[#64748b]">
            Signed in as {employer.email}. Complete this once — it applies to
            every internship you post.
          </p>
        </div>
      </section>

      <main className="mx-auto grid max-w-[1080px] gap-6 px-5 py-7 sm:px-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:py-9">
        <section className="rounded-2xl border border-[#dbe7fa] bg-white p-5 shadow-[0_18px_50px_rgba(7,28,70,0.08)] sm:p-7">
          <ProfileForm employer={employer} />
        </section>

        <aside className="h-fit space-y-4 lg:sticky lg:top-[92px]">
          <div className="rounded-2xl border border-[#dbe7fa] bg-white p-5 shadow-[0_18px_50px_rgba(7,28,70,0.08)]">
            <p className="text-[10px] font-black uppercase tracking-[0.1em] text-[#1769e8]">
              Profile status
            </p>
            <p className="mt-3 text-2xl font-black">
              {employer.profileCompleted ? "Complete" : "Incomplete"}
            </p>
            <p className="mt-2 text-[11px] leading-5 text-[#64748b]">
              {employer.profileCompleted
                ? "You can post internships now."
                : "Company name, industry, location and description are required before you can post."}
            </p>
            {employer.profileCompleted && (
              <Link
                href="/employer/internships/new"
                className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold text-[#1769e8]"
              >
                Post an internship <ArrowRight size={15} />
              </Link>
            )}
          </div>

          <div className="rounded-2xl bg-[#071c46] p-5 text-white">
            <div className="flex size-9 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
              <Building2 size={18} />
            </div>
            <h2 className="mt-4 text-base font-extrabold">
              Students check the company first.
            </h2>
            <p className="mt-2 text-[11px] leading-5 text-blue-100">
              A website, logo and clear description raise application quality
              more than anything else on the listing.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}
