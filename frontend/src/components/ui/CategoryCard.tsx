import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/types";

interface CategoryCardProps {
  category: Category;
  className?: string;
  variant?: "default" | "highlighted" | "cyan";
}

export function CategoryCard({ category, className, variant = "default" }: CategoryCardProps) {
  const { type, label, description, iconKey } = category;
  
  return (
    <a
      href={`#${type}`}
      className={cn(
        "group relative flex min-w-[150px] flex-col items-center text-center justify-center gap-4 rounded-md p-5 transition-all duration-200 hover:-translate-y-1 shadow-card hover:shadow-hover hover:border-cyan-light",
        variant === "default" && "bg-white border border-border",
        variant === "highlighted" && "bg-pink-soft border border-pink",
        variant === "cyan" && "bg-cyan-surface border border-cyan-light",
        className
      )}
      aria-label={`Explore ${label}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-primary bg-background">
        <CategoryIcon iconKey={iconKey} className="h-7 w-7" />
      </div>
      
      <div className="flex flex-col gap-1 w-full px-1">
        <h3 className="text-[14px] font-bold text-text-primary">{label}</h3>
        <p className="text-[12px] text-text-secondary leading-snug">{description}</p>
      </div>
    </a>
  );
}
