"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  GraduationCap,
  Users,
  CheckCircle2,
  Share2,
  Bookmark,
  Check,
  Building,
  ShieldCheck,
  Award,
  BookOpen,
  RotateCw,
  FileText,
  Sparkles,
  Quote,
} from "lucide-react";
import { Scholarship } from "@/types/scholarship";
import { cn } from "@/lib/utils";

interface ScholarshipDetailViewProps {
  scholarship: Scholarship;
}

export function ScholarshipDetailView({ scholarship }: ScholarshipDetailViewProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const formattedDeadline = new Date(
    scholarship.applicationDeadline
  ).toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedAnnouncement = new Date(
    scholarship.announcementDate
  ).toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-background text-primary pb-16">
      {/* 1. Back Navigation Bar */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3.5 sm:px-6">
          <Link
            href="/scholarships"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-text-secondary hover:text-blue transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Scholarships</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share scholarship"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-text-secondary hover:border-blue hover:text-blue transition-all"
            >
              {copiedShare ? (
                <>
                  <Check size={13} className="text-emerald-600" />
                  <span className="text-emerald-600">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 size={13} />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsBookmarked((prev) => !prev)}
              aria-label={
                isBookmarked ? "Remove from bookmarks" : "Save to bookmarks"
              }
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all",
                isBookmarked
                  ? "border-blue bg-blue-surface text-blue"
                  : "border-border text-text-secondary hover:border-blue hover:text-blue"
              )}
            >
              <Bookmark
                size={13}
                className={isBookmarked ? "fill-blue text-blue" : ""}
              />
              <span>{isBookmarked ? "Saved" : "Save"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <main className="mx-auto max-w-[1280px] px-4 pt-6 sm:px-6 lg:pt-8">
        {/* Top Hero Card */}
        <section className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
          {/* Header Banner Background */}
          <div className="relative bg-deep-navy px-6 py-8 sm:px-8 sm:py-10 text-white overflow-hidden">
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full bg-blue/25 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/3 bottom-0 h-48 w-48 rounded-full bg-cyan/15 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="rounded-full bg-cyan/20 border border-cyan/40 px-3 py-0.5 text-xs font-bold text-cyan-light">
                  {scholarship.category}
                </span>

                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-xs font-bold",
                    scholarship.status === "Closing Soon"
                      ? "bg-pink text-white"
                      : "bg-emerald-500 text-white"
                  )}
                >
                  {scholarship.status}
                </span>

                <span className="rounded-full bg-blue/30 border border-blue/40 px-2.5 py-0.5 text-xs font-semibold text-white">
                  {scholarship.scholarshipType}
                </span>

                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-white">
                  {scholarship.applicationMode}
                </span>

                {scholarship.renewableYearly && (
                  <span className="rounded-full bg-emerald-600/30 border border-emerald-400/40 px-2.5 py-0.5 text-xs font-bold text-emerald-300 inline-flex items-center gap-1">
                    <RotateCw size={11} />
                    Renewable Yearly
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {scholarship.title}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-border">
                <div className="inline-flex items-center gap-1.5">
                  <Building size={15} className="text-cyan" />
                  <span>{scholarship.organizerName}</span>
                </div>

                {scholarship.organizerType && (
                  <span className="rounded bg-white/10 px-2 py-0.5 text-[11px] font-medium text-cyan-light">
                    {scholarship.organizerType}
                  </span>
                )}

                <div className="inline-flex items-center gap-1.5">
                  <Users size={15} className="text-cyan" />
                  <span>
                    {scholarship.applicantsCount.toLocaleString("en-IN")} Applicants
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5">
                  <Calendar size={15} className="text-cyan" />
                  <span>Announcement: {formattedAnnouncement}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-4 border-t border-border/60 bg-white p-5 sm:grid-cols-4 sm:p-6 text-center sm:text-left">
            <div className="border-r border-border/60 pr-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
                Scholarship Amount
              </span>
              <p className="mt-1 text-base sm:text-lg font-extrabold text-blue">
                {scholarship.amount}
              </p>
            </div>

            <div className="sm:border-r border-border/60 sm:pr-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
                Application Deadline
              </span>
              <p className="mt-1 text-sm sm:text-base font-bold text-primary">
                {formattedDeadline}
              </p>
            </div>

            <div className="border-r border-border/60 pr-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
                Total Awards
              </span>
              <p className="mt-1 text-sm sm:text-base font-bold text-primary">
                {scholarship.awardCount.toLocaleString("en-IN")} Available
              </p>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
                Application Fee
              </span>
              <p
                className={cn(
                  "mt-1 text-sm sm:text-base font-extrabold",
                  scholarship.isFree ? "text-emerald-600" : "text-primary"
                )}
              >
                {scholarship.applicationFee}
              </p>
            </div>
          </div>
        </section>

        {/* 2-Column Layout: Details Body (Left) + Action Sidebar (Right) */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] items-start">
          {/* Left Column: Rich Sections */}
          <div className="space-y-8">
            {/* About Section */}
            <section className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-card">
              <h2 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
                <GraduationCap size={20} className="text-blue" />
                About the Scholarship
              </h2>
              <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-text-secondary whitespace-pre-line">
                {scholarship.description}
              </p>

              {/* Highlights */}
              {scholarship.highlights && scholarship.highlights.length > 0 && (
                <div className="mt-6 space-y-2.5 rounded-xl bg-blue-surface/40 border border-blue/20 p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue flex items-center gap-1.5">
                    <Sparkles size={14} className="text-cyan" />
                    Key Highlights
                  </span>
                  <ul className="space-y-2 mt-2">
                    {scholarship.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-text-primary">
                        <CheckCircle2 size={15} className="text-blue shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              {scholarship.tags && scholarship.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border-light">
                  {scholarship.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-background px-3 py-1 text-xs font-semibold text-text-secondary border border-border-light"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </section>

            {/* Eligibility Section */}
            <section className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-card">
              <h2 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
                <ShieldCheck size={20} className="text-emerald-600" />
                Eligibility & Academic Criteria
              </h2>

              <div className="mt-4 rounded-xl bg-emerald-50/50 border border-emerald-200/60 p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Who Can Apply
                </span>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {scholarship.eligibility}
                </p>
              </div>

              {/* Fields of Study */}
              {scholarship.fieldOfStudy && scholarship.fieldOfStudy.length > 0 && (
                <div className="mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mb-2">
                    Eligible Fields of Study
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {scholarship.fieldOfStudy.map((field) => (
                      <span
                        key={field}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-blue-surface px-3 py-1 text-xs font-semibold text-blue border border-blue/20"
                      >
                        <BookOpen size={13} />
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Renewable Information */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-text-secondary">
                <div className="flex items-center gap-2.5 rounded-xl border border-border p-3.5">
                  <RotateCw size={16} className="text-blue shrink-0" />
                  <div>
                    <span className="block text-[11px] text-text-muted">Renewable Status</span>
                    <strong>{scholarship.renewableYearly ? "Yes, Renewable Yearly" : "One-time Grant"}</strong>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-border p-3.5">
                  <Award size={16} className="text-blue shrink-0" />
                  <div>
                    <span className="block text-[11px] text-text-muted">Scholarship Category</span>
                    <strong>{scholarship.scholarshipType}</strong>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits & Financial Coverage */}
            {scholarship.benefits && scholarship.benefits.length > 0 && (
              <section className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-card">
                <h2 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
                  <Award size={20} className="text-amber-500" />
                  Benefits & Financial Coverage
                </h2>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {scholarship.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border bg-background/50 p-4 flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-emerald-600 shrink-0 mt-0.5"
                      />
                      <span className="text-xs sm:text-sm text-text-primary font-medium leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Requirements & Documents */}
            {scholarship.requirements && scholarship.requirements.length > 0 && (
              <section className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-card">
                <h2 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
                  <FileText size={20} className="text-blue" />
                  Application Requirements & Documents
                </h2>

                <ul className="mt-4 space-y-3">
                  {scholarship.requirements.map((req, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-border/80 bg-background/30 p-3.5 text-xs sm:text-sm text-text-secondary leading-relaxed"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-surface text-[11px] font-bold text-blue mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="font-medium text-primary">{req}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Selection & Evaluation Process */}
            {scholarship.selectionProcess && scholarship.selectionProcess.length > 0 && (
              <section className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-card">
                <h2 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
                  <Clock size={20} className="text-blue" />
                  Selection & Evaluation Process
                </h2>

                <div className="mt-6 space-y-6 relative before:absolute before:inset-y-0 before:left-4 before:w-0.5 before:bg-border-light">
                  {scholarship.selectionProcess.map((step, index) => (
                    <div key={index} className="relative flex items-start gap-4 pl-1">
                      {/* Step Indicator */}
                      <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue text-xs font-bold text-white shadow-xs">
                        {index + 1}
                      </div>

                      {/* Step Card */}
                      <div className="flex-1 rounded-xl border border-border p-4 bg-background/50">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-blue mb-1">
                          Stage {index + 1}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-text-primary leading-relaxed">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Testimonials */}
            {scholarship.testimonials && scholarship.testimonials.length > 0 && (
              <section className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-card">
                <h2 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
                  <Quote size={20} className="text-blue" />
                  Awardee Experiences
                </h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {scholarship.testimonials.map((t, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border-light bg-blue-surface/30 p-4 flex flex-col justify-between"
                    >
                      <p className="text-xs sm:text-sm italic text-text-secondary leading-relaxed mb-3">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <div className="border-t border-border/50 pt-2 text-xs">
                        <strong className="text-primary block">{t.name}</strong>
                        {t.college && (
                          <span className="text-text-muted">{t.college}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Sticky Action Card */}
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
              <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                Application Status
              </span>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-xl font-extrabold text-primary">
                  {scholarship.applicationFee}
                </span>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-xs font-bold",
                    scholarship.status === "Closing Soon"
                      ? "bg-pink text-white"
                      : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  )}
                >
                  {scholarship.status}
                </span>
              </div>

              {/* Deadline Box */}
              <div className="mt-4 rounded-xl bg-background border border-border p-3 text-xs">
                <div className="flex items-center gap-2 text-text-secondary">
                  <Calendar size={14} className="text-blue" />
                  <span>Application closes on:</span>
                </div>
                <div className="mt-1 font-bold text-primary">
                  {formattedDeadline}
                </div>
              </div>

              {/* Key Quick Facts */}
              <div className="mt-4 space-y-2 border-t border-border-light pt-3 text-xs">
                <div className="flex items-center justify-between text-text-secondary">
                  <span>Grant Amount:</span>
                  <span className="font-bold text-primary">{scholarship.amount}</span>
                </div>
                <div className="flex items-center justify-between text-text-secondary">
                  <span>Total Awards:</span>
                  <span className="font-bold text-primary">
                    {scholarship.awardCount.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex items-center justify-between text-text-secondary">
                  <span>Renewable:</span>
                  <span className="font-bold text-primary">
                    {scholarship.renewableYearly ? "Yes (Annual Review)" : "No"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-text-secondary">
                  <span>Mode:</span>
                  <span className="font-bold text-primary">{scholarship.applicationMode}</span>
                </div>
              </div>

              {/* CTA Action */}
              <div className="mt-5 space-y-3">
                <a
                  href={scholarship.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue text-sm font-bold text-white shadow-sm hover:bg-blue-hover transition-all"
                >
                  Apply Now
                  <ExternalLink size={15} />
                </a>

                <button
                  type="button"
                  onClick={() => setIsBookmarked((prev) => !prev)}
                  className={cn(
                    "flex h-10 w-full items-center justify-center gap-2 rounded-xl border text-xs font-semibold transition-all",
                    isBookmarked
                      ? "border-blue bg-blue-surface text-blue"
                      : "border-border bg-white text-text-secondary hover:border-slate-300 hover:text-primary"
                  )}
                >
                  <Bookmark
                    size={14}
                    className={isBookmarked ? "fill-blue text-blue" : ""}
                  />
                  <span>
                    {isBookmarked ? "Saved in My Opportunities" : "Save for Later"}
                  </span>
                </button>
              </div>

              {/* Organizer Summary */}
              <div className="mt-6 border-t border-border-light pt-5 text-xs">
                <div className="text-text-muted font-medium mb-1">
                  Offered by
                </div>
                <div className="font-bold text-primary text-sm">
                  {scholarship.organizerName}
                </div>
                {scholarship.organizerType && (
                  <span className="inline-block mt-1 rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-text-secondary">
                    {scholarship.organizerType}
                  </span>
                )}
                {scholarship.websiteUrl && (
                  <a
                    href={scholarship.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 font-semibold text-blue hover:underline"
                  >
                    <span>Visit Official Scholarship Website</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
