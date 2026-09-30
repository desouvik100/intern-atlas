import { MOCK_CULTURAL_EVENTS } from "@/data/mock-cultural";
import {
  CulturalEvent,
  CulturalFilterState,
  CulturalSortOption,
} from "@/types/cultural";

export interface CulturalFilterMetadata {
  categories: string[];
  modes: string[];
  locations: string[];
  eligibilities: string[];
  totalCount: number;
}

/**
 * Service abstraction for Cultural Events.
 * Decouples the UI components from direct data access so that mock data can
 * seamlessly be swapped with Express/API backend calls in the future.
 */
class CulturalService {
  /**
   * Synchronous filter and sort helper for client components.
   */
  filterAndSort(
    items: CulturalEvent[],
    filters?: Partial<CulturalFilterState>,
    sort: CulturalSortOption = "newest"
  ): CulturalEvent[] {
    let results = [...items];

    if (!filters) {
      return this.sortEvents(results, sort);
    }

    // Search query across title, organizerName, location, category, venue, tags
    if (filters.search && filters.search.trim() !== "") {
      const q = filters.search.trim().toLowerCase();
      results = results.filter((item) => {
        return (
          item.title.toLowerCase().includes(q) ||
          item.organizerName.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          (item.location && item.location.toLowerCase().includes(q)) ||
          (item.venue && item.venue.toLowerCase().includes(q)) ||
          item.tags.some((tag) => tag.toLowerCase().includes(q))
        );
      });
    }

    // Category filter
    if (filters.category && filters.category !== "All") {
      results = results.filter(
        (item) => item.category.toLowerCase() === filters.category!.toLowerCase()
      );
    }

    // Mode filter (Offline, Online, Hybrid)
    if (filters.mode && filters.mode !== "All") {
      results = results.filter(
        (item) => item.mode.toLowerCase() === filters.mode!.toLowerCase()
      );
    }

    // Location filter
    if (filters.location && filters.location !== "All") {
      results = results.filter((item) =>
        item.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    // Eligibility filter
    if (filters.eligibility && filters.eligibility !== "All") {
      results = results.filter((item) =>
        item.eligibility.toLowerCase().includes(filters.eligibility!.toLowerCase())
      );
    }

    // Fee Type filter (all, free, paid)
    if (filters.feeType && filters.feeType !== "all") {
      if (filters.feeType === "free") {
        results = results.filter((item) => item.isFree);
      } else if (filters.feeType === "paid") {
        results = results.filter((item) => !item.isFree);
      }
    }

    // Status filter
    if (filters.status && filters.status !== "All") {
      results = results.filter(
        (item) => item.status.toLowerCase() === filters.status!.toLowerCase()
      );
    }

    return this.sortEvents(results, sort);
  }

  /**
   * Sort cultural events by given criteria.
   */
  sortEvents(
    items: CulturalEvent[],
    sort: CulturalSortOption = "newest"
  ): CulturalEvent[] {
    const sorted = [...items];
    switch (sort) {
      case "newest":
        return sorted.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
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
      default:
        return sorted;
    }
  }

  /**
   * Async method mimicking backend query
   */
  async getEvents(
    filters?: Partial<CulturalFilterState>,
    sort: CulturalSortOption = "newest"
  ): Promise<CulturalEvent[]> {
    return this.filterAndSort(MOCK_CULTURAL_EVENTS, filters, sort);
  }

  /**
   * Retrieve a single cultural event by its URL slug.
   */
  async getEventBySlug(slug: string): Promise<CulturalEvent | null> {
    const item = MOCK_CULTURAL_EVENTS.find((ev) => ev.slug === slug);
    return item ?? null;
  }

  /**
   * Generate filter metadata dynamically from the dataset.
   */
  async getFilterMetadata(): Promise<CulturalFilterMetadata> {
    const categories = Array.from(
      new Set(MOCK_CULTURAL_EVENTS.map((i) => i.category))
    ).sort();

    const modes = Array.from(
      new Set(MOCK_CULTURAL_EVENTS.map((i) => i.mode))
    ).sort();

    const locations = Array.from(
      new Set(
        MOCK_CULTURAL_EVENTS.map((i) => i.location.split(",")[0].trim())
      )
    ).sort();

    const eligibilities = Array.from(
      new Set(MOCK_CULTURAL_EVENTS.map((i) => i.eligibility))
    ).sort();

    return {
      categories,
      modes,
      locations,
      eligibilities,
      totalCount: MOCK_CULTURAL_EVENTS.length,
    };
  }
}

export const culturalService = new CulturalService();
