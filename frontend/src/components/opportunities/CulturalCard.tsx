"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Bookmark,
  Calendar,
  MapPin,
  ArrowRight,
  Trophy,
} from "lucide-react";
import { CulturalEvent } from "@/types/cultural";
import { cn } from "@/lib/utils";
import { OpportunityImage } from "@/components/opportunities/OpportunityImage";

interface CulturalCardProps {
  event: CulturalEvent;
  viewMode?: "grid" | "list";
  isBookmarked?: boolean;
  onToggleBookmark?: (id: string) => void;
  onRegister?: (event: CulturalEvent) => void;
  className?: string;
}

export function CulturalCard({
  event,
  viewMode = "grid",
  isBookmarked: externalBookmarked,
  onToggleBookmark,
  onRegister,
  className,
}: CulturalCardProps) {
  const router = useRouter();
  const [internalBookmarked, setInternalBookmarked] = useState(false);

  const isClosed =
    event.status?.toLowerCase() === "closed" ||
    event.status?.toLowerCase() === "expired";

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!isClosed && onRegister) {
      onRegister(event);
    }
  };

  const isBookmarked =
    externalBookmarked !== undefined ? externalBookmarked : internalBookmarked;

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (onToggleBookmark) {
      onToggleBookmark(event.id);
    } else {
      setInternalBookmarked((prev) => !prev);
    }
  };

  const handleCardClick = () => {
    router.push(`/cultural-events/${event.slug}`);
  };

  const handleCardKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      router.push(`/cultural-events/${event.slug}`);
    }
  };

  const formattedStartDate = new Date(event.startDate).toLocaleDateString(
    "en-IN",
    { month: "short", day: "numeric" }
  );

  const formattedDeadline = new Date(
    event.registrationDeadline
  ).toLocaleDateString("en-IN", { month: "short", day: "numeric" });

  const getStatusColor = (status: string) => {
    if (status === "Closing Soon")
      return "bg-pink-soft text-pink border-pink/30";
    if (status === "Open")
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (status === "Closed")
      return "bg-slate-100 text-slate-600 border-slate-200";
    return "bg-purple-50 text-purple-700 border-purple-200";
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
        aria-label={`View details for ${event.title}`}
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
              src={event.poster}
              alt={event.title}
              aspectRatio="video"
              fill
              fallbackCategory="cultural"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span
                className={cn(
                  "inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold border",
                  getStatusColor(event.status)
                )}
              >
                {event.status}
              </span>
              <span className="rounded-md bg-purple-50 px-2 py-0.5 text-[10px] font-semibold text-purple-700 border border-purple-200">
                {event.category}
              </span>
              <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue border border-blue/20">
                {event.isFree ? "Free Entry" : event.entryFee}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-primary group-hover:text-blue transition-colors truncate">
              {event.title}
            </h3>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-secondary mt-1">
              <span className="font-medium text-text-primary truncate max-w-[200px]">
                {event.organizerName}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-text-muted shrink-0" />
                <span>{event.location}</span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={12} className="text-text-muted shrink-0" />
                <span>Event: {formattedStartDate}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right: Meta & Actions */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-border/50">
          <div className="flex items-center gap-2 text-xs">
            {event.prizePool && (
              <span className="inline-flex items-center gap-1 font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                <Trophy size={11} />
                <span>{event.prizePool}</span>
              </span>
            )}
            <span className="text-[11px] text-text-muted">
              {event.registeredCount.toLocaleString("en-IN")} registered
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleBookmarkClick}
              aria-label={isBookmarked ? "Remove from bookmarks" : "Save event"}
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
              aria-label={isClosed ? "Registration closed" : `Register now for ${event.title}`}
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
     GRID VIEW LAYOUT (Default Multi-column card)
     ========================================================================= */
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      aria-label={`View details for ${event.title}`}
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
            src={event.poster}
            alt={event.title}
            aspectRatio="video"
            fill
            fallbackCategory="cultural"
          />
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
            <span
              className={cn(
                "inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold border shadow-sm backdrop-blur-md",
                getStatusColor(event.status)
              )}
            >
              {event.status}
            </span>
            <button
              type="button"
              onClick={handleBookmarkClick}
              aria-label={isBookmarked ? "Remove from bookmarks" : "Save event"}
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

        {/* Category & Mode Pill */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="rounded-md bg-purple-50 px-2 py-0.5 text-[10px] font-semibold text-purple-700 border border-purple-200">
            {event.category}
          </span>
          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-text-secondary border border-border/40">
            {event.mode}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-primary group-hover:text-blue transition-colors line-clamp-1">
          {event.title}
        </h3>

        {/* Organizer */}
        <p className="text-xs font-semibold text-text-primary mt-0.5 line-clamp-1">
          {event.organizerName}
        </p>

        {event.tagline && (
          <p className="text-[11px] text-text-secondary italic mt-1 line-clamp-1">
            &ldquo;{event.tagline}&rdquo;
          </p>
        )}

        {/* Short Description */}
        <p className="text-xs text-text-secondary mt-2 line-clamp-2 leading-relaxed">
          {event.shortDescription}
        </p>

        {/* Meta Info */}
        <div className="mt-4 space-y-1.5 border-t border-border/60 pt-3 text-xs text-text-secondary">
          <div className="flex items-center gap-2">
            <Calendar size={13} className="text-text-muted shrink-0" />
            <span className="truncate">Date: {formattedStartDate}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-text-muted shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="inline-flex items-center gap-1 font-semibold text-text-primary">
              <span className="text-[11px] text-text-muted font-normal">Entry:</span>
              <span className={event.isFree ? "text-emerald-600 font-bold" : ""}>
                {event.isFree ? "Free Entry" : event.entryFee}
              </span>
            </span>

            {event.prizePool && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                <Trophy size={11} />
                <span>{event.prizePool}</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between gap-2 text-xs">
        <span className="text-[11px] text-text-muted font-medium">
          Deadline: {formattedDeadline}
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={isClosed}
            onClick={handleRegisterClick}
            aria-label={isClosed ? "Registration closed" : `Register now for ${event.title}`}
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
