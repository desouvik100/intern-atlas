"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Check } from "lucide-react";

type Role = "student" | "employer";

export function SignupForm() {
  const router = useRouter();

  const [role, setRole] = useState<Role>("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Live password validation rules
  // Server enforces min. 8 characters in auth.ts
  const hasLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>_\-+=[\]\\/`~]/.test(password);
  const hasMatch = passwordConfirm.length > 0 && password === passwordConfirm;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!hasLength) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (!hasUpper) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }

    if (!hasSpecial) {
      setError("Password must contain at least one special character.");
      return;
    }

    if (password !== passwordConfirm) {
      setError("Passwords do not match. Please re-enter.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          passwordConfirm,
          role,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Signup failed. Please try again.");
        setLoading(false);
        return;
      }

      // Redirect based on role
      if (role === "student") {
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
    <div className="w-full">
      {/* Title & subtitle */}
      <div className="mb-7">
        <h1 className="text-2xl font-bold tracking-tight text-[#071c46]">
          Create your account
        </h1>
        <p className="text-sm text-slate-500 mt-1.5">
          Join InternAtlas to discover internships and campus opportunities.
        </p>
      </div>

      {/* Role Selection Tabs */}
      <div className="flex border-b border-slate-200 mb-6">
        <button
          type="button"
          onClick={() => setRole("student")}
          className={`pb-3 text-sm font-medium border-b-2 -mb-px transition-colors cursor-pointer mr-6 ${
            role === "student"
              ? "border-[#071c46] text-[#071c46] font-semibold"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          Student
        </button>
        <button
          type="button"
          onClick={() => setRole("employer")}
          className={`pb-3 text-sm font-medium border-b-2 -mb-px transition-colors cursor-pointer ${
            role === "employer"
              ? "border-[#071c46] text-[#071c46] font-semibold"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          Employer
        </button>
      </div>

      {/* Error Alert */}
      {error && (
        <div
          role="alert"
          className="mb-5 p-3 bg-red-50 border border-red-200 rounded-md text-xs text-red-700 font-medium"
        >
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="signup-name"
            className="block text-xs font-semibold text-slate-700 mb-1.5"
          >
            {role === "student" ? "Full name" : "Company or organization name"}
          </label>
          <input
            id="signup-name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full h-10 px-3 bg-white border border-slate-300 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#071c46] focus:ring-1 focus:ring-[#071c46] transition-colors"
            placeholder={role === "student" ? "Your full name" : "Organization name"}
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="signup-email"
            className="block text-xs font-semibold text-slate-700 mb-1.5"
          >
            Email address
          </label>
          <input
            id="signup-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-10 px-3 bg-white border border-slate-300 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#071c46] focus:ring-1 focus:ring-[#071c46] transition-colors"
            placeholder={role === "student" ? "you@college.edu" : "hiring@company.com"}
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="signup-password"
            className="block text-xs font-semibold text-slate-700 mb-1.5"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="signup-password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-10 px-3 pr-10 bg-white border border-slate-300 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#071c46] focus:ring-1 focus:ring-[#071c46] transition-colors"
              placeholder="Create a strong password"
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

          {/* Animated Password Validation Checklist */}
          <div className="mt-2.5 space-y-1.5">
            {/* Rule 1: Length */}
            <div className="flex items-center gap-2">
              <div
                className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-300 ease-out ${
                  hasLength
                    ? "bg-emerald-600 text-white scale-100 ring-2 ring-emerald-600/20"
                    : "border border-slate-300 bg-slate-50 text-transparent scale-90"
                }`}
                aria-hidden="true"
              >
                <Check
                  className={`w-2.5 h-2.5 stroke-[3] transition-all duration-300 ease-out ${
                    hasLength ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                />
              </div>
              <span
                className={`text-xs transition-colors duration-200 ${
                  hasLength ? "text-slate-800 font-medium" : "text-slate-400"
                }`}
              >
                At least 8 characters
              </span>
            </div>

            {/* Rule 2: Uppercase */}
            <div className="flex items-center gap-2">
              <div
                className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-300 ease-out ${
                  hasUpper
                    ? "bg-emerald-600 text-white scale-100 ring-2 ring-emerald-600/20"
                    : "border border-slate-300 bg-slate-50 text-transparent scale-90"
                }`}
                aria-hidden="true"
              >
                <Check
                  className={`w-2.5 h-2.5 stroke-[3] transition-all duration-300 ease-out ${
                    hasUpper ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                />
              </div>
              <span
                className={`text-xs transition-colors duration-200 ${
                  hasUpper ? "text-slate-800 font-medium" : "text-slate-400"
                }`}
              >
                At least one uppercase letter (A–Z)
              </span>
            </div>

            {/* Rule 3: Special character */}
            <div className="flex items-center gap-2">
              <div
                className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-300 ease-out ${
                  hasSpecial
                    ? "bg-emerald-600 text-white scale-100 ring-2 ring-emerald-600/20"
                    : "border border-slate-300 bg-slate-50 text-transparent scale-90"
                }`}
                aria-hidden="true"
              >
                <Check
                  className={`w-2.5 h-2.5 stroke-[3] transition-all duration-300 ease-out ${
                    hasSpecial ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                />
              </div>
              <span
                className={`text-xs transition-colors duration-200 ${
                  hasSpecial ? "text-slate-800 font-medium" : "text-slate-400"
                }`}
              >
                At least one special character (!@#$%...)
              </span>
            </div>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="signup-password-confirm"
            className="block text-xs font-semibold text-slate-700 mb-1.5"
          >
            Confirm password
          </label>
          <div className="relative">
            <input
              id="signup-password-confirm"
              type={showPasswordConfirm ? "text" : "password"}
              autoComplete="new-password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
              className="w-full h-10 px-3 pr-10 bg-white border border-slate-300 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#071c46] focus:ring-1 focus:ring-[#071c46] transition-colors"
              placeholder="Re-enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              aria-label={showPasswordConfirm ? "Hide password" : "Show password"}
            >
              {showPasswordConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {/* Confirm match feedback */}
          {passwordConfirm.length > 0 && (
            <div className="flex items-center gap-2 mt-2">
              <div
                className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-300 ease-out ${
                  hasMatch
                    ? "bg-emerald-600 text-white scale-100 ring-2 ring-emerald-600/20"
                    : "border border-amber-300 bg-amber-50 text-transparent scale-90"
                }`}
                aria-hidden="true"
              >
                <Check
                  className={`w-2.5 h-2.5 stroke-[3] transition-all duration-300 ease-out ${
                    hasMatch ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                />
              </div>
              <span
                className={`text-xs transition-colors duration-200 ${
                  hasMatch ? "text-emerald-700 font-medium" : "text-amber-700"
                }`}
              >
                {hasMatch ? "Passwords match" : "Passwords do not match yet"}
              </span>
            </div>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-10 mt-6 bg-[#071c46] hover:bg-[#0B1E4A] active:bg-[#040f26] text-white rounded-md text-sm font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#071c46] focus-visible:ring-offset-1"
        >
          {loading ? "Creating account..." : "Create account"}
        </button>
      </form>

      {/* Alternative action */}
      <div className="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-500">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 font-semibold hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}
