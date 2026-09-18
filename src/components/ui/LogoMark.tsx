"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  src?: string | null;
  name: string;
  className?: string;
  imageClassName?: string;
}

// Same palette the old hardcoded logoVariant switch used, picked from the
// organisation name so a company always gets the same colour.
const fallbackTones = [
  "bg-deep-navy text-white",
  "bg-blue text-white",
  "bg-pink text-white",
  "bg-editorial-red text-white",
  "bg-cyan text-primary",
  "bg-cyan-light text-primary",
  "bg-pink-soft text-pink",
];

function toneFor(name: string): string {
  let sum = 0;

  for (let index = 0; index < name.length; index += 1) {
    sum += name.charCodeAt(index);
  }

  return fallbackTones[sum % fallbackTones.length];
}

export function LogoMark({
  src,
  name,
  className,
  imageClassName,
}: LogoMarkProps) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <div
        className={cn(
          "flex h-11 w-11 items-center justify-center overflow-hidden rounded-[10px] border border-border bg-white",
          className,
        )}
      >
        {/* Plain img: logos are remote, arbitrary-origin URLs. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`${name} logo`}
          loading="lazy"
          className={cn("h-8 w-8 object-contain", imageClassName)}
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold",
        toneFor(name),
        className,
      )}
      aria-label={name}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}
