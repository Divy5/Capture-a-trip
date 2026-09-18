"use client";

import React from "react";

export function MetricRow({ label, score, max = 10, fillPercentage = 90 }) {
  return (
    <div className="w-full max-w-[280px] h-[18px] flex items-center justify-between gap-2">
      {/* Metric Title */}
      <span className="text-[#6A6A6A] font-[var(--font-manrope-family)] text-[12px] font-medium leading-none shrink-0 truncate max-w-[110px]">
        {label}
      </span>

      {/* Progress Fill Bar */}
      <div className="flex-1 h-[6px] bg-[#E0F5E9] rounded-full overflow-hidden mx-1">
        <div
          className="h-full bg-[#52C47C] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${fillPercentage}%` }}
        />
      </div>

      {/* Numeric Score */}
      <span className="text-black font-[var(--font-manrope-family)] text-[13px] font-bold leading-none text-right shrink-0">
        {score}/{max}
      </span>
    </div>
  );
}
