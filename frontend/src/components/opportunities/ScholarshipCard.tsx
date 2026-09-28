"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Bookmark,
  Calendar,
  Users,
  Award,
  ArrowRight,
  GraduationCap,
  BookOpen,
  RotateCw,
} from "lucide-react";
import { Scholarship } from "@/types/scholarship";
import { cn } from "@/lib/utils";

interface ScholarshipCardProps {
  scholarship: Scholarship;
  viewMode?: "grid" | "list";
  isBookmarked?: boolean;
  onToggleBookmark?: (id: string) => void;
  className?: string;
}

export function ScholarshipCard({
  scholarship,
  viewMode = "grid",
  isBookmarked: externalBookmarked,
  onToggleBookmark,
  className,
}: ScholarshipCardProps) {
  const router = useRouter();
  const [internalBookmarked, setInternalBookmarked] = useState(false);

  const isBookmarked =
    externalBookmarked !== undefined ? externalBookmarked : internalBookmarked;

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (onToggleBookmark) {
      onToggleBookmark(scholarship.id);
    } else {
      setInternalBookmarked((prev) => !prev);
    }
  };

  const handleCardClick = () => {
    router.push(`/scholarships/${scholarship.slug}`);
  };

  const handleCardKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      router.push(`/scholarships/${scholarship.slug}`);
    }
  };

  // Format deadline cleanly
  const formattedDeadline = new Date(
    scholarship.applicationDeadline
  ).toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
  });

  // Status badge styling
  const getStatusColor = (status: string) => {
    if (status === "Closing Soon") return "bg-pink-soft text-pink border-pink/30";
    if (status === "Open") return "bg-emerald-50 text-emerald-700 border-emerald-200";
    return "bg-slate-100 text-slate-600 border-slate-200";
  };

  /* =========================================================================
     LIST VIEW LAYOUT (Desktop horizontal, mobile stack)
     ========================================================================= */
  if (viewMode === "list") {
    return (
      <article
        role="button"
        tabIndex={0}
        onClick={handleCardClick}
        onKeyDown={handleCardKeyDown}
        aria-label={`View details for ${scholarship.title}`}
        className={cn(
          "group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 rounded-2xl border border-border bg-white p-4 sm:p-5 shadow-card",
          "transition-all duration-200 cursor-pointer",
          "hover:-translate-y-0.5 hover:border-cyan hover:shadow-hover",
          className
        )}
      >
        {/* Left: Indicator Icon + Primary Info */}
        <div className="flex items-start gap-4 min-w-0 flex-1">
          {/* Avatar Icon */}
          <div className="hidden xs:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-surface text-blue font-bold border border-blue/20">
            <GraduationCap size={22} className="text-blue" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
              <span
                className={cn(
                  "rounded-full border px-2 py-0.5 text-[10px] font-bold leading-none",
                  getStatusColor(scholarship.status)
                )}
              >
                {scholarship.status}
              </span>

              <span className="rounded-full bg-blue-surface text-blue px-2 py-0.5 text-[10px] font-semibold">
                {scholarship.scholarshipType}
              </span>

              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-text-secondary">
                {scholarship.category}
              </span>

              <span className="rounded-full border border-border-light bg-background px-2 py-0.5 text-[10px] font-semibold text-text-secondary">
                {scholarship.applicationMode}
              </span>
            </div>

            <h3 className="text-base font-bold text-primary group-hover:text-blue transition-colors line-clamp-1">
              {scholarship.title}
            </h3>

            <div className="flex items-center gap-2 mt-0.5 text-xs font-medium text-text-secondary">
              <span className="line-clamp-1">{scholarship.organizerName}</span>
              {scholarship.organizerType && (
                <span className="hidden md:inline rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-text-muted">
                  {scholarship.organizerType}
                </span>
              )}
            </div>

            {/* List metadata row */}
            <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-text-secondary">
              <div className="inline-flex items-center gap-1">
                <GraduationCap size={13} className="text-blue" />
                <span className="font-extrabold text-blue">{scholarship.amount}</span>
              </div>
              <div className="inline-flex items-center gap-1">
                <Calendar size={13} className="text-text-muted" />
                <span>Deadline: {formattedDeadline}</span>
              </div>
              <div className="inline-flex items-center gap-1">
                <Award size={13} className="text-amber-500" />
                <span>{scholarship.awardCount.toLocaleString("en-IN")} Awards</span>
              </div>
              {scholarship.fieldOfStudy && scholarship.fieldOfStudy.length > 0 && (
                <div className="hidden lg:inline-flex items-center gap-1">
                  <BookOpen size={13} className="text-text-muted" />
                  <span className="truncate max-w-[200px]">
                    {scholarship.fieldOfStudy.slice(0, 2).join(", ")}
                    {scholarship.fieldOfStudy.length > 2 ? ` +${scholarship.fieldOfStudy.length - 2}` : ""}
                  </span>
                </div>
              )}
              {scholarship.renewableYearly && (
                <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  <RotateCw size={10} />
                  Renewable
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right / Bottom Action & Meta */}
        <div className="flex w-full sm:w-auto items-center justify-between sm:flex-col sm:items-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-border-light shrink-0">
          <div className="flex sm:flex-col sm:items-end gap-2 sm:gap-0.5 text-right">
            <span
              className={cn(
                "text-xs font-bold",
                scholarship.isFree ? "text-emerald-600" : "text-primary"
              )}
            >
              {scholarship.applicationFee}
            </span>
            <span className="text-[11px] font-medium text-text-muted">
              {scholarship.applicantsCount.toLocaleString("en-IN")} applicants
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleBookmarkClick}
              aria-label={
                isBookmarked
                  ? `Remove ${scholarship.title} from bookmarks`
                  : `Save ${scholarship.title} to bookmarks`
              }
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-xl border transition-all",
                isBookmarked
                  ? "border-blue bg-blue-surface text-blue"
                  : "border-border bg-white text-text-muted hover:border-blue hover:text-blue"
              )}
            >
              <Bookmark
                size={16}
                className={cn(
                  "transition-transform active:scale-90",
                  isBookmarked ? "fill-blue" : ""
                )}
              />
            </button>

            <span className="inline-flex items-center gap-1 rounded-xl bg-primary px-3.5 py-2 text-xs font-bold text-white transition-colors group-hover:bg-blue">
              View
              <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </article>
    );
  }

  /* =========================================================================
     GRID VIEW LAYOUT (Default Multi-column card)
     ========================================================================= */
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      aria-label={`View details for ${scholarship.title}`}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-border bg-white p-4 sm:p-5 shadow-card",
        "transition-all duration-200 cursor-pointer h-full",
        "hover:-translate-y-1 hover:border-cyan hover:shadow-hover",
        className
      )}
    >
      <div>
        {/* Top Badges & Bookmark */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className={cn(
                "rounded-full border px-2 py-0.5 text-[10px] font-bold leading-none",
                getStatusColor(scholarship.status)
              )}
            >
              {scholarship.status}
            </span>
            <span className="rounded-full bg-blue-surface text-blue px-2 py-0.5 text-[10px] font-semibold">
              {scholarship.scholarshipType}
            </span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-text-secondary">
              {scholarship.applicationMode}
            </span>
          </div>

          <button
            type="button"
            onClick={handleBookmarkClick}
            aria-label={
              isBookmarked
                ? `Remove ${scholarship.title} from bookmarks`
                : `Save ${scholarship.title} to bookmarks`
            }
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all",
              isBookmarked
                ? "border-blue bg-blue-surface text-blue"
                : "border-border bg-white text-text-muted hover:border-blue hover:text-blue"
            )}
          >
            <Bookmark
              size={15}
              className={cn(
                "transition-transform active:scale-90",
                isBookmarked ? "fill-blue" : ""
              )}
            />
          </button>
        </div>

        {/* Category Pill */}
        <div className="flex items-center justify-between gap-1 mb-1">
          <span className="text-[11px] font-semibold text-blue uppercase tracking-wider block">
            {scholarship.category}
          </span>
          {scholarship.renewableYearly && (
            <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">
              <RotateCw size={10} />
              Renewable
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-primary leading-snug group-hover:text-blue transition-colors line-clamp-2">
          {scholarship.title}
        </h3>

        {/* Organizer */}
        <p className="mt-1 text-xs font-medium text-text-secondary line-clamp-1">
          {scholarship.organizerName}
        </p>

        {/* Grant Amount Highlight Box */}
        <div className="mt-3.5 flex items-center justify-between rounded-xl bg-background/80 border border-border-light p-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-surface text-blue">
              <GraduationCap size={15} />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                Grant Amount
              </div>
              <div className="text-xs font-extrabold text-primary">
                {scholarship.amount}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
              Application Fee
            </div>
            <div
              className={cn(
                "text-xs font-extrabold",
                scholarship.isFree ? "text-emerald-600" : "text-primary"
              )}
            >
              {scholarship.applicationFee}
            </div>
          </div>
        </div>

        {/* Metadata Details */}
        <div className="mt-3 space-y-1.5 text-xs text-text-secondary">
          <div className="flex items-center gap-1.5">
            <Calendar size={13} className="text-text-muted shrink-0" />
            <span className="text-[11.5px]">
              Deadline: <strong className="text-primary font-semibold">{formattedDeadline}</strong>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Award size={13} className="text-amber-500 shrink-0" />
            <span className="text-[11.5px] truncate">
              Awards: {scholarship.awardCount.toLocaleString("en-IN")} available
            </span>
          </div>

          {scholarship.fieldOfStudy && scholarship.fieldOfStudy.length > 0 && (
            <div className="flex items-center gap-1.5">
              <BookOpen size={13} className="text-text-muted shrink-0" />
              <span className="text-[11.5px] truncate">
                Fields: {scholarship.fieldOfStudy.slice(0, 2).join(", ")}
                {scholarship.fieldOfStudy.length > 2 ? ` +${scholarship.fieldOfStudy.length - 2}` : ""}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border-light flex items-center justify-between">
        <span className="text-[11px] font-semibold text-text-muted">
          {scholarship.applicantsCount.toLocaleString("en-IN")} applicants
        </span>

        <span className="inline-flex items-center gap-1 text-xs font-bold text-blue group-hover:translate-x-0.5 transition-transform">
          View Details
          <ArrowRight size={13} />
        </span>
      </div>
    </article>
  );
}
