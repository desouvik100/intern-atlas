"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BadgeCheck, Building2, ShieldCheck, Sparkles } from "lucide-react";
import Header from "@/components/Header";

const inputClass =
  "mt-2 w-full rounded-xl border border-[#dbe7fa] bg-white px-4 py-3 text-[13px] text-[#071c46] outline-none placeholder:text-[#a1aec2] focus:border-[#1769e8] focus:ring-4 focus:ring-blue-50";

export default function EmployerRegisterPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const values = Object.fromEntries(
      new FormData(event.currentTarget).entries(),
    ) as Record<string, string>;

    if (values.password !== values.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/employer/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to create your account");
      }

      router.push("/employer/profile");
      router.refresh();
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "Unable to create your account",
      );
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f6f9ff] text-[#071c46]">
      <Header />

      <main className="mx-auto grid max-w-[1080px] gap-6 px-5 py-9 sm:px-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <section className="rounded-2xl border border-[#dbe7fa] bg-white p-5 shadow-[0_18px_50px_rgba(7,28,70,0.08)] sm:p-7">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.1em] text-[#1769e8]">
            <Sparkles size={13} /> Employer account
          </div>
          <h1 className="mt-2 text-3xl font-black tracking-[-0.035em]">
            Create your employer account.
          </h1>
          <p className="mt-2 text-[13px] text-[#64748b]">
            You&apos;ll add your company details next, then you can post
            internships.
          </p>

          {error && (
            <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm font-bold text-rose-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Your name" required>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Ayush Patani"
                  className={inputClass}
                />
              </Field>
              <Field label="Company name" required>
                <input
                  required
                  name="companyName"
                  placeholder="Your company"
                  className={inputClass}
                />
              </Field>
              <Field label="Work email" required>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </Field>
              <Field label="Phone">
                <input
                  name="phone"
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                  className={inputClass}
                />
              </Field>
              <Field label="Password" required hint="At least 8 characters.">
                <input
                  required
                  type="password"
                  name="password"
                  minLength={8}
                  autoComplete="new-password"
                  className={inputClass}
                />
              </Field>
              <Field label="Confirm password" required>
                <input
                  required
                  type="password"
                  name="confirmPassword"
                  minLength={8}
                  autoComplete="new-password"
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-[#e7eefb] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] text-[#8290a5]">
                Already registered?{" "}
                <Link
                  href="/employer/login"
                  className="font-bold text-[#1769e8]"
                >
                  Sign in
                </Link>
              </p>
              <button
                disabled={submitting}
                type="submit"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#1769e8] px-6 text-[12px] font-extrabold text-white shadow-lg shadow-blue-200 hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <BadgeCheck size={16} />
                {submitting ? "Creating account..." : "Create account"}
              </button>
            </div>
          </form>
        </section>

        <aside className="h-fit space-y-4">
          <div className="rounded-2xl bg-[#071c46] p-5 text-white">
            <div className="flex size-9 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
              <Building2 size={18} />
            </div>
            <h2 className="mt-4 text-base font-extrabold">
              One account per company.
            </h2>
            <p className="mt-2 text-[11px] leading-5 text-blue-100">
              Every internship you post is published under this company name, so
              students always know who is hiring.
            </p>
          </div>
          <div className="rounded-2xl border border-[#dbe7fa] bg-white p-5">
            <div className="flex size-9 items-center justify-center rounded-xl bg-blue-50 text-[#1769e8]">
              <ShieldCheck size={18} />
            </div>
            <h2 className="mt-4 text-sm font-extrabold">
              Listings stay accountable.
            </h2>
            <p className="mt-2 text-[11px] leading-5 text-[#64748b]">
              Postings are tied to your account, so you can edit and close them
              from your dashboard.
            </p>
          </div>
        </aside>
      </main>
    </div>
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
