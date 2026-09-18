"use client";

import React, { useState, useEffect, useRef } from "react";
import { searchTrips } from "@/lib/searchTrips";

export function HeroSearch({
  destination,
  setDestination,
  when,
  setWhen,
  budget,
  setBudget,
  onSearchResults,
}) {
  const [openDropdown, setOpenDropdown] = useState(null); // 'dest' | 'when' | 'budget' | null
  const searchContainerRef = useRef(null);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setOpenDropdown(null);
    const results = searchTrips({ destination, when, budget });
    if (onSearchResults) {
      onSearchResults(results, { destination, when, budget });
    }
  };

  // SVG Icons
  const LocationIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const CalendarIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );

  const WalletIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
      <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
      <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
    </svg>
  );

  const destinationOptions = [
    "Untamed.",
    "Leh Ladakh",
    "Kashmir",
    "Goa",
    "Spiti Valley",
    "Thailand",
  ];

  const whenOptions = [
    "Someday.",
    "This Month",
    "Next Month",
    "Next 3 Months",
  ];

  const budgetOptions = [
    "Priceless.",
    "Under ₹20,000",
    "₹20,000 - ₹50,000",
    "₹50,000+",
  ];

  return (
    <div
      ref={searchContainerRef}
      className="w-full max-w-[768px] mx-auto relative z-40 my-1.5 sm:my-3 px-5 sm:px-6 md:px-0"
    >
      {/* DESKTOP SEARCH BAR (Width: 768px, Height: 71px, Radius: 100px) */}
      <form
        onSubmit={handleSearchSubmit}
        className="hidden md:flex w-full max-w-[768px] h-[71px] rounded-[100px] border border-white/90 bg-[#FFFFFFF7] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.18)] backdrop-blur-md p-3.5 items-center justify-between relative transition-all"
      >
        {/* Field 1: WHERE TO?  */}
        <div className="relative flex-1">
          <button
            type="button"
            onClick={() => setOpenDropdown(openDropdown === "dest" ? null : "dest")}
            className="w-full h-[55px] px-5 py-2 flex items-center gap-[12px] text-left rounded-full transition-colors cursor-pointer group"
          >
            <div className="w-[32px] h-[32px] rounded-full bg-[#ECFFF5] flex items-center justify-center shrink-0">
              <LocationIcon className="w-[15px] h-[15px] text-[#008342]" />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[#0D1A0F99] font-[var(--font-aktiv-bold)] text-[12px] font-bold leading-[15px] tracking-[1px] uppercase truncate">
                WHERE TO?
              </span>
              <span className="text-[#0D1A0F73] font-[var(--font-aktiv-regular)] font-normal text-[14px] leading-[20px] tracking-[0px] truncate">
                {destination}
              </span>
            </div>
          </button>

          {/* Dropdown Menu with Custom Vertical Scrollbar */}
          {openDropdown === "dest" && (
            <div className="absolute top-full left-0 mt-3 w-72 rounded-2xl bg-white border border-gray-100 shadow-[0px_25px_60px_rgba(0,0,0,0.3)] p-2.5 z-50 animate-dropdown">
              <div className="text-[11px] font-bold text-[#008342] px-3 py-1.5 uppercase tracking-wider bg-[#ECFFF5] rounded-lg mb-2">
                Select Destination
              </div>
              <div className="flex flex-col gap-1 max-h-56 overflow-y-auto custom-vertical-scrollbar pr-1">
                {destinationOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setDestination(opt);
                      setOpenDropdown(null);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm rounded-xl transition-all flex items-center justify-between ${destination === opt
                        ? "bg-[#ECFFF5] text-[#008342] font-bold"
                        : "text-gray-700 hover:bg-gray-100/80 font-medium"
                      }`}
                  >
                    <span>{opt}</span>
                    {destination === opt && (
                      <svg className="w-4 h-4 text-[#008342]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Vertical Divider */}
        <div className="w-[1px] h-[32px] bg-[#0D1A0F1F] shrink-0" />

        {/* Field 2: WHEN? */}
        <div className="relative flex-1">
          <button
            type="button"
            onClick={() => setOpenDropdown(openDropdown === "when" ? null : "when")}
            className="w-full h-[55px] px-5 py-2 flex items-center gap-[12px] text-left rounded-full transition-colors cursor-pointer group"
          >
            <div className="w-[32px] h-[32px] rounded-full bg-[#ECFFF5] flex items-center justify-center shrink-0">
              <CalendarIcon className="w-[15px] h-[15px] text-[#008342]" />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[#0D1A0F99] font-[var(--font-aktiv-bold)] text-[12px] font-bold leading-[15px] tracking-[1px] uppercase truncate">
                WHEN?
              </span>
              <span className="text-[#0D1A0F73] font-[var(--font-aktiv-regular)] font-normal text-[14px] leading-[20px] tracking-[0px] truncate">
                {when}
              </span>
            </div>
          </button>

          {/* Dropdown Menu with Custom Vertical Scrollbar */}
          {openDropdown === "when" && (
            <div className="absolute top-full left-0 mt-3 w-64 rounded-2xl bg-white border border-gray-100 shadow-[0px_25px_60px_rgba(0,0,0,0.3)] p-2.5 z-50 animate-dropdown">
              <div className="text-[11px] font-bold text-[#008342] px-3 py-1.5 uppercase tracking-wider bg-[#ECFFF5] rounded-lg mb-2">
                Select Timeline
              </div>
              <div className="flex flex-col gap-1 max-h-56 overflow-y-auto custom-vertical-scrollbar pr-1">
                {whenOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setWhen(opt);
                      setOpenDropdown(null);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm rounded-xl transition-all flex items-center justify-between ${when === opt
                        ? "bg-[#ECFFF5] text-[#008342] font-bold"
                        : "text-gray-700 hover:bg-gray-100/80 font-medium"
                      }`}
                  >
                    <span>{opt}</span>
                    {when === opt && (
                      <svg className="w-4 h-4 text-[#008342]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Vertical Divider */}
        <div className="w-[1px] h-[32px] bg-[#0D1A0F1F] shrink-0" />

        {/* Field 3: BUDGET */}
        <div className="relative flex-1">
          <button
            type="button"
            onClick={() => setOpenDropdown(openDropdown === "budget" ? null : "budget")}
            className="w-full h-[55px] px-5 py-2 flex items-center gap-[12px] text-left rounded-full transition-colors cursor-pointer group"
          >
            <div className="w-[32px] h-[32px] rounded-full bg-[#ECFFF5] flex items-center justify-center shrink-0">
              <WalletIcon className="w-[15px] h-[15px] text-[#008342]" />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[#0D1A0F99] font-[var(--font-aktiv-bold)] text-[12px] font-bold leading-[15px] tracking-[1px] uppercase truncate">
                BUDGET
              </span>
              <div className="flex items-center gap-1">
                <span className="text-[#0D1A0F73] font-[var(--font-aktiv-regular)] font-normal text-[14px] leading-[20px] tracking-[0px] truncate">
                  {budget}
                </span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={`text-[#0D1A0F99] transition-transform duration-200 shrink-0 ${openDropdown === "budget" ? "rotate-180" : ""
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
              </div>
            </div>
          </button>

          {/* Dropdown Menu with Custom Vertical Scrollbar */}
          {openDropdown === "budget" && (
            <div className="absolute top-full right-0 mt-3 w-64 rounded-2xl bg-white border border-gray-100 shadow-[0px_25px_60px_rgba(0,0,0,0.3)] p-2.5 z-50 animate-dropdown">
              <div className="text-[11px] font-bold text-[#008342] px-3 py-1.5 uppercase tracking-wider bg-[#ECFFF5] rounded-lg mb-2">
                Select Budget
              </div>
              <div className="flex flex-col gap-1 max-h-56 overflow-y-auto custom-vertical-scrollbar pr-1">
                {budgetOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setBudget(opt);
                      setOpenDropdown(null);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm rounded-xl transition-all flex items-center justify-between ${budget === opt
                        ? "bg-[#ECFFF5] text-[#008342] font-bold"
                        : "text-gray-700 hover:bg-gray-100/80 font-medium"
                      }`}
                  >
                    <span>{opt}</span>
                    {budget === opt && (
                      <svg className="w-4 h-4 text-[#008342]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search Button (Only this button has active hover effect) */}
        <button
          type="submit"
          className="w-[154px] h-[44px] px-[24px] py-[12px] rounded-full bg-[#008342] text-white font-[var(--font-aktiv-bold)] text-[14px] font-bold leading-[20px] flex items-center justify-center gap-2 shadow-[0px_4px_20px_0px_rgba(0,131,66,0.35)] hover:bg-[#007038] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shrink-0 ml-1"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 16 16"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="7" cy="7" r="5" />
            <line x1="11" y1="11" x2="15" y2="15" />
          </svg>
          <span className="whitespace-nowrap">Search Trips</span>
        </button>
      </form>

      {/* MOBILE SEARCH BAR (< 768px: Sleek compact horizontal pill taking minimal space) */}
      <form
        onSubmit={handleSearchSubmit}
        className="flex md:hidden w-full max-w-[95%] mx-auto h-[54px] rounded-full border border-white/90 bg-[#FFFFFFF7] shadow-[0px_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-md p-1.5 flex-row items-center justify-between relative transition-all"
      >
        {/* Compact Field 1: WHERE TO? */}
        <div className="relative flex-1 min-w-0">
          <button
            type="button"
            onClick={() => setOpenDropdown(openDropdown === "dest" ? null : "dest")}
            className="w-full flex flex-col items-center justify-center text-center px-1"
          >
            <span className="text-[9px] xs:text-[10px] sm:text-[12px] font-[var(--font-aktiv-bold)] font-bold leading-[12px] sm:leading-[15px] tracking-[1px] text-[#0D1A0F99] uppercase truncate">WHERE TO?</span>
            <span className="text-[11px] xs:text-[12px] sm:text-[14px] font-[var(--font-aktiv-regular)] font-normal leading-[16px] sm:leading-[20px] tracking-[0px] text-[#0D1A0F73] truncate w-full mt-0.5">{destination}</span>
          </button>

          {openDropdown === "dest" && (
            <div className="absolute top-full left-0 mt-3 w-56 rounded-2xl bg-white border border-gray-100 shadow-2xl p-2 z-50 animate-dropdown">
              <div className="flex flex-col gap-1 max-h-48 overflow-y-auto custom-vertical-scrollbar">
                {destinationOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => { setDestination(opt); setOpenDropdown(null); }}
                    className={`w-full text-left px-3 py-2 text-xs rounded-xl flex items-center justify-between ${destination === opt ? "bg-[#ECFFF5] text-[#008342] font-bold" : "text-gray-700 hover:bg-gray-50"}`}
                  >
                    <span>{opt}</span>
                    {destination === opt && <span className="text-[#008342]">✓</span>}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="w-[1px] h-6 bg-[#0D1A0F15] shrink-0" />

        {/* Compact Field 2: WHEN? */}
        <div className="relative flex-1 min-w-0">
          <button
            type="button"
            onClick={() => setOpenDropdown(openDropdown === "when" ? null : "when")}
            className="w-full flex flex-col items-center justify-center text-center px-1"
          >
            <span className="text-[9px] xs:text-[10px] sm:text-[12px] font-[var(--font-aktiv-bold)] font-bold leading-[12px] sm:leading-[15px] tracking-[1px] text-[#0D1A0F99] uppercase truncate">WHEN?</span>
            <span className="text-[11px] xs:text-[12px] sm:text-[14px] font-[var(--font-aktiv-regular)] font-normal leading-[16px] sm:leading-[20px] tracking-[0px] text-[#0D1A0F73] truncate w-full mt-0.5">{when}</span>
          </button>

          {openDropdown === "when" && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-2xl bg-white border border-gray-100 shadow-2xl p-2 z-50 animate-dropdown">
              <div className="flex flex-col gap-1 max-h-48 overflow-y-auto custom-vertical-scrollbar">
                {whenOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => { setWhen(opt); setOpenDropdown(null); }}
                    className={`w-full text-left px-3 py-2 text-xs rounded-xl flex items-center justify-between ${when === opt ? "bg-[#ECFFF5] text-[#008342] font-bold" : "text-gray-700 hover:bg-gray-50"}`}
                  >
                    <span>{opt}</span>
                    {when === opt && <span className="text-[#008342]">✓</span>}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="w-[1px] h-6 bg-[#0D1A0F15] shrink-0" />

        {/* Compact Field 3: BUDGET */}
        <div className="relative flex-1 min-w-0">
          <button
            type="button"
            onClick={() => setOpenDropdown(openDropdown === "budget" ? null : "budget")}
            className="w-full flex flex-col items-center justify-center text-center px-1"
          >
            <span className="text-[9px] xs:text-[10px] sm:text-[12px] font-[var(--font-aktiv-bold)] font-bold leading-[12px] sm:leading-[15px] tracking-[1px] text-[#0D1A0F99] uppercase truncate">BUDGET</span>
            <span className="text-[11px] xs:text-[12px] sm:text-[14px] font-[var(--font-aktiv-regular)] font-normal leading-[16px] sm:leading-[20px] tracking-[0px] text-[#0D1A0F73] truncate w-full mt-0.5">{budget}</span>
          </button>

          {openDropdown === "budget" && (
            <div className="absolute top-full right-0 mt-3 w-52 rounded-2xl bg-white border border-gray-100 shadow-2xl p-2 z-50 animate-dropdown">
              <div className="flex flex-col gap-1 max-h-48 overflow-y-auto custom-vertical-scrollbar">
                {budgetOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => { setBudget(opt); setOpenDropdown(null); }}
                    className={`w-full text-left px-3 py-2 text-xs rounded-xl flex items-center justify-between ${budget === opt ? "bg-[#ECFFF5] text-[#008342] font-bold" : "text-gray-700 hover:bg-gray-50"}`}
                  >
                    <span>{opt}</span>
                    {budget === opt && <span className="text-[#008342]">✓</span>}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Compact Circular Search Button */}
        <button
          type="submit"
          aria-label="Search Trips"
          className="w-[42px] h-[42px] rounded-full bg-[#008342] text-white flex items-center justify-center shadow-[0px_4px_12px_rgba(0,131,66,0.35)] hover:bg-[#007038] hover:scale-105 active:scale-95 transition-all shrink-0 ml-1"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="7" cy="7" r="5" />
            <line x1="11" y1="11" x2="15" y2="15" />
          </svg>
        </button>
      </form>
    </div>
  );
}
