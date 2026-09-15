"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Send } from "lucide-react";
import Header from "@/components/Header";

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50";

export default function PostInternshipPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="mx-auto max-w-4xl px-5 py-10 lg:px-8">
        <Link
          href="/employer/internships"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600"
        >
          <ArrowLeft size={17} />
          Back to dashboard
        </Link>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
          <div className="border-b border-slate-100 pb-7">
            <p className="font-semibold text-indigo-600">
              For employers
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-950">
              Post an internship
            </h1>

            <p className="mt-3 text-slate-600">
              Add the opportunity details and start receiving applications
              from students.
            </p>
          </div>

          {submitted && (
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-800">
              <CheckCircle2 className="mt-0.5 shrink-0" size={21} />

              <div>
                <p className="font-bold">
                  Internship submitted successfully
                </p>

                <p className="mt-1 text-sm">
                  It has been saved for review and publication.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-7">
            <section>
              <h2 className="text-lg font-bold text-slate-950">
                Basic information
              </h2>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <Field label="Internship title">
                  <input
                    required
                    name="title"
                    placeholder="Frontend Developer Intern"
                    className={inputClass}
                  />
                </Field>

                <Field label="Company name">
                  <input
                    required
                    name="company"
                    placeholder="Your company"
                    className={inputClass}
                  />
                </Field>

                <Field label="Category">
                  <select
                    required
                    name="category"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select category
                    </option>
                    <option>Engineering</option>
                    <option>Design</option>
                    <option>Marketing</option>
                    <option>Content</option>
                    <option>Sales</option>
                    <option>Finance</option>
                  </select>
                </Field>

                <Field label="Work mode">
                  <select
                    required
                    name="workMode"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select work mode
                    </option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                    <option>On-site</option>
                  </select>
                </Field>

                <Field label="Location">
                  <input
                    required
                    name="location"
                    placeholder="Pune, Maharashtra"
                    className={inputClass}
                  />
                </Field>

                <Field label="Duration">
                  <input
                    required
                    name="duration"
                    placeholder="3 months"
                    className={inputClass}
                  />
                </Field>

                <Field label="Monthly stipend">
                  <input
                    required
                    name="stipend"
                    placeholder="₹15,000"
                    className={inputClass}
                  />
                </Field>

                <Field label="Application deadline">
                  <input
                    required
                    type="date"
                    name="applyBy"
                    className={inputClass}
                  />
                </Field>
              </div>
            </section>

            <section className="border-t border-slate-100 pt-7">
              <h2 className="text-lg font-bold text-slate-950">
                Internship details
              </h2>

              <div className="mt-5 space-y-5">
                <Field label="Description">
                  <textarea
                    required
                    name="description"
                    rows={5}
                    placeholder="Describe the role and what the intern will work on..."
                    className={inputClass}
                  />
                </Field>

                <Field label="Responsibilities">
                  <textarea
                    required
                    name="responsibilities"
                    rows={4}
                    placeholder="Enter one responsibility per line"
                    className={inputClass}
                  />
                </Field>

                <Field label="Required skills">
                  <input
                    required
                    name="skills"
                    placeholder="React, TypeScript, Tailwind CSS"
                    className={inputClass}
                  />
                </Field>

                <Field label="Perks">
                  <input
                    name="perks"
                    placeholder="Certificate, Flexible hours, Mentorship"
                    className={inputClass}
                  />
                </Field>
              </div>
            </section>

            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-7 sm:flex-row sm:justify-end">
              <Link
                href="/employer/internships"
                className="rounded-xl border border-slate-200 px-6 py-3 text-center font-semibold text-slate-700 hover:border-indigo-300 hover:text-indigo-600"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white hover:bg-indigo-700"
              >
                <Send size={18} />
                Submit internship
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-semibold text-slate-700">
      {label}
      {children}
    </label>
  );
}