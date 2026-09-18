"use client";

import React from "react";
import Image from "next/image";
import { heroAssets } from "@/data/hero";

export function PlanWithCattieButton({ onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-[8px] h-[46px] px-[24px] py-[12px] rounded-full bg-white border border-[#FFFFFF4D] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(0,0,0,0.10)] transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer shrink-0 ${className}`}
      style={{ minWidth: "179px" }}
    >
      <div className="w-[14px] h-[14px] relative shrink-0 flex items-center justify-center">
        <Image
          src={heroAssets.cattieIcon}
          alt="Cattie Icon"
          width={14}
          height={14}
          className="object-contain w-full h-full"
        />
      </div>
      <span className="text-[#008342] font-[var(--font-dm-sans-family)] text-[14px] font-semibold leading-[20px] whitespace-nowrap">
        Plan with Cattie
      </span>
    </button>
  );
}
