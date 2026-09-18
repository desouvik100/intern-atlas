"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogIn, Sparkles } from "lucide-react";
import Header from "@/components/Header";

const inputClass =
  "mt-2 w-full rounded-xl border border-[#dbe7fa] bg-white px-4 py-3 text-[13px] text-[#071c46] outline-none placeholder:text-[#a1aec2] focus:border-[#1769e8] focus:ring-4 focus:ring-blue-50";

export default function EmployerLoginPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const values = Object.fromEntries(
      new FormData(event.currentTarget).entries(),
    );

    try {
      const response = await fetch("/api/employer/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as {
        error?: string;
        employer?: { profileCompleted: boolean };
      };

      if (!response.ok) {
        throw new Error(result.error || "Unable to sign in");
      }

      router.push(
        result.employer?.profileCompleted
          ? "/employer/internships"
          : "/employer/profile",
      );
      router.refresh();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to sign in");
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f6f9ff] text-[#071c46]">
      <Header />

      <main className="mx-auto max-w-[520px] px-5 py-12 sm:px-8">
        <section className="rounded-2xl border border-[#dbe7fa] bg-white p-6 shadow-[0_18px_50px_rgba(7,28,70,0.08)] sm:p-8">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.1em] text-[#1769e8]">
            <Sparkles size={13} /> Employer workspace
          </div>
          <h1 className="mt-2 text-2xl font-black tracking-[-0.035em]">
            Sign in to your account.
          </h1>

          {error && (
            <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm font-bold text-rose-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <label className="block text-[12px] font-extrabold text-[#223657]">
              Work email <span className="text-rose-500">*</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@company.com"
                className={inputClass}
              />
            </label>

            <label className="block text-[12px] font-extrabold text-[#223657]">
              Password <span className="text-rose-500">*</span>
              <input
                required
                type="password"
                name="password"
                autoComplete="current-password"
                className={inputClass}
              />
            </label>

            <button
              disabled={submitting}
              type="submit"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#1769e8] px-6 text-[12px] font-extrabold text-white shadow-lg shadow-blue-200 hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <LogIn size={16} /> {submitting ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="mt-6 border-t border-[#e7eefb] pt-5 text-[11px] text-[#8290a5]">
            New here?{" "}
            <Link href="/employer/register" className="font-bold text-[#1769e8]">
              Create an employer account
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
