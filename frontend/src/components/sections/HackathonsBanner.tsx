import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HackathonsBanner() {
  return (
    <section
      id="hackathons"
      className="scroll-mt-24 bg-transparent pt-0 pb-2 lg:pb-3"
      aria-label="Hackathons"
    >
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="relative flex flex-col justify-between overflow-hidden rounded-[20px] bg-[linear-gradient(to_right,var(--color-blue-surface),var(--color-white))] p-6 lg:py-5 lg:px-10 lg:flex-row xl:px-12 border border-border shadow-card">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/30 blur-[60px]" />

            <div className="absolute left-[40%] top-[10%] opacity-10">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </div>
          </div>

          {/* Left */}
          <div className="relative z-10 flex w-full max-w-[360px] flex-col justify-center">
            <span className="mb-3 text-[18px] font-bold uppercase tracking-widest text-cyan">
              HACKATHONS
            </span>

            <h2 className="mb-4 text-[34px] font-extrabold leading-[1.1] tracking-tight text-primary md:text-[38px]">
              Build today <br />
              for a brighter{" "}
              <span className="font-serif italic font-normal text-editorial-red">
                tomorrow.
              </span>
            </h2>

            <p className="mb-8 text-[14.5px] leading-relaxed text-text-secondary max-w-[340px]">
              Turn your ideas into impact. Join hackathons, work with amazing
              peers, and solve real-world problems.
            </p>

            <Button asChild className="w-max px-6 h-10 text-[13px]">
              <Link href="/hackathons">
                Explore hackathons
                <ArrowRight size={14} className="ml-1.5" />
              </Link>
            </Button>
          </div>

          {/* Middle */}
          <div className="relative z-10 hidden w-[300px] shrink-0 lg:flex items-center justify-center">
            <div className="absolute top-[-10px] left-1/2 z-30 -translate-x-1/2 flex flex-col items-center drop-shadow-2xl">
              <div className="h-[80px] w-[50px] rounded-t-[50px] rounded-b-[30px] bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_0_40px_rgba(59,130,246,0.6)] border border-blue-300 relative overflow-hidden">
                <div className="absolute left-1/2 top-4 w-4 h-6 border-2 border-white/40 rounded-full -translate-x-1/2" />
                <div className="absolute left-[30%] top-2 w-[40%] h-[40%] bg-white/20 rounded-full blur-[2px]" />
              </div>

              <div className="h-4 w-6 bg-slate-800 rounded-t-sm" />
              <div className="h-2 w-4 bg-slate-900 rounded-b-md" />
            </div>

            <div className="relative mb-[-20px] lg:mb-[-20px] mt-16 z-10">
              <div className="h-[120px] w-[200px] rounded-t-xl border-[4px] border-slate-300 bg-gradient-to-br from-blue-100 to-blue-50 p-1 shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10" />
                <div className="h-full w-full bg-gradient-to-br from-blue-400/20 to-transparent blur-md" />
              </div>

              <div className="h-[10px] w-[240px] -ml-[20px] rounded-b-xl rounded-t-sm bg-slate-400 shadow-lg" />
              <div className="h-[4px] w-[60px] mx-auto bg-slate-300 rounded-b-md" />
            </div>

            <div className="absolute left-[-20px] top-[40px] z-40 rotate-[-8deg] rounded-[10px] bg-white px-4 py-2 shadow-lg border border-border">
              <span className="font-hand text-primary text-[20px] font-medium leading-none">
                Innovate
              </span>
            </div>

            <div className="absolute right-[-10px] top-[80px] z-40 rotate-[5deg] rounded-[10px] bg-white px-4 py-2 shadow-lg border border-border">
              <span className="font-hand text-primary text-[20px] font-medium leading-none">
                Collaborate
              </span>
            </div>

            <div className="absolute right-[0px] bottom-[20px] z-40 rotate-[-5deg] rounded-[10px] bg-white px-4 py-2 shadow-lg border border-border">
              <span className="font-hand text-primary text-[20px] font-medium leading-tight block text-center">
                Create <br /> Impact
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="relative z-10 mt-10 flex w-full flex-col justify-center lg:mt-0 lg:w-[420px] xl:w-[460px]">
            <div className="mb-4 flex items-center justify-end gap-4">
              <Link
                href="/hackathons"
                className="text-primary font-bold text-[13px] flex items-center gap-1 cursor-pointer hover:text-blue transition-colors"
              >
                View all hackathons
                <ArrowRight size={14} className="mt-0.5" />
              </Link>

              <div className="flex gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-text-secondary hover:bg-background transition-colors shadow-sm">
                  <ChevronLeft size={16} />
                </button>

                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-text-secondary hover:bg-background transition-colors shadow-sm">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                {/* SIH */}
                <Link
                  href="/hackathons"
                  className="flex flex-col justify-between rounded-md bg-white p-4 shadow-card border border-border flex-[1.2] cursor-pointer hover:shadow-hover hover:border-cyan-light transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3 relative">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                          fill="#4ADE80"
                        />
                        <path
                          d="M12 6v6l4.25 2.5"
                          stroke="#F97316"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    <div className="flex flex-col pr-4">
                      <span className="text-[13px] font-bold text-text-primary leading-tight mb-0.5">
                        Smart India Hackathon
                      </span>

                      <span className="text-[11px] text-text-secondary mb-0.5">
                        Government of India
                      </span>

                      <span className="text-[11px] text-text-secondary">
                        Sep 19 – 23, 2025
                      </span>
                    </div>

                    <ChevronRight
                      size={14}
                      className="text-blue absolute right-0 top-1"
                    />
                  </div>

                  <div className="flex gap-1.5 mt-3">
                    <span className="rounded-full border border-border-light bg-background px-2 py-0.5 text-[10px] font-semibold text-blue">
                      Hardware
                    </span>

                    <span className="rounded-full border border-border-light bg-background px-2 py-0.5 text-[10px] font-semibold text-blue">
                      Software
                    </span>
                  </div>
                </Link>

                {/* Microsoft */}
                <Link
                  href="/hackathons"
                  className="flex flex-col justify-between rounded-md bg-white p-4 shadow-card border border-border flex-1 cursor-pointer hover:shadow-hover hover:border-cyan-light transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3 relative">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                      <span className="text-[20px] font-bold text-[#00A4EF]">
                        M
                      </span>
                    </div>

                    <div className="flex flex-col pr-4">
                      <span className="text-[13px] font-bold text-text-primary leading-tight mb-0.5">
                        Microsoft Build
                      </span>

                      <span className="text-[11px] text-text-secondary mb-0.5">
                        Microsoft
                      </span>

                      <span className="text-[11px] text-text-secondary">
                        Oct 10 – 12, 2025
                      </span>
                    </div>
                  </div>

                  <div className="flex items-end justify-between mt-3">
                    <div className="flex gap-1.5">
                      <span className="rounded-full border border-border-light bg-background px-2 py-0.5 text-[10px] font-semibold text-blue">
                        AI/ML
                      </span>

                      <span className="rounded-full border border-border-light bg-background px-2 py-0.5 text-[10px] font-semibold text-blue">
                        Cloud
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Devfolio */}
              <Link
                href="/hackathons"
                className="flex items-center justify-between rounded-md bg-white p-4 shadow-card border border-border w-full cursor-pointer hover:shadow-hover hover:border-cyan-light transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6366F1]">
                    <span className="text-white font-bold text-[16px]">D</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-text-primary leading-tight mb-0.5">
                      Devfolio Hackathon
                    </span>

                    <div className="flex items-center gap-2 text-[12px] text-text-secondary">
                      <span>Devfolio</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>Oct 17 – 19, 2025</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex gap-1.5">
                    <span className="rounded-full border border-border-light bg-background px-2 py-1 text-[11px] font-semibold text-blue">
                      Web3
                    </span>

                    <span className="rounded-full border border-border-light bg-background px-2 py-1 text-[11px] font-semibold text-blue">
                      Product
                    </span>
                  </div>

                  <ChevronRight size={16} className="text-blue" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}