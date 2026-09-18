"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Briefcase, GraduationCap, X } from "lucide-react";

export type AuthMode = "login" | "signup";

interface AuthChoiceModalProps {
  open: boolean;
  mode: AuthMode;
  onClose: () => void;
}

export function AuthChoiceModal({ open, mode, onClose }: AuthChoiceModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const signup = mode === "signup";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={signup ? "Sign up" : "Log in"}
    >
      <div
        className="absolute inset-0 bg-[#071c46]/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-[420px] rounded-2xl border border-[#dbe7fa] bg-white p-6 shadow-[0_30px_80px_rgba(7,28,70,0.25)]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-[#8290a5] transition-colors hover:bg-slate-100 hover:text-[#071c46]"
        >
          <X size={17} />
        </button>

        <h2 className="text-xl font-black tracking-[-0.03em] text-[#071c46]">
          {signup ? "Create an account" : "Log in"}
        </h2>
        <p className="mt-1.5 text-[12px] text-[#64748b]">
          Choose how you want to use InternAtlas.
        </p>

        <div className="mt-5 space-y-3">
          <Link
            href={signup ? "/employer/register" : "/employer/login"}
            onClick={onClose}
            className="flex items-start gap-3 rounded-xl border border-[#dbe7fa] p-4 transition-all hover:-translate-y-0.5 hover:border-[#1769e8] hover:bg-blue-50/50"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1769e8]">
              <Briefcase size={19} />
            </span>
            <span className="min-w-0">
              <span className="block text-[13px] font-extrabold text-[#071c46]">
                I&apos;m an employer
              </span>
              <span className="mt-0.5 block text-[11px] leading-4 text-[#64748b]">
                {signup
                  ? "Post internships and manage your listings."
                  : "Access your employer dashboard."}
              </span>
            </span>
          </Link>

          <div className="flex items-start gap-3 rounded-xl border border-dashed border-[#dbe7fa] bg-slate-50/60 p-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
              <GraduationCap size={19} />
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-2 text-[13px] font-extrabold text-slate-500">
                I&apos;m a student
                <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[9px] font-black uppercase tracking-wide text-slate-600">
                  Soon
                </span>
              </span>
              <span className="mt-0.5 block text-[11px] leading-4 text-[#8290a5]">
                Student accounts are on the way. You can apply to any
                internship right now without one.
              </span>
            </span>
          </div>
        </div>

        <p className="mt-5 border-t border-[#e7eefb] pt-4 text-[11px] text-[#8290a5]">
          {signup ? (
            <>
              Already have an employer account?{" "}
              <Link
                href="/employer/login"
                onClick={onClose}
                className="font-bold text-[#1769e8]"
              >
                Log in
              </Link>
            </>
          ) : (
            <>
              New employer?{" "}
              <Link
                href="/employer/register"
                onClick={onClose}
                className="font-bold text-[#1769e8]"
              >
                Create an account
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
