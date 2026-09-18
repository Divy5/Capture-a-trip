"use client";

import React from "react";

export function PoweredByAI({ text = "Powered by AI", className = "" }) {
  return (
    <div
      className={`inline-flex items-center justify-center gap-[8px] h-[26px] px-[12px] py-[4px] rounded-full bg-[#ECFFF5] border border-[#0083421F] border-t-[#0083421F] shrink-0 min-w-[124px] ${className}`}
    >
      {/* 4-point sparkle AI icon (12px x 12px, #008342) */}
      <svg
        width="12"
        height="12"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M8 0L9.80385 6.19615L16 8L9.80385 9.80385L8 16L6.19615 9.80385L0 8L6.19615 6.19615L8 0Z"
          fill="#008342"
        />
      </svg>
      <span className="text-[#008342] font-[var(--font-aktiv-regular)] text-[12px] font-normal leading-[16px] tracking-[0px] whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}
