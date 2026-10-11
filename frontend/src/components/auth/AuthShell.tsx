import React from "react";
import Link from "next/link";

interface AuthShellProps {
  children: React.ReactNode;
}

export function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-between items-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-[400px]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors mb-6"
        >
          ← Back to InternAtlas
        </Link>
        {children}
      </div>
      <div className="text-center text-xs text-slate-400 pt-8">
        © {new Date().getFullYear()} InternAtlas
      </div>
    </div>
  );
}
