import { CategoryCard } from "@/components/ui/CategoryCard";
import { ChevronRight } from "lucide-react";
import type { Category } from "@/lib/types";

interface ExploreCategoriesProps {
  categories: Category[];
}

export function ExploreCategories({
  categories,
}: ExploreCategoriesProps) {
  return (
    <section
      className="bg-transparent pb-12 pt-8 lg:pb-12 lg:pt-10"
      aria-label="Explore by category"
    >
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="relative flex items-center justify-between gap-4 lg:gap-8">
          <div className="-mt-4 flex min-w-0 flex-1 snap-x snap-mandatory gap-[12px] overflow-x-auto py-4 pr-10 scrollbar-none lg:snap-none lg:overflow-x-visible lg:pr-0 xl:gap-[16px]">
            {categories.map((cat) => (
              <div key={cat.id} className="shrink-0 snap-start lg:shrink lg:flex-1">
                <CategoryCard
                  category={cat}
                  className="h-[140px] w-[138px] lg:w-full lg:px-2"
                />
              </div>
            ))}
          </div>

          <div className="z-10 hidden h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-colors hover:bg-background lg:flex">
            <ChevronRight
              size={24}
              className="text-primary"
              strokeWidth={2.5}
            />
          </div>
        </div>

          <div className="mt-6 flex w-full flex-col gap-6 lg:mt-8 lg:flex-row lg:items-center lg:justify-between">
            
            <p className="text-[14px] font-bold leading-snug text-primary w-max">
              A growing community <br className="hidden sm:block" /> of ambitious students.
            </p>
            
            <div className="flex items-center gap-3 shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#1e293b]">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <path d="M12 22V12" />
                <path d="M3.3 7l8.7 5" />
                <path d="M20.7 7l-8.7 5" />
                <path d="M12 7v3" />
                <path d="M10.5 8.5h3" />
              </svg>
              <div className="flex flex-col items-start leading-[1.1] text-primary">
                <span className="text-[15px] font-bold">50K+</span>
                <span className="text-[12px] font-normal text-text-muted mt-1">Opportunities</span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#1e293b]">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div className="flex flex-col items-start leading-[1.1] text-primary">
                <span className="text-[15px] font-bold">10K+</span>
                <span className="text-[12px] font-normal text-text-muted mt-1">Hiring Partners</span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#1e293b]">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <circle cx="12" cy="10" r="3" />
                <path d="M12 13l-1.5 4h3l-1.5-4z" />
              </svg>
              <div className="flex flex-col items-start leading-[1.1] text-primary">
                <span className="text-[15px] font-bold">5M+</span>
                <span className="text-[12px] font-normal text-text-muted mt-1">Students</span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#1e293b]">
                <path d="M3 21h18" />
                <path d="M3 10h18" />
                <path d="M5 6l7-3 7 3" />
                <path d="M4 10v11" />
                <path d="M20 10v11" />
                <path d="M8 14v3" />
                <path d="M12 14v3" />
                <path d="M16 14v3" />
              </svg>
              <div className="flex flex-col items-start leading-[1.1] text-primary">
                <span className="text-[15px] font-bold">1K+</span>
                <span className="text-[12px] font-normal text-text-muted mt-1">Colleges</span>
              </div>
            </div>

          </div>
        </div>
    </section>
  );
}