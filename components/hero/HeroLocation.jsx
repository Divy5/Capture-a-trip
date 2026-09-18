"use client";

import React from "react";
import { heroContent } from "@/data/hero";

export function HeroLocation({ location = heroContent.location }) {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 pt-2 sm:pt-4 pb-1">
      <div className="flex items-center gap-2">
        <span className="w-4 h-[1px] bg-white/60 inline-block"></span>
        <span className="text-white/60 font-[var(--font-aktiv-bold)] text-[12px] font-bold leading-[16px] tracking-[0.3px] uppercase">
          {location}
        </span>
      </div>
    </div>
  );
}
