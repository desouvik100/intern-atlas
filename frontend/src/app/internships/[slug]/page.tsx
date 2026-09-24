import Link from "next/link";
import { notFound } from "next/navigation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  WalletCards,
} from "lucide-react";

import Header from "@/components/Header";
import InternshipActions from "@/components/InternshipActions";
import { findInternshipBySlug } from "@internatlas/backend/internship-db";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function safeValue(value?: string | null) {
  if (!value || !value.trim()) {
    return "Not specified";
  }

  return value;
}

export default async function InternshipDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const internship = await findInternshipBySlug(slug);

  if (!internship) {
    notFound();
  }

  const companyName = safeValue(internship.company);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <Header />

      {/* Back navigation */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1100px] px-4 py-4 sm:px-6">
          <Link
            href="/internships"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-[#008BDC]"
          >
            <ArrowLeft size={16} />
            Back to internships
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-[1100px] px-4 py-6 sm:px-6 lg:py-8">
        {/* Main internship card */}
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="p-5 sm:p-7">
            {/* Header */}
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
              <div className="flex gap-4">
                {/* Company logo fallback */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-2xl font-bold text-[#008BDC]">
                  {companyName.charAt(0).toUpperCase()}
                </div>

                <div>
                  {internship.category && (
                    <span className="inline-flex rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#008BDC]">
                      {internship.category}
                    </span>
                  )}

                  <h1 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-[28px]">
                    {safeValue(internship.title)}
                  </h1>

                  <p className="mt-2 text-sm font-medium text-slate-600">
                    {companyName}
                  </p>

                  <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-slate-600">
                    <MapPin size={16} />
                    {safeValue(internship.location)}
                  </p>
                </div>
              </div>
            </div>

            {/* Internship information */}
            <div className="mt-7 grid grid-cols-2 gap-y-6 border-y border-slate-200 py-5 sm:grid-cols-4">
              <InfoItem
                icon={<Clock3 size={17} />}
                label="Duration"
                value={safeValue(internship.duration)}
              />

              <InfoItem
                icon={<WalletCards size={17} />}
                label="Stipend"
                value={safeValue(internship.stipend)}
              />

              <InfoItem
                icon={<CalendarDays size={17} />}
                label="Apply by"
                value={safeValue(internship.applyBy)}
              />

              <InfoItem
                icon={<BriefcaseBusiness size={17} />}
                label="Work mode"
                value={safeValue(internship.workMode)}
              />
            </div>

            {/* Bottom information */}
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500">
              {internship.posted && (
                <span>
                  Posted {internship.posted}
                </span>
              )}

              <span className="rounded bg-emerald-50 px-2 py-1 font-semibold text-emerald-700">
                No application fee
              </span>
            </div>
          </div>
        </section>

        {/* Main content */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* Left column */}
          <div className="space-y-5">
            {/* About internship */}
            <ContentCard title="About the internship">
              <p className="whitespace-pre-line">
                {safeValue(internship.description)}
              </p>
            </ContentCard>

            {/* Responsibilities */}
            {internship.responsibilities.length > 0 && (
              <ContentCard title="Selected intern's day-to-day responsibilities">
                <BulletList
                  items={internship.responsibilities}
                />
              </ContentCard>
            )}

            {/* Skills */}
            {internship.skills.length > 0 && (
              <ContentCard title="Skills required">
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </ContentCard>
            )}

            {/* Eligibility */}
            {internship.requirements.length > 0 && (
              <ContentCard title="Who can apply">
                <p className="mb-4">
                  Only those candidates can apply who:
                </p>

                <BulletList
                  items={internship.requirements}
                  numbered
                />
              </ContentCard>
            )}

            {/* Perks */}
            {internship.perks.length > 0 && (
              <ContentCard title="Perks">
                <div className="flex flex-wrap gap-2">
                  {internship.perks.map((perk) => (
                    <span
                      key={perk}
                      className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                    >
                      <Check
                        size={14}
                        className="text-emerald-600"
                      />

                      {perk}
                    </span>
                  ))}
                </div>
              </ContentCard>
            )}

            {/* Company */}
            <ContentCard title={`About ${companyName}`}>
              <p>
                Learn more about {companyName} and the internship opportunity
                through the details provided in this listing.
              </p>
            </ContentCard>
          </div>

          {/* Right column */}
          <aside className="h-fit lg:sticky lg:top-24">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Apply for this internship
              </h2>

              <div className="mt-4 space-y-3 border-b border-slate-200 pb-5 text-sm">
                <SidebarDetail
                  label="Stipend"
                  value={safeValue(internship.stipend)}
                />

                <SidebarDetail
                  label="Duration"
                  value={safeValue(internship.duration)}
                />

                <SidebarDetail
                  label="Apply by"
                  value={safeValue(internship.applyBy)}
                />
              </div>

              <InternshipActions
                internshipId={internship.id}
                internshipTitle={internship.title}
                companyName={companyName}
              />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="px-2 first:pl-0">
      <div className="flex items-center gap-1.5 text-slate-400">
        {icon}

        <span className="text-xs font-medium">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm font-semibold text-slate-800">
        {value}
      </p>
    </div>
  );
}

function ContentCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-lg font-semibold text-slate-900">
        {title}
      </h2>

      <div className="mt-4 text-sm leading-7 text-slate-600">
        {children}
      </div>
    </section>
  );
}

function BulletList({
  items,
  numbered = false,
}: {
  items: string[];
  numbered?: boolean;
}) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="flex items-start gap-3"
        >
          {numbered ? (
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[10px] font-bold text-[#008BDC]">
              {index + 1}
            </span>
          ) : (
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
          )}

          <span>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SidebarDetail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-slate-500">
        {label}
      </span>

      <span className="text-right font-semibold text-slate-800">
        {value}
      </span>
    </div>
  );
}