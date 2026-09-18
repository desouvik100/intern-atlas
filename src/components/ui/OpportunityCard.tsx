import { Bookmark, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/ui/LogoMark";
import type { Opportunity } from "@/lib/types";

interface OpportunityCardProps {
  opportunity: Opportunity;
  className?: string;
}

export function OpportunityCard({ opportunity, className }: OpportunityCardProps) {
  const { title, organization, location, badges, timeLabel, logoUrl } = opportunity;

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-border bg-white p-4 shadow-card",
        "transition-all duration-200 cursor-pointer",
        "hover:-translate-y-1 hover:border-cyan-light hover:shadow-hover",
        className
      )}
      tabIndex={0}
    >
      <div className="flex flex-col gap-3">
        {/* Logo */}
        <div className="flex h-10 w-10 items-center justify-center">
          <LogoMark src={logoUrl} name={organization || title} />
        </div>

        {/* Title & Org */}
        <div className="flex flex-col mt-1">
          <h3 className="text-[15px] font-bold leading-snug text-text-primary">{title}</h3>
          <p className="mt-0.5 text-[12.5px] font-medium text-text-secondary">{organization}</p>
          <div className="flex items-center gap-1.5 mt-1.5 text-text-secondary">
            <MapPin size={13} />
            <span className="text-[11.5px] font-medium">{location}</span>
          </div>
        </div>

        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {badges.map((b) => (
              <span key={b} className="rounded-full border border-border-light bg-background px-2.5 py-0.5 text-[10px] font-bold text-blue">
                {b}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-border-light pt-3">
        <span className="text-[11.5px] font-semibold text-text-muted">{timeLabel}</span>
        <button className="text-text-muted transition-colors hover:text-blue" aria-label="Save opportunity">
          <Bookmark size={15} strokeWidth={2.5} />
        </button>
      </div>
    </article>
  );
}
