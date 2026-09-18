"use client";

import React from "react";
import { heroContent } from "@/data/hero";

export function PopularDestinations({
  selectedDestination,
  onSelectDestination,
}) {
  const destinations = heroContent.popularDestinations;

  return (
    <div className="w-full max-w-[768px] mx-auto pt-1 sm:pt-3 pb-1 flex flex-wrap items-center gap-2 px-5 sm:px-6 md:px-0">
      <span className="text-white/50 font-[var(--font-aktiv-regular)] text-[12px] font-normal leading-[16px]">
        Popular:
      </span>
      <div className="flex flex-wrap items-center gap-2">
        {destinations.map((dest) => {
          const isSelected = selectedDestination === dest;
          return (
            <button
              key={dest}
              type="button"
              onClick={() => onSelectDestination(dest)}
              className={`h-[26px] px-3 py-1 rounded-full border text-[12px] font-normal leading-[16px] text-center transition-all cursor-pointer ${
                isSelected
                  ? "border-[#008342] bg-[#008342]/30 text-white font-medium"
                  : "border-white/25 bg-white/5 hover:bg-white/15 text-white/70 hover:text-white"
              }`}
            >
              {dest}
            </button>
          );
        })}
      </div>
    </div>
  );
}
