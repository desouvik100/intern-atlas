"use client";

import { useState, useMemo } from "react";
import { SubNav } from "./SubNav";
import { HeroBanner } from "./HeroBanner";
import { ListingControls } from "./ListingControls";
import { DesktopFilterSidebar } from "./DesktopFilterSidebar";
import { FilterDrawer } from "./FilterDrawer";
import { FestivalCard } from "./FestivalCard";
import { EmptyState } from "./EmptyState";
import {
  CollegeFestival,
  FestivalFilterState,
  FestivalSortOption,
} from "@/types/festival";
import {
  FestivalFilterMetadata,
  festivalService,
} from "@/lib/services/festivalService";
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

interface FestivalsListingClientProps {
  initialFestivals: CollegeFestival[];
  metadata: FestivalFilterMetadata;
}

const DEFAULT_FILTERS: FestivalFilterState = {
  search: "",
  category: "All",
  festivalType: "All",
  mode: "All",
  location: "All",
  eligibility: "All",
  feeType: "all",
  status: "All",
};

export function FestivalsListingClient({
  initialFestivals,
  metadata,
}: FestivalsListingClientProps) {
  const [filters, setFilters] = useState<FestivalFilterState>(DEFAULT_FILTERS);
  const [sortBy, setSortBy] = useState<FestivalSortOption>("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  // Lazy state initializer for bookmarks
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("internatlas_festival_bookmarks");
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
          "internatlas_festival_bookmarks",
          JSON.stringify(updated)
        );
      } catch {
        // Ignore localStorage error
      }
      return updated;
    });
  };

  // Derive filtered and sorted festivals synchronously via pure memoization
  const festivals = useMemo(() => {
    return festivalService.filterAndSort(initialFestivals, filters, sortBy);
  }, [initialFestivals, filters, sortBy]);

  // Compute active filters count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.category !== "All") count++;
    if (filters.festivalType !== "All") count++;
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

  const visibleFestivals = festivals.slice(0, visibleCount);
  const hasMore = visibleCount < festivals.length;

  // Compatibility adapter for existing DesktopFilterSidebar & FilterDrawer
  const compatibleFilters = filters as unknown as CompetitionFilterState;
  const compatibleMetadata = metadata as unknown as CompetitionFilterMetadata;

  return (
    <div className="min-h-screen bg-background text-primary">
      {/* 1. Sub Navigation */}
      <SubNav activeModule="festivals" />

      {/* 2. Hero Banner */}
      <HeroBanner
        searchQuery={filters.search}
        onSearchChange={handleSearchChange}
        totalCount={metadata.totalCount}
        badgeText="COLLEGE FESTIVALS & CAMPUS LIFE"
        title={
          <>
            Celebrate Campus Culture, <br className="hidden sm:inline" />
            <span className="text-cyan">Pro-Nites & Youth Talent.</span>
          </>
        }
        subtitle="Explore India's premier collegiate cultural fests, rock band battles, choreography championships, hackathons, and star pro-nites across top universities."
        searchPlaceholder="Search by festival name, college, city, category, or event type..."
        metric1Label="Active Festivals"
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
          onSortChange={(newSort) => setSortBy(newSort as FestivalSortOption)}
          totalResults={festivals.length}
          itemLabel="Festival"
        />

        {/* Filter Drawer for Mobile & Slide-over */}
        <FilterDrawer
          isOpen={isFilterDrawerOpen}
          onClose={() => setIsFilterDrawerOpen(false)}
          filters={compatibleFilters}
          onFilterChange={(newFilters) => {
            setFilters(newFilters as unknown as FestivalFilterState);
            setVisibleCount(9);
          }}
          onClearFilters={handleClearFilters}
          metadata={compatibleMetadata}
          totalFilteredCount={festivals.length}
        />

        {/* Content Layout: Desktop Filter Sidebar + Listings */}
        <div className="mt-6 flex gap-8 items-start">
          {/* Desktop Filter Sidebar */}
          <DesktopFilterSidebar
            filters={compatibleFilters}
            onFilterChange={(newFilters) => {
              setFilters(newFilters as unknown as FestivalFilterState);
              setVisibleCount(9);
            }}
            onClearFilters={handleClearFilters}
            metadata={compatibleMetadata}
            activeFilterCount={activeFilterCount}
          />

          {/* Cards Area */}
          <div className="flex-1 min-w-0">
            {festivals.length === 0 ? (
              <EmptyState
                title="No college festivals found"
                description="Try changing your search or clearing filters to discover more campus celebrations."
                onClearFilters={handleClearFilters}
              />
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {visibleFestivals.map((festival) => (
                  <FestivalCard
                    key={festival.id}
                    festival={festival}
                    viewMode="grid"
                    isBookmarked={bookmarkedIds.includes(festival.id)}
                    onToggleBookmark={handleToggleBookmark}
                    onRegister={(f) =>
                      setSelectedForRegister({
                        id: f.id,
                        title: f.title,
                        moduleType: "College Festivals",
                        status: f.status,
                        registrationDeadline: f.registrationDeadline,
                        category: f.category,
                      })
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {visibleFestivals.map((festival) => (
                  <FestivalCard
                    key={festival.id}
                    festival={festival}
                    viewMode="list"
                    isBookmarked={bookmarkedIds.includes(festival.id)}
                    onToggleBookmark={handleToggleBookmark}
                    onRegister={(f) =>
                      setSelectedForRegister({
                        id: f.id,
                        title: f.title,
                        moduleType: "College Festivals",
                        status: f.status,
                        registrationDeadline: f.registrationDeadline,
                        category: f.category,
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
                  Load More Festivals ({festivals.length - visibleCount} remaining)
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
