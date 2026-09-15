import Link from "next/link";
import {
  Compass,
  Menu,
  Search,
  UserRound,
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Compass size={22} />
          </span>

          <div>
            <p className="text-xl font-extrabold leading-none text-[#071c46]">
              Intern<span className="text-blue-600">Atlas.</span>
            </p>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-600">
              Find your direction
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#263858] lg:flex">
          <Link href="/internships" className="transition hover:text-blue-600">
            Opportunities
          </Link>
          <Link href="#events" className="transition hover:text-blue-600">
            Events
          </Link>
          <Link href="#scholarships" className="transition hover:text-blue-600">
            Scholarships
          </Link>
          <Link href="/employer/internships" className="transition hover:text-blue-600">
            For Colleges
          </Link>
          <Link href="#resources" className="transition hover:text-blue-600">
            Resources
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            aria-label="Search"
            className="flex size-11 items-center justify-center rounded-full border border-slate-300 text-[#071c46] transition hover:border-blue-500 hover:text-blue-600"
          >
            <Search size={19} />
          </button>

          <button className="flex items-center gap-2 rounded-full border border-blue-200 px-6 py-2.5 text-sm font-bold text-[#071c46] transition hover:border-blue-600">
            <UserRound size={17} />
            Log in
          </button>

          <button className="rounded-full bg-[#06275b] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700">
            Sign up
          </button>
        </div>

        <button
          aria-label="Open menu"
          className="rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}