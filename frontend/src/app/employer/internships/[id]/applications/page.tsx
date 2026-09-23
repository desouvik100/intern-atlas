"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Application = {
  id: number;
  internshipId: number;
  fullName: string;
  email: string;
  resumeUrl: string;
  coverLetter: string;
  status: string;
  employerNote: string | null;
};

const statuses = [
  "APPLIED",
  "SHORTLISTED",
  "ASSIGNMENT",
  "INTERVIEW",
  "SELECTED",
  "REJECTED",
];

export default function ApplicationsPage() {
  const params = useParams();
  const internshipId = params.id as string;

  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function loadApplications() {
    try {
      const response = await fetch(
        `/api/internships/${internshipId}/applications`,
      );

      if (!response.ok) {
        throw new Error("Failed to load applications");
      }

      const data = await response.json();

      setApplications(data);
    } catch (error) {
      console.error(error);
      setMessage("Failed to load applications.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadApplications();
  }, [internshipId]);

  async function updateStatus(
    applicationId: number,
    status: string,
    employerNote?: string,
  ) {
    try {
      const response = await fetch(
        `/api/applications/${applicationId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
            employerNote,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      const updated = await response.json();

      setApplications((current) =>
        current.map((application) =>
          application.id === updated.id
            ? updated
            : application,
        ),
      );

      setMessage("Application updated successfully.");
    } catch (error) {
      console.error(error);
      setMessage("Failed to update application.");
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading applications...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Internship Applications
          </h1>

          <p className="mt-2 text-gray-600">
            Review applicants and update their hiring status.
          </p>
        </div>

        {message && (
          <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
            {message}
          </div>
        )}

        {applications.length === 0 ? (
          <div className="rounded-xl bg-white p-8 text-center shadow-sm">
            No applications found.
          </div>
        ) : (
          <div className="space-y-5">
            {applications.map((application) => (
              <ApplicationCard
                key={application.id}
                application={application}
                onUpdate={updateStatus}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function ApplicationCard({
  application,
  onUpdate,
}: {
  application: Application;
  onUpdate: (
    applicationId: number,
    status: string,
    employerNote?: string,
  ) => Promise<void>;
}) {
  const [status, setStatus] = useState(application.status);
  const [note, setNote] = useState(application.employerNote || "");
  const [saving, setSaving] = useState(false);

  async function saveChanges() {
    setSaving(true);

    await onUpdate(
      application.id,
      status,
      note,
    );

    setSaving(false);
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {application.fullName}
          </h2>

          <p className="mt-1 text-gray-600">
            {application.email}
          </p>

          <div className="mt-5">
            <p className="text-sm font-medium text-gray-700">
              Cover Letter
            </p>

            <p className="mt-2 text-gray-600">
              {application.coverLetter}
            </p>
          </div>

          <a
            href={application.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-blue-600 hover:underline"
          >
            View Resume
          </a>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Application Status
          </label>

          <select
            value={status}
            onChange={(event) =>
              setStatus(event.target.value)
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          >
            {statuses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <label className="mb-2 mt-5 block text-sm font-medium text-gray-700">
            Employer Note
          </label>

          <textarea
            value={note}
            onChange={(event) =>
              setNote(event.target.value)
            }
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
            placeholder="Add a note about this candidate"
          />

          <button
            onClick={saveChanges}
            disabled={saving}
            className="mt-4 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Update Application"}
          </button>
        </div>
      </div>
    </div>
  );
}