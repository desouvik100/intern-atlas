import Link from "next/link";
import { notFound } from "next/navigation";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
import {
  ArrowLeft,
  BadgeCheck,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  ShieldCheck,
  Sparkles,
  UsersRound,
  WalletCards,
} from "lucide-react";
import Header from "@/components/Header";
import InternshipActions from "@/components/InternshipActions";
import { findInternshipBySlug } from "@internatlas/backend/internship-db";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function InternshipDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const internship = await findInternshipBySlug(slug);

  if (!internship) notFound();

  return (
    <div className="min-h-screen bg-[#f7faff] text-[#071c46]">
      <Header />

      <section className="relative overflow-hidden border-b border-[#dbe7fa] bg-gradient-to-br from-[#f3f7ff] via-white to-[#fff1f5]">
        <div className="absolute -right-20 -top-24 size-80 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="absolute left-1/3 top-0 size-72 rounded-full bg-blue-200/25 blur-3xl" />
        <div className="relative mx-auto max-w-[1120px] px-5 py-8 sm:px-8 lg:py-10">
          <Link
            href="/internships"
            className="inline-flex items-center gap-2 text-[13px] font-bold text-[#526582] hover:text-[#1769e8]"
          >
            <ArrowLeft size={16} /> Back to internships
          </Link>

          <div className="mt-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-white text-2xl font-black text-[#1769e8] shadow-[0_10px_28px_rgba(7,28,70,0.08)] sm:size-20">
                {internship.company.charAt(0)}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700">
                    <BadgeCheck size={13} /> Actively hiring
                  </span>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-[#1769e8]">
                    {internship.category}
                  </span>
                </div>
                <h1 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                  {internship.title}
                </h1>
                <p className="mt-2 text-base font-semibold text-[#526582]">
                  {internship.company}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[12px] font-semibold text-[#526582]">
              <UsersRound size={16} className="text-[#1769e8]" />
              184 applicants · Posted {internship.posted}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-[1120px] gap-6 px-5 py-7 sm:px-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:py-9">
        <div className="space-y-6">
          <section className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#dbe7fa] bg-white shadow-[0_18px_50px_rgba(7,28,70,0.08)] sm:grid-cols-4">
            <DetailItem icon={<MapPin size={18} />} label="Location" value={internship.location} />
            <DetailItem icon={<WalletCards size={18} />} label="Stipend" value={internship.stipend} />
            <DetailItem icon={<Clock3 size={18} />} label="Duration" value={internship.duration} />
            <DetailItem icon={<CalendarDays size={18} />} label="Apply by" value={internship.applyBy} />
          </section>

          <article className="rounded-2xl border border-[#dbe7fa] bg-white p-6 shadow-[0_18px_50px_rgba(7,28,70,0.08)] sm:p-8">
            <ContentSection index="01" title="About the internship">
              <p>{internship.description}</p>
              <p className="mt-3">
                You will work with a small, high-ownership team and ship meaningful product improvements used by real customers.
              </p>
            </ContentSection>

            <ContentSection index="02" title="What you will do">
              <BulletList items={internship.responsibilities} />
            </ContentSection>

            <ContentSection index="03" title="Who we are looking for">
              <BulletList items={internship.requirements} />
            </ContentSection>

            <ContentSection index="04" title="Skills you will use">
              <div className="flex flex-wrap gap-2">
                {internship.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-blue-100 bg-[#f3f7ff] px-3.5 py-2 text-[12px] font-bold text-[#1769e8]">
                    {skill}
                  </span>
                ))}
              </div>
            </ContentSection>

            <ContentSection index="05" title="Perks and benefits">
              <div className="grid gap-3 sm:grid-cols-2">
                {internship.perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-3 rounded-xl border border-[#e7eefb] bg-[#fbfdff] p-3.5 text-sm font-semibold text-[#344666]">
                    <span className="flex size-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check size={15} /></span>
                    {perk}
                  </div>
                ))}
              </div>
            </ContentSection>
          </article>
        </div>

        <aside className="h-fit lg:sticky lg:top-[92px]">
          <div className="rounded-2xl border border-[#cfe0fa] bg-white p-5 shadow-[0_18px_50px_rgba(7,28,70,0.08)]">
            <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.08em] text-[#1769e8]">
              <Sparkles size={14} /> Ready to apply?
            </div>
            <h2 className="mt-3 text-xl font-black tracking-[-0.02em]">Take the next step.</h2>
            <p className="mt-2 text-[12px] leading-5 text-[#64748b]">
              Your profile and resume will be shared securely with {internship.company}.
            </p>
            <InternshipActions internshipId={internship.id} internshipTitle={internship.title} />
            <div className="mt-5 space-y-3 border-t border-[#e7eefb] pt-5 text-[11px] font-semibold text-[#526582]">
              <p className="flex items-center gap-2"><ShieldCheck size={15} className="text-emerald-600" /> No application fee</p>
              <p className="flex items-center gap-2"><BadgeCheck size={15} className="text-[#1769e8]" /> Verified opportunity</p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-[#071c46] p-5 text-white">
            <p className="text-[10px] font-black uppercase tracking-[0.1em] text-cyan-300">Application tip</p>
            <p className="mt-2 text-sm font-bold leading-5">Tailor your profile to the skills listed in this role.</p>
            <Link href="/#resources" className="mt-4 inline-flex text-[11px] font-bold text-cyan-300 hover:text-white">Explore career resources →</Link>
          </div>
        </aside>
      </main>
    </div>
  );
}

function DetailItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="border-[#e7eefb] p-4 odd:border-r sm:border-r sm:last:border-r-0 sm:p-5">
      <span className="flex size-8 items-center justify-center rounded-lg bg-blue-50 text-[#1769e8]">{icon}</span>
      <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.08em] text-[#94a3b8]">{label}</p>
      <p className="mt-1 text-[12px] font-extrabold leading-5 text-[#071c46]">{value}</p>
    </div>
  );
}

function ContentSection({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-[#e7eefb] py-7 first:pt-0 last:border-0 last:pb-0">
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-black text-[#1769e8]">{index}</span>
        <h2 className="text-lg font-black tracking-[-0.02em]">{title}</h2>
      </div>
      <div className="mt-4 text-[13px] leading-6 text-[#526582]">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check size={12} strokeWidth={3} /></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
