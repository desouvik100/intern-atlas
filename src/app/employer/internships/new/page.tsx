"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Check,
  CheckCircle2,
  FileText,
  Lightbulb,
  Send,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";

const inputClass =
  "mt-2 w-full rounded-xl border border-[#dbe7fa] bg-white px-4 py-3 text-[13px] text-[#071c46] outline-none placeholder:text-[#a1aec2] focus:border-[#1769e8] focus:ring-4 focus:ring-blue-50";

export default function PostInternshipPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-[#f6f9ff] text-[#071c46]">
      <Header />

      <section className="border-b border-[#dbe7fa] bg-white">
        <div className="mx-auto max-w-[1080px] px-5 py-7 sm:px-8">
          <Link href="/employer/internships" className="inline-flex items-center gap-2 text-[12px] font-bold text-[#526582] hover:text-[#1769e8]">
            <ArrowLeft size={16} /> Back to dashboard
          </Link>
          <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.1em] text-[#1769e8]"><Sparkles size={13} /> Create opportunity</div>
              <h1 className="mt-2 text-3xl font-black tracking-[-0.035em] sm:text-4xl">Post an internship.</h1>
              <p className="mt-2 text-[13px] text-[#64748b]">Reach qualified students with a clear, trustworthy listing.</p>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-700"><BadgeCheck size={16} /> Free to post · Reviewed in 24 hours</div>
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-[1080px] gap-6 px-5 py-7 sm:px-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:py-9">
        <div>
          {submitted && (
            <div className="mb-5 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-800">
              <CheckCircle2 className="mt-0.5 shrink-0" size={21} />
              <div><p className="text-sm font-extrabold">Internship submitted successfully</p><p className="mt-1 text-[11px]">Your listing has been saved and is now queued for review.</p></div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <FormSection icon={<FileText size={18} />} step="01" title="Basic information" description="Help students understand the role at a glance.">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Internship title" required><input required name="title" placeholder="Frontend Developer Intern" className={inputClass} /></Field>
                <Field label="Company name" required><input required name="company" placeholder="Your company" className={inputClass} /></Field>
                <Field label="Category" required><select required name="category" defaultValue="" className={inputClass}><option value="" disabled>Select category</option><option>Engineering</option><option>Design</option><option>Marketing</option><option>Content</option><option>Sales</option><option>Finance</option></select></Field>
                <Field label="Work mode" required><select required name="workMode" defaultValue="" className={inputClass}><option value="" disabled>Select work mode</option><option>Remote</option><option>Hybrid</option><option>On-site</option></select></Field>
                <Field label="Location" required><input required name="location" placeholder="Pune, Maharashtra" className={inputClass} /></Field>
                <Field label="Duration" required><input required name="duration" placeholder="3 months" className={inputClass} /></Field>
                <Field label="Monthly stipend" required hint="Be transparent to improve application quality."><input required name="stipend" placeholder="₹15,000" className={inputClass} /></Field>
                <Field label="Application deadline" required><input required type="date" name="applyBy" className={inputClass} /></Field>
              </div>
            </FormSection>

            <FormSection icon={<Sparkles size={18} />} step="02" title="Role details" description="Set clear expectations and attract the right applicants.">
              <div className="space-y-5">
                <Field label="Description" required><textarea required name="description" rows={5} placeholder="Describe the role, team and what makes this opportunity meaningful..." className={`${inputClass} resize-y`} /></Field>
                <Field label="Responsibilities" required hint="Enter one responsibility per line."><textarea required name="responsibilities" rows={4} placeholder={"Build responsive interfaces\nCollaborate with design and engineering\nShip production-ready features"} className={`${inputClass} resize-y`} /></Field>
                <Field label="Required skills" required hint="Separate skills with commas."><input required name="skills" placeholder="React, TypeScript, Tailwind CSS" className={inputClass} /></Field>
                <Field label="Perks"><input name="perks" placeholder="Certificate, Flexible hours, Mentorship" className={inputClass} /></Field>
              </div>
            </FormSection>

            <div className="flex flex-col-reverse gap-3 rounded-2xl border border-[#dbe7fa] bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[10px] leading-4 text-[#8290a5]">By submitting, you confirm that this opportunity is genuine and free to apply.</p>
              <div className="flex gap-3">
                <Link href="/employer/internships" className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-[#dbe7fa] px-5 text-[12px] font-bold text-[#526582] hover:border-[#1769e8] hover:text-[#1769e8] sm:flex-none">Save draft</Link>
                <button type="submit" className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#1769e8] px-6 text-[12px] font-extrabold text-white shadow-lg shadow-blue-200 hover:-translate-y-0.5 hover:bg-blue-700 sm:flex-none"><Send size={16} /> Submit for review</button>
              </div>
            </div>
          </form>
        </div>

        <aside className="h-fit space-y-4 lg:sticky lg:top-[92px]">
          <div className="rounded-2xl border border-[#dbe7fa] bg-white p-5 shadow-[0_18px_50px_rgba(7,28,70,0.08)]">
            <p className="text-[10px] font-black uppercase tracking-[0.1em] text-[#1769e8]">Listing quality</p>
            <div className="mt-3 flex items-end justify-between"><p className="text-3xl font-black">Great</p><p className="text-[11px] font-bold text-emerald-600">80%</p></div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-blue-50"><div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#1769e8] to-cyan-400" /></div>
            <ul className="mt-5 space-y-3">
              {["Clear role title", "Transparent stipend", "Specific responsibilities", "Relevant skills"].map((item) => <li key={item} className="flex items-center gap-2 text-[11px] font-semibold text-[#526582]"><span className="flex size-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check size={11} strokeWidth={3} /></span>{item}</li>)}
            </ul>
          </div>

          <div className="rounded-2xl bg-[#071c46] p-5 text-white">
            <div className="flex size-9 items-center justify-center rounded-xl bg-white/10 text-cyan-300"><Lightbulb size={18} /></div>
            <h3 className="mt-4 text-base font-extrabold">A strong listing is specific.</h3>
            <p className="mt-2 text-[11px] leading-5 text-blue-100">Mention the actual projects, tools and mentorship students will receive.</p>
          </div>
        </aside>
      </main>
    </div>
  );
}

function FormSection({ icon, step, title, description, children }: { icon: React.ReactNode; step: string; title: string; description: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-[#dbe7fa] bg-white p-5 shadow-[0_18px_50px_rgba(7,28,70,0.08)] sm:p-7">
      <div className="flex items-start gap-4 border-b border-[#e7eefb] pb-5">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1769e8]">{icon}</span>
        <div><p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#1769e8]">Step {step}</p><h2 className="mt-1 text-lg font-black">{title}</h2><p className="mt-1 text-[11px] text-[#8290a5]">{description}</p></div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block text-[12px] font-extrabold text-[#223657]">
      {label} {required && <span className="text-rose-500">*</span>}
      {children}
      {hint && <span className="mt-1.5 block text-[9px] font-medium leading-4 text-[#94a3b8]">{hint}</span>}
    </label>
  );
}
