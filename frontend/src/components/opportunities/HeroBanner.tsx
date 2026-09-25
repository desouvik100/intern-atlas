"use client";

import { Search, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroBannerProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
  className?: string;
}

export function HeroBanner({
  searchQuery,
  onSearchChange,
  totalCount,
  className,
}: HeroBannerProps) {
  return (
    <section
      aria-label="Competition Hero"
      className={cn(
        "relative overflow-hidden bg-deep-navy text-white py-10 sm:py-12 px-4 sm:px-6",
        className
      )}
    >
      {/* Background Accent Graphics */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-cyan/10 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Hero Copy */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan-light mb-3">
              <Sparkles size={13} className="text-cyan animate-pulse" />
              <span>Discover & Compete</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Competitions to challenge your intellect <br className="hidden sm:inline" />
              <span className="text-cyan">and unlock your career.</span>
            </h1>

            <p className="mt-2.5 text-xs sm:text-sm text-border/90 leading-relaxed max-w-xl">
              Discover relevant student competitions, participate in challenges, and explore
              exciting opportunities with prizes, certificates, and fast-track interviews.
            </p>
          </div>

          {/* Quick Metrics Tag */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 w-fit backdrop-blur-sm">
            <div>
              <div className="text-lg font-bold text-white leading-none">
                {totalCount}+
              </div>
              <div className="text-[11px] font-medium text-text-muted mt-0.5">
                Active Challenges
              </div>
            </div>
            <div className="h-7 w-[1px] bg-white/15" />
            <div>
              <div className="text-lg font-bold text-cyan leading-none">
                ₹25L+
              </div>
              <div className="text-[11px] font-medium text-text-muted mt-0.5">
                Total Cash Pool
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar Container */}
        <div className="mt-6 max-w-3xl">
          <div className="relative flex items-center w-full">
            <label htmlFor="competition-search" className="sr-only">
              Search competitions by title, organizer, category, or location
            </label>
            <div className="pointer-events-none absolute left-4 text-text-muted">
              <Search size={18} />
            </div>

            <input
              id="competition-search"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by competition name, company, college, category, or city..."
              className="h-12 w-full rounded-xl border border-border/80 bg-white pl-11 pr-10 text-sm font-medium text-primary shadow-card placeholder:text-text-muted transition-all focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/30"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                aria-label="Clear search query"
                className="absolute right-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
