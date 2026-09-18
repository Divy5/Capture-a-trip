"use client";

import React from "react";
import { PoweredByAI } from "./PoweredByAI";
import { AnalyzeTripButton } from "./AnalyzeTripButton";
import { tripAnalyzerData } from "@/data/tripAnalyzer";

export function AnalyzerContent({ onAnalyzeClick }) {
  return (
    <div className="w-full max-w-[599px] lg:max-w-[480px] xl:max-w-[599px] flex flex-col gap-3.5 sm:gap-4 xl:gap-5 items-start text-left flex-1 min-w-0 shrink-0">
      {/* 1. Powered by AI Pill */}
      <div className="w-full flex items-center justify-start">
        <PoweredByAI text={tripAnalyzerData.badge} />
      </div>

      {/* 2. Main Heading */}
      <div className="w-full">
        <h2
          className="text-[#0D1A0F] font-norsy font-[var(--font-norsy-family)] font-semibold text-[34px] sm:text-[42px] md:text-[48px] lg:text-[clamp(46px,3.8vw,56px)] xl:text-[64px] leading-[1.12] xl:leading-[74px]"
          style={{
            fontFamily: "var(--font-norsy-family), 'Norsy', sans-serif",
            fontWeight: 600,
            WebkitTextStroke: "0.35px currentColor",
          }}
        >
          {tripAnalyzerData.headingPart1}
          <br className="hidden sm:inline" />{" "}
          <span className="text-[#008342]">
            {tripAnalyzerData.headingPart2}
          </span>
        </h2>
      </div>

      {/* 3. Description */}
      <div className="w-full max-w-[561px]">
        <p className="text-[#0D1A0F8C] font-[var(--font-aktiv-regular)] text-[14.5px] sm:text-[15.5px] xl:text-[16px] leading-[22px] sm:leading-[25px] xl:leading-[26px] tracking-[0px] text-left">
          {tripAnalyzerData.description}
        </p>
      </div>

      {/* 4. CTA Button + Supporting Text */}
      <div className="w-full max-w-[571px] pt-1 sm:pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 sm:gap-4">
        <AnalyzeTripButton onClick={onAnalyzeClick}>
          {tripAnalyzerData.ctaText}
        </AnalyzeTripButton>
        <span className="text-[#0D1A0F73] font-[var(--font-aktiv-regular)] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] tracking-[0px] text-left">
          {tripAnalyzerData.supportingText}
        </span>
      </div>
    </div>
  );
}
