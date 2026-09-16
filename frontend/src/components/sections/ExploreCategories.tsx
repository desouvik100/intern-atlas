import { CategoryCard } from "@/components/ui/CategoryCard";
import { ChevronRight, Layers, Users, LifeBuoy, Landmark } from "lucide-react";
import type { Category } from "@/lib/types";

interface ExploreCategoriesProps {
  categories: Category[];
}

export function ExploreCategories({ categories }: ExploreCategoriesProps) {
  return (
    <section className="bg-transparent pt-4 pb-6 lg:pt-6 lg:pb-10" aria-label="Explore by category">
      <div className="mx-auto max-w-[1400px] px-6">
        
        {/* Categories Row */}
        <div className="relative flex items-center gap-4 lg:gap-8">
          <div className="flex gap-[12px] xl:gap-[18px] w-full overflow-x-auto lg:overflow-visible -mt-4 py-4 scrollbar-none snap-x lg:snap-none snap-mandatory pr-10 lg:pr-0">
            {categories.map((cat) => (
              <div key={cat.id} className="snap-start shrink-0">
                <CategoryCard category={cat} className="h-[150px] w-[138px] xl:w-[150px]" />
              </div>
            ))}
          </div>
          
          {/* Scroll Button */}
          <div className="hidden z-10 shrink-0 lg:flex items-center justify-center h-[52px] w-[52px] rounded-full border border-border bg-white shadow-sm cursor-pointer hover:bg-background transition-colors">
            <ChevronRight size={24} className="text-primary" strokeWidth={2.5} />
          </div>
        </div>

        {/* Stats Section (No white box, directly on background) */}
        <div className="mt-3 flex flex-col gap-4 border-t border-border-light pt-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col mb-4 lg:mb-0 text-primary shrink-0">
            <span className="text-[16px] lg:text-[18px] font-bold text-left">A growing community</span>
            <span className="text-[16px] lg:text-[18px] font-medium text-left text-text-secondary">of ambitious students.</span>
          </div>

          <div className="grid grid-cols-2 gap-y-8 gap-x-4 sm:flex sm:flex-row sm:items-center sm:justify-between lg:flex-1 lg:pl-12 xl:pl-24">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-3 lg:gap-4">
              <Layers size={36} strokeWidth={1.5} className="text-primary" />
              <div className="flex flex-col">
                <span className="text-[18px] lg:text-[22px] font-bold text-primary leading-none mb-1.5">50K+</span>
                <span className="text-[13px] lg:text-[14px] font-medium text-text-secondary leading-none">Opportunities</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3 lg:gap-4">
              <Users size={36} strokeWidth={1.5} className="text-primary" />
              <div className="flex flex-col">
                <span className="text-[18px] lg:text-[22px] font-bold text-primary leading-none mb-1.5">10K+</span>
                <span className="text-[13px] lg:text-[14px] font-medium text-text-secondary leading-none">Hiring Partners</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3 lg:gap-4">
              <LifeBuoy size={36} strokeWidth={1.5} className="text-primary" />
              <div className="flex flex-col">
                <span className="text-[18px] lg:text-[22px] font-bold text-primary leading-none mb-1.5">5M+</span>
                <span className="text-[13px] lg:text-[14px] font-medium text-text-secondary leading-none">Students</span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3 lg:gap-4">
              <Landmark size={36} strokeWidth={1.5} className="text-primary" />
              <div className="flex flex-col">
                <span className="text-[18px] lg:text-[22px] font-bold text-primary leading-none mb-1.5">1K+</span>
                <span className="text-[13px] lg:text-[14px] font-medium text-text-secondary leading-none">Colleges</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
