import Link from "next/link";
import {
  Compass,
  Menu,
  Plus,
  UserRound,
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <Compass size={22} />
          </span>

          <div>
            <p className="text-lg font-bold leading-none text-slate-950">
              InternAtlas
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-indigo-600">
              Find your direction
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
          <Link href="/internships" className="hover:text-indigo-600">
            Internships
          </Link>
          <Link href="#" className="hover:text-indigo-600">
            Fresher Jobs
          </Link>
          <Link href="#" className="hover:text-indigo-600">
            Competitions
          </Link>
          <Link href="#" className="hover:text-indigo-600">
            Hackathons
          </Link>
          <Link href="#" className="hover:text-indigo-600">
            Events
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/employer/internships/new"
            className="flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-indigo-300 hover:text-indigo-600"
          >
            <Plus size={17} />
            Post opportunity
          </Link>

          <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">
            <UserRound size={17} />
            Sign in
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