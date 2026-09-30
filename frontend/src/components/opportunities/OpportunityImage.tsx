"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface OpportunityImageProps {
  src?: string | null;
  alt: string;
  aspectRatio?: "video" | "wide" | "square" | "portrait" | "auto";
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  fallbackCategory?: string;
  fallbackIcon?: React.ComponentType<{ className?: string; size?: number }>;
  fill?: boolean;
}

export function OpportunityImage({
  src,
  alt,
  aspectRatio = "video",
  className,
  imageClassName,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  fallbackCategory,
  fallbackIcon: FallbackIcon = Sparkles,
  fill = true,
}: OpportunityImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getAspectClass = () => {
    switch (aspectRatio) {
      case "video":
        return "aspect-[16/10]";
      case "wide":
        return "aspect-[16/9]";
      case "square":
        return "aspect-square";
      case "portrait":
        return "aspect-[3/4]";
      case "auto":
        return "";
      default:
        return "aspect-[16/10]";
    }
  };

  const isLocalSvg = typeof src === "string" && src.endsWith(".svg");

  if (!src || hasError) {
    return (
      <div
        className={cn(
          "relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-deep-navy via-slate-900 to-[#122146] text-white p-4 select-none",
          getAspectClass(),
          className
        )}
        aria-label={alt}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-2">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-cyan-light shadow-inner">
            <FallbackIcon size={20} className="sm:size-6" />
          </div>
          {fallbackCategory && (
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-light border border-white/10">
              {fallbackCategory}
            </span>
          )}
          <span className="text-xs font-semibold text-slate-300 line-clamp-1 max-w-[85%]">
            {alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-slate-100",
        getAspectClass(),
        className
      )}
    >
      {isLoading && (
        <div
          className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200"
          aria-hidden="true"
        />
      )}

      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          unoptimized={isLocalSvg}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          onLoad={() => setIsLoading(false)}
          className={cn(
            "object-cover transition-transform duration-500 ease-out group-hover:scale-105",
            isLoading ? "opacity-0" : "opacity-100",
            imageClassName
          )}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={800}
          height={500}
          priority={priority}
          unoptimized={isLocalSvg}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          onLoad={() => setIsLoading(false)}
          className={cn(
            "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105",
            isLoading ? "opacity-0" : "opacity-100",
            imageClassName
          )}
        />
      )}
    </div>
  );
}
