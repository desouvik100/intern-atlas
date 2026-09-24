import Link from "next/link";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { cn } from "@/lib/utils";
import type { Category, OpportunityType } from "@/lib/types";

interface CategoryCardProps {
  category: Category;
  className?: string;
  variant?: "default" | "highlighted" | "cyan";
}

const categoryLinks: Record<OpportunityType, string> = {
  internship: "/internships",
  job: "/jobs",
  competition: "/competitions",
  hackathon: "/hackathons",
  scholarship: "/scholarships",
  event: "/events",
  contest: "/competitions",
  quiz: "/competitions",
  workshops: "/workshops",
  college_fest: "/college-festivals",
  cultural: "/cultural-events",
};

export function CategoryCard({
  category,
  className,
  variant = "default",
}: CategoryCardProps) {
  const { type, label, description, iconKey } = category;
  const href = categoryLinks[type];

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex min-w-[150px] flex-col items-center justify-center gap-4 rounded-md p-5 text-center shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-cyan-light hover:shadow-hover",
        variant === "default" && "border border-border bg-white",
        variant === "highlighted" && "border border-pink bg-pink-soft",
        variant === "cyan" && "border border-cyan-light bg-cyan-surface",
        className
      )}
      aria-label={`Explore ${label}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background text-primary">
        <CategoryIcon iconKey={iconKey} className="h-7 w-7" />
      </div>

      <div className="flex w-full flex-col gap-1 px-1">
        <h3 className="text-[14px] font-bold text-text-primary">{label}</h3>
        <p className="text-[12px] leading-snug text-text-secondary">
          {description}
        </p>
      </div>
    </Link>
  );
}