import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  WalletCards,
} from "lucide-react";
import Header from "@/components/Header";
import InternshipActions from "@/components/InternshipActions";
import { getInternship } from "@/data/internships";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function InternshipDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const internship = getInternship(slug);

  if (!internship) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <Link
          href="/internships"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600"
        >
          <ArrowLeft size={17} />
          Back to internships
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_320px]">
          <section className="space-y-6">
            <article className="rounded-3xl border border-slate-200 bg-white p-7 md:p-9">
              <div className="flex flex-col justify-between gap-6 sm:flex-row">
                <div className="flex gap-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-xl font-bold text-indigo-700">
                    {internship.company.charAt(0)}
                  </div>

                  <div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Actively hiring
                    </span>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                      {internship.title}
                    </h1>

                    <p className="mt-2 font-medium text-slate-600">
                      {internship.company}
                    </p>
                  </div>
                </div>

                <span className="h-fit rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-700">
                  {internship.workMode}
                </span>
              </div>

              <div className="mt-8 grid gap-5 border-y border-slate-100 py-6 text-sm sm:grid-cols-2">
                <DetailItem
                  icon={<MapPin size={19} />}
                  label="Location"
                  value={internship.location}
                />

                <DetailItem
                  icon={<WalletCards size={19} />}
                  label="Stipend"
                  value={internship.stipend}
                />

                <DetailItem
                  icon={<Clock3 size={19} />}
                  label="Duration"
                  value={internship.duration}
                />

                <DetailItem
                  icon={<CalendarDays size={19} />}
                  label="Apply by"
                  value={internship.applyBy}
                />
              </div>

              <ContentSection title="About the internship">
                <p>{internship.description}</p>
              </ContentSection>

              <ContentSection title="Responsibilities">
                <BulletList items={internship.responsibilities} />
              </ContentSection>

              <ContentSection title="Requirements">
                <BulletList items={internship.requirements} />
              </ContentSection>

              <ContentSection title="Skills required">
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </ContentSection>

              <ContentSection title="Perks">
                <BulletList items={internship.perks} />
              </ContentSection>
            </article>
          </section>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 lg:sticky lg:top-24">
            <p className="text-sm text-slate-500">
              Applications close on
            </p>

            <p className="mt-1 text-lg font-bold text-slate-950">
              {internship.applyBy}
            </p>

            <InternshipActions
              internshipId={internship.id}
              internshipTitle={internship.title}
            />

            <div className="mt-6 border-t border-slate-100 pt-5 text-sm text-slate-500">
              <p>Posted {internship.posted}</p>
              <p className="mt-2">No application fee</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function DetailItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-indigo-600">{icon}</span>

      <div>
        <p className="text-slate-500">{label}</p>
        <p className="mt-1 font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  );
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-slate-950">{title}</h2>
      <div className="mt-4 leading-7 text-slate-600">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2
            size={18}
            className="mt-1 shrink-0 text-emerald-600"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}