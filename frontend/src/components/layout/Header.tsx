"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Opportunities", href: "#opportunities" },
  { label: "Events", href: "#events" },
  { label: "Scholarships", href: "#scholarships" },
  { label: "For Colleges", href: "#colleges" },
  { label: "Resources", href: "#resources" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 4);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={cn("sticky top-0 z-50 h-16 md:h-16 transition-all duration-200", scrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-transparent")}>
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6">
          
          {/* Left Side: Logo & Desktop Nav */}
          <div className="flex items-center gap-4 lg:gap-14">
            
            {/* Mobile Menu Toggle */}
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 lg:hidden" onClick={() => setMenuOpen((v) => !v)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Logo */}
            <Link href="/" aria-label="InternAtlas home" onClick={closeMenu} className="flex items-center">
              <span className="text-[24px] font-bold tracking-tight text-[#0f172a]">
                Intern<span className="text-blue-600">Atlas.</span>
              </span>
            </Link>
            
            {/* Desktop Nav */}
            <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-[14px] font-semibold text-slate-600 transition-colors hover:text-[#0f172a]">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side: Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <button className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-50">
              <Search size={18} strokeWidth={2} />
            </button>
            <Button variant="outline" className="h-[42px] rounded-full border-slate-200 bg-white px-7 font-semibold text-[#0f172a] shadow-sm hover:bg-slate-50" asChild>
              <Link href="#login">Log in</Link>
            </Button>
            <Button className="h-[42px] rounded-full bg-[#0f172a] px-7 font-semibold text-white shadow-sm hover:bg-slate-800" asChild>
              <Link href="#signup">Sign up</Link>
            </Button>
          </div>

          {/* Mobile menu toggle was moved to the left side */}
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={cn("fixed inset-x-0 top-14 md:top-16 z-40 border-b border-slate-200 bg-white px-6 pb-6 shadow-lg lg:hidden transition-all duration-300 ease-out", menuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-3 opacity-0 pointer-events-none")}>
        <nav className="mb-6 flex flex-col pt-4">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu} className="border-b border-slate-100 py-4 text-[15px] font-semibold text-slate-700">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-3">
          <Button variant="outline" className="w-full justify-center rounded-full h-11 border-slate-200 font-bold text-[#1E293B]" asChild><Link href="#login" onClick={closeMenu}>Log in</Link></Button>
          <Button className="w-full justify-center rounded-full bg-[#1E293B] text-white h-11 font-bold" asChild><Link href="#signup" onClick={closeMenu}>Sign up</Link></Button>
        </div>
      </div>
    </>
  );
}
