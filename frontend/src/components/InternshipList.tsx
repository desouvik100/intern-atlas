"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Bookmark,
  BriefcaseBusiness,
  Check,
  Clock3,
  Filter,
  GraduationCap,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";
import type { Internship } from "@/data/internships";

const quickCategories = [
  "Data Analysis",
  "Data Science",
  "Software Development",
  "Digital Marketing",
  "Web Development",
  "Design",
];

const featuredOpportunities = [
  {
    logo: "GOI",
    title: "Digital Shram Sankalp",
    company: "Government of India",
    action: "Register now",
  },
  {
    logo: "MS",
    title: "Maruti Suzuki XCELerate 2026",
    company: "Maruti Suzuki",
    action: "Register now",
  },
  {
    logo: "C",
    title: "Unlock Unlimited Learning",
    company: "Coursera",
    action: "₹7,499/year",
  },
  {
    logo: "G",
    title: "Fund My Crazy",
    company: "Google Gemini",
    action: "Register now",
  },
  {
    logo: "ET",
    title: "ET AI Hackathon",
    company: "The Economic Times",
    action: "Explore now",
  },
];

export default function InternshipList({
  internships,
}: {
  internships: Internship[];
}) {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [workModes, setWorkModes] = useState<string[]>([]);
  const [savedIds, setSavedIds] = useState<number[]>([]);

  const filteredInternships = useMemo(() => {
    const query = search.toLowerCase().trim();
    const locationQuery = location.toLowerCase().trim();
    const categoryQuery = selectedCategory.toLowerCase();

    return internships.filter((internship) => {
      const searchableText = [
        internship.title,
        internship.company,
        internship.category,
        internship.location,
        ...internship.skills,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !query || searchableText.includes(query);

      const matchesLocation =
        !locationQuery ||
        internship.location
          .toLowerCase()
          .includes(locationQuery) ||
        internship.workMode
          .toLowerCase()
          .includes(locationQuery);

      const matchesCategory =
        !categoryQuery ||
        searchableText.includes(categoryQuery) ||
        (categoryQuery === "software development" &&
          searchableText.includes("engineering")) ||
        (categoryQuery === "data analysis" &&
          searchableText.includes("analytics"));

      const matchesWorkMode =
        workModes.length === 0 ||
        workModes.includes(internship.workMode);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesCategory &&
        matchesWorkMode
      );
    });
  }, [
    internships,
    search,
    location,
    selectedCategory,
    workModes,
  ]);

  const hasActiveFilters = Boolean(
    search.trim() ||
      location.trim() ||
      selectedCategory ||
      workModes.length,
  );

  function handleSearch(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
  }

  function toggleWorkMode(mode: string) {
    setWorkModes((current) =>
      current.includes(mode)
        ? current.filter((item) => item !== mode)
        : [...current, mode],
    );
  }

  function toggleSaved(id: number) {
    setSavedIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  function clearFilters() {
    setSearch("");
    setLocation("");
    setSelectedCategory("");
    setWorkModes([]);
  }

  function openInternship(slug: string) {
    if (!slug) {
      return;
    }

    router.push(`/internships/${slug}`);
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-[#f3f7ff] via-white to-[#fff0f6]">
        <div className="absolute -right-20 top-0 size-56 rounded-full bg-pink-200/35 blur-3xl" />
        <div className="absolute left-1/3 top-0 size-56 rounded-full bg-blue-200/25 blur-3xl" />

        <div className="relative mx-auto max-w-[900px] px-4 pb-[50px] pt-5 lg:px-0">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.08em] text-blue-600">
                For India&apos;s next generation
              </p>

              <h1 className="mt-2 text-[32px] font-black leading-[1.02] tracking-[-0.035em] text-[#071c46] md:text-[40px]">
                10,000+ Internships{" "}
                <span className="font-serif italic text-[#c63845]">
                  in India
                </span>
              </h1>

              <p className="mt-2 text-[13px] text-slate-600">
                Paid, work-from-home and summer internships
                for students and freshers.
              </p>
            </div>

            <p className="hidden max-w-32 -rotate-6 pt-2 font-serif text-[18px] font-bold italic leading-5 text-[#071c46] lg:block">
              Real opportunities for a brighter tomorrow.
            </p>
          </div>

          <form
            onSubmit={handleSearch}
            className="mt-5 grid min-h-14 overflow-hidden rounded-2xl border border-blue-100 bg-white p-1 shadow-md shadow-blue-100/50 md:grid-cols-[1fr_220px_auto]"
          >
            <label className="flex min-w-0 items-center gap-2.5 px-3">
              <Search
                size={18}
                className="shrink-0 text-[#071c46]"
              />

              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search internships, companies, skills..."
                className="min-w-0 flex-1 py-2.5 text-xs text-slate-900 outline-none placeholder:text-slate-400 sm:text-sm"
              />
            </label>

            <label className="flex items-center gap-2.5 border-t border-slate-100 px-3 md:border-l md:border-t-0">
              <MapPin
                size={17}
                className="shrink-0 text-[#071c46]"
              />

              <input
                value={location}
                onChange={(event) =>
                  setLocation(event.target.value)
                }
                placeholder="Location"
                className="min-w-0 flex-1 py-2.5 text-xs text-slate-900 outline-none placeholder:text-slate-400 sm:text-sm"
              />
            </label>

            <button
              type="submit"
              className="rounded-lg bg-[#06275b] px-7 py-2 text-sm font-bold text-white hover:bg-blue-700"
            >
              Search
            </button>
          </form>

          <div className="mt-7 flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
            {quickCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setSelectedCategory((current) =>
                    current === category ? "" : category,
                  )
                }
                className={`flex h-[34px] shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-[11px] font-semibold transition ${
                  selectedCategory === category
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-blue-200 bg-white text-[#173768] hover:border-blue-500"
                }`}
              >
                <Sparkles size={13} />
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="bg-gradient-to-br from-[#f8fbff] via-white to-[#f2f7ff] text-[#071c46]">
        <div className="mx-auto grid max-w-[1000px] gap-4 px-2 py-4 lg:grid-cols-[188px_minmax(0,1fr)_250px]">
          {/* Filters */}
          <aside className="h-fit rounded-xl border border-blue-100 bg-white p-3 lg:sticky lg:top-16">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Filter
                  size={16}
                  className="text-blue-600"
                />
                <h2 className="text-sm font-extrabold">
                  Filters
                </h2>
              </div>

              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-semibold text-blue-600"
              >
                Clear all
              </button>
            </div>

            <FilterInput
              label="Keyword"
              value={search}
              placeholder="e.g. Marketing, Content..."
              onChange={setSearch}
            />

            <FilterInput
              label="Location"
              value={location}
              placeholder="e.g. Delhi, Remote"
              onChange={setLocation}
            />

            <FilterSection title="Type">
              {["Remote", "On-site", "Hybrid"].map(
                (mode) => (
                  <FilterCheckbox
                    key={mode}
                    label={
                      mode === "Remote"
                        ? "Work from home"
                        : mode
                    }
                    checked={workModes.includes(mode)}
                    onChange={() => toggleWorkMode(mode)}
                  />
                ),
              )}
            </FilterSection>

            <FilterSection title="Stipend (₹/Month)">
              <div className="flex justify-between text-xs text-slate-500">
                <span>₹0</span>
                <span>₹50K+</span>
              </div>

              <input
                type="range"
                min="0"
                max="50000"
                defaultValue="15000"
                className="mt-2 w-full accent-blue-600"
              />
            </FilterSection>

            <FilterSection title="Duration">
              {[
                "1 month",
                "2-3 months",
                "3-6 months",
                "6+ months",
              ].map((duration) => (
                <FilterCheckbox
                  key={duration}
                  label={duration}
                  checked={false}
                  onChange={() => undefined}
                />
              ))}
            </FilterSection>

            <FilterSection title="Experience">
              <FilterCheckbox
                label="Freshers only"
                checked={false}
                onChange={() => undefined}
              />

              <FilterCheckbox
                label="No prior experience"
                checked={false}
                onChange={() => undefined}
              />
            </FilterSection>

            <FilterSection title="Roles">
              {[
                "Engineering",
                "Product",
                "Design",
                "Marketing",
                "Operations",
                "Human Resources",
              ].map((role) => (
                <FilterCheckbox
                  key={role}
                  label={role}
                  checked={selectedCategory === role}
                  onChange={() =>
                    setSelectedCategory((current) =>
                      current === role ? "" : role,
                    )
                  }
                />
              ))}
            </FilterSection>

            <FilterSection title="Eligibility">
              {[
                "Undergraduate",
                "Postgraduate",
                "MBA",
                "High school",
              ].map((item) => (
                <FilterCheckbox
                  key={item}
                  label={item}
                  checked={false}
                  onChange={() => undefined}
                />
              ))}
            </FilterSection>

            <button
              type="button"
              className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-700"
            >
              Apply filters
            </button>
          </aside>

          {/* Internship results */}
          <section className="min-w-0">
            <div className="mb-3 flex min-h-[38px] flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <h2 className="text-[18px] font-black tracking-[-0.02em]">
                {hasActiveFilters
                  ? filteredInternships.length
                  : "2,332"}{" "}
                Internships
              </h2>

              <select className="h-9 rounded-xl border border-blue-100 bg-white px-3 text-[11px] text-slate-600 outline-none">
                <option>Sort by: Most relevant</option>
                <option>Newest first</option>
                <option>Highest stipend</option>
              </select>
            </div>

            <div className="space-y-3">
              {filteredInternships.map(
                (internship, index) => {
                  const saved = savedIds.includes(
                    internship.id,
                  );

                  const detailsHref = `/internships/${internship.slug}`;

                  return (
                    <article
                      key={internship.id}
                      role="link"
                      tabIndex={0}
                      onClick={() =>
                        openInternship(internship.slug)
                      }
                      onKeyDown={(event) => {
                        if (
                          event.target !==
                          event.currentTarget
                        ) {
                          return;
                        }

                        if (
                          event.key === "Enter" ||
                          event.key === " "
                        ) {
                          event.preventDefault();
                          openInternship(
                            internship.slug,
                          );
                        }
                      }}
                      className="relative cursor-pointer rounded-xl border border-blue-100 bg-white px-3 py-2.5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg"
                    >
                      {index === 0 && (
                        <span className="mb-1.5 inline-flex rounded-full bg-pink-100 px-2.5 py-0.5 text-[9px] font-bold text-pink-600">
                          Featured
                        </span>
                      )}

                      <div className="flex flex-col justify-between gap-2 sm:flex-row">
                        <div className="flex min-w-0 gap-3">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-slate-50 text-base font-black text-blue-600">
                            {internship.company.charAt(0)}
                          </div>

                          <div className="min-w-0">
                            <Link
                              href={detailsHref}
                              onClick={(event) =>
                                event.stopPropagation()
                              }
                              className="text-[14px] font-extrabold leading-5 hover:text-blue-600"
                            >
                              {internship.title}
                            </Link>

                            <p className="text-[11px] font-medium text-slate-600">
                              {internship.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex shrink-0 gap-2">
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              toggleSaved(
                                internship.id,
                              );
                            }}
                            className={`inline-flex h-8 items-center gap-1.5 rounded-lg border px-3 text-[10px] font-bold ${
                              saved
                                ? "border-blue-600 bg-blue-50 text-blue-700"
                                : "border-[#173768] bg-white text-[#071c46]"
                            }`}
                          >
                            <Bookmark
                              size={14}
                              className={
                                saved
                                  ? "fill-blue-600"
                                  : ""
                              }
                            />

                            {saved ? "Saved" : "Save"}
                          </button>

                          <Link
                            href={detailsHref}
                            onClick={(event) =>
                              event.stopPropagation()
                            }
                            className="inline-flex h-8 items-center rounded-lg bg-[#06275b] px-4 text-center text-[10px] font-bold text-white hover:bg-blue-700"
                          >
                            Apply
                          </Link>
                        </div>
                      </div>

                      <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-slate-600">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={12} />
                          {internship.location}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <BriefcaseBusiness
                            size={12}
                          />
                          {internship.workMode}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Clock3 size={12} />
                          {internship.duration}
                        </span>
                      </div>

                      <p className="mt-1.5 line-clamp-1 text-[10px] leading-4 text-slate-600">
                        {internship.description}
                      </p>

                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {internship.skills
                          .slice(0, 3)
                          .map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[9px] font-medium text-blue-700"
                            >
                              {skill}
                            </span>
                          ))}

                        {internship.skills.length >
                          3 && (
                          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[9px] font-medium text-slate-600">
                            +
                            {internship.skills
                              .length - 3}
                          </span>
                        )}
                      </div>

                      <div className="mt-1.5 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-1.5">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[9px] font-bold text-emerald-700">
                          <Check size={11} />
                          {internship.stipend}
                        </span>

                        <span className="text-[9px] text-slate-400">
                          Posted {internship.posted}
                        </span>
                      </div>
                    </article>
                  );
                },
              )}

              {filteredInternships.length === 0 && (
                <div className="rounded-xl border border-dashed border-blue-200 bg-white px-6 py-12 text-center">
                  <Search
                    size={35}
                    className="mx-auto text-blue-300"
                  />

                  <h3 className="mt-4 text-lg font-extrabold">
                    No internships found
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Try changing your search or filters.
                  </p>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Right sidebar */}
          <aside className="space-y-4">
            <div className="rounded-xl border border-blue-100 bg-[#f8fbff] p-3">
              <div className="flex items-center justify-between">
                <h2 className="text-[13px] font-extrabold">
                  Featured Opportunities
                </h2>

                <Link
                  href="/internships"
                  className="text-[10px] font-semibold text-blue-600"
                >
                  View all →
                </Link>
              </div>

              <div className="mt-3 space-y-2">
                {featuredOpportunities.map(
                  (opportunity) => (
                    <div
                      key={opportunity.title}
                      className="flex items-center gap-2.5 rounded-lg border border-blue-50 bg-white p-2 shadow-sm"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-slate-50 text-[10px] font-black text-blue-600">
                        {opportunity.logo}
                      </span>

                      <div className="min-w-0">
                        <p className="text-[10px] font-extrabold leading-[13px]">
                          {opportunity.title}
                        </p>

                        <p className="mt-0.5 text-[9px] text-slate-500">
                          {opportunity.company}
                        </p>

                        <p className="mt-0.5 text-[9px] font-semibold text-blue-600">
                          {opportunity.action}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="rounded-xl border border-pink-200 bg-gradient-to-br from-pink-50 to-white p-3">
              <span className="rounded-full bg-pink-100 px-3 py-1 text-[10px] font-bold uppercase text-pink-600">
                For students
              </span>

              <h2 className="mt-3 text-lg font-black leading-6">
                Create your free profile to get matched
              </h2>

              <div className="mt-4 space-y-2.5">
                {[
                  "Apply in one click",
                  "Get noticed by recruiters",
                  "Track your applications",
                  "Access resources and events",
                ].map((benefit) => (
                  <p
                    key={benefit}
                    className="flex items-center gap-2 text-xs text-slate-700"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-white text-blue-600">
                      <Check size={13} />
                    </span>

                    {benefit}
                  </p>
                ))}
              </div>

              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#06275b] px-4 py-2.5 text-xs font-bold text-white"
              >
                Create your account
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-3">
              <span className="rounded-full bg-cyan-100 px-3 py-1 text-[10px] font-bold uppercase text-blue-600">
                For employers
              </span>

              <GraduationCap
                size={28}
                className="mt-4 text-blue-600"
              />

              <h2 className="mt-3 text-lg font-black leading-6">
                Hire talented students from InternAtlas
              </h2>

              <p className="mt-2 text-xs leading-5 text-slate-600">
                Post internships, reach qualified
                students and build your campus presence.
              </p>

              <Link
                href="/employer/internships/new"
                className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-blue-500 bg-white px-4 py-2.5 text-xs font-bold text-blue-600"
              >
                Hire on InternAtlas
                <ArrowRight size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

function FilterInput({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="mt-4 block">
      <span className="text-xs font-extrabold text-[#071c46]">
        {label}
      </span>

      <input
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-blue-100 px-2.5 py-2 text-[11px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500"
      />
    </label>
  );
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-5">
      <h3 className="text-xs font-extrabold text-[#071c46]">
        {title}
      </h3>

      <div className="mt-2.5 space-y-2">
        {children}
      </div>
    </section>
  );
}

function FilterCheckbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-[11px] text-slate-600">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="size-3.5 rounded border-blue-200 accent-blue-600"
      />

      {label}
    </label>
  );
}