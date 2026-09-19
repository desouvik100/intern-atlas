import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarClock,
  ChevronRight,
  Eye,
  Plus,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import { listInternships } from "@internatlas/backend/internship-db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function EmployerInternshipsPage() {
  const internships = await listInternships();
  return (
    <div className="min-h-screen bg-[#f6f9ff] text-[#071c46]">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-[#dbe7fa] bg-[#071c46] text-white">
          <div className="absolute -right-20 -top-28 size-96 rounded-full bg-blue-500/25 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-40 w-72 -skew-x-12 bg-cyan-300/5" />
          <div className="relative mx-auto flex max-w-[1180px] flex-col justify-between gap-7 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:py-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-cyan-300">
                <Sparkles size={13} /> Employer workspace
              </div>
              <h1 className="mt-4 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                Build your next great team.
              </h1>
              <p className="mt-3 max-w-xl text-[13px] leading-6 text-blue-100">
                Publish opportunities, review performance and connect with ambitious students across India.
              </p>
            </div>

            <Link
              href="/employer/internships/new"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#1769e8] px-6 text-[13px] font-extrabold text-white shadow-lg shadow-blue-950/30 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              <Plus size={18} /> Post an internship
            </Link>
          </div>
        </section>

        <div className="mx-auto max-w-[1180px] px-5 py-7 sm:px-8 lg:py-9">
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard title="Active roles" value={String(internships.length)} change="All roles live" icon={<BriefcaseBusiness size={19} />} tone="blue" />
            <StatCard title="Total views" value="1,248" change="+18.2% this month" icon={<Eye size={19} />} tone="cyan" />
            <StatCard title="Applications" value="86" change="12 new this week" icon={<Users size={19} />} tone="rose" />
            <StatCard title="Closing soon" value="2" change="Review before Friday" icon={<CalendarClock size={19} />} tone="amber" />
          </section>

          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
            <section className="overflow-hidden rounded-2xl border border-[#dbe7fa] bg-white shadow-[0_18px_50px_rgba(7,28,70,0.08)]">
              <div className="flex items-center justify-between border-b border-[#e7eefb] px-5 py-5 sm:px-6">
                <div>
                  <h2 className="text-lg font-black tracking-[-0.02em]">Posted internships</h2>
                  <p className="mt-1 text-[11px] text-[#64748b]">Manage and monitor your live opportunities.</p>
                </div>
                <button className="hidden rounded-full border border-[#dbe7fa] px-4 py-2 text-[11px] font-bold text-[#526582] hover:border-[#1769e8] hover:text-[#1769e8] sm:block">
                  Filter roles
                </button>
              </div>

              <div className="divide-y divide-[#e7eefb]">
                {internships.map((internship, index) => (
                  <article key={internship.id} className="group p-5 hover:bg-[#fbfdff] sm:p-6">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                      <div className="flex min-w-0 items-start gap-4">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-sm font-black text-[#1769e8]">
                          {internship.title.charAt(0)}
                        </span>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <Link href={`/internships/${internship.slug}`} className="truncate text-[14px] font-extrabold hover:text-[#1769e8]">
                              {internship.title}
                            </Link>
                            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-black text-emerald-700">Active</span>
                          </div>
                          <p className="mt-1 text-[11px] text-[#64748b]">{internship.location} · {internship.workMode} · Closes {internship.applyBy}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-5 sm:justify-end">
                        <Metric value={String(320 - index * 42)} label="Views" />
                        <Metric value={String(28 - index * 4)} label="Applicants" />
                        <Link href={`/internships/${internship.slug}`} aria-label={`View ${internship.title}`} className="flex size-9 items-center justify-center rounded-full border border-[#dbe7fa] text-[#1769e8] group-hover:border-[#1769e8] group-hover:bg-[#1769e8] group-hover:text-white">
                          <ChevronRight size={17} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-[#dbe7fa] bg-white p-5 shadow-[0_18px_50px_rgba(7,28,70,0.08)]">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"><TrendingUp size={20} /></div>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.1em] text-[#1769e8]">Performance</p>
                <h3 className="mt-1 text-xl font-black">Your roles are getting noticed.</h3>
                <p className="mt-2 text-[11px] leading-5 text-[#64748b]">Profile views increased by 18% compared with last month.</p>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-blue-50"><div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#1769e8] to-cyan-400" /></div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-[#fff2f6] to-white p-5 ring-1 ring-rose-100">
                <p className="text-[10px] font-black uppercase tracking-[0.1em] text-[#c93443]">Recruiting guide</p>
                <h3 className="mt-2 text-lg font-black">Write listings students trust.</h3>
                <p className="mt-2 text-[11px] leading-5 text-[#64748b]">Clear responsibilities and transparent stipends attract stronger applicants.</p>
                <Link href="#" className="mt-4 inline-flex items-center gap-1 text-[11px] font-extrabold text-[#1769e8]">Read the guide <ArrowRight size={13} /></Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, change, icon, tone }: { title: string; value: string; change: string; icon: React.ReactNode; tone: "blue" | "cyan" | "rose" | "amber" }) {
  const tones = { blue: "bg-blue-50 text-[#1769e8]", cyan: "bg-cyan-50 text-cyan-600", rose: "bg-rose-50 text-rose-600", amber: "bg-amber-50 text-amber-600" };
  return (
    <div className="rounded-2xl border border-[#dbe7fa] bg-white p-5 shadow-[0_18px_50px_rgba(7,28,70,0.08)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-semibold text-[#64748b]">{title}</p>
          <p className="mt-2 text-3xl font-black tracking-[-0.04em]">{value}</p>
        </div>
        <span className={`flex size-10 items-center justify-center rounded-xl ${tones[tone]}`}>{icon}</span>
      </div>
      <p className="mt-3 text-[10px] font-semibold text-[#8290a5]">{change}</p>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div className="text-center"><p className="text-[13px] font-black">{value}</p><p className="mt-0.5 text-[9px] text-[#94a3b8]">{label}</p></div>;
}
