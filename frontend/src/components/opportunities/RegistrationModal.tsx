"use client";

import React, { useEffect, useState, useId, useCallback } from "react";
import {
  X,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Users,
  Trophy,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface RegistrationOpportunity {
  id: string;
  title: string;
  moduleType:
    | "Competitions"
    | "Hackathons"
    | "Contests"
    | "Quizzes"
    | "Events"
    | "College Festivals"
    | "Cultural Events"
    | string;
  teamSize?: string;
  isTeam?: boolean;
  status?: string;
  registrationDeadline?: string;
  category?: string;
}

export function isTeamOpportunity(opportunity?: RegistrationOpportunity | null): boolean {
  if (!opportunity) return false;
  if (typeof opportunity.isTeam === "boolean") return opportunity.isTeam;
  if (opportunity.teamSize) {
    const s = opportunity.teamSize.toLowerCase();
    if (
      s.includes("individual") ||
      s.includes("solo") ||
      s === "1 member" ||
      s === "1 person" ||
      s === "1"
    ) {
      return false;
    }
    if (s.includes("team") || s.includes("-") || /\b[2-9]\b/.test(s)) {
      return true;
    }
  }
  const mod = opportunity.moduleType?.toLowerCase();
  if (mod === "hackathons") return true;
  return false;
}

export function isOpportunityClosed(opportunity?: RegistrationOpportunity | null): boolean {
  if (!opportunity) return false;
  const st = opportunity.status?.toLowerCase();
  return st === "closed" || st === "expired";
}

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  opportunity: RegistrationOpportunity | null;
}

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  collegeName: string;
  department: string;
  yearOfStudy: string;
  teamName: string;
  teamMembers: string;
  additionalInfo: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  collegeName?: string;
  department?: string;
  yearOfStudy?: string;
}

const STUDY_YEARS = [
  "1st Year / Fresher",
  "2nd Year / Sophomore",
  "3rd Year / Pre-final Year",
  "4th Year / Final Year",
  "Postgraduate (Master's / Ph.D.)",
  "Recent Graduate",
  "Other",
];

const INITIAL_VALUES: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  collegeName: "",
  department: "",
  yearOfStudy: "",
  teamName: "",
  teamMembers: "",
  additionalInfo: "",
};

function RegistrationFormContent({
  opportunity,
  onClose,
}: {
  opportunity: RegistrationOpportunity;
  onClose: () => void;
}) {
  const [formValues, setFormValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [registrationRef, setRegistrationRef] = useState<string>("");
  const [copied, setCopied] = useState(false);

  // Accessible IDs
  const titleId = useId();
  const descId = useId();

  const isClosed = isOpportunityClosed(opportunity);
  const isTeam = isTeamOpportunity(opportunity);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formValues.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formValues.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    if (!formValues.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    const strippedPhone = formValues.phone.replace(/[^0-9]/g, "");
    if (!formValues.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (strippedPhone.length < 10 || strippedPhone.length > 15) {
      newErrors.phone = "Enter a valid phone number (10–15 digits)";
    }

    if (!formValues.collegeName.trim()) {
      newErrors.collegeName = "College name is required";
    }

    if (!formValues.department.trim()) {
      newErrors.department = "Department / Major is required";
    }

    if (!formValues.yearOfStudy) {
      newErrors.yearOfStudy = "Please select your current year of study";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isClosed) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const code = opportunity.moduleType
        ? opportunity.moduleType.slice(0, 3).toUpperCase().replace(/[^A-Z]/g, "OPP")
        : "OPP";
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      const ref = `REG-${code}-${randomNum}`;

      setRegistrationRef(ref);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleCopyRef = async () => {
    if (!registrationRef) return;
    try {
      await navigator.clipboard.writeText(registrationRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="relative w-full max-w-xl rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all my-8 max-h-[90vh] flex flex-col">
      {/* Modal Header */}
      <div className="flex items-start justify-between border-b border-slate-100 p-5 sm:p-6 bg-slate-50/50 rounded-t-2xl shrink-0">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[11px] font-bold text-blue">
              <Trophy size={12} />
              {opportunity.moduleType}
            </span>
            {isTeam && (
              <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 text-[11px] font-bold text-indigo-700">
                <Users size={12} />
                Team Event {opportunity.teamSize ? `(${opportunity.teamSize})` : ""}
              </span>
            )}
            {isClosed && (
              <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 border border-rose-200 px-2.5 py-0.5 text-[11px] font-bold text-rose-700">
                Closed
              </span>
            )}
          </div>

          <h2
            id={titleId}
            className="mt-2 text-lg sm:text-xl font-extrabold text-slate-900 leading-snug line-clamp-2"
          >
            {isSuccess ? "Registration Successful!" : `Register for ${opportunity.title}`}
          </h2>
          <p id={descId} className="text-xs text-slate-500 mt-0.5">
            {isSuccess
              ? "Your demo registration has been recorded for this session."
              : "Fill in the details below to complete your demo registration."}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="flex size-8 shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>
      </div>

      {/* Modal Body */}
      <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
        {/* Closed Alert */}
        {isClosed && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-800 flex items-start gap-2.5">
            <AlertCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Registration Closed</p>
              <p className="mt-0.5 text-rose-700">
                The registration window for this opportunity has concluded. You cannot submit new registrations.
              </p>
            </div>
          </div>
        )}

        {/* SUCCESS VIEW */}
        {isSuccess ? (
          <div className="space-y-6 text-center py-2 animate-in fade-in duration-300">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ring-8 ring-emerald-50">
              <CheckCircle2 size={32} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Registration Confirmed!
              </h3>
              <p className="mt-1 text-xs text-slate-600 max-w-md mx-auto">
                Your demo registration for <strong className="text-slate-900">{opportunity.title}</strong> has been recorded for this session.
              </p>
            </div>

            {/* Reference Card */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-left space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Demo Reference ID
                </span>
                <button
                  type="button"
                  onClick={handleCopyRef}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue hover:underline cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="font-mono text-base font-extrabold text-blue tracking-wide">
                {registrationRef}
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 text-xs text-slate-600 border-t border-slate-200/80">
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Candidate</span>
                  <span className="font-semibold text-slate-800">{formValues.fullName}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Email</span>
                  <span className="font-semibold text-slate-800 truncate block">{formValues.email}</span>
                </div>
                {isTeam && formValues.teamName && (
                  <div className="col-span-2">
                    <span className="text-[10px] text-slate-400 block font-medium">Team Name</span>
                    <span className="font-semibold text-slate-800">{formValues.teamName}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Demo Notice Banner */}
            <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 text-left text-xs text-amber-900">
              <div className="flex items-start gap-2">
                <AlertCircle size={15} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-[11.5px] leading-relaxed">
                  <strong>Demo Simulation:</strong> This submission is simulated in your browser session for testing and evaluation. It has not been sent to any external organizers.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="button"
                onClick={onClose}
                className="w-full h-11 rounded-xl bg-slate-900 hover:bg-slate-800 font-bold text-white shadow-sm text-sm cursor-pointer"
              >
                Done
              </Button>
            </div>
          </div>
        ) : (
          /* FORM VIEW */
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="reg-fullName"
                className="block text-xs font-bold text-slate-700 mb-1"
              >
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="reg-fullName"
                type="text"
                name="fullName"
                value={formValues.fullName}
                onChange={handleChange}
                placeholder="e.g. Priya Sharma"
                disabled={isClosed}
                className={cn(
                  "w-full rounded-xl border px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2",
                  errors.fullName
                    ? "border-rose-400 bg-rose-50/30 focus:ring-rose-200"
                    : "border-slate-200 bg-white focus:border-blue focus:ring-blue/10",
                  isClosed && "bg-slate-100 cursor-not-allowed"
                )}
              />
              {errors.fullName && (
                <p className="mt-1 text-[11px] font-medium text-rose-500">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label
                  htmlFor="reg-email"
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  id="reg-email"
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="priya@college.edu"
                  disabled={isClosed}
                  className={cn(
                    "w-full rounded-xl border px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2",
                    errors.email
                      ? "border-rose-400 bg-rose-50/30 focus:ring-rose-200"
                      : "border-slate-200 bg-white focus:border-blue focus:ring-blue/10",
                    isClosed && "bg-slate-100 cursor-not-allowed"
                  )}
                />
                {errors.email && (
                  <p className="mt-1 text-[11px] font-medium text-rose-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="reg-phone"
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <input
                  id="reg-phone"
                  type="tel"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  disabled={isClosed}
                  className={cn(
                    "w-full rounded-xl border px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2",
                    errors.phone
                      ? "border-rose-400 bg-rose-50/30 focus:ring-rose-200"
                      : "border-slate-200 bg-white focus:border-blue focus:ring-blue/10",
                    isClosed && "bg-slate-100 cursor-not-allowed"
                  )}
                />
                {errors.phone && (
                  <p className="mt-1 text-[11px] font-medium text-rose-500">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* College & Department Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label
                  htmlFor="reg-collegeName"
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  College / Institute <span className="text-rose-500">*</span>
                </label>
                <input
                  id="reg-collegeName"
                  type="text"
                  name="collegeName"
                  value={formValues.collegeName}
                  onChange={handleChange}
                  placeholder="e.g. IIT Bombay"
                  disabled={isClosed}
                  className={cn(
                    "w-full rounded-xl border px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2",
                    errors.collegeName
                      ? "border-rose-400 bg-rose-50/30 focus:ring-rose-200"
                      : "border-slate-200 bg-white focus:border-blue focus:ring-blue/10",
                    isClosed && "bg-slate-100 cursor-not-allowed"
                  )}
                />
                {errors.collegeName && (
                  <p className="mt-1 text-[11px] font-medium text-rose-500">
                    {errors.collegeName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="reg-department"
                  className="block text-xs font-bold text-slate-700 mb-1"
                >
                  Department / Branch <span className="text-rose-500">*</span>
                </label>
                <input
                  id="reg-department"
                  type="text"
                  name="department"
                  value={formValues.department}
                  onChange={handleChange}
                  placeholder="e.g. Computer Science"
                  disabled={isClosed}
                  className={cn(
                    "w-full rounded-xl border px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2",
                    errors.department
                      ? "border-rose-400 bg-rose-50/30 focus:ring-rose-200"
                      : "border-slate-200 bg-white focus:border-blue focus:ring-blue/10",
                    isClosed && "bg-slate-100 cursor-not-allowed"
                  )}
                />
                {errors.department && (
                  <p className="mt-1 text-[11px] font-medium text-rose-500">
                    {errors.department}
                  </p>
                )}
              </div>
            </div>

            {/* Year of Study */}
            <div>
              <label
                htmlFor="reg-yearOfStudy"
                className="block text-xs font-bold text-slate-700 mb-1"
              >
                Current Year of Study <span className="text-rose-500">*</span>
              </label>
              <select
                id="reg-yearOfStudy"
                name="yearOfStudy"
                value={formValues.yearOfStudy}
                onChange={handleChange}
                disabled={isClosed}
                className={cn(
                  "w-full rounded-xl border px-3.5 py-2 text-xs sm:text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 bg-white",
                  errors.yearOfStudy
                    ? "border-rose-400 bg-rose-50/30 focus:ring-rose-200"
                    : "border-slate-200 focus:border-blue focus:ring-blue/10",
                  isClosed && "bg-slate-100 cursor-not-allowed"
                )}
              >
                <option value="">Select your year of study...</option>
                {STUDY_YEARS.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
              {errors.yearOfStudy && (
                <p className="mt-1 text-[11px] font-medium text-rose-500">
                  {errors.yearOfStudy}
                </p>
              )}
            </div>

            {/* Optional Team Fields (Rendered for team events) */}
            {isTeam && (
              <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-4 space-y-3.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-950">
                  <Users size={14} className="text-indigo-600" />
                  <span>Team Details (Optional for individual participants)</span>
                </div>

                <div>
                  <label
                    htmlFor="reg-teamName"
                    className="block text-[11px] font-semibold text-slate-700 mb-1"
                  >
                    Team Name
                  </label>
                  <input
                    id="reg-teamName"
                    type="text"
                    name="teamName"
                    value={formValues.teamName}
                    onChange={handleChange}
                    placeholder="e.g. Code Voyagers"
                    disabled={isClosed}
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="reg-teamMembers"
                    className="block text-[11px] font-semibold text-slate-700 mb-1"
                  >
                    Team Members (Names & Emails)
                  </label>
                  <textarea
                    id="reg-teamMembers"
                    name="teamMembers"
                    rows={2}
                    value={formValues.teamMembers}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Verma (rahul@college.edu), Ananya Das"
                    disabled={isClosed}
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/10"
                  />
                </div>
              </div>
            )}

            {/* Optional Additional Information */}
            <div>
              <label
                htmlFor="reg-additionalInfo"
                className="block text-xs font-bold text-slate-700 mb-1"
              >
                Additional Information <span className="text-[11px] font-normal text-slate-400">(Optional)</span>
              </label>
              <textarea
                id="reg-additionalInfo"
                name="additionalInfo"
                rows={2}
                value={formValues.additionalInfo}
                onChange={handleChange}
                placeholder="Any dietary restrictions, special requirements, or questions for organizers..."
                disabled={isClosed}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/10"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="h-10 px-4 rounded-xl border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={isClosed || isSubmitting}
                className={cn(
                  "h-10 px-5 rounded-xl text-xs font-bold text-white shadow-sm transition-all cursor-pointer",
                  isClosed
                    ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                    : "bg-blue hover:bg-blue-hover"
                )}
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Loader2 size={14} className="animate-spin" />
                    Submitting...
                  </span>
                ) : isClosed ? (
                  "Registration Closed"
                ) : (
                  "Submit Registration"
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function RegistrationModal({
  isOpen,
  onClose,
  opportunity,
}: RegistrationModalProps) {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen || !opportunity) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <RegistrationFormContent
        key={`${opportunity.id}-${isOpen}`}
        opportunity={opportunity}
        onClose={handleClose}
      />
    </div>
  );
}
