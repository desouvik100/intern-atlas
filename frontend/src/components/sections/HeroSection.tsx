import { ArrowRight } from "lucide-react";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#FFFFFF_0%,#EFF1F9_68%,#FFE2EB_100%)] pt-0 pb-2 md:pt-0 md:pb-2" aria-label="Hero section">
      {/* Soft background gradients */}
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-surface/50 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-pink-soft/50 blur-3xl" />
      
      <div className="relative mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* ── Left: Text + Actions ──────────────────────────────────── */}
          <div className="flex flex-col z-10">
            <span className="mb-1 text-[12px] sm:text-[13px] font-bold uppercase tracking-widest text-blue">
              FOR INDIA'S NEXT GENERATION
            </span>

            <h1 className="mb-2 text-[clamp(28px,5vw,52px)] font-extrabold leading-[0.95] tracking-[-0.03em] text-primary">
              Real <br className="hidden sm:block" />
              opportunities. <br />
              <span className="font-serif italic font-normal text-editorial-red">A brighter you.</span>
            </h1>

            <p className="mb-3 max-w-[460px] text-[13px] md:text-[14px] leading-tight text-text-secondary">
              Internships, jobs, competitions, scholarships, workshops, college festivals and more — all in one place for India's students.
            </p>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Button className="h-9 w-full sm:w-auto px-5 text-[13px]">
                Get started for free
                <ArrowRight size={14} className="ml-2" />
              </Button>
              <Button variant="outline" className="h-9 w-full sm:w-auto px-5 text-[13px]">
                Explore opportunities
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex">
                {[
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/86.jpg",
                  "https://randomuser.me/api/portraits/women/68.jpg",
                ].map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    alt="Student avatar" 
                    className={`h-7 w-7 rounded-full border-2 border-white object-cover shadow-sm ${i > 0 ? "-ml-2" : ""}`} 
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] font-bold text-text-primary leading-tight">50,000+ students</span>
                <span className="text-[11px] text-text-secondary leading-tight">already exploring opportunities on InternAtlas</span>
              </div>
            </div>
          </div>

          {/* ── Right: Visual Cards ───────────────────────────────────── */}
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
