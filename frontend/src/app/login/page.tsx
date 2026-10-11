import { Suspense } from "react";
import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";
import { AuthShell } from "@/components/auth/AuthShell";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your InternAtlas account to discover opportunities.",
};

function LoginSkeleton() {
  return (
    <div className="w-full animate-pulse space-y-4">
      <div className="h-7 bg-slate-200 rounded w-2/3 mb-2" />
      <div className="h-4 bg-slate-100 rounded w-1/2 mb-7" />
      <div className="h-8 border-b border-slate-200 mb-6" />
      <div className="space-y-4">
        <div className="h-10 bg-slate-100 rounded-md" />
        <div className="h-10 bg-slate-100 rounded-md" />
        <div className="h-10 bg-slate-200 rounded-md mt-6" />
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <AuthShell
      headerAction={{
        prompt: "Don't have an account?",
        linkText: "Sign up",
        href: "/signup",
      }}
    >
      <Suspense fallback={<LoginSkeleton />}>
        <LoginForm />
      </Suspense>
    </AuthShell>
  );
}
