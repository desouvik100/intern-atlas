"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Share2,
  Bookmark,
  Check,
  Building,
  Trophy,
  Sparkles,
  CalendarCheck,
  Info,
  PartyPopper,
  Mail,
  Phone,
  Globe,
  Tag,
  Clock,
} from "lucide-react";
import { CollegeFestival } from "@/types/festival";
import { cn } from "@/lib/utils";
import { OpportunityImage } from "@/components/opportunities/OpportunityImage";
import { RegistrationModal } from "./RegistrationModal";

interface FestivalDetailViewProps {
  festival: CollegeFestival;
}

export function FestivalDetailView({ festival }: FestivalDetailViewProps) {
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

  const formattedStartDate = new Date(festival.startDate).toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  const formattedEndDate = new Date(festival.endDate).toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  const formattedDeadline = new Date(
    festival.registrationDeadline
  ).toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const isClosed = festival.registrationStatus === "Closed";

  return (
    <div className="min-h-screen bg-background text-primary pb-16">
      {/* 1. Back Navigation Bar */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3.5 sm:px-6">
          <Link
            href="/college-festivals"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-text-secondary hover:text-blue transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to College Festivals</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share festival"
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

      {/* 2. Festival Header Hero */}
      <header className="border-b border-border bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1 min-w-0">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className={cn(
                    "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-bold border",
                    festival.registrationStatus === "Open"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : festival.registrationStatus === "Closing Soon"
                      ? "bg-pink-soft text-pink border-pink/30"
                      : "bg-slate-100 text-slate-600 border-slate-200"
                  )}
                >
                  {festival.registrationStatus}
                </span>

                <span className="rounded-md bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-700 border border-purple-200">
                  {festival.festivalType}
                </span>

                <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-text-secondary border border-border/50">
                  {festival.mode}
                </span>

                <span className="rounded-md bg-blue-50 px-2.5 py-0.5 text-xs font-bold text-blue border border-blue/20">
                  {festival.isFree ? "Free Entry" : festival.entryFee}
                </span>
              </div>

              {/* Title & Tagline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary tracking-tight">
                {festival.title}
              </h1>

              {festival.tagline && (
                <p className="mt-1.5 text-sm sm:text-base text-text-secondary font-medium italic">
                  &ldquo;{festival.tagline}&rdquo;
                </p>
              )}

              {/* College & Location Info */}
              <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-text-secondary">
                <span className="flex items-center gap-1.5 font-semibold text-text-primary">
                  <Building size={15} className="text-blue shrink-0" />
                  <span>{festival.collegeName}</span>
                </span>

                <span className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-text-muted shrink-0" />
                  <span>{festival.collegeLocation}</span>
                </span>

                <span className="flex items-center gap-1.5">
                  <Calendar size={15} className="text-text-muted shrink-0" />
                  <span>
                    {formattedStartDate} – {formattedEndDate}
                  </span>
                </span>
              </div>
            </div>

            {/* Desktop Poster & Action Box */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-end gap-4 shrink-0">
              <div className="w-full sm:w-72 lg:w-80 aspect-[16/10] rounded-xl overflow-hidden border border-border shadow-md relative">
                <OpportunityImage
                  src={festival.poster || festival.thumbnail}
                  alt={festival.title}
                  aspectRatio="video"
                  fill
                  priority
                  className="w-full h-full"
                  fallbackCategory="festival"
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
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-200 px-8 text-sm font-bold text-slate-500 cursor-not-allowed shadow-none"
                  >
                    <span>Registration Closed</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsRegisterModalOpen(true)}
                    aria-label={`Register now for ${festival.title}`}
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

      {/* 3. Main Content & Sidebar */}
      <main className="mx-auto max-w-[1280px] px-4 sm:px-6 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Festival Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-xl border border-border bg-white p-3.5 shadow-sm">
                <div className="flex items-center gap-2 text-text-muted text-xs mb-1">
                  <Trophy size={14} className="text-amber-500" />
                  <span>Prize Pool</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-primary">
                  {festival.prizePool || "Trophies & Certificates"}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-white p-3.5 shadow-sm">
                <div className="flex items-center gap-2 text-text-muted text-xs mb-1">
                  <Users size={14} className="text-blue" />
                  <span>Footfall</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-primary">
                  {festival.footfall || "Campus Wide"}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-white p-3.5 shadow-sm">
                <div className="flex items-center gap-2 text-text-muted text-xs mb-1">
                  <PartyPopper size={14} className="text-purple-500" />
                  <span>Events</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-primary">
                  {festival.eventsCount ? `${festival.eventsCount}+ Competitions` : "Multi-Event"}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-white p-3.5 shadow-sm">
                <div className="flex items-center gap-2 text-text-muted text-xs mb-1">
                  <CalendarCheck size={14} className="text-emerald-500" />
                  <span>Entry Fee</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-primary">
                  {festival.isFree ? "Free Entry" : festival.entryFee}
                </div>
              </div>
            </div>

            {/* About Festival */}
            <section
              aria-labelledby="about-heading"
              className="rounded-2xl border border-border bg-white p-6 shadow-card"
            >
              <h2 id="about-heading" className="text-lg font-bold text-primary mb-3">
                About the Festival
              </h2>
              <div className="text-sm leading-relaxed text-text-secondary whitespace-pre-line space-y-3">
                {festival.description}
              </div>
            </section>

            {/* Highlights & Flagship Pro-Nites */}
            {festival.highlights && festival.highlights.length > 0 && (
              <section
                aria-labelledby="highlights-heading"
                className="rounded-2xl border border-border bg-white p-6 shadow-card"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={18} className="text-amber-500" />
                  <h2 id="highlights-heading" className="text-lg font-bold text-primary">
                    Flagship Highlights & Pro-Nites
                  </h2>
                </div>
                <ul className="space-y-2.5">
                  {festival.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                    >
                      <div className="mt-1 h-2 w-2 rounded-full bg-blue shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Schedule & Timeline */}
            {festival.schedule && festival.schedule.length > 0 && (
              <section
                aria-labelledby="schedule-heading"
                className="rounded-2xl border border-border bg-white p-6 shadow-card"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={18} className="text-blue" />
                  <h2 id="schedule-heading" className="text-lg font-bold text-primary">
                    Day-by-Day Schedule & Itinerary
                  </h2>
                </div>
                <div className="space-y-4">
                  {festival.schedule.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border/80 bg-slate-50/70 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="rounded bg-blue px-2 py-0.5 text-xs font-bold text-white">
                            {item.day}
                          </span>
                          <span className="text-sm font-bold text-primary">
                            {item.title}
                          </span>
                        </div>
                        <span className="text-xs text-text-muted font-medium">
                          {item.date}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.events.map((ev, eIdx) => (
                          <span
                            key={eIdx}
                            className="inline-flex items-center rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-text-secondary border border-border/60 shadow-2xs"
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

            {/* Guidelines & Eligibility */}
            <section
              aria-labelledby="eligibility-heading"
              className="rounded-2xl border border-border bg-white p-6 shadow-card"
            >
              <div className="flex items-center gap-2 mb-3">
                <Info size={18} className="text-blue" />
                <h2 id="eligibility-heading" className="text-lg font-bold text-primary">
                  Eligibility & Participation Guidelines
                </h2>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {festival.eligibility}
              </p>
              <div className="rounded-xl bg-blue-surface/40 border border-blue/20 p-4 text-xs text-text-secondary space-y-2">
                <p className="font-semibold text-primary">General Requirements:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Valid college or university identity card is mandatory upon entry.</li>
                  <li>Online pre-registration is required for individual competition slots and pro-show passes.</li>
                  <li>Contingents and group delegations must register under the prescribed delegation guidelines.</li>
                  <li>Campus discipline and conduct rules must be adhered to at all times.</li>
                </ul>
              </div>
            </section>

            {/* Tags */}
            {festival.tags && festival.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-bold text-text-muted flex items-center gap-1">
                  <Tag size={12} />
                  <span>Tags:</span>
                </span>
                {festival.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white border border-border px-2.5 py-1 text-xs font-medium text-text-secondary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <aside
              aria-label="Quick Festival Info"
              className="rounded-2xl border border-border bg-white p-6 shadow-card sticky top-24 space-y-5"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted border-b border-border pb-3">
                Festival Quick Facts
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="block text-text-muted text-[11px]">College</span>
                  <span className="font-bold text-primary">{festival.collegeName}</span>
                </div>

                <div>
                  <span className="block text-text-muted text-[11px]">Venue & Location</span>
                  <span className="font-medium text-text-primary">
                    {festival.venue || festival.collegeLocation}
                  </span>
                </div>

                <div>
                  <span className="block text-text-muted text-[11px]">Event Dates</span>
                  <span className="font-medium text-text-primary">
                    {formattedStartDate} – {formattedEndDate}
                  </span>
                </div>

                <div>
                  <span className="block text-text-muted text-[11px]">Registration Deadline</span>
                  <span className="font-semibold text-amber-600">{formattedDeadline}</span>
                </div>

                <div>
                  <span className="block text-text-muted text-[11px]">Entry Fee</span>
                  <span className="font-bold text-primary">
                    {festival.isFree ? "Free Entry" : festival.entryFee}
                  </span>
                </div>

                <div>
                  <span className="block text-text-muted text-[11px]">Organizing Body</span>
                  <span className="font-medium text-text-primary">{festival.organizer}</span>
                </div>
              </div>

              {/* Mobile / Sidebar CTA */}
              <div className="pt-4 border-t border-border">
                {isClosed ? (
                  <button
                    type="button"
                    disabled
                    aria-label="Registration closed"
                    className="w-full flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-200 text-sm font-bold text-slate-500 cursor-not-allowed"
                  >
                    <span>Registration Closed</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsRegisterModalOpen(true)}
                    aria-label={`Register now for ${festival.title}`}
                    className="w-full flex h-11 items-center justify-center gap-2 rounded-xl bg-blue text-sm font-bold text-white shadow-sm hover:bg-blue-hover transition-all cursor-pointer"
                  >
                    <span>Register Now</span>
                  </button>
                )}
              </div>

              {/* Contact Information */}
              {festival.contact && (
                <div className="pt-4 border-t border-border/80 space-y-2 text-xs text-text-secondary">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-text-muted">
                    Contact & Helpdesk
                  </span>
                  {festival.contact.email && (
                    <div className="flex items-center gap-2">
                      <Mail size={12} className="text-text-muted shrink-0" />
                      <a
                        href={`mailto:${festival.contact.email}`}
                        className="text-blue hover:underline truncate"
                      >
                        {festival.contact.email}
                      </a>
                    </div>
                  )}
                  {festival.contact.phone && (
                    <div className="flex items-center gap-2">
                      <Phone size={12} className="text-text-muted shrink-0" />
                      <span>{festival.contact.phone}</span>
                    </div>
                  )}
                  {festival.contact.website && (
                    <div className="flex items-center gap-2">
                      <Globe size={12} className="text-text-muted shrink-0" />
                      <a
                        href={festival.contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue hover:underline truncate"
                      >
                        {festival.contact.website}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>

      {/* Demo Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        opportunity={{
          id: festival.id,
          title: festival.title,
          moduleType: "College Festivals",
          status: festival.status || festival.registrationStatus,
          registrationDeadline: festival.registrationDeadline,
          category: festival.category,
        }}
      />
    </div>
  );
}
