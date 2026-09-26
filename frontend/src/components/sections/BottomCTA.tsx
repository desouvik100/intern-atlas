import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

import { Button } from "@/components/ui/button";

export function BottomCTA() {
  return (
    <section className="bg-[#071c46] py-14 text-white">
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <BriefcaseBusiness
          size={36}
          className="mx-auto text-cyan-300"
        />

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-cyan-300">
          Start exploring
        </p>

        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
          Find an internship that helps you move forward.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-blue-100">
          Browse available internships, review the complete role information
          and apply through InternAtlas.
        </p>

        <Button asChild className="mt-7 h-11 px-7">
          <Link href="/internships">
            Browse internships
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}