import { MOCK_SCHOLARSHIPS } from "@/data/mock-scholarships";
import {
  Scholarship,
  ScholarshipFilterState,
  ScholarshipSortOption,
} from "@/types/scholarship";

export interface ScholarshipFilterMetadata {
  scholarshipTypes: string[];
  categories: string[];
  fieldsOfStudy: string[];
  applicationModes: string[];
  eligibilities: string[];
  totalCount: number;
}

class ScholarshipService {
  filterAndSort(
    items: Scholarship[],
    filters?: Partial<ScholarshipFilterState>,
    sort: ScholarshipSortOption = "newest"
  ): Scholarship[] {
    let results = [...items];

    if (!filters) {
      return this.sortScholarships(results, sort);
    }

    if (filters.search && filters.search.trim() !== "") {
      const q = filters.search.trim().toLowerCase();
      results = results.filter((scholarship) => {
        return (
          scholarship.title.toLowerCase().includes(q) ||
          scholarship.organizerName.toLowerCase().includes(q) ||
          scholarship.category.toLowerCase().includes(q) ||
          scholarship.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          scholarship.fieldOfStudy.some((field) =>
            field.toLowerCase().includes(q)
          )
        );
      });
    }

    if (filters.scholarshipType && filters.scholarshipType !== "All") {
      results = results.filter(
        (scholarship) =>
          scholarship.scholarshipType.toLowerCase() ===
          filters.scholarshipType!.toLowerCase()
      );
    }

    if (filters.category && filters.category !== "All") {
      results = results.filter(
        (scholarship) =>
          scholarship.category.toLowerCase() ===
          filters.category!.toLowerCase()
      );
    }

    if (filters.fieldOfStudy && filters.fieldOfStudy !== "All") {
      results = results.filter((scholarship) =>
        scholarship.fieldOfStudy.some(
          (field) =>
            field.toLowerCase() === filters.fieldOfStudy!.toLowerCase()
        )
      );
    }

    if (filters.eligibility && filters.eligibility !== "All") {
      results = results.filter((scholarship) =>
        scholarship.eligibility
          .toLowerCase()
          .includes(filters.eligibility!.toLowerCase())
      );
    }

    if (filters.applicationMode && filters.applicationMode !== "All") {
      results = results.filter(
        (scholarship) =>
          scholarship.applicationMode.toLowerCase() ===
          filters.applicationMode!.toLowerCase()
      );
    }

    if (filters.feeType && filters.feeType !== "all") {
      if (filters.feeType === "free") {
        results = results.filter((scholarship) => scholarship.isFree);
      } else if (filters.feeType === "paid") {
        results = results.filter((scholarship) => !scholarship.isFree);
      }
    }

    if (filters.status && filters.status !== "All") {
      results = results.filter(
        (scholarship) =>
          scholarship.status.toLowerCase() === filters.status!.toLowerCase()
      );
    }

    if (filters.amount && filters.amount !== "all") {
      results = results.filter((scholarship) => {
        const amount = scholarship.amountNumber || 0;
        if (filters.amount === "under_25k") {
          return amount < 25000;
        } else if (filters.amount === "25k_to_100k") {
          return amount >= 25000 && amount <= 100000;
        } else if (filters.amount === "above_100k") {
          return amount > 100000;
        }
        return true;
      });
    }

    return this.sortScholarships(results, sort);
  }

  private getApiBaseUrl(): string {
    if (typeof window !== "undefined") {
      return "";
    }
    return (
      process.env.NEXT_PUBLIC_APP_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "")
    );
  }

  async fetchFromApi(): Promise<Scholarship[] | null> {
    const baseUrl = this.getApiBaseUrl();
    if (typeof window === "undefined" && !baseUrl) {
      return null;
    }
    try {
      const res = await fetch(`${baseUrl}/api/scholarships`, {
        next: { revalidate: 60 },
      });
      if (!res.ok) return null;
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data as Scholarship[];
      }
      return null;
    } catch {
      return null;
    }
  }

  async fetchScholarshipBySlugFromApi(
    slug: string
  ): Promise<Scholarship | null> {
    const baseUrl = this.getApiBaseUrl();
    if (typeof window === "undefined" && !baseUrl) {
      return null;
    }
    try {
      const res = await fetch(
        `${baseUrl}/api/scholarships/${encodeURIComponent(slug)}`,
        {
          next: { revalidate: 60 },
        }
      );
      if (!res.ok) return null;
      const data = await res.json();
      if (data && typeof data === "object" && "id" in data && "title" in data) {
        return data as Scholarship;
      }
      return null;
    } catch {
      return null;
    }
  }

  async getScholarships(
    filters?: Partial<ScholarshipFilterState>,
    sort: ScholarshipSortOption = "newest"
  ): Promise<Scholarship[]> {
    const apiData = await this.fetchFromApi();
    const sourceData = apiData ?? MOCK_SCHOLARSHIPS;
    return this.filterAndSort(sourceData, filters, sort);
  }

  async getScholarshipBySlug(slug: string): Promise<Scholarship | null> {
    const normalizedSlug = slug.toLowerCase().trim();
    const apiData = await this.fetchScholarshipBySlugFromApi(normalizedSlug);
    if (apiData) return apiData;

    const found = MOCK_SCHOLARSHIPS.find(
      (s) => s.slug.toLowerCase() === normalizedSlug
    );
    return found || null;
  }

  sortScholarships(
    scholarships: Scholarship[],
    sort: ScholarshipSortOption
  ): Scholarship[] {
    const list = [...scholarships];

    switch (sort) {
      case "deadline_soon":
        return list.sort(
          (a, b) =>
            new Date(a.applicationDeadline).getTime() -
            new Date(b.applicationDeadline).getTime()
        );
      case "deadline_later":
        return list.sort(
          (a, b) =>
            new Date(b.applicationDeadline).getTime() -
            new Date(a.applicationDeadline).getTime()
        );
      case "most_applicants":
        return list.sort((a, b) => b.applicantsCount - a.applicantsCount);
      case "highest_amount":
        return list.sort(
          (a, b) => (b.amountNumber || 0) - (a.amountNumber || 0)
        );
      case "alphabetical":
        return list.sort((a, b) => a.title.localeCompare(b.title));
      case "newest":
      default:
        return list.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
  }

  async getFilterMetadata(
    customItems?: Scholarship[]
  ): Promise<ScholarshipFilterMetadata> {
    const source =
      customItems && customItems.length > 0 ? customItems : MOCK_SCHOLARSHIPS;

    const scholarshipTypes = Array.from(
      new Set(source.map((s) => s.scholarshipType))
    ).sort();

    const categories = Array.from(
      new Set(source.map((s) => s.category))
    ).sort();

    const fieldsOfStudySet = new Set<string>();
    source.forEach((s) => {
      s.fieldOfStudy.forEach((field) => fieldsOfStudySet.add(field));
    });
    const fieldsOfStudy = Array.from(fieldsOfStudySet).sort();

    const applicationModes = ["Online", "Offline", "Both"];

    const eligibilities = [
      "All Students",
      "Engineering",
      "Medical",
      "MBA",
      "Science",
      "Arts",
      "Sports",
    ];

    return {
      scholarshipTypes,
      categories,
      fieldsOfStudy,
      applicationModes,
      eligibilities,
      totalCount: source.length,
    };
  }
}

export const scholarshipService = new ScholarshipService();
