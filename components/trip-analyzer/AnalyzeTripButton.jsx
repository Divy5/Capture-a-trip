"use client";

import React from "react";

export function AnalyzeTripButton({ onClick, className = "", children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-[8px] h-[52px] sm:h-[56px] px-[24px] sm:px-[32px] py-[14px] sm:py-[16px] rounded-full bg-[#008342] shadow-[0px_4px_20px_0px_rgba(0,131,66,0.3)] transition-transform hover:scale-[1.02] hover:bg-[#007038] active:scale-[0.98] cursor-pointer shrink-0 select-none w-full sm:w-auto min-w-0 sm:min-w-[245px] max-w-full ${className}`}
    >
      {/* Magic Wand / Sparkle Icon (16px x 16px, white) */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M8 0L9.80385 6.19615L16 8L9.80385 9.80385L8 16L6.19615 9.80385L0 8L6.19615 6.19615L8 0Z"
          fill="white"
        />
      </svg>
      <span className="text-white font-[var(--font-aktiv-bold)] text-[15px] sm:text-[16px] font-bold leading-[24px] text-center whitespace-nowrap">
        {children || "Analyse My Trip Plan"}
      </span>
    </button>
  );
}
