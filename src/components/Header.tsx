"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Compass,
  Menu,
  Search,
  UserRound,
  X,
} from "lucide-react";

const navigation = [
  { label: "Opportunities", href: "/internships" },
  { label: "Events", href: "/#events" },
  { label: "Scholarships", href: "/#scholarships" },
  { label: "For Colleges", href: "/employer/internships" },
  { label: "Resources", href: "/#resources" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-5 px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="InternAtlas home"
          className="flex shrink-0 items-center gap-2"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Compass size={21} />
          </span>

          <div className="whitespace-nowrap">
            <p className="text-xl font-extrabold leading-none tracking-tight text-[#071c46]">
              Intern<span className="text-blue-600">Atlas.</span>
            </p>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-600">
              Find your direction
            </p>
          </div>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden min-w-0 items-center gap-5 text-[13px] font-semibold text-[#263858] lg:flex xl:gap-7"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
          <button
            type="button"
            aria-label="Search"
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-slate-300 text-[#071c46] transition-colors hover:border-blue-500 hover:text-blue-600"
          >
            <Search size={18} />
          </button>

          <Link
            href="#login"
            className="flex h-10 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-blue-200 px-5 text-[13px] font-bold text-[#071c46] transition-colors hover:border-blue-600 hover:bg-blue-50"
          >
            <UserRound size={16} />
            Log in
          </Link>

          <Link
            href="#signup"
            className="flex h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#06275b] px-5 text-[13px] font-bold text-white transition-colors hover:bg-blue-700"
          >
            Sign up
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-blue-100 bg-white px-5 pb-6 shadow-lg lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-w-[1280px] pt-3"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="block border-b border-slate-100 py-3.5 text-sm font-semibold text-[#263858] transition-colors hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link
                href="#login"
                onClick={closeMenu}
                className="flex h-11 items-center justify-center gap-2 rounded-full border border-blue-200 text-sm font-bold text-[#071c46]"
              >
                <UserRound size={17} />
                Log in
              </Link>

              <Link
                href="#signup"
                onClick={closeMenu}
                className="flex h-11 items-center justify-center rounded-full bg-[#06275b] text-sm font-bold text-white"
              >
                Sign up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}