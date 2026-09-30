import { MOCK_COLLEGE_FESTIVALS } from "@/data/mock-festivals";
import {
  CollegeFestival,
  FestivalFilterState,
  FestivalSortOption,
} from "@/types/festival";

export interface FestivalFilterMetadata {
  categories: string[];
  festivalTypes: string[];
  modes: string[];
  locations: string[];
  eligibilities: string[];
  totalCount: number;
}

/**
 * Service abstraction for College Festivals.
 * Decouples the UI components from direct data access so that mock data can
 * seamlessly be swapped with Express/API backend calls in the future.
 */
class FestivalService {
  /**
   * Synchronous filter and sort helper for client components.
   */
  filterAndSort(
    items: CollegeFestival[],
    filters?: Partial<FestivalFilterState>,
    sort: FestivalSortOption = "newest"
  ): CollegeFestival[] {
    let results = [...items];

    if (!filters) {
      return this.sortFestivals(results, sort);
    }

    // Search query across title, collegeName, collegeLocation, category, festivalType, venue, tags
    if (filters.search && filters.search.trim() !== "") {
      const q = filters.search.trim().toLowerCase();
      results = results.filter((fest) => {
        return (
          fest.title.toLowerCase().includes(q) ||
          fest.collegeName.toLowerCase().includes(q) ||
          fest.collegeLocation.toLowerCase().includes(q) ||
          fest.category.toLowerCase().includes(q) ||
          fest.festivalType.toLowerCase().includes(q) ||
          (fest.location && fest.location.toLowerCase().includes(q)) ||
          (fest.venue && fest.venue.toLowerCase().includes(q)) ||
          fest.tags.some((tag) => tag.toLowerCase().includes(q))
        );
      });
    }

    // Festival Type filter
    if (filters.festivalType && filters.festivalType !== "All") {
      results = results.filter(
        (fest) =>
          fest.festivalType.toLowerCase() ===
          filters.festivalType!.toLowerCase()
      );
    }

    // Category filter
    if (filters.category && filters.category !== "All") {
      results = results.filter(
        (fest) => fest.category.toLowerCase() === filters.category!.toLowerCase()
      );
    }

    // Mode filter (Offline, Online, Hybrid)
    if (filters.mode && filters.mode !== "All") {
      results = results.filter(
        (fest) => fest.mode.toLowerCase() === filters.mode!.toLowerCase()
      );
    }

    // Location filter
    if (filters.location && filters.location !== "All") {
      results = results.filter(
        (fest) =>
          fest.location &&
          fest.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    // Eligibility filter
    if (filters.eligibility && filters.eligibility !== "All") {
      results = results.filter((fest) =>
        fest.eligibility
          .toLowerCase()
          .includes(filters.eligibility!.toLowerCase())
      );
    }

    // Fee type filter (all, free, paid)
    if (filters.feeType && filters.feeType !== "all") {
      if (filters.feeType === "free") {
        results = results.filter((fest) => fest.isFree);
      } else if (filters.feeType === "paid") {
        results = results.filter((fest) => !fest.isFree);
      }
    }

    // Status filter (Open, Closing Soon, Closed, etc.)
    if (filters.status && filters.status !== "All") {
      results = results.filter(
        (fest) =>
          fest.registrationStatus.toLowerCase() ===
          filters.status!.toLowerCase()
      );
    }

    return this.sortFestivals(results, sort);
  }

  /**
   * Sort festivals array based on the requested sort option.
   */
  private sortFestivals(
    items: CollegeFestival[],
    sort: FestivalSortOption
  ): CollegeFestival[] {
    const sorted = [...items];

    switch (sort) {
      case "deadline_soon":
        return sorted.sort(
          (a, b) =>
            new Date(a.registrationDeadline).getTime() -
            new Date(b.registrationDeadline).getTime()
        );

      case "deadline_later":
        return sorted.sort(
          (a, b) =>
            new Date(b.registrationDeadline).getTime() -
            new Date(a.registrationDeadline).getTime()
        );

      case "event_date_soon":
        return sorted.sort(
          (a, b) =>
            new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
        );

      case "most_registered":
        return sorted.sort((a, b) => b.registeredCount - a.registeredCount);

      case "alphabetical":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));

      case "newest":
      default:
        return sorted.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
  }

  /**
   * Fetch all college festivals.
   */
  async getFestivals(): Promise<CollegeFestival[]> {
    return Promise.resolve([...MOCK_COLLEGE_FESTIVALS]);
  }

  /**
   * Fetch a single festival by slug.
   */
  async getFestivalBySlug(slug: string): Promise<CollegeFestival | null> {
    const festival = MOCK_COLLEGE_FESTIVALS.find((f) => f.slug === slug);
    return Promise.resolve(festival ? { ...festival } : null);
  }

  /**
   * Extract filter metadata dynamically from the dataset.
   */
  async getFilterMetadata(): Promise<FestivalFilterMetadata> {
    const categories = Array.from(
      new Set(MOCK_COLLEGE_FESTIVALS.map((f) => f.category))
    ).sort();

    const festivalTypes = Array.from(
      new Set(MOCK_COLLEGE_FESTIVALS.map((f) => f.festivalType))
    ).sort();

    const modes = Array.from(
      new Set(MOCK_COLLEGE_FESTIVALS.map((f) => f.mode))
    ).sort();

    const locations = Array.from(
      new Set(
        MOCK_COLLEGE_FESTIVALS.map((f) => f.collegeLocation.split(",")[0].trim())
      )
    ).sort();

    const eligibilities = Array.from(
      new Set(MOCK_COLLEGE_FESTIVALS.map((f) => f.eligibility))
    ).sort();

    return Promise.resolve({
      categories,
      festivalTypes,
      modes,
      locations,
      eligibilities,
      totalCount: MOCK_COLLEGE_FESTIVALS.length,
    });
  }

  /**
   * Get featured festivals.
   */
  async getFeaturedFestivals(): Promise<CollegeFestival[]> {
    return Promise.resolve(
      MOCK_COLLEGE_FESTIVALS.filter(
        (f) => f.registrationStatus === "Open" || f.registrationStatus === "Closing Soon"
      ).slice(0, 4)
    );
  }
}

export const festivalService = new FestivalService();
