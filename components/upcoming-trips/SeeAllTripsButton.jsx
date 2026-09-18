"use client";

import React from "react";

export function SeeAllTripsButton({ onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-[8px] h-[56px] px-[32px] py-[16px] rounded-[100px] bg-white border-2 border-[#008342] hover:bg-[#ECFFF5] transition-all active:scale-95 cursor-pointer shadow-sm shrink-0 select-none ${className}`}
      style={{ minWidth: "173px" }}
    >
      <span className="text-[#008342] font-[var(--font-dm-sans-family)] text-[14px] font-semibold leading-[20px] text-center">
        See All Trips
      </span>
      <svg
        width="4"
        height="8"
        viewBox="0 0 4 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 text-[#008342]"
      >
        <path
          d="M0.75 0.75L3.25 4L0.75 7.25"
          stroke="#008342"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
