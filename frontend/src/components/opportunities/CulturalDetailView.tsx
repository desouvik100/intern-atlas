"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Share2,
  Bookmark,
  Check,
  Building,
  Sparkles,
  Clock,
  ShieldCheck,
  CalendarCheck,
  Tag,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import { CulturalEvent } from "@/types/cultural";
import { cn } from "@/lib/utils";
import { OpportunityImage } from "@/components/opportunities/OpportunityImage";
import { RegistrationModal } from "./RegistrationModal";

interface CulturalDetailViewProps {
  event: CulturalEvent;
}

export function CulturalDetailView({ event }: CulturalDetailViewProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const formattedStartDate = new Date(event.startDate).toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  const formattedEndDate = new Date(event.endDate).toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  const formattedDeadline = new Date(
    event.registrationDeadline
  ).toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const isClosed =
    event.status?.toLowerCase() === "closed" ||
    event.status?.toLowerCase() === "expired";

  return (
    <div className="min-h-screen bg-background text-primary pb-16">
      {/* 1. Back Navigation Bar */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3.5 sm:px-6">
          <Link
            href="/cultural-events"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-text-secondary hover:text-blue transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Cultural Events</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share event"
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
                  ? "border-pink bg-pink-soft text-pink shadow-sm"
                  : "border-border text-text-secondary hover:border-pink hover:text-pink"
              )}
            >
              <Bookmark size={13} fill={isBookmarked ? "currentColor" : "none"} />
              <span>{isBookmarked ? "Saved" : "Bookmark"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Header Hero */}
      <header className="border-b border-border bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1 min-w-0">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className={cn(
                    "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-bold border",
                    event.status === "Open"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : event.status === "Closing Soon"
                      ? "bg-pink-soft text-pink border-pink/30"
                      : "bg-slate-100 text-slate-600 border-slate-200"
                  )}
                >
                  {event.status}
                </span>

                <span className="rounded-md bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-700 border border-purple-200">
                  {event.category}
                </span>

                <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-text-secondary border border-border/50">
                  {event.mode}
                </span>

                <span className="rounded-md bg-blue-50 px-2.5 py-0.5 text-xs font-bold text-blue border border-blue/20">
                  {event.isFree ? "Free Entry" : event.entryFee}
                </span>
              </div>

              {/* Title & Tagline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary tracking-tight">
                {event.title}
              </h1>

              {event.tagline && (
                <p className="mt-1.5 text-sm sm:text-base text-text-secondary font-medium italic">
                  &ldquo;{event.tagline}&rdquo;
                </p>
              )}

              {/* Organizer & Location Info */}
              <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-text-secondary">
                <span className="flex items-center gap-1.5 font-semibold text-text-primary">
                  <Building size={15} className="text-blue shrink-0" />
                  <span>{event.organizerName}</span>
                </span>

                <span className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-text-muted shrink-0" />
                  <span>{event.location}</span>
                </span>

                <span className="flex items-center gap-1.5">
                  <Calendar size={15} className="text-text-muted shrink-0" />
                  <span>
                    {formattedStartDate} – {formattedEndDate}
                  </span>
                </span>
              </div>
            </div>

            {/* Poster & Desktop Action Box */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-end gap-4 shrink-0">
              <div className="w-full sm:w-72 lg:w-80 aspect-[16/10] rounded-xl overflow-hidden border border-border shadow-md relative">
                <OpportunityImage
                  src={event.poster}
                  alt={event.title}
                  aspectRatio="video"
                  fill
                  priority
                  className="w-full h-full"
                  fallbackCategory="cultural"
                />
              </div>

              <div className="hidden lg:flex flex-col items-end gap-3 w-full">
                <div className="text-right">
                  <span className="text-xs text-text-muted block">Registration Deadline</span>
                  <span className="text-sm font-bold text-primary flex items-center justify-end gap-1">
                    <Clock size={13} className="text-amber-500" />
                    {formattedDeadline}
                  </span>
                </div>

                {isClosed ? (
                  <button
                    type="button"
                    disabled
                    aria-label="Registration closed"
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-200 px-8 text-sm font-bold text-slate-500 cursor-not-allowed shadow-none"
                  >
                    <span>Registration Closed</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsRegisterModalOpen(true)}
                    aria-label={`Register now for ${event.title}`}
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue px-8 text-sm font-bold text-white shadow-sm hover:bg-blue-hover hover:shadow transition-all cursor-pointer"
                  >
                    <span>Register Now</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Main Detail Content */}
      <main className="mx-auto max-w-[1280px] px-4 pt-8 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-card">
              <h2 className="text-lg sm:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-purple-600" />
                <span>About this Cultural Event</span>
              </h2>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed whitespace-pre-line">
                {event.description}
              </p>

              {/* Highlights */}
              {event.highlights && event.highlights.length > 0 && (
                <div className="mt-6 pt-6 border-t border-border/60">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-3">
                    Event Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {event.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary bg-purple-50/50 border border-purple-100/60 rounded-xl p-3"
                      >
                        <Sparkles size={14} className="text-purple-600 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Rules & Guidelines */}
            {event.rules && event.rules.length > 0 && (
              <section className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-card">
                <h2 className="text-lg sm:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-blue" />
                  <span>Competition Rules & Guidelines</span>
                </h2>
                <ul className="space-y-3">
                  {event.rules.map((rule, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[11px] font-bold text-blue mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Schedule */}
            {event.schedule && event.schedule.length > 0 && (
              <section className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-card">
                <h2 className="text-lg sm:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <CalendarCheck size={18} className="text-emerald-600" />
                  <span>Event Timeline & Schedule</span>
                </h2>
                <div className="space-y-4">
                  {event.schedule.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border/80 bg-slate-50/60 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100/80 px-2 py-0.5 rounded">
                          {item.day} — {item.date}
                        </span>
                        <span className="text-xs font-semibold text-text-secondary">
                          {item.title}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.events.map((ev, evIdx) => (
                          <span
                            key={evIdx}
                            className="rounded-lg bg-white border border-border px-2.5 py-1 text-xs text-text-primary font-medium"
                          >
                            {ev}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tags */}
            {event.tags && event.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-bold text-text-muted flex items-center gap-1">
                  <Tag size={12} />
                  <span>Tags:</span>
                </span>
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-text-secondary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-card space-y-5 sticky top-24">
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary border-b border-border/60 pb-3">
                Quick Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-text-muted block text-xs">Eligibility</span>
                  <span className="font-semibold text-primary">{event.eligibility}</span>
                </div>

                {event.teamSize && (
                  <div>
                    <span className="text-text-muted block text-xs">Team Size</span>
                    <span className="font-semibold text-primary">{event.teamSize}</span>
                  </div>
                )}

                {event.prizePool && (
                  <div>
                    <span className="text-text-muted block text-xs">Prizes & Perks</span>
                    <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block mt-0.5">
                      {event.prizePool}
                    </span>
                  </div>
                )}

                <div>
                  <span className="text-text-muted block text-xs">Entry Fee</span>
                  <span className={cn("font-bold", event.isFree ? "text-emerald-600" : "text-primary")}>
                    {event.isFree ? "Free Entry" : event.entryFee}
                  </span>
                </div>

                <div>
                  <span className="text-text-muted block text-xs">Registrations</span>
                  <span className="font-semibold text-primary">
                    {event.registeredCount.toLocaleString("en-IN")} Students Registered
                  </span>
                </div>

                {event.venue && (
                  <div>
                    <span className="text-text-muted block text-xs">Venue</span>
                    <span className="font-semibold text-primary">{event.venue}</span>
                  </div>
                )}

                <div>
                  <span className="text-text-muted block text-xs">Registration Deadline</span>
                  <span className="font-bold text-pink">{formattedDeadline}</span>
                </div>
              </div>

              {/* Action button inside card */}
              <div className="pt-3 border-t border-border/60">
                {isClosed ? (
                  <button
                    type="button"
                    disabled
                    aria-label="Registration closed"
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-200 text-sm font-bold text-slate-500 cursor-not-allowed shadow-none"
                  >
                    <span>Registration Closed</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsRegisterModalOpen(true)}
                    aria-label={`Register for ${event.title}`}
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue text-sm font-bold text-white shadow-sm hover:bg-blue-hover hover:shadow transition-all cursor-pointer"
                  >
                    <span>Register for Event</span>
                  </button>
                )}
              </div>

              {/* Contact section */}
              {event.contact && (
                <div className="pt-3 border-t border-border/60 space-y-2 text-xs">
                  <span className="text-text-muted font-bold uppercase tracking-wider block">
                    Contact Organizer
                  </span>
                  {event.contact.email && (
                    <a
                      href={`mailto:${event.contact.email}`}
                      className="flex items-center gap-2 text-text-secondary hover:text-blue transition-colors"
                    >
                      <Mail size={13} className="text-text-muted shrink-0" />
                      <span className="truncate">{event.contact.email}</span>
                    </a>
                  )}
                  {event.contact.phone && (
                    <a
                      href={`tel:${event.contact.phone}`}
                      className="flex items-center gap-2 text-text-secondary hover:text-blue transition-colors"
                    >
                      <Phone size={13} className="text-text-muted shrink-0" />
                      <span>{event.contact.phone}</span>
                    </a>
                  )}
                  {event.contact.website && (
                    <a
                      href={event.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-secondary hover:text-blue transition-colors"
                    >
                      <Globe size={13} className="text-text-muted shrink-0" />
                      <span className="truncate">{event.contact.website}</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Demo Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        opportunity={{
          id: event.id,
          title: event.title,
          moduleType: "Cultural Events",
          status: event.status,
          registrationDeadline: event.registrationDeadline,
          category: event.category,
          teamSize: event.teamSize,
        }}
      />
    </div>
  );
}
