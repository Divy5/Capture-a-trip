"use client";

import React from "react";

export function SearchField({
  icon: Icon,
  label,
  value,
  onClick,
  isOpen,
  hasChevron = false,
  className = "",
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      className={`flex items-center gap-[12px] h-[69px] px-5 py-4 text-left transition-colors rounded-full hover:bg-white/60 cursor-pointer group focus:outline-none ${className}`}
    >
      {/* Icon Circle Container */}
      <div className="w-[32px] h-[32px] rounded-full bg-[#ECFFF5] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
        {Icon && <Icon className="w-[15px] h-[15px] text-[#008342]" />}
      </div>

      {/* Label + Selected Value */}
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-[#0D1A0F99] font-[var(--font-aktiv-bold)] text-[12px] font-bold leading-[15px] tracking-[1px] uppercase truncate">
          {label}
        </span>
        <div className="flex items-center gap-1">
          <span className="text-[#0D1A0F73] font-[var(--font-aktiv-regular)] text-[14px] font-normal leading-[20px] tracking-[0px] truncate">
            {value}
          </span>
          {hasChevron && (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={`text-[#0D1A0F99] transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <path
                d="M2.5 4.5L6 8L9.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    </button>
  );
}
