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
      className="bg-transparent pb-8 pt-4 lg:pb-10 lg:pt-6"
      aria-label="Explore by category"
    >
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="relative flex items-center gap-4 lg:gap-8">
          <div className="-mt-4 flex min-w-0 flex-1 snap-x snap-mandatory gap-[12px] overflow-x-auto py-4 pr-10 scrollbar-none lg:snap-none lg:pr-0 xl:gap-[18px]">
            {categories.map((cat) => (
              <div key={cat.id} className="shrink-0 snap-start">
                <CategoryCard
                  category={cat}
                  className="h-[150px] w-[138px] xl:w-[150px]"
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

        <div className="mt-5 border-t border-border-light pt-5">
          <p className="max-w-2xl text-[14px] leading-relaxed text-text-secondary">
            Explore internships, competitions, hackathons, events, contests and quizzes from one place.
          </p>
        </div>
      </div>
    </section>
  );
}