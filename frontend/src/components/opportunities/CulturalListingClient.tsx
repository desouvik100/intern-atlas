"use client";

import { useState, useMemo } from "react";
import { SubNav } from "./SubNav";
import { HeroBanner } from "./HeroBanner";
import { ListingControls } from "./ListingControls";
import { DesktopFilterSidebar } from "./DesktopFilterSidebar";
import { FilterDrawer } from "./FilterDrawer";
import { CulturalCard } from "./CulturalCard";
import { EmptyState } from "./EmptyState";
import {
  CulturalEvent,
  CulturalFilterState,
  CulturalSortOption,
} from "@/types/cultural";
import {
  CulturalFilterMetadata,
  culturalService,
} from "@/lib/services/culturalService";
import { ArrowDown } from "lucide-react";
import {
  CompetitionSortOption,
  CompetitionFilterState,
} from "@/types/competition";
import { CompetitionFilterMetadata } from "@/lib/services/competitionService";
import {
  RegistrationModal,
  RegistrationOpportunity,
} from "./RegistrationModal";

interface CulturalListingClientProps {
  initialEvents: CulturalEvent[];
  metadata: CulturalFilterMetadata;
}

const DEFAULT_FILTERS: CulturalFilterState = {
  search: "",
  category: "All",
  mode: "All",
  location: "All",
  eligibility: "All",
  feeType: "all",
  status: "All",
};

export function CulturalListingClient({
  initialEvents,
  metadata,
}: CulturalListingClientProps) {
  const [filters, setFilters] = useState<CulturalFilterState>(DEFAULT_FILTERS);
  const [sortBy, setSortBy] = useState<CulturalSortOption>("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  // Lazy state initializer for bookmarks
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("internatlas_cultural_bookmarks");
        if (stored) return JSON.parse(stored);
      } catch {
        // Ignore localStorage error
      }
    }
    return [];
  });
  const [selectedForRegister, setSelectedForRegister] =
    useState<RegistrationOpportunity | null>(null);

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      try {
        localStorage.setItem(
          "internatlas_cultural_bookmarks",
          JSON.stringify(updated)
        );
      } catch {
        // Ignore localStorage error
      }
      return updated;
    });
  };

  // Derive filtered and sorted cultural events synchronously via pure memoization
  const events = useMemo(() => {
    return culturalService.filterAndSort(initialEvents, filters, sortBy);
  }, [initialEvents, filters, sortBy]);

  // Compute active filters count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.category !== "All") count++;
    if (filters.mode !== "All") count++;
    if (filters.location !== "All") count++;
    if (filters.eligibility !== "All") count++;
    if (filters.feeType !== "all") count++;
    if (filters.status !== "All") count++;
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

  const visibleEvents = useMemo(() => {
    return events.slice(0, visibleCount);
  }, [events, visibleCount]);

  const hasMore = visibleCount < events.length;

  // Compatibility adapters for shared Filter components
  const compatibleFilters = filters as unknown as CompetitionFilterState;
  const compatibleMetadata = metadata as unknown as CompetitionFilterMetadata;

  return (
    <div className="min-h-screen bg-background text-primary">
      {/* 1. Sub Navigation with Cultural active */}
      <SubNav activeModule="cultural" />

      {/* 2. Hero Banner */}
      <HeroBanner
        searchQuery={filters.search}
        onSearchChange={handleSearchChange}
        totalCount={metadata.totalCount}
        badgeText="CULTURAL EVENTS & EXPRESSIONS"
        title={
          <>
            Spotlight Your Passion, <br className="hidden sm:inline" />
            <span className="text-cyan">Perform on Grand Stages.</span>
          </>
        }
        subtitle="Discover collegiate dance championships, battle of the bands, theatre productions, fashion showcases, photography contests, and literary arts festivals."
        searchPlaceholder="Search by event name, society, genre, city, or venue..."
        metric1Label="Active Events"
        metric2Value={`${metadata.categories.length}+`}
        metric2Label="Categories"
      />

      {/* Main Content Area */}
      <main className="mx-auto max-w-[1400px] px-4 sm:px-6 py-6 sm:py-8">
        {/* Listing Controls */}
        <ListingControls
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onOpenFilterDrawer={() => setIsFilterDrawerOpen(true)}
          activeFilterCount={activeFilterCount}
          sortBy={sortBy as CompetitionSortOption}
          onSortChange={(newSort) => setSortBy(newSort as CulturalSortOption)}
          totalResults={events.length}
          itemLabel="Event"
        />

        {/* Filter Drawer for Mobile & Slide-over */}
        <FilterDrawer
          isOpen={isFilterDrawerOpen}
          onClose={() => setIsFilterDrawerOpen(false)}
          filters={compatibleFilters}
          onFilterChange={(newFilters) => {
            setFilters(newFilters as unknown as CulturalFilterState);
            setVisibleCount(9);
          }}
          onClearFilters={handleClearFilters}
          metadata={compatibleMetadata}
          totalFilteredCount={events.length}
        />

        {/* Content Layout: Desktop Filter Sidebar + Listings */}
        <div className="mt-6 flex gap-8 items-start">
          {/* Desktop Filter Sidebar */}
          <DesktopFilterSidebar
            filters={compatibleFilters}
            onFilterChange={(newFilters) => {
              setFilters(newFilters as unknown as CulturalFilterState);
              setVisibleCount(9);
            }}
            onClearFilters={handleClearFilters}
            metadata={compatibleMetadata}
            activeFilterCount={activeFilterCount}
          />

          {/* Cards Area */}
          <div className="flex-1 min-w-0">
            {events.length === 0 ? (
              <EmptyState
                title="No cultural events found"
                description="Try changing your search or clearing filters to discover more events."
                onClearFilters={handleClearFilters}
              />
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {visibleEvents.map((event) => (
                  <CulturalCard
                    key={event.id}
                    event={event}
                    viewMode="grid"
                    isBookmarked={bookmarkedIds.includes(event.id)}
                    onToggleBookmark={handleToggleBookmark}
                    onRegister={(ev) =>
                      setSelectedForRegister({
                        id: ev.id,
                        title: ev.title,
                        moduleType: "Cultural Events",
                        status: ev.status,
                        registrationDeadline: ev.registrationDeadline,
                        category: ev.category,
                      })
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {visibleEvents.map((event) => (
                  <CulturalCard
                    key={event.id}
                    event={event}
                    viewMode="list"
                    isBookmarked={bookmarkedIds.includes(event.id)}
                    onToggleBookmark={handleToggleBookmark}
                    onRegister={(ev) =>
                      setSelectedForRegister({
                        id: ev.id,
                        title: ev.title,
                        moduleType: "Cultural Events",
                        status: ev.status,
                        registrationDeadline: ev.registrationDeadline,
                        category: ev.category,
                      })
                    }
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
                  Load More Events ({events.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Demo Registration Modal */}
      <RegistrationModal
        isOpen={!!selectedForRegister}
        onClose={() => setSelectedForRegister(null)}
        opportunity={selectedForRegister}
      />
    </div>
  );
}
