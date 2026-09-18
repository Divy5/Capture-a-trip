"use client";

import React from "react";

export function FooterSocials({ socials = [] }) {
  return (
    <div aria-label="Social links" className="flex items-center justify-center md:justify-start gap-[8px]">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="w-[36px] h-[36px] rounded-full bg-[#FFFFFF14] border border-[#FFFFFF1A] flex items-center justify-center text-[#FFFFFF80] font-[var(--font-dm-sans-family)] text-[12px] font-bold leading-[16px] hover:text-white hover:bg-[#008342] hover:border-[#008342] hover:scale-105 transition-all duration-200 cursor-pointer active:scale-95 shrink-0"
        >
          {social.label}
        </a>
      ))}
    </div>
  );
}
