import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const competitions = [
  {
    title: "Unstop Design Challenge 2025",
    org: "Unstop",
    date: "Oct 5 – Nov 2, 2025",
    logo: (
      <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#1C4ED8]">
        <span className="text-[14px] font-bold leading-none tracking-tighter text-white">
          un
        </span>
      </div>
    ),
  },
  {
    title: "Google Solution Challenge",
    org: "Google",
    date: "Oct 20 – Dec 10, 2025",
    logo: (
      <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "Adobe Creative Jam",
    org: "Adobe",
    date: "Oct 12 – Nov 15, 2025",
    logo: (
      <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[14px] bg-[#FF0000]">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.92 2.5H23V21.5L14.92 2.5Z" fill="white" />
          <path d="M9.08 2.5H1V21.5L9.08 2.5Z" fill="white" />
          <path
            d="M12 9.5L15.65 18.5H12L10.5 15H7.5L12 9.5Z"
            fill="white"
          />
        </svg>
      </div>
    ),
  },
];

export function CompetitionsBanner() {
  return (
    <section
      id="competitions"
      className="scroll-mt-24 bg-transparent pb-2 pt-0 lg:pb-3"
      aria-label="Competitions"
    >
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="relative flex flex-col justify-between overflow-hidden rounded-[20px] bg-deep-navy p-6 lg:flex-row lg:px-10 lg:py-5 xl:px-12">

          {/* Decorative background */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[50%] overflow-hidden opacity-80 mix-blend-screen">
            <div className="absolute right-[-10%] top-[-20%] h-[300px] w-[300px] rotate-12 bg-gradient-to-br from-blue/20 to-transparent blur-2xl" />

            <div className="absolute bottom-[-20%] right-[10%] h-[400px] w-[200px] -rotate-12 bg-gradient-to-t from-blue/40 to-transparent blur-3xl" />

            <div className="absolute bottom-0 right-[20%] h-[150px] w-[150px] rotate-45 bg-blue/20 backdrop-blur-md" />

            <div className="absolute bottom-[20%] right-[5%] h-[200px] w-[200px] rotate-12 border border-blue/20 bg-blue/10 backdrop-blur-sm" />

            <div className="absolute right-[30%] top-[10%] h-[100px] w-[100px] rotate-45 bg-cyan/10 blur-xl" />
          </div>

          {/* Left */}
          <div className="relative z-10 flex w-full max-w-[400px] flex-col justify-center">
            <span className="mb-3 text-[18px] font-bold uppercase tracking-widest text-cyan">
              COMPETITIONS
            </span>

            <h2 className="mb-4 text-[32px] font-bold leading-[1.2] tracking-tight text-white md:text-[36px]">
              Competitions to showcase <br />
              <span className="text-cyan">
                your skills.
              </span>
            </h2>

            <p className="mb-8 max-w-[320px] text-[14px] leading-relaxed text-border opacity-90">
              From case challenges to ideathons — showcase your skills,
              win exciting rewards, and get noticed by top companies.
            </p>

            <Link
              href="/competitions"
              className="inline-flex h-10 w-max items-center rounded-lg bg-blue-600 px-6 text-[13px] font-semibold text-white transition hover:bg-blue-700"
            >
              Explore competitions
              <ArrowRight
                size={14}
                className="ml-1.5"
              />
            </Link>
          </div>

          {/* Middle decorative phone */}
          <div className="relative z-10 hidden w-[280px] shrink-0 items-center justify-center lg:flex">
            <div className="relative mb-[-20px] h-[340px] w-[200px] rounded-t-[28px] bg-gradient-to-br from-[#497BBF] via-[#2A4B8D] to-[#122146] p-[2px] shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-t-[26px] border border-black/40 bg-[#11203E]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F] via-[#1C3A62] to-[#11203E]" />

                <div className="absolute left-1/2 top-0 flex h-[20px] w-[80px] -translate-x-1/2 justify-center rounded-b-[10px] bg-[#0E1A33]">
                  <div className="absolute top-1/2 h-[3px] w-[20px] -translate-y-1/2 rounded-full bg-black/60" />
                </div>

                <div className="relative flex h-full flex-col items-center justify-center">
                  <span className="text-[22px] font-extrabold leading-[1.6] tracking-wide text-white">
                    Solve <br />
                    Build <br />
                    Present <br />
                    Win
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative z-10 mt-10 flex w-full flex-col justify-center lg:mt-0 lg:w-[360px] xl:w-[400px]">
            <div className="mb-4 flex items-center justify-end gap-6">

              <Link
                href="/competitions"
                className="flex items-center gap-1 text-[13px] font-medium text-white transition-colors hover:text-blue-200"
              >
                View all competitions
                <ArrowRight
                  size={14}
                  className="mt-0.5"
                />
              </Link>

              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous competitions"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-deep-navy text-white transition-colors hover:bg-white/10"
                >
                  <ChevronLeft size={14} />
                </button>

                <button
                  type="button"
                  aria-label="Next competitions"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-deep-navy text-white transition-colors hover:bg-white/10"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Every card clickable */}
            <div className="flex flex-col gap-4">
              {competitions.map((competition) => (
                <Link
                  key={competition.title}
                  href="/competitions"
                  aria-label={`View ${competition.title}`}
                  className="flex cursor-pointer items-center justify-between rounded-md border border-border bg-white p-4 shadow-card transition-all hover:-translate-y-1 hover:border-cyan-light hover:shadow-hover"
                >
                  <div className="flex items-start gap-4">
                    {competition.logo}

                    <div className="flex flex-col justify-center">
                      <span className="mb-0.5 text-[14px] font-bold leading-tight text-text-primary">
                        {competition.title}
                      </span>

                      <span className="text-[12px] font-medium leading-snug text-text-secondary">
                        {competition.org}
                      </span>

                      <span className="text-[12px] font-medium leading-snug text-text-secondary">
                        {competition.date}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    size={16}
                    className="mr-1 shrink-0 text-blue"
                    strokeWidth={2.5}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}