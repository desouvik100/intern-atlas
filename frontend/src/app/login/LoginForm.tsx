"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

type Role = "student" | "employer";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [role, setRole] = useState<Role>("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed. Please try again.");
        setLoading(false);
        return;
      }

      // Handle redirect
      const redirect = searchParams.get("redirect");
      if (redirect) {
        router.push(redirect);
      } else if (role === "student") {
        router.push("/student/dashboard");
      } else {
        router.push("/employer/dashboard");
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
      {/* Header */}
      <div className="mb-6">
        <Link href="/" className="inline-block mb-3" aria-label="InternAtlas home">
          <span className="text-xl font-black tracking-[-0.04em] text-[#071c46]">
            Intern<span className="text-blue-600">Atlas.</span>
          </span>
        </Link>
        <h1 className="text-lg font-bold text-slate-900 tracking-tight">
          Sign in to InternAtlas
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Enter your credentials to access your account.
        </p>
      </div>

      {/* Account Type Selector */}
      <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-lg mb-5 text-xs">
        <button
          type="button"
          onClick={() => setRole("student")}
          className={`py-1.5 rounded-md font-medium text-center transition-all cursor-pointer ${
            role === "student"
              ? "bg-white text-slate-900 font-semibold shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Student
        </button>
        <button
          type="button"
          onClick={() => setRole("employer")}
          className={`py-1.5 rounded-md font-medium text-center transition-all cursor-pointer ${
            role === "employer"
              ? "bg-white text-slate-900 font-semibold shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Employer
        </button>
      </div>

      {/* Error Alert */}
      {error && (
        <div
          role="alert"
          className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-xs text-red-700 font-medium"
        >
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-slate-700 mb-1.5"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-10 px-3 bg-white border border-slate-300 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
            placeholder="you@example.com"
          />
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="password"
              className="text-xs font-semibold text-slate-700"
            >
              Password
            </label>
            <a
              href="mailto:support@internatlas.in?subject=Password%20Reset%20Request"
              className="text-xs text-blue-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-10 px-3 pr-10 bg-white border border-slate-300 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-10 mt-5 bg-[#0B1E4A] hover:bg-[#122A63] text-white rounded-md text-sm font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-1"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      {/* Signup link */}
      <p className="text-center text-xs text-slate-500 mt-5">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-blue-600 font-semibold hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
