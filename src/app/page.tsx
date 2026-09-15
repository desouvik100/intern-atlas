import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Bookmark,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  GraduationCap,
  Lightbulb,
  MapPin,
  Megaphone,
  Palette,
  Sparkles,
  Trophy,
  UsersRound,
} from "lucide-react";
import Header from "@/components/Header";

const categories = [
  {
    title: "Internships",
    description: "Gain real-world experience",
    icon: BriefcaseBusiness,
    href: "/internships",
  },
  {
    title: "Jobs",
    description: "Kickstart your career",
    icon: GraduationCap,
    href: "#jobs",
  },
  {
    title: "Competitions",
    description: "Showcase your skills",
    icon: Trophy,
    href: "#competitions",
  },
  {
    title: "Hackathons",
    description: "Build. Solve. Win",
    icon: Code2,
    href: "#hackathons",
  },
  {
    title: "Scholarships",
    description: "Fund your education",
    icon: Award,
    href: "#explore",
  },
  {
    title: "Workshops",
    description: "Learn from experts",
    icon: BookOpen,
    href: "#explore",
  },
  {
    title: "College Festivals",
    description: "Celebrate campus life",
    icon: CalendarDays,
    href: "#explore",
  },
  {
    title: "Cultural Events",
    description: "Express. Perform. Belong",
    icon: UsersRound,
    href: "#explore",
  },
];

const internships = [
  {
    logo: "G",
    color: "text-blue-600",
    title: "Software Engineering Intern",
    company: "Google",
    location: "Bengaluru, India",
    tag: "Engineering",
    posted: "2 days ago",
  },
  {
    logo: "M",
    color: "text-orange-500",
    title: "Product Management Intern",
    company: "Microsoft",
    location: "Hyderabad, India",
    tag: "Product",
    posted: "3 days ago",
  },
  {
    logo: "A",
    color: "text-rose-500",
    title: "Marketing Intern",
    company: "Airbnb",
    location: "Remote - India",
    tag: "Marketing",
    posted: "4 days ago",
  },
  {
    logo: "S",
    color: "text-orange-600",
    title: "Business Operations Intern",
    company: "Swiggy",
    location: "Bengaluru, India",
    tag: "Operations",
    posted: "5 days ago",
  },
  {
    logo: "Z",
    color: "text-red-500",
    title: "Data Analyst Intern",
    company: "Zomato",
    location: "Gurugram, India",
    tag: "Analytics",
    posted: "5 days ago",
  },
];

const jobs = [
  {
    logo: "F",
    title: "Product Associate",
    company: "Flipkart",
    location: "Bengaluru, India",
  },
  {
    logo: "D",
    title: "Business Analyst",
    company: "Deloitte",
    location: "Gurugram, India",
  },
  {
    logo: "R",
    title: "Customer Success",
    company: "Razorpay",
    location: "Bengaluru, India",
  },
  {
    logo: "J",
    title: "Associate - Tech",
    company: "Jio",
    location: "Mumbai, India",
  },
  {
    logo: "O",
    title: "Operations Associate",
    company: "OYO",
    location: "Multiple locations",
  },
];

const exploreItems = [
  {
    title: "Scholarships",
    description: "Fund your dreams",
    icon: Award,
    color: "from-slate-950 to-blue-950",
  },
  {
    title: "Workshops",
    description: "Learn from experts",
    icon: BookOpen,
    color: "from-[#071c46] to-indigo-950",
  },
  {
    title: "College Festivals",
    description: "Be part of campus life",
    icon: CalendarDays,
    color: "from-purple-950 to-pink-950",
  },
  {
    title: "Cultural Events",
    description: "Express. Perform. Belong",
    icon: UsersRound,
    color: "from-slate-950 to-rose-950",
  },
  {
    title: "Study Resources",
    description: "Tools for your growth",
    icon: GraduationCap,
    color: "from-slate-950 to-blue-950",
  },
];

function SectionHeading({
  label,
  title,
  accent,
  link,
}: {
  label: string;
  title: string;
  accent: string;
  link: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-5">
      <div>
        <p className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
          {label}
        </p>

        <h2 className="mt-1 text-2xl font-black text-[#071c46] sm:text-3xl">
          {title}{" "}
          <span className="font-serif italic text-[#c63845]">{accent}</span>
        </h2>
      </div>

      <div className="hidden items-center gap-3 sm:flex">
        <Link
          href="/internships"
          className="flex items-center gap-1 text-sm font-bold hover:text-blue-600"
        >
          {link}
          <ArrowRight size={16} />
        </Link>

        <button
          aria-label="Previous"
          className="flex size-9 items-center justify-center rounded-full border border-blue-200"
        >
          <ChevronLeft size={17} />
        </button>

        <button
          aria-label="Next"
          className="flex size-9 items-center justify-center rounded-full border border-blue-200"
        >
          <ChevronRight size={17} />
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#071c46]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f2f6ff] via-white to-[#fff1f6]">
        <div className="absolute -right-32 top-20 size-96 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute left-1/3 top-10 size-96 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 py-16 lg:grid-cols-2 lg:px-10 lg:py-20">
          <div>
            <p className="text-sm font-black uppercase tracking-wider text-blue-600">
              For India&apos;s next generation
            </p>

            <h1 className="mt-4 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Real
              <br />
              opportunities.
              <br />
              <span className="font-serif italic text-[#c63845]">
                A brighter you.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Internships, jobs, competitions, scholarships, workshops,
              college festivals and more—all in one place for India&apos;s
              students.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/internships"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700"
              >
                Get started for free
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/internships"
                className="rounded-full border border-blue-500 bg-white px-7 py-3.5 text-sm font-bold hover:bg-blue-50"
              >
                Explore opportunities
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["A", "P", "R", "S", "N"].map((letter, index) => (
                  <span
                    key={letter}
                    className={`flex size-10 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white ${
                      [
                        "bg-slate-800",
                        "bg-blue-600",
                        "bg-rose-500",
                        "bg-amber-500",
                        "bg-indigo-500",
                      ][index]
                    }`}
                  >
                    {letter}
                  </span>
                ))}
              </div>

              <div>
                <p className="font-extrabold">50,000+ students</p>
                <p className="text-xs text-slate-500">
                  already exploring opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="relative hidden min-h-[450px] lg:block">
            <p className="absolute left-2 top-20 -rotate-6 font-serif text-2xl italic">
              Explore
              <br />
              opportunities
              <br />
              in your interest.
            </p>

            <div className="absolute left-48 top-0 rotate-3 rounded-3xl bg-white p-7 shadow-xl">
              <Code2 size={42} className="text-blue-600" />
              <p className="mt-3 font-extrabold">AI &amp; ML</p>
            </div>

            <div className="absolute right-8 top-4 -rotate-2 rounded-3xl bg-white p-7 shadow-xl">
              <Database size={42} />
              <p className="mt-3 font-extrabold">Business</p>
            </div>

            <div className="absolute left-24 top-48 -rotate-6 rounded-3xl bg-white p-7 shadow-xl">
              <Palette size={42} className="text-rose-500" />
              <p className="mt-3 font-extrabold">Design</p>
            </div>

            <div className="absolute left-64 top-36 rotate-3 rounded-3xl bg-white p-7 shadow-xl">
              <Building2 size={42} className="text-blue-700" />
              <p className="mt-3 font-extrabold">Data Science</p>
            </div>

            <div className="absolute left-40 top-80 rotate-2 rounded-3xl bg-white p-7 shadow-xl">
              <BriefcaseBusiness size={42} className="text-pink-500" />
              <p className="mt-3 font-extrabold">Product</p>
            </div>

            <div className="absolute right-6 top-64 -rotate-3 rounded-3xl bg-white p-7 shadow-xl">
              <Megaphone size={42} className="text-orange-500" />
              <p className="mt-3 font-extrabold">Sales &amp; Marketing</p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="relative mx-auto max-w-[1440px] px-5 pb-10 lg:px-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.title}
                  href={category.href}
                  className="rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                >
                  <Icon size={25} className="mx-auto text-blue-600" />
                  <p className="mt-3 text-sm font-extrabold">
                    {category.title}
                  </p>
                  <p className="mt-1 text-[11px] leading-4 text-slate-500">
                    {category.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="border-y border-blue-100 bg-[#f5f8ff]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-6 px-5 py-7 sm:grid-cols-3 lg:grid-cols-5 lg:px-10">
          {[
            ["Growing community", "of ambitious students"],
            ["50K+", "Opportunities"],
            ["10K+", "Hiring partners"],
            ["5M+", "Students"],
            ["1K+", "Colleges"],
          ].map(([value, description]) => (
            <div key={value} className="text-center">
              <p className="text-xl font-black">{value}</p>
              <p className="mt-1 text-xs text-slate-500">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internships */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10">
        <SectionHeading
          label="Featured"
          title="Top internships"
          accent="this week."
          link="View all internships"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {internships.map((internship) => (
            <article
              key={internship.title}
              className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <span
                  className={`flex size-11 items-center justify-center rounded-xl bg-slate-50 text-2xl font-black ${internship.color}`}
                >
                  {internship.logo}
                </span>
                <Bookmark size={18} className="text-slate-400" />
              </div>

              <h3 className="mt-5 font-extrabold leading-5">
                {internship.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {internship.company}
              </p>

              <p className="mt-3 flex items-center gap-1 text-xs text-slate-500">
                <MapPin size={13} />
                {internship.location}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-600">
                  Internship
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold">
                  {internship.tag}
                </span>
              </div>

              <p className="mt-5 text-xs text-slate-400">
                {internship.posted}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Competitions */}
      <section
        id="competitions"
        className="mx-auto max-w-[1440px] px-5 pb-7 lg:px-10"
      >
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#06275b] via-[#052d68] to-[#071c46] text-white">
          <div className="grid items-center gap-9 p-8 lg:grid-cols-3 lg:p-10">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">
                Happening now
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Competitions to showcase{" "}
                <span className="text-cyan-300">your skills.</span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-blue-100">
                From case challenges to ideathons—showcase your skills, win
                exciting rewards and get noticed by top companies.
              </p>

              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold">
                Explore competitions
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="flex justify-center">
              <div className="rounded-3xl border border-cyan-400/50 bg-blue-950/60 px-12 py-10 text-center text-3xl font-black leading-tight shadow-2xl">
                Solve
                <br />
                Build
                <br />
                Present
                <br />
                Win
              </div>
            </div>

            <div className="space-y-3">
              {[
                "Unstop Design Challenge 2026",
                "Google Solution Challenge",
                "Adobe Creative Jam",
              ].map((competition) => (
                <div
                  key={competition}
                  className="flex items-center justify-between rounded-xl bg-white p-4 text-[#071c46]"
                >
                  <div className="flex items-center gap-3">
                    <Trophy size={20} className="text-blue-600" />
                    <p className="text-sm font-extrabold">{competition}</p>
                  </div>
                  <ChevronRight size={18} className="text-blue-600" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons */}
      <section
        id="hackathons"
        className="mx-auto max-w-[1440px] px-5 py-7 lg:px-10"
      >
        <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-r from-[#f7faff] to-[#edf5ff]">
          <div className="grid items-center gap-8 p-8 lg:grid-cols-3 lg:p-10">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
                Hackathons
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Build today
                <br />
                for a brighter{" "}
                <span className="font-serif italic text-[#c63845]">
                  tomorrow.
                </span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Turn your ideas into impact. Join hackathons, work with
                amazing peers and solve real-world problems.
              </p>

              <button className="mt-6 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white">
                Explore hackathons →
              </button>
            </div>

            <div className="flex justify-center">
              <div className="relative flex size-56 items-center justify-center rounded-full bg-blue-100">
                <Lightbulb size={100} className="text-blue-600" />

                <span className="absolute left-0 top-24 -rotate-6 rounded-lg bg-white px-4 py-2 text-sm font-bold shadow-lg">
                  Innovate
                </span>

                <span className="absolute right-0 top-12 rotate-6 rounded-lg bg-white px-4 py-2 text-sm font-bold shadow-lg">
                  Collaborate
                </span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Smart India Hackathon",
                "Microsoft Build",
                "Devfolio Hackathon",
                "Open Source Sprint",
              ].map((hackathon) => (
                <div
                  key={hackathon}
                  className="rounded-xl border border-blue-100 bg-white p-4"
                >
                  <Code2 size={21} className="text-blue-600" />
                  <p className="mt-3 text-sm font-extrabold">{hackathon}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Registration open
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section
        id="jobs"
        className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10"
      >
        <SectionHeading
          label="Latest"
          title="Entry-level jobs to kickstart"
          accent="your career."
          link="View all jobs"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl bg-blue-600 font-black text-white">
                  {job.logo}
                </span>
                <Bookmark size={18} className="text-slate-400" />
              </div>

              <h3 className="mt-5 font-extrabold">{job.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{job.company}</p>

              <p className="mt-3 flex items-center gap-1 text-xs text-slate-500">
                <MapPin size={13} />
                {job.location}
              </p>

              <div className="mt-4 flex gap-2">
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold">
                  Full-time
                </span>
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-600">
                  Fresher
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Explore more */}
      <section
        id="explore"
        className="mx-auto max-w-[1440px] px-5 py-8 lg:px-10"
      >
        <SectionHeading
          label="Explore more"
          title="Opportunities"
          accent="beyond jobs."
          link="View all"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {exploreItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`min-h-40 rounded-2xl bg-gradient-to-br ${item.color} p-5 text-white`}
              >
                <Icon size={28} className="text-cyan-300" />
                <h3 className="mt-10 font-extrabold">{item.title}</h3>
                <p className="mt-1 text-xs text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Student story */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10">
        <div className="grid gap-8 rounded-3xl bg-gradient-to-r from-white to-rose-50 p-8 lg:grid-cols-[1fr_0.4fr] lg:p-12">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
              Student stories
            </p>

            <blockquote className="mt-4 max-w-3xl text-2xl font-bold leading-9 sm:text-3xl">
              “InternAtlas helped me find my first internship and even a
              scholarship. The platform is simple, genuine and{" "}
              <span className="font-serif italic text-[#c63845]">
                student-friendly.
              </span>
              ”
            </blockquote>

            <div className="mt-7 flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-full bg-[#071c46] font-bold text-white">
                PS
              </span>

              <div>
                <p className="font-extrabold">Priya Sharma</p>
                <p className="text-sm text-slate-500">B.Tech, IIT Delhi</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-3xl bg-pink-100 p-8 text-center">
            <p className="-rotate-6 font-serif text-3xl font-bold italic">
              More opportunities.
              <br />
              Brighter futures.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-[#061d46] via-[#062b63] to-[#041834] text-white">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 py-14 lg:grid-cols-[1fr_0.4fr] lg:px-10">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">
              Your next chapter starts here
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Turn your potential{" "}
              <span className="text-cyan-300">into progress.</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-100">
              Join thousands of students discovering opportunities, learning
              new skills and building a brighter future.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/internships"
                className="rounded-full bg-blue-600 px-7 py-3 text-sm font-bold"
              >
                Create your account →
              </Link>

              <Link
                href="/employer/internships"
                className="rounded-full border border-blue-300/40 px-7 py-3 text-sm font-bold"
              >
                For colleges &amp; employers
              </Link>
            </div>
          </div>

          <div className="hidden justify-center lg:flex">
            <div className="flex size-48 items-center justify-center rounded-t-full border-8 border-blue-200 bg-gradient-to-t from-blue-600 to-white shadow-[0_0_70px_rgba(56,189,248,0.5)]">
              <Sparkles size={65} className="text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#041834] text-white">
        <div className="mx-auto grid max-w-[1440px] gap-10 border-t border-white/10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:px-10">
          <div>
            <p className="text-2xl font-black">
              Intern<span className="text-cyan-300">Atlas.</span>
            </p>
            <p className="mt-3 text-sm text-blue-100">
              Opportunities for every ambitious student.
            </p>
          </div>

          {[
            {
              title: "Opportunities",
              links: ["Internships", "Jobs", "Competitions", "Hackathons"],
            },
            {
              title: "For Students",
              links: ["Career resources", "Resume tips", "Interview prep", "Blog"],
            },
            {
              title: "For Colleges",
              links: ["Post opportunities", "Partner with us", "Campus outreach"],
            },
            {
              title: "Company",
              links: ["About us", "Careers", "Contact", "Privacy"],
            },
          ].map((column) => (
            <div key={column.title}>
              <p className="font-extrabold">{column.title}</p>

              <div className="mt-4 space-y-2">
                {column.links.map((item) => (
                  <p key={item} className="text-sm text-blue-100">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 border-t border-white/10 px-5 py-5 text-xs text-blue-200 sm:flex-row lg:px-10">
          <p>© 2026 InternAtlas. All rights reserved.</p>
          <p>Made for India 🇮🇳</p>
        </div>
      </footer>
    </main>
  );
}