"use client";

import React from "react";
import { heroContent } from "@/data/hero";

export function HeroContent({ heading = heroContent.heading }) {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 pt-1 pb-2 sm:pb-4">
      <h1
        className="font-norsy text-white font-bold text-[68px] xs:text-[76px] sm:text-[88px] md:text-[104px] lg:text-[120.89px] leading-[0.95] sm:leading-[1.0] lg:leading-[114.85px] select-none max-w-fit"
        style={{
          fontFamily: "var(--font-norsy-family), 'Norsy', sans-serif",
          fontWeight: 700,
          WebkitTextStroke: "0.8px currentColor",
          letterSpacing: "0.3px",
        }}
      >
        Your tribe<br />
        is out<br />
        there.
      </h1>
    </div>
  );
}
