"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Save } from "lucide-react";
import type { Employer } from "@/lib/employer-db";

const inputClass =
  "mt-2 w-full rounded-xl border border-[#dbe7fa] bg-white px-4 py-3 text-[13px] text-[#071c46] outline-none placeholder:text-[#a1aec2] focus:border-[#1769e8] focus:ring-4 focus:ring-blue-50";

export function ProfileForm({ employer }: { employer: Employer }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setSaved(false);

    const values = Object.fromEntries(
      new FormData(event.currentTarget).entries(),
    );

    try {
      const response = await fetch("/api/employer/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to save your profile");
      }

      setSaved(true);
      router.refresh();
    } catch (caught) {
      setError(
        caught instanceof Error ? caught.message : "Unable to save your profile",
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {saved && (
        <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-800">
          <CheckCircle2 className="mt-0.5 shrink-0" size={21} />
          <div>
            <p className="text-sm font-extrabold">Company profile saved</p>
            <p className="mt-1 text-[11px]">
              These details appear on every internship you post.
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5 text-sm font-bold text-rose-700">
          {error}
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Company name" required>
          <input
            required
            name="companyName"
            defaultValue={employer.companyName}
            className={inputClass}
          />
        </Field>
        <Field label="Industry" required>
          <input
            required
            name="industry"
            defaultValue={employer.industry}
            placeholder="Software, EdTech, Consulting..."
            className={inputClass}
          />
        </Field>
        <Field label="Company website">
          <input
            name="companyWebsite"
            type="url"
            defaultValue={employer.companyWebsite}
            placeholder="https://yourcompany.com"
            className={inputClass}
          />
        </Field>
        <Field
          label="Logo URL"
          hint="Used for the company logo on listing cards."
        >
          <input
            name="logoUrl"
            type="url"
            defaultValue={employer.logoUrl}
            placeholder="https://yourcompany.com/logo.png"
            className={inputClass}
          />
        </Field>
        <Field label="Head office location" required>
          <input
            required
            name="location"
            defaultValue={employer.location}
            placeholder="Pune, Maharashtra"
            className={inputClass}
          />
        </Field>
        <Field label="Contact person" required>
          <input
            required
            name="name"
            defaultValue={employer.name}
            className={inputClass}
          />
        </Field>
        <Field label="Phone">
          <input
            name="phone"
            defaultValue={employer.phone}
            placeholder="+91 98765 43210"
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="About the company" required>
        <textarea
          required
          name="companyDescription"
          rows={5}
          defaultValue={employer.companyDescription}
          placeholder="What your company does, team size, and what interns work on..."
          className={`${inputClass} resize-y`}
        />
      </Field>

      <div className="flex justify-end border-t border-[#e7eefb] pt-5">
        <button
          disabled={saving}
          type="submit"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#1769e8] px-6 text-[12px] font-extrabold text-white shadow-lg shadow-blue-200 hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Save size={16} /> {saving ? "Saving..." : "Save profile"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-[12px] font-extrabold text-[#223657]">
      {label} {required && <span className="text-rose-500">*</span>}
      {children}
      {hint && (
        <span className="mt-1.5 block text-[9px] font-medium leading-4 text-[#94a3b8]">
          {hint}
        </span>
      )}
    </label>
  );
}
