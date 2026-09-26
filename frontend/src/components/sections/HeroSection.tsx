import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

import { HeroVisual } from "@/components/ui/HeroVisual";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(135deg,#FFFFFF_0%,#EFF1F9_68%,#FFE2EB_100%)] py-12"
      aria-label="Hero section"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-[1100px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              For India&apos;s next generation
            </span>

            <h1 className="mt-3 text-[clamp(34px,5vw,54px)] font-extrabold leading-[1] tracking-[-0.04em] text-[#071c46]">
              Find opportunities.
              <br />
              Build your{" "}
              <span className="font-serif font-normal italic text-[#c63845]">
                future.
              </span>
            </h1>

            <p className="mt-5 max-w-[500px] text-sm leading-6 text-slate-600">
              Discover internships, review complete role details and apply
              through one simple student-friendly flow.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="h-11 px-6">
                <Link href="/internships">
                  Explore internships
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-11 px-6">
                <Link href="/internships">
                  <Search size={16} className="mr-2" />
                  Search opportunities
                </Link>
              </Button>
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}