import { Suspense } from "react";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <Suspense
        fallback={
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-card p-8">
              <div className="animate-pulse">
                <div className="h-8 bg-slate-200 rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto mb-8"></div>
                <div className="space-y-4">
                  <div className="h-12 bg-slate-200 rounded"></div>
                  <div className="h-12 bg-slate-200 rounded"></div>
                  <div className="h-12 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}
