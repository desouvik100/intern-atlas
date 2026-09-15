import Link from "next/link";
import {
  BriefcaseBusiness,
  Eye,
  Plus,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import { internships } from "@/data/internships";

export default function EmployerInternshipsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="font-semibold text-indigo-600">
              Employer dashboard
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-950">
              Manage internships
            </h1>
            <p className="mt-2 text-slate-600">
              Track your opportunities and applications.
            </p>
          </div>

          <Link
            href="/employer/internships/new"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white"
          >
            <Plus size={18} />
            Post internship
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <StatCard
            title="Active internships"
            value="4"
            icon={<BriefcaseBusiness size={21} />}
          />
          <StatCard
            title="Total views"
            value="1,248"
            icon={<Eye size={21} />}
          />
          <StatCard
            title="Applications"
            value="86"
            icon={<Users size={21} />}
          />
        </div>

        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-lg font-bold text-slate-950">
              Posted internships
            </h2>
          </div>

          <div className="divide-y divide-slate-100">
            {internships.map((internship, index) => (
              <div
                key={internship.id}
                className="flex flex-col justify-between gap-5 p-6 md:flex-row md:items-center"
              >
                <div>
                  <Link
                    href={`/internships/${internship.slug}`}
                    className="font-bold text-slate-950 hover:text-indigo-600"
                  >
                    {internship.title}
                  </Link>

                  <p className="mt-1 text-sm text-slate-500">
                    {internship.location} · {internship.workMode}
                  </p>

                  <span className="mt-3 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Active
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="font-bold text-slate-950">
                      {320 - index * 42}
                    </p>
                    <p className="text-xs text-slate-500">Views</p>
                  </div>

                  <div className="text-center">
                    <p className="font-bold text-slate-950">
                      {28 - index * 4}
                    </p>
                    <p className="text-xs text-slate-500">
                      Applicants
                    </p>
                  </div>

                  <Link
                    href={`/internships/${internship.slug}`}
                    className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-slate-950">
            {value}
          </p>
        </div>

        <span className="flex size-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          {icon}
        </span>
      </div>
    </div>
  );
}