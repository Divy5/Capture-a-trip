"use client";

import React from "react";

export function ScoreCircle({ score = 8.5, maxScore = 10 }) {
  const percentage = (score / maxScore) * 100;
  const radius = 46;
  const circumference = 2 * Math.PI * radius; // ~289.02
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="w-full flex justify-center items-center py-2 px-2">
      <div className="relative w-[118px] h-[118px] flex items-center justify-center">
        {/* SVG Circular Ring (Slightly Larger Progress Bar) */}
        <svg className="w-[118px] h-[118px] transform -rotate-90" viewBox="0 0 110 110">
          {/* Background Track Circle */}
          <circle
            cx="55"
            cy="55"
            r={radius}
            stroke="#E0F5E9"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Active Green Progress Ring (Sharp Flat Edges) */}
          <circle
            cx="55"
            cy="55"
            r={radius}
            stroke="#52C47C"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="butt"
            fill="transparent"
            className="transition-all duration-700 ease-out"
          />
        </svg>

        {/* Center Rating Content (Bolder 8.5 Score) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span
            className="text-black font-[var(--font-outfit-family)] text-[42px] font-black leading-[1] tracking-tight"
            style={{ fontWeight: 900, WebkitTextStroke: "0.5px currentColor" }}
          >
            {score}
          </span>
          <span className="text-[#6A6A6A] font-[var(--font-manrope-family)] text-[11px] font-bold leading-[1] mt-1 uppercase tracking-wider">
            OUT OF {maxScore}
          </span>
        </div>
      </div>
    </div>
  );
}
