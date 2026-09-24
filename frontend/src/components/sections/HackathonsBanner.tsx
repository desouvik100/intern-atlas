import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function HackathonsBanner() {
  return (
    <section
      id="hackathons"
      className="scroll-mt-24 bg-transparent pb-2 pt-0 lg:pb-3"
      aria-label="Hackathons"
    >
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-border bg-[linear-gradient(to_right,var(--color-blue-surface),var(--color-white))] p-6 shadow-card lg:flex-row lg:px-10 lg:py-5 xl:px-12">

          {/* Background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/30 blur-[60px]" />

            <div className="absolute left-[40%] top-[10%] opacity-10">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </div>

            <div className="absolute left-[60%] top-[80%] rotate-45 opacity-10">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </div>

            <div className="absolute left-[35%] top-[70%] -rotate-12 opacity-5">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
              <span className="font-serif font-normal italic text-editorial-red">
                tomorrow.
              </span>
            </h2>

            <p className="mb-8 max-w-[340px] text-[14.5px] leading-relaxed text-text-secondary">
              Turn your ideas into impact. Join hackathons,
              work with amazing peers, and solve real-world problems.
            </p>

            <Link
              href="/hackathons"
              className="inline-flex h-10 w-max items-center rounded-lg bg-blue-600 px-6 text-[13px] font-semibold text-white transition hover:bg-blue-700"
            >
              Explore hackathons
              <ArrowRight
                size={14}
                className="ml-1.5"
              />
            </Link>
          </div>

          {/* Middle decorative section */}
          <div className="relative z-10 hidden w-[300px] shrink-0 items-center justify-center lg:flex">

            <div className="absolute left-1/2 top-[-10px] z-30 flex -translate-x-1/2 flex-col items-center drop-shadow-2xl">
              <div className="relative h-[80px] w-[50px] overflow-hidden rounded-b-[30px] rounded-t-[50px] border border-blue-300 bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_0_40px_rgba(59,130,246,0.6)]">
                <div className="absolute left-1/2 top-4 h-6 w-4 -translate-x-1/2 rounded-full border-2 border-white/40" />

                <div className="absolute left-[30%] top-2 h-[40%] w-[40%] rounded-full bg-white/20 blur-[2px]" />
              </div>

              <div className="h-4 w-6 rounded-t-sm bg-slate-800" />
              <div className="h-2 w-4 rounded-b-md bg-slate-900" />
            </div>

            <div className="relative z-10 mb-[-20px] mt-16 lg:mb-[-20px]">
              <div className="relative h-[120px] w-[200px] overflow-hidden rounded-t-xl border-[4px] border-slate-300 bg-gradient-to-br from-blue-100 to-blue-50 p-1 shadow-inner">
                <div className="absolute inset-0 bg-blue-500/10" />
                <div className="h-full w-full bg-gradient-to-br from-blue-400/20 to-transparent blur-md" />
              </div>

              <div className="-ml-[20px] h-[10px] w-[240px] rounded-b-xl rounded-t-sm bg-slate-400 shadow-lg" />
              <div className="mx-auto h-[4px] w-[60px] rounded-b-md bg-slate-300" />
            </div>

            <div className="absolute left-[-20px] top-[40px] z-40 -rotate-[8deg] rounded-[10px] border border-border bg-white px-4 py-2 shadow-lg">
              <span className="font-hand text-[20px] font-medium leading-none text-primary">
                Innovate
              </span>
            </div>

            <div className="absolute right-[-10px] top-[80px] z-40 rotate-[5deg] rounded-[10px] border border-border bg-white px-4 py-2 shadow-lg">
              <span className="font-hand text-[20px] font-medium leading-none text-primary">
                Collaborate
              </span>
            </div>

            <div className="absolute bottom-[20px] right-0 z-40 -rotate-[5deg] rounded-[10px] border border-border bg-white px-4 py-2 shadow-lg">
              <span className="block text-center font-hand text-[20px] font-medium leading-tight text-primary">
                Create <br /> Impact
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="relative z-10 mt-10 flex w-full flex-col justify-center lg:mt-0 lg:w-[420px] xl:w-[460px]">

            <div className="mb-4 flex items-center justify-end gap-4">
              <Link
                href="/hackathons"
                className="flex items-center gap-1 text-[13px] font-bold text-primary transition-colors hover:text-blue"
              >
                View all hackathons
                <ArrowRight
                  size={14}
                  className="mt-0.5"
                />
              </Link>

              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous hackathons"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-text-secondary shadow-sm transition-colors hover:bg-background"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  type="button"
                  aria-label="Next hackathons"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-text-secondary shadow-sm transition-colors hover:bg-background"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3">

              {/* Row 1 */}
              <div className="flex w-full flex-col gap-3 sm:flex-row">

                <Link
                  href="/hackathons"
                  className="flex flex-[1.2] cursor-pointer flex-col justify-between rounded-md border border-border bg-white p-4 shadow-card transition-all hover:-translate-y-1 hover:border-cyan-light hover:shadow-hover"
                >
                  <div className="relative flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                          fill="#4ADE80"
                        />
                        <path
                          d="M12 6v6l4.25 2.5"
                          stroke="#F97316"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="flex flex-col pr-4">
                      <span className="mb-0.5 text-[13px] font-bold leading-tight text-text-primary">
                        Smart India Hackathon
                      </span>

                      <span className="mb-0.5 text-[11px] text-text-secondary">
                        Government of India
                      </span>

                      <span className="text-[11px] text-text-secondary">
                        Sep 19 – 23, 2025
                      </span>
                    </div>

                    <ChevronRight
                      size={14}
                      className="absolute right-0 top-1 text-blue"
                    />
                  </div>

                  <div className="mt-3 flex gap-1.5">
                    <span className="rounded-full border border-border-light bg-background px-2 py-0.5 text-[10px] font-semibold text-blue">
                      Hardware
                    </span>

                    <span className="rounded-full border border-border-light bg-background px-2 py-0.5 text-[10px] font-semibold text-blue">
                      Software
                    </span>
                  </div>
                </Link>

                <Link
                  href="/hackathons"
                  className="flex flex-1 cursor-pointer flex-col justify-between rounded-md border border-border bg-white p-4 shadow-card transition-all hover:-translate-y-1 hover:border-cyan-light hover:shadow-hover"
                >
                  <div className="relative flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"
                          fill="#00A4EF"
                        />
                        <path
                          d="M11.4 11.4H0V0h11.4v11.4z"
                          fill="#F25022"
                        />
                        <path
                          d="M24 11.4H12.6V0H24v11.4z"
                          fill="#7FBA00"
                        />
                        <path
                          d="M11.4 24H0V12.6h11.4V24z"
                          fill="#00A4EF"
                        />
                        <path
                          d="M24 24H12.6V12.6H24V24z"
                          fill="#FFB900"
                        />
                      </svg>
                    </div>

                    <div className="flex flex-col pr-4">
                      <span className="mb-0.5 text-[13px] font-bold leading-tight text-text-primary">
                        Microsoft Build
                      </span>

                      <span className="mb-0.5 text-[11px] text-text-secondary">
                        Microsoft
                      </span>

                      <span className="text-[11px] text-text-secondary">
                        Oct 10 – 12, 2025
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-end justify-between">
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

              {/* Row 2 */}
              <Link
                href="/hackathons"
                className="flex w-full cursor-pointer items-center justify-between rounded-md border border-border bg-white p-4 shadow-card transition-all hover:-translate-y-1 hover:border-cyan-light hover:shadow-hover"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6366F1]">
                    <span className="text-[16px] font-bold text-white">
                      D
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="mb-0.5 text-[14px] font-bold leading-tight text-text-primary">
                      Devfolio Hackathon
                    </span>

                    <div className="flex items-center gap-2 text-[12px] text-text-secondary">
                      <span>Devfolio</span>
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <span>Oct 17 – 19, 2025</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden gap-1.5 sm:flex">
                    <span className="rounded-full border border-border-light bg-background px-2 py-1 text-[11px] font-semibold text-blue">
                      Web3
                    </span>

                    <span className="rounded-full border border-border-light bg-background px-2 py-1 text-[11px] font-semibold text-blue">
                      Product
                    </span>
                  </div>

                  <ChevronRight
                    size={16}
                    className="text-blue"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}