"use client";

import React from "react";

export function EmiNotice() {
  return (
    <div className="flex items-center gap-2 py-1">
      <span className="w-[7px] h-[7px] rounded-full bg-[#008342] inline-block shrink-0" />
      <p className="text-[#52525B] font-[var(--font-aktiv-regular)] text-[13px] sm:text-[14px] font-normal leading-[20px]">
        All trips available on{" "}
        <span className="font-bold italic text-[#0D1A0F]">0% no-cost EMI</span> — pay monthly, travel now.
      </p>
    </div>
  );
}
