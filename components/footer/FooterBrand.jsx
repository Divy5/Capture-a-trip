"use client";

import React from "react";
import Image from "next/image";
import { FooterSocials } from "./FooterSocials";
import { heroAssets } from "@/data/hero";

export function FooterBrand({ tagline, socials, logo }) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left w-full max-w-[218.75px] mx-auto md:mx-0">
      {/* Brand Logo */}
      <a href="#" aria-label="Capture a Trip Home" className="block shrink-0 hover:opacity-90 transition-opacity">
        <Image
          src={logo || heroAssets.logo}
          alt="Capture a Trip Logo"
          width={110}
          height={32}
          className="w-auto h-[32px] max-w-[120px] object-contain"
        />
      </a>

      {/* Tagline Text (pt-4, font-aktiv-regular, 14px, 22.75px leading, #FFFFFF59) */}
      <div className="pt-[16px] w-full">
        <p className="text-[#FFFFFF59] font-[var(--font-aktiv-regular)] font-normal text-[14px] leading-[22.75px] tracking-[0px]">
          {tagline}
        </p>
      </div>

      {/* Social Icons Pills (pt-4, gap-2) */}
      <div className="pt-[16px] w-full">
        <FooterSocials socials={socials} />
      </div>
    </div>
  );
}
