"use client";

import React from "react";

export function AnalysisStatus({
  statusText = "Analysis complete",
  fileName = "alaska_trip.pdf",
  isAnalyzing = false,
}) {
  return (
    <div className="w-full max-w-[280px] h-[19px] flex items-center justify-between">
      <div className="flex items-center gap-2">
        {/* Green Status Dot */}
        <span
          className={`w-[10px] h-[10px] rounded-full bg-[#52C47C] inline-block ${
            isAnalyzing ? "animate-ping" : ""
          }`}
        />
        <span className="text-black font-[var(--font-manrope-family)] text-[14px] font-semibold leading-none">
          {isAnalyzing ? "Analyzing trip..." : statusText}
        </span>
      </div>
      <span className="text-[#6A6A6A] font-[var(--font-manrope-family)] text-[12px] font-normal leading-none truncate max-w-[100px]">
        {fileName}
      </span>
    </div>
  );
}
