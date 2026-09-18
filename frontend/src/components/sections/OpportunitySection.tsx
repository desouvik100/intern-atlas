"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { OpportunityCard } from "@/components/ui/OpportunityCard";
import type { Opportunity } from "@/lib/types";
import { cn } from "@/lib/utils";

type OpportunitySectionProps = {
  eyebrow: string;
  title: string;
  highlightText?: string;
  opportunities: Opportunity[];
  viewAllLabel: string;
  viewAllHref?: string;
  bgWhite?: boolean;
};

export function OpportunitySection({
  eyebrow,
  title,
  highlightText,
  opportunities,
  viewAllLabel,
  viewAllHref,
  bgWhite = false,
}: OpportunitySectionProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const resolvedViewAllHref =
    viewAllHref ??
    (opportunities[0]?.type === "internship"
      ? "/internships"
      : "#jobs");

  function scrollCards(direction: "left" | "right") {
    sliderRef.current?.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  }

  return (
    <section
      className={cn(
        "py-14 lg:py-16",
        bgWhite ? "bg-white" : "bg-background",
      )}
    >
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue">
              {eyebrow}
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-[42px]">
              {title}{" "}
              {highlightText ? (
                <span className="font-serif font-normal italic text-editorial-red">
                  {highlightText}
                </span>
              ) : null}
            </h2>
          </div>

          <div className="hidden shrink-0 items-center gap-4 sm:flex">
            <Link
              href={resolvedViewAllHref}
              className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-blue"
            >
              {viewAllLabel}
              <ArrowRight size={19} />
            </Link>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollCards("left")}
                aria-label="Scroll opportunities left"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-cyan-light hover:bg-background"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={() => scrollCards("right")}
                aria-label="Scroll opportunities right"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-cyan-light hover:bg-background"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative -mx-6 px-6 lg:mx-0 lg:px-0">
          <div
            ref={sliderRef}
            className="-mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto py-4 scrollbar-none lg:gap-5"
          >
            {opportunities.map((opportunity) =>
              opportunity.href ? (
                <Link
                  key={opportunity.id}
                  href={opportunity.href}
                  className="shrink-0 snap-start rounded-[20px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <OpportunityCard
                    opportunity={opportunity}
                    className="w-[260px] lg:w-[254px]"
                  />
                </Link>
              ) : (
                <div
                  key={opportunity.id}
                  className="shrink-0 snap-start"
                >
                  <OpportunityCard
                    opportunity={opportunity}
                    className="w-[260px] lg:w-[254px]"
                  />
                </div>
              ),
            )}
          </div>

          <div
            className={cn(
              "pointer-events-none absolute bottom-4 right-0 top-0 w-16 bg-gradient-to-l to-transparent lg:hidden",
              bgWhite ? "from-white" : "from-background",
            )}
          />
        </div>

        <Link
          href={resolvedViewAllHref}
          className="mt-5 inline-flex items-center gap-2 font-semibold text-primary sm:hidden"
        >
          {viewAllLabel}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}