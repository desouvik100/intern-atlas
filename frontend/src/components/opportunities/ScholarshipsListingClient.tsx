"use client";

import { useState, useMemo } from "react";
import { SubNav } from "./SubNav";
import { HeroBanner } from "./HeroBanner";
import { ListingControls } from "./ListingControls";
import { ScholarshipFilterSidebar } from "./ScholarshipFilterSidebar";
import { ScholarshipFilterDrawer } from "./ScholarshipFilterDrawer";
import { ScholarshipCard } from "./ScholarshipCard";
import { EmptyState } from "./EmptyState";
import {
  Scholarship,
  ScholarshipFilterState,
  ScholarshipSortOption,
} from "@/types/scholarship";
import {
  ScholarshipFilterMetadata,
  scholarshipService,
} from "@/lib/services/scholarshipService";
import { ArrowDown } from "lucide-react";

interface ScholarshipsListingClientProps {
  initialScholarships: Scholarship[];
  metadata: ScholarshipFilterMetadata;
}

const DEFAULT_FILTERS: ScholarshipFilterState = {
  search: "",
  scholarshipType: "All",
  category: "All",
  fieldOfStudy: "All",
  eligibility: "All",
  applicationMode: "All",
  feeType: "all",
  status: "All",
  amount: "all",
};

const SCHOLARSHIP_SORT_OPTIONS: {
  value: ScholarshipSortOption;
  label: string;
}[] = [
  { value: "newest", label: "Newest First" },
  { value: "deadline_soon", label: "Deadline: Soonest" },
  { value: "deadline_later", label: "Deadline: Furthest" },
  { value: "highest_amount", label: "Highest Grant" },
  { value: "most_applicants", label: "Most Applicants" },
  { value: "alphabetical", label: "Alphabetical (A - Z)" },
];

export function ScholarshipsListingClient({
  initialScholarships,
  metadata,
}: ScholarshipsListingClientProps) {
  const [filters, setFilters] =
    useState<ScholarshipFilterState>(DEFAULT_FILTERS);
  const [sortBy, setSortBy] = useState<ScholarshipSortOption>("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  // Lazy state initializer for bookmarks
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("internatlas_scholarship_bookmarks");
        if (stored) return JSON.parse(stored);
      } catch {
        // Ignore localStorage error
      }
    }
    return [];
  });

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      try {
        localStorage.setItem(
          "internatlas_scholarship_bookmarks",
          JSON.stringify(updated)
        );
      } catch {
        // Ignore localStorage error
      }
      return updated;
    });
  };

  // Derive filtered and sorted scholarships synchronously via memoization
  const scholarships = useMemo(() => {
    return scholarshipService.filterAndSort(
      initialScholarships,
      filters,
      sortBy
    );
  }, [initialScholarships, filters, sortBy]);

  // Compute active filters count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.scholarshipType !== "All") count++;
    if (filters.category !== "All") count++;
    if (filters.fieldOfStudy !== "All") count++;
    if (filters.eligibility !== "All") count++;
    if (filters.applicationMode !== "All") count++;
    if (filters.feeType !== "all") count++;
    if (filters.status !== "All") count++;
    if (filters.amount !== "all") count++;
    if (filters.search.trim() !== "") count++;
    return count;
  }, [filters]);

  const handleClearFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setVisibleCount(9);
  };

  const handleSearchChange = (query: string) => {
    setFilters((prev) => ({ ...prev, search: query }));
    setVisibleCount(9);
  };

  const visibleScholarships = useMemo(() => {
    return scholarships.slice(0, visibleCount);
  }, [scholarships, visibleCount]);

  const hasMore = visibleCount < scholarships.length;

  return (
    <div className="min-h-screen bg-background text-primary">
      {/* 1. Module Sub Navigation */}
      <SubNav activeModule="scholarships" />

      {/* 2. Hero Section with Search */}
      <HeroBanner
        searchQuery={filters.search}
        onSearchChange={handleSearchChange}
        totalCount={metadata.totalCount}
        badgeText="SCHOLARSHIPS & FINANCIAL AID"
        title={
          <>
            Scholarships to fund your education <br className="hidden sm:inline" />
            <span className="text-cyan">and empower your future.</span>
          </>
        }
        subtitle="Discover merit-based, need-based, and academic scholarships. Find financial grants, bursaries, and awards from top institutions, government bodies, and foundations."
        searchPlaceholder="Search by scholarship title, organizer, field of study, category, or tags..."
        metric1Label="Active Scholarships"
        metric2Value="₹10Cr+"
        metric2Label="Total Grant Pool"
      />

      {/* Main Content Area */}
      <main className="mx-auto max-w-[1400px] px-4 sm:px-6 py-6 sm:py-8">
        {/* Listing Controls */}
        <ListingControls<ScholarshipSortOption>
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onOpenFilterDrawer={() => setIsFilterDrawerOpen(true)}
          activeFilterCount={activeFilterCount}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalResults={scholarships.length}
          itemLabel="Scholarship"
          sortOptions={SCHOLARSHIP_SORT_OPTIONS}
        />

        {/* Filter Drawer for Mobile & Slide-over */}
        <ScholarshipFilterDrawer
          isOpen={isFilterDrawerOpen}
          onClose={() => setIsFilterDrawerOpen(false)}
          filters={filters}
          onFilterChange={(newFilters) => {
            setFilters(newFilters);
            setVisibleCount(9);
          }}
          onClearFilters={handleClearFilters}
          metadata={metadata}
          totalFilteredCount={scholarships.length}
        />

        {/* Content Layout: Desktop Filter Sidebar + Listings */}
        <div className="mt-6 flex gap-8 items-start">
          {/* Desktop Filter Sidebar */}
          <ScholarshipFilterSidebar
            filters={filters}
            onFilterChange={(newFilters) => {
              setFilters(newFilters);
              setVisibleCount(9);
            }}
            onClearFilters={handleClearFilters}
            metadata={metadata}
            activeFilterCount={activeFilterCount}
          />

          {/* Cards Area */}
          <div className="flex-1 min-w-0">
            {scholarships.length === 0 ? (
              <EmptyState
                title="No scholarships found"
                description="We couldn't find any scholarships matching your search criteria. Try modifying your filters or clearing search terms."
                onClearFilters={handleClearFilters}
              />
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {visibleScholarships.map((scholarship) => (
                  <ScholarshipCard
                    key={scholarship.id}
                    scholarship={scholarship}
                    viewMode="grid"
                    isBookmarked={bookmarkedIds.includes(scholarship.id)}
                    onToggleBookmark={handleToggleBookmark}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {visibleScholarships.map((scholarship) => (
                  <ScholarshipCard
                    key={scholarship.id}
                    scholarship={scholarship}
                    viewMode="list"
                    isBookmarked={bookmarkedIds.includes(scholarship.id)}
                    onToggleBookmark={handleToggleBookmark}
                  />
                ))}
              </div>
            )}

            {/* Load More Button */}
            {hasMore && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-2.5 text-xs font-bold text-primary shadow-sm hover:border-blue hover:bg-slate-50 transition-all focus-visible:ring-2 focus-visible:ring-blue"
                >
                  <ArrowDown size={14} />
                  Load More Scholarships ({scholarships.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
