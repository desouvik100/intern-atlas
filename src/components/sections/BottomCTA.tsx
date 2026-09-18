import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BottomCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1a2d53] border-t border-[#2a3f6a]" aria-label="Call to action">
      
      {/* Main Background Block (The dark stone wall spanning entire screen) */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Brick Texture Full Cover */}
        <svg className="absolute inset-0 h-full w-full opacity-30 mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="realistic-brick-full" width="80" height="40" patternUnits="userSpaceOnUse">
              <rect width="80" height="40" fill="none" stroke="#000000" strokeWidth="2" />
              <line x1="40" y1="20" x2="40" y2="40" stroke="#000000" strokeWidth="2" />
              <line x1="0" y1="20" x2="80" y2="20" stroke="#000000" strokeWidth="2" />
              <line x1="1" y1="1" x2="79" y2="1" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="1" y1="21" x2="39" y2="21" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="41" y1="21" x2="79" y2="21" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#realistic-brick-full)" />
        </svg>

        {/* Gradient mask to fade out the bricks heavily on the left so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2d53] via-[#1a2d53]/80 to-transparent" />

        {/* Volumetric Light casting on the wall from the door */}
        <div className="absolute bottom-0 right-[25%] lg:right-[35%] h-[400px] w-[500px] translate-x-1/2 translate-y-[20%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto flex min-h-[200px] max-w-[1400px] flex-col items-center px-6 md:flex-row">
        
        {/* ── Left Column: Text & Buttons ──────────────────────────── */}
        <div className="relative z-10 flex w-full flex-col items-start justify-center text-left py-10 lg:w-[60%] xl:w-[50%]">
          <span className="mb-2 text-[13px] font-bold uppercase tracking-widest text-blue-400">
            YOUR NEXT CHAPTER STARTS HERE
          </span>
          <h2 className="mb-3 text-[28px] font-bold leading-tight tracking-tight text-white md:text-[34px] lg:text-[38px] whitespace-nowrap">
            Turn your potential <span className="text-cyan-400">into progress.</span>
          </h2>
          <p className="mb-8 max-w-[480px] text-[15px] leading-relaxed text-blue-100/80">
            Join thousands of students discovering opportunities, learning new skills, and building a brighter future.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Button className="h-11 rounded-full px-8 text-[14px] bg-[#497bbf] hover:bg-[#3865a3] text-white border-none shadow-md">
              Create your account <ArrowRight size={16} className="ml-1.5" />
            </Button>
            <Button variant="outline" className="h-11 rounded-full border-white/20 bg-transparent px-8 text-[14px] text-white hover:bg-white/10 hover:border-white/40 hover:text-white transition-all">
              For colleges & employers
            </Button>
          </div>
        </div>

        {/* ── Center-Right: Doorway Graphic ────────────────────────── */}
        <div className="absolute right-[15%] lg:right-[25%] bottom-0 flex h-[280px] w-[200px] items-end justify-center pointer-events-none">
          {/* The Archway Cutout (White Glowing Hole) */}
          <div className="relative h-full w-[170px] rounded-t-[85px] bg-[#e0f2fe] shadow-[0_0_100px_rgba(255,255,255,0.8),inset_0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden border-t-[14px] border-x-[14px] border-[#132240] ring-1 ring-white/10">
            
            {/* Intense Light Core */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,1)_0%,rgba(255,255,255,0.8)_40%,rgba(186,230,253,0.2)_100%)]" />

            {/* Stairs inside the archway (Approximating the spiral steps) */}
            <div className="absolute bottom-0 right-[-10px] flex flex-col items-end">
              {/* Step 5 (Top) */}
              <div className="relative h-[22px] w-[60px] bg-gradient-to-r from-blue-300/40 to-blue-100/90 shadow-[0_-2px_10px_rgba(0,0,0,0.15)] rounded-l-full border-t border-white/80" />
              {/* Step 4 */}
              <div className="relative h-[22px] w-[85px] bg-gradient-to-r from-blue-300/50 to-blue-200/90 shadow-[0_-2px_10px_rgba(0,0,0,0.15)] rounded-l-full border-t border-white/70" />
              {/* Step 3 */}
              <div className="relative h-[22px] w-[110px] bg-gradient-to-r from-blue-400/50 to-blue-200/90 shadow-[0_-2px_10px_rgba(0,0,0,0.2)] rounded-l-full border-t border-white/60" />
              {/* Step 2 */}
              <div className="relative h-[22px] w-[135px] bg-gradient-to-r from-blue-400/60 to-blue-300/90 shadow-[0_-2px_10px_rgba(0,0,0,0.2)] rounded-l-full border-t border-white/50" />
              {/* Step 1 (Bottom) */}
              <div className="relative h-[30px] w-[170px] bg-gradient-to-r from-blue-500/60 to-blue-300/90 shadow-[0_-2px_10px_rgba(0,0,0,0.25)] border-t border-white/40" />
            </div>
            
            {/* Blinding Light overlay on left edge of stairs */}
            <div className="absolute top-[30%] left-[-20px] h-[150px] w-[150px] rounded-full bg-white blur-[25px]" />
          </div>

          {/* Light spill on the floor in front of the door */}
          <div className="absolute bottom-0 h-[20px] w-[260px] rounded-[100%] bg-white blur-[15px]" />
          <div className="absolute bottom-[-15px] h-[40px] w-[350px] rounded-[100%] bg-blue-400/40 blur-[25px]" />
          <div className="absolute bottom-[-20px] h-[60px] w-[450px] rounded-[100%] bg-blue-600/30 blur-[40px]" />
        </div>

        {/* ── Far-Right: Handwriting Text ──────────────────────────── */}
        <div className="absolute right-0 lg:-right-4 xl:-right-8 top-[30%] z-30 -rotate-[6deg] hidden md:flex flex-col items-start drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          <span className="font-hand text-white text-[24px] lg:text-[28px] leading-tight font-medium">
            Curious minds. <br />
            Brighter tomorrows.
          </span>
          <svg width="120" height="20" viewBox="0 0 140 24" fill="none" className="mt-1 ml-2">
            <path d="M5 5 Q 40 0, 130 5" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
            <path d="M25 15 Q 70 11, 115 15" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          </svg>
        </div>

      </div>
    </section>
  );
}

