"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  MapPin,
  Search,
  SlidersHorizontal,
  WalletCards,
} from "lucide-react";
import { internships } from "@/data/internships";

export default function InternshipList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [workMode, setWorkMode] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(internships.map((item) => item.category))),
  ];

  const filteredInternships = useMemo(() => {
    const query = search.toLowerCase().trim();

    return internships.filter((internship) => {
      const matchesSearch =
        !query ||
        internship.title.toLowerCase().includes(query) ||
        internship.company.toLowerCase().includes(query) ||
        internship.location.toLowerCase().includes(query) ||
        internship.skills.some((skill) =>
          skill.toLowerCase().includes(query),
        );

      const matchesCategory =
        category === "All" || internship.category === category;

      const matchesMode =
        workMode === "All" || internship.workMode === workMode;

      return matchesSearch && matchesCategory && matchesMode;
    });
  }, [search, category, workMode]);

  function clearFilters() {
    setSearch("");
    setCategory("All");
    setWorkMode("All");
  }

  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
            <BriefcaseBusiness size={15} />
            Internship opportunities
          </span>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Start your career with the right internship
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Discover verified internships and build real-world experience.
          </p>

          <div className="mt-8 flex max-w-3xl items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-indigo-100">
            <Search className="ml-3 text-slate-400" size={21} />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by role, company, location or skill"
              className="min-w-0 flex-1 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />

            <button className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700">
              Search
            </button>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-24">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
              <SlidersHorizontal size={18} className="text-indigo-600" />
              <h2 className="font-bold text-slate-900">Filters</h2>
            </div>

            <label className="mt-5 block text-sm font-semibold text-slate-700">
              Category
            </label>

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <label className="mt-5 block text-sm font-semibold text-slate-700">
              Work mode
            </label>

            <select
              value={workMode}
              onChange={(event) => setWorkMode(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500"
            >
              <option>All</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>On-site</option>
            </select>

            <button
              onClick={clearFilters}
              className="mt-5 w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
            >
              Clear filters
            </button>
          </aside>

          <section>
            <div className="mb-5">
              <p className="text-sm font-semibold text-indigo-600">
                {filteredInternships.length} opportunities
              </p>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Internships for you
              </h2>
            </div>

            <div className="space-y-4">
              {filteredInternships.map((internship) => (
                <article
                  key={internship.id}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-xl"
                >
                  <div className="flex flex-col justify-between gap-5 sm:flex-row">
                    <div className="flex gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-700">
                        {internship.company.charAt(0)}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-bold text-slate-950">
                            {internship.title}
                          </h3>

                          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                            Actively hiring
                          </span>
                        </div>

                        <p className="mt-1 font-medium text-slate-600">
                          {internship.company}
                        </p>
                      </div>
                    </div>

                    <span className="h-fit rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
                      {internship.workMode}
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      {internship.location}
                    </span>

                    <span className="flex items-center gap-2">
                      <WalletCards size={16} />
                      {internship.stipend}
                    </span>

                    <span className="flex items-center gap-2">
                      <Clock3 size={16} />
                      {internship.duration}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <p className="text-sm text-slate-500">
                      Posted {internship.posted}
                    </p>

                    <Link
                      href={`/internships/${internship.slug}`}
                      className="flex items-center gap-2 text-sm font-bold text-indigo-600"
                    >
                      View details
                      <ArrowRight
                        size={17}
                        className="transition group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              ))}

              {filteredInternships.length === 0 && (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                  <h3 className="text-lg font-bold text-slate-900">
                    No internships found
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Try changing your search or filters.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}