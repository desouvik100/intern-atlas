"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Opportunities", href: "/#explore" },
  { label: "Events", href: "/#events" },
  { label: "Scholarships", href: "/#scholarships" },
  { label: "For Colleges", href: "/#colleges" },
  { label: "Resources", href: "/#resources" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 4);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

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
          "sticky top-0 z-50 h-16 border-b border-slate-200/80 transition-all duration-200",
          scrolled
            ? "bg-white/95 shadow-sm backdrop-blur-md"
            : "bg-white",
        )}
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-10 xl:gap-14">
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
              className="shrink-0 text-[23px] font-black tracking-[-0.04em] text-[#071c46]"
            >
              Intern<span className="text-blue-600">Atlas.</span>
            </Link>

            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-7 lg:flex xl:gap-9"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-semibold text-slate-600 transition-colors hover:text-[#071c46]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/#explore"
              aria-label="Search opportunities"
              className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#071c46] shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
            >
              <Search size={18} strokeWidth={2} />
            </Link>

            <Button
              variant="outline"
              className="h-10 rounded-full border-slate-200 bg-white px-6 text-[13px] font-bold text-[#071c46] shadow-sm hover:bg-slate-50"
              asChild
            >
              <Link href="#login">Log in</Link>
            </Button>

            <Button
              className="h-10 rounded-full bg-[#071c46] px-6 text-[13px] font-bold text-white shadow-sm hover:bg-[#0b2c64]"
              asChild
            >
              <Link href="#signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-x-0 top-16 z-40 border-b border-slate-200 bg-white px-5 pb-5 shadow-lg transition-all duration-200 lg:hidden",
          menuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0",
        )}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col pt-2">
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

        <div className="mt-4 grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="h-10 rounded-full border-slate-200 font-bold text-[#071c46]"
            asChild
          >
            <Link href="#login" onClick={closeMenu}>
              Log in
            </Link>
          </Button>
          <Button
            className="h-10 rounded-full bg-[#071c46] font-bold text-white"
            asChild
          >
            <Link href="#signup" onClick={closeMenu}>
              Sign up
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
