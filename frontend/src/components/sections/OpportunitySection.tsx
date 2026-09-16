import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { OpportunityCard } from "@/components/ui/OpportunityCard";
import type { Opportunity } from "@/lib/types";
import { cn } from "@/lib/utils";

interface OpportunitySectionProps {
  eyebrow: string;
  title: string;
  highlightText?: string;
  opportunities: Opportunity[];
  viewAllLink?: string;
  viewAllLabel?: string;
  bgWhite?: boolean;
}

export function OpportunitySection({
  eyebrow,
  title,
  highlightText,
  opportunities,
  viewAllLink = "#",
  viewAllLabel = "View all",
  bgWhite = true,
}: OpportunitySectionProps) {
  return (
    <section className={cn("pt-2 lg:pt-3 pb-0", bgWhite ? "bg-white" : "bg-transparent")} aria-label={title}>
      <div className="mx-auto max-w-[1400px] px-6">
        
        {/* Header */}
        <div className="mb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col">
            <span className="mb-2 text-[18px] font-bold uppercase tracking-widest text-blue">
              {eyebrow}
            </span>
            <h2 className="text-[28px] md:text-[32px] tracking-tight font-extrabold text-primary leading-tight">
              {title} {highlightText && <span className="font-serif italic font-normal text-editorial-red">{highlightText}</span>}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link href={viewAllLink} className="hidden sm:flex items-center gap-1.5 text-[14px] font-bold text-blue hover:text-blue-hover">
              {viewAllLabel} <ArrowRight size={16} />
            </Link>
            <div className="flex items-center gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted hover:border-cyan-light hover:bg-background transition-colors">
                <ChevronLeft size={18} />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary hover:border-cyan-light hover:bg-background transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div className="relative -mx-6 px-6 lg:mx-0 lg:px-0">
          <div className="flex gap-4 lg:gap-5 overflow-x-auto -mt-4 py-4 scrollbar-none snap-x snap-mandatory">
            {opportunities.map((opp) => (
              <div key={opp.id} className="snap-start shrink-0">
                <OpportunityCard opportunity={opp} className="w-[260px] lg:w-[254px]" />
              </div>
            ))}
          </div>
          {/* Fade hint - hidden on large screens since 5 cards fit perfectly */}
          <div className={cn("pointer-events-none absolute bottom-4 right-0 top-0 w-16 bg-gradient-to-l to-transparent lg:hidden", bgWhite ? "from-white" : "from-background")} />
        </div>

      </div>
    </section>
  );
}
