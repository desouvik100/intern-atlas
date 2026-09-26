"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";

import { cn } from "@/lib/utils";


const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Internships", href: "/internships" },
  { label: "Events", href: "/events" },
  { label: "Competitions", href: "/competitions" },
  { label: "Hackathons", href: "/hackathons" },
];


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 4);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 h-14 border-b border-slate-200/80 transition-all lg:h-12",
          scrolled
            ? "bg-white/95 shadow-sm backdrop-blur-md"
            : "bg-white",
        )}
      >
        <div className="mx-auto flex h-full max-w-[1100px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              className="flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            <Link
              href="/"
              aria-label="InternAtlas home"
              onClick={closeMenu}
              className="text-[19px] font-black tracking-[-0.04em] text-[#071c46]"
            >
              Intern<span className="text-blue-600">Atlas.</span>
            </Link>

            <nav className="hidden items-center gap-6 lg:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[12px] font-semibold text-slate-600 transition hover:text-blue-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link
            href="/internships"
            aria-label="Search internships"
            className="hidden size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#071c46] transition hover:border-blue-300 hover:bg-blue-50 lg:flex"
          >
            <Search size={16} />
          </Link>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-x-0 top-14 z-40 border-b border-slate-200 bg-white px-5 pb-5 shadow-lg lg:hidden">
          <nav className="flex flex-col pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}