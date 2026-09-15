"use client";

import { FormEvent, useEffect, useState } from "react";
import { Bookmark, CheckCircle2, X } from "lucide-react";

type InternshipActionsProps = {
  internshipId: number;
  internshipTitle: string;
};

export default function InternshipActions({
  internshipId,
  internshipTitle,
}: InternshipActionsProps) {
  const [saved, setSaved] = useState(false);
  const [showApplication, setShowApplication] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  useEffect(() => {
    const savedItems: number[] = JSON.parse(
      localStorage.getItem("savedInternships") || "[]",
    );

    setSaved(savedItems.includes(internshipId));
  }, [internshipId]);

  function handleSave() {
    const savedItems: number[] = JSON.parse(
      localStorage.getItem("savedInternships") || "[]",
    );

    let updatedItems: number[];

    if (saved) {
      updatedItems = savedItems.filter((id) => id !== internshipId);
    } else {
      updatedItems = [...new Set([...savedItems, internshipId])];
    }

    localStorage.setItem(
      "savedInternships",
      JSON.stringify(updatedItems),
    );

    setSaved(!saved);
  }

  function handleApplicationSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    setApplicationSubmitted(true);
  }

  function closeApplicationModal() {
    setShowApplication(false);
    setApplicationSubmitted(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setShowApplication(true)}
        className="mt-6 w-full rounded-xl bg-indigo-600 px-5 py-3.5 font-bold text-white transition hover:bg-indigo-700"
      >
        Apply now
      </button>

      <button
        type="button"
        onClick={handleSave}
        className={`mt-3 flex w-full items-center justify-center gap-2 rounded-xl border px-5 py-3.5 font-semibold transition ${
          saved
            ? "border-indigo-600 bg-indigo-50 text-indigo-700"
            : "border-slate-200 text-slate-700 hover:border-indigo-300 hover:text-indigo-600"
        }`}
      >
        <Bookmark
          size={18}
          fill={saved ? "currentColor" : "none"}
        />

        {saved ? "Saved" : "Save internship"}
      </button>

      {showApplication && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-7 shadow-2xl">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-semibold text-indigo-600">
                  Internship application
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-950">
                  {internshipTitle}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeApplicationModal}
                aria-label="Close application form"
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
              >
                <X size={21} />
              </button>
            </div>

            {applicationSubmitted ? (
              <div className="py-10 text-center">
                <CheckCircle2
                  size={52}
                  className="mx-auto text-emerald-600"
                />

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  Application submitted
                </h3>

                <p className="mt-2 text-slate-600">
                  Your application has been sent successfully. The employer
                  will contact you if you are shortlisted.
                </p>

                <button
                  type="button"
                  onClick={closeApplicationModal}
                  className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleApplicationSubmit}
                className="mt-7 space-y-5"
              >
                <label className="block text-sm font-semibold text-slate-700">
                  Full name

                  <input
                    required
                    name="name"
                    placeholder="Enter your full name"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
                  />
                </label>

                <label className="block text-sm font-semibold text-slate-700">
                  Email address

                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
                  />
                </label>

                <label className="block text-sm font-semibold text-slate-700">
                  Resume link

                  <input
                    required
                    type="url"
                    name="resume"
                    placeholder="https://drive.google.com/..."
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
                  />
                </label>

                <label className="block text-sm font-semibold text-slate-700">
                  Why should you be selected?

                  <textarea
                    required
                    name="coverLetter"
                    rows={4}
                    placeholder="Briefly describe your skills and interest..."
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-indigo-600 px-5 py-3.5 font-bold text-white transition hover:bg-indigo-700"
                >
                  Submit application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}