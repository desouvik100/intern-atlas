import { Suspense } from "react";
import type { Metadata } from "next";
import { SignupForm } from "./SignupForm";
import { AuthShell } from "@/components/auth/AuthShell";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Join InternAtlas to discover opportunities across India.",
};

function SignupSkeleton() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs animate-pulse">
      <div className="h-6 bg-slate-200 rounded w-1/3 mb-3" />
      <div className="h-4 bg-slate-200 rounded w-1/2 mb-6" />
      <div className="h-8 bg-slate-100 rounded-lg mb-5" />
      <div className="space-y-4">
        <div className="h-10 bg-slate-100 rounded-md" />
        <div className="h-10 bg-slate-100 rounded-md" />
        <div className="h-10 bg-slate-100 rounded-md" />
        <div className="h-10 bg-slate-100 rounded-md" />
        <div className="h-10 bg-slate-200 rounded-md mt-5" />
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <AuthShell>
      <Suspense fallback={<SignupSkeleton />}>
        <SignupForm />
      </Suspense>
    </AuthShell>
  );
}
