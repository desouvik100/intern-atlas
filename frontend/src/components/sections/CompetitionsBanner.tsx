import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CompetitionsBanner() {
  return (
    <section className="pt-0 pb-2 lg:pb-3 bg-transparent" aria-label="Competitions">
      <div className="mx-auto max-w-[1400px] px-6">
        
        {/* Banner Container */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-[20px] bg-deep-navy p-6 lg:py-5 lg:px-10 lg:flex-row xl:px-12">
          
          {/* Abstract Geometric Background (Right Side) */}
          <div className="absolute right-0 top-0 h-full w-[50%] pointer-events-none opacity-80 mix-blend-screen overflow-hidden">
            <div className="absolute right-[-10%] top-[-20%] h-[300px] w-[300px] rotate-12 bg-gradient-to-br from-blue/20 to-transparent blur-2xl" />
            <div className="absolute bottom-[-20%] right-[10%] h-[400px] w-[200px] -rotate-12 bg-gradient-to-t from-blue/40 to-transparent blur-3xl" />
            {/* Some sharper geometric shapes */}
            <div className="absolute bottom-0 right-[20%] h-[150px] w-[150px] rotate-45 bg-blue/20 backdrop-blur-md" />
            <div className="absolute bottom-[20%] right-[5%] h-[200px] w-[200px] rotate-12 bg-blue/10 backdrop-blur-sm border border-blue/20" />
            <div className="absolute top-[10%] right-[30%] h-[100px] w-[100px] rotate-45 bg-cyan/10 blur-xl" />
          </div>
          
          {/* ── Left Column: Text & CTA ──────────────────────────────── */}
          <div className="relative z-10 flex w-full max-w-[400px] flex-col justify-center">
            <span className="mb-3 text-[18px] font-bold uppercase tracking-widest text-cyan">
              COMPETITIONS
            </span>
            <h2 className="mb-4 text-[32px] font-bold leading-[1.2] tracking-tight text-white md:text-[36px]">
              Competitions to showcase <br />
              <span className="text-cyan">your skills.</span>
            </h2>
            <p className="mb-8 text-[14px] leading-relaxed text-border opacity-90 max-w-[320px]">
              From case challenges to ideathons — showcase your skills, win exciting rewards, and get noticed by top companies.
            </p>
            <Button className="w-max px-6 h-10 text-[13px]">
              Explore competitions <ArrowRight size={14} className="ml-1.5" />
            </Button>
          </div>

          {/* ── Middle Column: Phone Mockup ──────────────────────────── */}
          <div className="relative z-10 hidden w-[280px] shrink-0 lg:flex items-center justify-center">
            
            {/* 3D Geometric Background Structures */}
            <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
              
              {/* Left structure */}
              <div className="absolute bottom-0 left-[0px] flex items-end">
                {/* Front face */}
                <div className="h-[120px] w-[50px] bg-gradient-to-t from-[#0d3478] to-[#2563eb] opacity-80" />
                {/* Right face */}
                <div className="h-[100px] w-[20px] bg-gradient-to-t from-[#082252] to-[#1d4ed8] opacity-90 -skew-y-[30deg] origin-bottom-left" />
                {/* Top face */}
                <div className="absolute bottom-[120px] left-0 h-[20px] w-[50px] bg-[#3b82f6] opacity-60 skew-x-[60deg] origin-bottom-left" />
              </div>

              {/* Left tall spike/line */}
              <div className="absolute bottom-[80px] left-[15px] h-[160px] w-[1px] bg-gradient-to-t from-blue-400/50 to-transparent">
                <div className="absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              </div>

              {/* Right structure large curve */}
              <div className="absolute bottom-0 right-[20px] h-[220px] w-[120px]">
                <div className="absolute bottom-0 right-0 h-full w-full rounded-tl-full bg-gradient-to-bl from-[#3b82f6]/40 to-[#1e3a8a]/80 backdrop-blur-sm border-t border-l border-blue-400/30" />
                {/* Inner darker fold */}
                <div className="absolute bottom-0 right-[40px] h-[180px] w-[80px] rounded-tl-full bg-[#1e40af] opacity-50 border-l border-blue-400/20" />
              </div>

              {/* Right geometric crystal shape */}
              <div className="absolute bottom-0 right-[0px]">
                <div className="h-[80px] w-[40px] bg-[#2563eb] opacity-70" />
                <div className="absolute bottom-[80px] right-0 border-b-[60px] border-l-[40px] border-b-[#2563eb] border-l-transparent opacity-70" />
              </div>

              {/* Right tall lines */}
              <div className="absolute bottom-[100px] right-[40px] h-[180px] w-[1px] bg-gradient-to-t from-blue-400/40 to-transparent">
                <div className="absolute top-[40px] left-0 h-[1px] w-[30px] bg-blue-400/40 rotate-[30deg] origin-left">
                  <div className="absolute right-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-cyan-400/80" />
                </div>
              </div>

            </div>

            {/* The Phone Device */}
            <div className="relative z-10 mb-[-20px] lg:mb-[-20px] h-[340px] w-[200px] rounded-t-[28px] bg-gradient-to-br from-[#497BBF] via-[#2A4B8D] to-[#122146] p-[2px] shadow-2xl">
              
              {/* Inner Bezel */}
              <div className="relative h-full w-full overflow-hidden rounded-t-[26px] bg-[#11203E] border border-black/40">
                
                {/* Screen Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F] via-[#1C3A62] to-[#11203E]">
                  {/* Subtle radial glow */}
                  <div className="absolute top-[20%] left-1/2 h-[150px] w-[150px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-[30px]" />
                </div>

                {/* Starry glowing dots */}
                <div className="absolute top-[80px] left-[30px] h-0.5 w-0.5 rounded-full bg-cyan-300 shadow-[0_0_4px_#67e8f9]" />
                <div className="absolute top-[70px] right-[70px] h-0.5 w-0.5 rounded-full bg-blue-300 shadow-[0_0_4px_#93c5fd]" />
                <div className="absolute top-[160px] right-[30px] h-[3px] w-[3px] rounded-full bg-blue-400/60 blur-[1px]" />
                <div className="absolute bottom-[80px] left-[40px] h-0.5 w-0.5 rounded-full bg-cyan-400 shadow-[0_0_4px_#22d3ee]" />

                {/* The Notch Area */}
                <div className="absolute top-0 left-1/2 flex h-[20px] w-[80px] -translate-x-1/2 justify-center rounded-b-[10px] bg-[#0E1A33] shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
                  {/* Camera hole */}
                  <div className="absolute left-[12px] top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-[#11223A] border border-white/10 flex items-center justify-center">
                    <div className="h-[2px] w-[2px] rounded-full bg-cyan-500/80" />
                  </div>
                  {/* Speaker */}
                  <div className="absolute top-1/2 h-[3px] w-[20px] -translate-y-1/2 rounded-full bg-black/60 border border-white/5" />
                </div>

                {/* Screen Content */}
                <div className="flex h-full flex-col items-center justify-center">
                  <span className="text-[22px] font-extrabold leading-[1.6] tracking-wide text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)]">
                    Solve <br />
                    Build <br />
                    Present <br />
                    Win
                  </span>
                </div>

              </div>

              {/* Side Buttons */}
              <div className="absolute left-[-2px] top-[70px] h-[18px] w-[2px] rounded-l-md bg-[#2A4B8D]" />
              <div className="absolute left-[-2px] top-[100px] h-[30px] w-[2px] rounded-l-md bg-[#2A4B8D]" />
              <div className="absolute right-[-2px] top-[80px] h-[40px] w-[2px] rounded-r-md bg-[#2A4B8D]" />

            </div>
          </div>

          {/* ── Right Column: List ───────────────────────────────────── */}
          <div className="relative z-10 mt-10 flex w-full flex-col justify-center lg:mt-0 lg:w-[360px] xl:w-[400px]">
            
            {/* Header for list */}
            <div className="mb-4 flex items-center justify-end gap-6">
              <span className="text-white font-medium text-[13px] flex items-center gap-1 cursor-pointer hover:text-blue-200 transition-colors">
                View all competitions <ArrowRight size={14} className="mt-0.5" />
              </span>
              <div className="flex gap-2">
                <button className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-deep-navy text-white hover:bg-white/10 transition-colors">
                  <ChevronLeft size={14} />
                </button>
                <button className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-deep-navy text-white hover:bg-white/10 transition-colors">
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-4">
              {[
                { 
                  title: "Unstop Design Challenge 2025", 
                  org: "Unstop", 
                  date: "Oct 5 – Nov 2, 2025", 
                  logo: (
                    <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#1C4ED8]">
                      <span className="text-white font-bold text-[14px] leading-none tracking-tighter">un</span>
                    </div>
                  )
                },
                { 
                  title: "Google Solution Challenge", 
                  org: "Google", 
                  date: "Oct 20 – Dec 10, 2025", 
                  logo: (
                    <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                  )
                },
                { 
                  title: "Adobe Creative Jam", 
                  org: "Adobe", 
                  date: "Oct 12 – Nov 15, 2025", 
                  logo: (
                    <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[14px] bg-[#FF0000]">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.92 2.5H23V21.5L14.92 2.5Z" fill="white"/>
                        <path d="M9.08 2.5H1V21.5L9.08 2.5Z" fill="white"/>
                        <path d="M12 9.5L15.65 18.5H12L10.5 15H7.5L12 9.5Z" fill="white"/>
                      </svg>
                    </div>
                  )
                }
              ].map((comp, i) => (
                <div key={i} className="flex cursor-pointer items-center justify-between rounded-md bg-white p-4 border border-border shadow-card transition-all hover:-translate-y-1 hover:shadow-hover hover:border-cyan-light">
                  <div className="flex items-start gap-4">
                    {comp.logo}
                    <div className="flex flex-col justify-center">
                      <span className="text-[14px] font-bold text-text-primary leading-tight mb-0.5">{comp.title}</span>
                      <span className="text-[12px] font-medium text-text-secondary leading-snug">{comp.org}</span>
                      <span className="text-[12px] font-medium text-text-secondary leading-snug">{comp.date}</span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-blue shrink-0 mr-1" strokeWidth={2.5} />
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
