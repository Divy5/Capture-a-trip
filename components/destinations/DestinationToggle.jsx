"use client";

import React from "react";

export function DestinationToggle({ activeCategory, onToggleCategory }) {
  return (
    <div
      aria-label="Destination category filter"
      className="inline-flex items-center p-1 h-[38px] sm:h-[44px] rounded-full bg-[#ECFFF5] select-none shrink-0"
    >
      {/* India Tab */}
      <button
        type="button"
        aria-pressed={activeCategory === "india"}
        onClick={() => onToggleCategory("india")}
        className={`h-[30px] sm:h-[36px] px-3.5 sm:px-5 rounded-full text-[12px] sm:text-[14px] font-[var(--font-aktiv-bold)] font-bold leading-none text-center capitalize transition-all cursor-pointer whitespace-nowrap ${
          activeCategory === "india"
            ? "bg-[#008342] text-white shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]"
            : "bg-transparent text-[#0D1A0F] hover:text-[#008342]"
        }`}
      >
        India
      </button>

      {/* International Tab */}
      <button
        type="button"
        aria-pressed={activeCategory === "international"}
        onClick={() => onToggleCategory("international")}
        className={`h-[30px] sm:h-[36px] px-3.5 sm:px-5 rounded-full text-[12px] sm:text-[14px] font-[var(--font-aktiv-bold)] font-bold leading-none text-center capitalize transition-all cursor-pointer whitespace-nowrap ${
          activeCategory === "international"
            ? "bg-[#008342] text-white shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]"
            : "bg-transparent text-[#0D1A0F] hover:text-[#008342]"
        }`}
      >
        International
      </button>
    </div>
  );
}
