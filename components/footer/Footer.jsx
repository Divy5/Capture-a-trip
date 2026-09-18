"use client";

import React from "react";
import { FooterBrand } from "./FooterBrand";
import { FooterColumn } from "./FooterColumn";
import { footerData } from "@/data/footer";

export function Footer() {
  return (
    <footer
      id="about"
      aria-label="Site Footer"
      className="w-full max-w-[1440px] mx-auto bg-[#03100A] text-white py-[56px] px-5 sm:px-10 md:px-[64px] border-t border-[#FFFFFF0F] select-none"
    >
      <div className="w-full max-w-[1312px] mx-auto flex flex-col justify-between items-stretch">
        {/* footer grid: brand info + navigation columns */}
        <div className="w-full flex flex-col lg:grid lg:grid-cols-4 gap-6 lg:gap-[32px] justify-items-center items-center lg:items-start text-center">
          {/* brand logo & social links */}
          <div className="w-full mb-4 lg:mb-0 text-center flex justify-center">
            <FooterBrand
              logo={footerData.brand.logo}
              tagline={footerData.brand.tagline}
              socials={footerData.brand.socials}
            />
          </div>

          {/* navigation accordion columns */}
          {footerData.columns.map((col) => (
            <FooterColumn key={col.title} title={col.title} links={col.links} />
          ))}
        </div>

        {/* bottom copyright notice */}
        <div className="w-full pt-[40px]">
          <div className="w-full pt-[20px] border-t border-[#FFFFFF0F] flex flex-col items-center justify-center text-center gap-2">
            <p className="text-[#FFFFFF33] font-[var(--font-aktiv-regular)] font-normal text-[12px] leading-[16px] tracking-[0px] text-center">
              {footerData.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
