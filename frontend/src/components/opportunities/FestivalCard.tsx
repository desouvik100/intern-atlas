"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Bookmark,
  Calendar,
  MapPin,
  ArrowRight,
  Building,
  Trophy,
  Users,
} from "lucide-react";
import { CollegeFestival } from "@/types/festival";
import { cn } from "@/lib/utils";
import { OpportunityImage } from "@/components/opportunities/OpportunityImage";

interface FestivalCardProps {
  festival: CollegeFestival;
  viewMode?: "grid" | "list";
  isBookmarked?: boolean;
  onToggleBookmark?: (id: string) => void;
  onRegister?: (festival: CollegeFestival) => void;
  className?: string;
}

export function FestivalCard({
  festival,
  viewMode = "grid",
  isBookmarked: externalBookmarked,
  onToggleBookmark,
  onRegister,
  className,
}: FestivalCardProps) {
  const router = useRouter();
  const [internalBookmarked, setInternalBookmarked] = useState(false);

  const isClosed =
    festival.status?.toLowerCase() === "closed" ||
    festival.status?.toLowerCase() === "expired";

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!isClosed && onRegister) {
      onRegister(festival);
    }
  };

  const isBookmarked =
    externalBookmarked !== undefined ? externalBookmarked : internalBookmarked;

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (onToggleBookmark) {
      onToggleBookmark(festival.id);
    } else {
      setInternalBookmarked((prev) => !prev);
    }
  };

  const handleCardClick = () => {
    router.push(`/college-festivals/${festival.slug}`);
  };

  const handleCardKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      router.push(`/college-festivals/${festival.slug}`);
    }
  };

  const formattedStartDate = new Date(festival.startDate).toLocaleDateString(
    "en-IN",
    { month: "short", day: "numeric" }
  );

  const formattedEndDate = new Date(festival.endDate).toLocaleDateString(
    "en-IN",
    { month: "short", day: "numeric" }
  );

  const getStatusColor = (status: string) => {
    if (status === "Closing Soon")
      return "bg-pink-soft text-pink border-pink/30";
    if (status === "Open")
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (status === "Closed")
      return "bg-slate-100 text-slate-600 border-slate-200";
    return "bg-blue-50 text-blue border-blue/20";
  };

  /* =========================================================================
     LIST VIEW LAYOUT (Desktop horizontal, mobile compact stack)
     ========================================================================= */
  if (viewMode === "list") {
    return (
      <article
        role="button"
        tabIndex={0}
        onClick={handleCardClick}
        onKeyDown={handleCardKeyDown}
        aria-label={`View details for ${festival.title}`}
        className={cn(
          "group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 rounded-2xl border border-border bg-white p-4 sm:p-5 shadow-card",
          "transition-all duration-200 cursor-pointer",
          "hover:-translate-y-0.5 hover:border-cyan hover:shadow-hover",
          className
        )}
      >
        {/* Left: Thumbnail & Primary Info */}
        <div className="flex items-start gap-4 min-w-0 flex-1">
          <div className="relative w-28 h-20 sm:w-36 sm:h-24 md:w-44 md:h-28 shrink-0 overflow-hidden rounded-xl border border-border-light bg-slate-100">
            <OpportunityImage
              src={festival.poster || festival.thumbnail}
              alt={festival.title}
              aspectRatio="video"
              fill
              fallbackCategory="festival"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span
                className={cn(
                  "inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold border",
                  getStatusColor(festival.registrationStatus)
                )}
              >
                {festival.registrationStatus}
              </span>
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-text-secondary border border-border/40">
                {festival.festivalType}
              </span>
              <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue border border-blue/20">
                {festival.isFree ? "Free Entry" : festival.entryFee}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-primary group-hover:text-blue transition-colors truncate">
              {festival.title}
            </h3>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-secondary mt-1">
              <span className="flex items-center gap-1 font-medium text-text-primary">
                <Building size={12} className="text-text-muted shrink-0" />
                <span className="truncate max-w-[200px]">{festival.collegeName}</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-text-muted shrink-0" />
                <span>{festival.collegeLocation}</span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={12} className="text-text-muted shrink-0" />
                <span>
                  {formattedStartDate} – {formattedEndDate}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Right: Meta & Actions */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-border/50">
          <div className="flex items-center gap-2 text-xs">
            {festival.prizePool && (
              <span className="inline-flex items-center gap-1 font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                <Trophy size={11} />
                <span>{festival.prizePool}</span>
              </span>
            )}
            {festival.footfall && (
              <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-text-muted">
                <Users size={11} />
                <span>{festival.footfall}</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleBookmarkClick}
              aria-label={isBookmarked ? "Remove from bookmarks" : "Save festival"}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-xl border transition-all",
                isBookmarked
                  ? "border-pink bg-pink-soft text-pink shadow-sm"
                  : "border-border bg-white text-text-muted hover:border-pink hover:text-pink"
              )}
            >
              <Bookmark size={15} fill={isBookmarked ? "currentColor" : "none"} />
            </button>

            <button
              type="button"
              disabled={isClosed}
              onClick={handleRegisterClick}
              aria-label={isClosed ? "Registration closed" : `Register now for ${festival.title}`}
              className={cn(
                "inline-flex items-center gap-1 rounded-xl px-3.5 py-2 text-xs font-bold transition-all",
                isClosed
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                  : "bg-blue text-white hover:bg-blue-hover shadow-sm cursor-pointer"
              )}
            >
              {isClosed ? "Closed" : "Register Now"}
            </button>

            <span className="inline-flex items-center gap-1 rounded-xl bg-slate-100 px-3 py-2 text-xs font-bold text-primary shadow-sm transition-all group-hover:bg-primary group-hover:text-white">
              <span>View</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </article>
    );
  }

  /* =========================================================================
     GRID VIEW LAYOUT (Card grid)
     ========================================================================= */
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      aria-label={`View details for ${festival.title}`}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-border bg-white p-5 shadow-card",
        "transition-all duration-200 cursor-pointer",
        "hover:-translate-y-1 hover:border-cyan hover:shadow-hover",
        className
      )}
    >
      <div>
        {/* Top Poster Image Container with Badges */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 mb-3.5 border border-border-light">
          <OpportunityImage
            src={festival.poster || festival.thumbnail}
            alt={festival.title}
            aspectRatio="video"
            fill
            fallbackCategory="festival"
          />
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
            <span
              className={cn(
                "inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold border shadow-sm backdrop-blur-md",
                getStatusColor(festival.registrationStatus)
              )}
            >
              {festival.registrationStatus}
            </span>
            <button
              type="button"
              onClick={handleBookmarkClick}
              aria-label={isBookmarked ? "Remove from bookmarks" : "Save festival"}
              className={cn(
                "pointer-events-auto flex h-8 w-8 items-center justify-center rounded-lg border backdrop-blur-md transition-all shadow-sm",
                isBookmarked
                  ? "border-pink bg-white/95 text-pink"
                  : "border-white/40 bg-white/80 text-text-secondary hover:bg-white hover:text-pink"
              )}
            >
              <Bookmark size={14} fill={isBookmarked ? "currentColor" : "none"} />
            </button>
          </div>
        </div>

        {/* Festival Type & Mode */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="rounded-md bg-purple-50 px-2 py-0.5 text-[10px] font-semibold text-purple-700 border border-purple-200">
            {festival.festivalType}
          </span>
          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-text-secondary border border-border/40">
            {festival.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-primary group-hover:text-blue transition-colors line-clamp-1">
          {festival.title}
        </h3>

        {/* College Name & Tagline */}
        <p className="text-xs font-semibold text-text-primary mt-0.5 line-clamp-1">
          {festival.collegeName}
        </p>

        {festival.tagline && (
          <p className="text-[11px] text-text-secondary italic mt-1 line-clamp-1">
            &ldquo;{festival.tagline}&rdquo;
          </p>
        )}

        {/* Short Description */}
        <p className="text-xs text-text-secondary mt-2 line-clamp-2 leading-relaxed">
          {festival.shortDescription}
        </p>

        {/* Meta Pills */}
        <div className="mt-4 space-y-1.5 border-t border-border/60 pt-3 text-xs text-text-secondary">
          <div className="flex items-center gap-2">
            <Calendar size={13} className="text-text-muted shrink-0" />
            <span className="truncate">
              {formattedStartDate} – {formattedEndDate}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-text-muted shrink-0" />
            <span className="truncate">{festival.collegeLocation}</span>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="inline-flex items-center gap-1 font-semibold text-text-primary">
              <span className="text-[11px] text-text-muted font-normal">Entry:</span>
              <span className={festival.isFree ? "text-emerald-600 font-bold" : ""}>
                {festival.isFree ? "Free Entry" : festival.entryFee}
              </span>
            </span>

            {festival.prizePool && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                <Trophy size={11} />
                <span>{festival.prizePool}</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between gap-2 text-xs">
        <span className="text-[11px] text-text-muted font-medium">
          {festival.eventsCount ? `${festival.eventsCount}+ Events` : "Multi-Event"}
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={isClosed}
            onClick={handleRegisterClick}
            aria-label={isClosed ? "Registration closed" : `Register now for ${festival.title}`}
            className={cn(
              "inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all",
              isClosed
                ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                : "bg-blue text-white hover:bg-blue-hover shadow-sm cursor-pointer"
            )}
          >
            {isClosed ? "Closed" : "Register Now"}
          </button>

          <span className="inline-flex items-center gap-0.5 text-xs font-bold text-primary group-hover:text-blue group-hover:translate-x-0.5 transition-all">
            <span>View</span>
            <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </article>
  );
}
