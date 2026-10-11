import React from "react";
import Link from "next/link";

interface AuthShellProps {
  children: React.ReactNode;
  headerAction?: {
    prompt: string;
    linkText: string;
    href: string;
  };
}

export function AuthShell({ children, headerAction }: AuthShellProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-blue-600/10">
      {/* Top minimal header matching InternAtlas navigation */}
      <header className="h-14 border-b border-slate-200/80 bg-white">
        <div className="max-w-[1200px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
          <Link
            href="/"
            aria-label="InternAtlas home"
            className="text-[19px] font-black tracking-[-0.04em] text-[#071c46]"
          >
            Intern<span className="text-blue-600">Atlas.</span>
          </Link>

          {headerAction && (
            <div className="text-xs sm:text-sm text-slate-600">
              {headerAction.prompt}{" "}
              <Link
                href={headerAction.href}
                className="font-semibold text-blue-600 hover:underline"
              >
                {headerAction.linkText}
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Main seamless content area - no floating card or artificial frame */}
      <main className="flex-1 flex flex-col justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-[380px] mx-auto">
          {children}
        </div>
      </main>

      {/* Subtle site footer */}
      <footer className="border-t border-slate-100 py-6">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} InternAtlas. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-slate-800 transition-colors">
              Home
            </Link>
            <Link href="/opportunities" className="hover:text-slate-800 transition-colors">
              Opportunities
            </Link>
            <a
              href="mailto:support@internatlas.in"
              className="hover:text-slate-800 transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
