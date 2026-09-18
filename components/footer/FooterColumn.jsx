"use client";

import React, { useState } from "react";

export function FooterColumn({ title, links = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col border-b border-white/10 lg:border-none py-3 lg:py-0 transition-all">
      {/* Accordion Toggle Header for Mobile & Tablet (< 1024px) & Static Header for Desktop (>= 1024px) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2 lg:py-0 text-left focus:outline-none cursor-pointer lg:cursor-default group"
      >
        <h3 className="text-[#FFFFFF99] font-[var(--font-aktiv-medium)] text-[14px] font-normal leading-[20px] tracking-[0px] text-left group-hover:text-white transition-colors">
          {title}
        </h3>

        {/* Chevron Dropdown Icon for Mobile & Tablet (< 1024px) */}
        <div className="flex lg:hidden items-center justify-center w-6 h-6 rounded-full bg-white/5 border border-white/10 shrink-0 text-white/70 ml-2">
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[#008342]" : ""
              }`}
          >
            <path d="M2.5 4.5L6 8L9.5 4.5" />
          </svg>
        </div>
      </button>

      {/* Accordion Links List: Collapsible (< 1024px), Always Visible on Desktop (>= 1024px) */}
      <div
        className={`w-full transition-all duration-300 ease-in-out overflow-hidden ${isOpen
            ? "max-h-[300px] opacity-100 mt-3 mb-2"
            : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100 lg:mt-3 lg:mb-0"
          }`}
      >
        <ul className="flex flex-col gap-2 items-start text-left">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[#FFFFFF59] font-[var(--font-aktiv-regular)] text-[14px] font-normal leading-[20px] tracking-[0px] hover:text-white hover:underline transition-colors duration-200 block py-0.5 lg:py-0"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
