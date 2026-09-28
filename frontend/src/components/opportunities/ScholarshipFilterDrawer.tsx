"use client";

import { useEffect, useCallback } from "react";
import { X, RotateCcw, Check } from "lucide-react";
import { ScholarshipFilterState } from "@/types/scholarship";
import { ScholarshipFilterMetadata } from "@/lib/services/scholarshipService";
import { cn } from "@/lib/utils";

interface ScholarshipFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: ScholarshipFilterState;
  onFilterChange: (filters: ScholarshipFilterState) => void;
  onClearFilters: () => void;
  metadata: ScholarshipFilterMetadata;
  totalFilteredCount: number;
}

export function ScholarshipFilterDrawer({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onClearFilters,
  metadata,
  totalFilteredCount,
}: ScholarshipFilterDrawerProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Filter scholarships"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-white shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="text-base font-bold text-primary">
              Filter Scholarships
            </h2>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClearFilters}
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue hover:underline"
              >
                <RotateCcw size={12} />
                Reset
              </button>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close filters drawer"
                className="rounded-lg p-1.5 text-text-muted hover:bg-slate-100 hover:text-primary transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Scrollable Filters Content */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
            {/* Entry Fee */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                Application Fee
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: "all", label: "All" },
                  { value: "free", label: "Free" },
                  { value: "paid", label: "Paid" },
                ].map((fee) => (
                  <button
                    key={fee.value}
                    type="button"
                    onClick={() =>
                      onFilterChange({
                        ...filters,
                        feeType: fee.value as "all" | "free" | "paid",
                      })
                    }
                    className={cn(
                      "rounded-lg border py-2 text-center text-xs font-semibold transition-all",
                      filters.feeType === fee.value
                        ? "border-blue bg-blue text-white shadow-xs"
                        : "border-border bg-white text-text-secondary hover:border-slate-300"
                    )}
                  >
                    {fee.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Scholarship Type */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                Scholarship Type
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["All", ...metadata.scholarshipTypes].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() =>
                      onFilterChange({ ...filters, scholarshipType: type })
                    }
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-medium transition-all",
                      filters.scholarshipType === type
                        ? "border-blue bg-blue-surface text-blue font-bold"
                        : "border-border bg-white text-text-secondary hover:border-slate-300"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Grant Amount */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                Grant Amount
              </span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: "all", label: "All Amounts" },
                  { value: "under_25k", label: "< ₹25,000" },
                  { value: "25k_to_100k", label: "₹25k - ₹1L" },
                  { value: "above_100k", label: "> ₹1,00,000" },
                ].map((amt) => (
                  <button
                    key={amt.value}
                    type="button"
                    onClick={() =>
                      onFilterChange({
                        ...filters,
                        amount: amt.value as ScholarshipFilterState["amount"],
                      })
                    }
                    className={cn(
                      "rounded-lg border py-2 px-2 text-center text-xs font-semibold transition-all truncate",
                      filters.amount === amt.value
                        ? "border-blue bg-blue text-white shadow-xs"
                        : "border-border bg-white text-text-secondary hover:border-slate-300"
                    )}
                  >
                    {amt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Application Mode */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                Application Mode
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["All", ...metadata.applicationModes].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() =>
                      onFilterChange({ ...filters, applicationMode: mode })
                    }
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-medium transition-all",
                      filters.applicationMode === mode
                        ? "border-blue bg-blue-surface text-blue font-bold"
                        : "border-border bg-white text-text-secondary hover:border-slate-300"
                    )}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Status */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                Status
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["All", "Open", "Closing Soon"].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => onFilterChange({ ...filters, status: st })}
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-medium transition-all",
                      filters.status === st
                        ? "border-blue bg-blue-surface text-blue font-bold"
                        : "border-border bg-white text-text-secondary hover:border-slate-300"
                    )}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Category */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                Category
              </span>
              <div className="space-y-1">
                {["All", ...metadata.categories].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() =>
                      onFilterChange({ ...filters, category: cat })
                    }
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs transition-colors",
                      filters.category === cat
                        ? "bg-primary text-white font-semibold"
                        : "text-text-secondary hover:bg-background hover:text-primary"
                    )}
                  >
                    <span className="truncate">{cat}</span>
                    {filters.category === cat && (
                      <Check size={14} className="text-cyan shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Field of Study */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                Field of Study
              </span>
              <div className="space-y-1">
                {["All", ...metadata.fieldsOfStudy].map((field) => (
                  <button
                    key={field}
                    type="button"
                    onClick={() =>
                      onFilterChange({ ...filters, fieldOfStudy: field })
                    }
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs transition-colors",
                      filters.fieldOfStudy === field
                        ? "bg-primary text-white font-semibold"
                        : "text-text-secondary hover:bg-background hover:text-primary"
                    )}
                  >
                    <span className="truncate">{field}</span>
                    {filters.fieldOfStudy === field && (
                      <Check size={14} className="text-cyan shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Eligibility */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                Eligibility
              </span>
              <div className="space-y-1">
                {["All", ...metadata.eligibilities].map((elig) => (
                  <button
                    key={elig}
                    type="button"
                    onClick={() =>
                      onFilterChange({ ...filters, eligibility: elig })
                    }
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs transition-colors",
                      filters.eligibility === elig
                        ? "bg-primary text-white font-semibold"
                        : "text-text-secondary hover:bg-background hover:text-primary"
                    )}
                  >
                    <span className="truncate">{elig}</span>
                    {filters.eligibility === elig && (
                      <Check size={14} className="text-cyan shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Drawer Footer */}
          <div className="border-t border-border p-4 bg-white flex gap-3">
            <button
              type="button"
              onClick={onClearFilters}
              className="flex-1 rounded-xl border border-border py-2.5 text-xs font-bold text-text-secondary hover:bg-slate-50 transition-colors"
            >
              Reset All
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl bg-blue py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-hover transition-colors"
            >
              Show {totalFilteredCount} Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
