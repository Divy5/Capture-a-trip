"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { PlayWithCattieButton } from "./PlayWithCattieButton";
import { heroAssets } from "@/data/hero";

export function HeroNavbar({ onOpenCattie, onOpenLogin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Desktop active dropdown index
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null); // Mobile accordion index

  const navRef = useRef(null);

  // Close desktop dropdowns on click outside or escape key
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleDesktopDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileDropdown = (index) => {
    setMobileActiveDropdown(mobileActiveDropdown === index ? null : index);
  };

  const destinationsList = [
    { name: "Leh Ladakh", href: "#upcoming" },
    { name: "Kashmir", href: "#upcoming" },
    { name: "Spiti Valley", href: "#upcoming" },
    { name: "Goa", href: "#upcoming" },
    { name: "Thailand", href: "#upcoming" },
  ];

  const dealsList = [
    { name: "Early Bird Discounts", href: "#upcoming" },
    { name: "Group Tour Special", href: "#upcoming" },
    { name: "Weekend Getaways", href: "#upcoming" },
  ];

  const travelStylesList = [
    { name: "Backpacking Trips", href: "#upcoming" },
    { name: "Biking Expeditions", href: "#upcoming" },
    { name: "Treks & Hiking", href: "#upcoming" },
    { name: "Luxury & Stays", href: "#upcoming" },
  ];

  const moreAboutUsList = [
    { name: "Our Story", href: "#about" },
    { name: "Reviews & Media", href: "#reviews" },
    { name: "Safety & Captains", href: "#safety" },
  ];

  return (
    <header className="w-full max-w-[1278px] mx-auto pt-5 px-4 sm:px-6 lg:px-8 relative z-40 select-none">
      <nav
        ref={navRef}
        aria-label="Main Navigation"
        className="w-full h-[60px] px-4 sm:px-5 py-2.5 rounded-[28px] bg-white/20 border border-white/25 border-t-white/35 flex items-center justify-between shadow-[0px_8px_32px_rgba(0,0,0,0.25)] transition-all duration-300 relative z-50"
      >
        {/* brand logo */}
        <div className="flex items-center shrink-0">
          <a href="#" aria-label="Capture a Trip Home" className="block shrink-0">
            <Image
              src={heroAssets.logo}
              alt="Capture a Trip Logo"
              width={110}
              height={32}
              priority
              className="h-8 w-auto object-contain"
            />
          </a>
        </div>

        {/* desktop navigation links */}
        <div className="hidden lg:flex items-center justify-center gap-0.5 lg:gap-1.5 xl:gap-2 h-8 flex-1 max-w-[660px]">
          {/* destinations dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDesktopDropdown(0)}
              aria-expanded={activeDropdown === 0}
              className={`inline-flex items-center justify-center gap-1 lg:gap-1.5 h-8 px-2 lg:px-2.5 xl:px-3.5 rounded-full text-[12.5px] lg:text-[13px] xl:text-[14px] font-normal leading-none transition-all cursor-pointer whitespace-nowrap ${activeDropdown === 0
                ? "bg-white/25 text-white shadow-sm font-medium"
                : "bg-white/12 text-white/90 hover:text-white hover:bg-white/20"
                }`}
            >
              <span>Destinations</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-200 shrink-0 ${activeDropdown === 0 ? "rotate-180" : ""
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
            </button>

            {/* destinations popup menu */}
            {activeDropdown === 0 && (
              <div className="absolute top-full left-0 mt-3 w-52 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/25 border-t-white/35 p-2 shadow-[0px_8px_32px_rgba(0,0,0,0.25)] animate-dropdown z-50">
                <div className="text-[11px] font-bold text-white/60 uppercase tracking-wider px-3 py-1.5 border-b border-white/20 mb-1">
                  Popular Places
                </div>
                {destinationsList.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-[13.5px] font-medium text-white hover:bg-white/20 rounded-xl transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* deals menu */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDesktopDropdown(1)}
              aria-expanded={activeDropdown === 1}
              className={`inline-flex items-center justify-center gap-1 lg:gap-1.5 h-8 px-2 lg:px-2.5 xl:px-3.5 rounded-full text-[12.5px] lg:text-[13px] xl:text-[14px] font-normal leading-none transition-all cursor-pointer whitespace-nowrap ${activeDropdown === 1
                ? "bg-white/25 text-white shadow-sm font-medium"
                : "text-white/90 hover:text-white hover:bg-white/15"
                }`}
            >
              <span>Deals</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-200 shrink-0 ${activeDropdown === 1 ? "rotate-180" : ""
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
            </button>

            {activeDropdown === 1 && (
              <div className="absolute top-full left-0 mt-3 w-48 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/25 border-t-white/35 p-2 shadow-[0px_8px_32px_rgba(0,0,0,0.25)] animate-dropdown z-50">
                {dealsList.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-[13.5px] font-medium text-white hover:bg-white/20 rounded-xl transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* travel styles */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDesktopDropdown(2)}
              aria-expanded={activeDropdown === 2}
              className={`inline-flex items-center justify-center gap-1 lg:gap-1.5 h-8 px-2 lg:px-2.5 xl:px-3.5 rounded-full text-[12.5px] lg:text-[13px] xl:text-[14px] font-normal leading-none transition-all cursor-pointer whitespace-nowrap ${activeDropdown === 2
                ? "bg-white/25 text-white shadow-sm font-medium"
                : "text-white/90 hover:text-white hover:bg-white/15"
                }`}
            >
              <span>Travel Styles</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-200 shrink-0 ${activeDropdown === 2 ? "rotate-180" : ""
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
            </button>

            {activeDropdown === 2 && (
              <div className="absolute top-full left-0 mt-3 w-52 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/25 border-t-white/35 p-2 shadow-[0px_8px_32px_rgba(0,0,0,0.25)] animate-dropdown z-50">
                {travelStylesList.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-[13.5px] font-medium text-white hover:bg-white/20 rounded-xl transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* upcoming trips link */}
          <a
            href="#upcoming"
            className="inline-flex items-center justify-center h-8 px-2 lg:px-2.5 xl:px-3.5 rounded-full text-white/90 hover:text-white hover:bg-white/15 text-[12.5px] lg:text-[13px] xl:text-[14px] font-normal leading-none transition-colors whitespace-nowrap shrink-0"
          >
            Upcoming trips
          </a>

          {/* about us link */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDesktopDropdown(4)}
              aria-expanded={activeDropdown === 4}
              className={`inline-flex items-center justify-center gap-1 lg:gap-1.5 h-8 px-2 lg:px-2.5 xl:px-3.5 rounded-full text-[12.5px] lg:text-[13px] xl:text-[14px] font-normal leading-none transition-all cursor-pointer whitespace-nowrap ${activeDropdown === 4
                ? "bg-white/25 text-white shadow-sm font-medium"
                : "text-white/90 hover:text-white hover:bg-white/15"
                }`}
            >
              <span>More About Us</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-200 shrink-0 ${activeDropdown === 4 ? "rotate-180" : ""
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
            </button>

            {activeDropdown === 4 && (
              <div className="absolute top-full left-0 mt-3 w-48 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/25 border-t-white/35 p-2 shadow-[0px_8px_32px_rgba(0,0,0,0.25)] animate-dropdown z-50">
                {moreAboutUsList.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-[13.5px] font-medium text-white hover:bg-white/20 rounded-xl transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* login button and cattie mascot CTA */}
        <div className="hidden sm:flex items-center justify-end gap-2 xl:gap-3 h-[34px] shrink-0">
          <button
            type="button"
            onClick={onOpenLogin}
            className="h-8 px-3.5 py-1 rounded-full text-white/90 hover:text-white hover:bg-white/15 text-[14px] font-bold leading-none transition-colors cursor-pointer text-center inline-flex items-center justify-center"
          >
            Login
          </button>
          <PlayWithCattieButton onClick={onOpenCattie} />
        </div>

        {/* hamburger toggle for mobile view */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <button
            type="button"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:bg-white/15 rounded-xl transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* mobile drawer navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 p-5 rounded-3xl bg-white/20 backdrop-blur-lg border border-white/25 border-t-white/35 shadow-[0px_8px_32px_rgba(0,0,0,0.25)] flex flex-col gap-3 animate-dropdown z-50">
          <div className="flex flex-col gap-1.5">
            {/* Mobile Item 1: Destinations Accordion */}
            <div className="border-b border-white/15 pb-2">
              <button
                type="button"
                onClick={() => toggleMobileDropdown(0)}
                className="w-full px-3 py-2.5 rounded-xl hover:bg-white/10 text-white font-medium text-base flex items-center justify-between transition-colors"
              >
                <span>Destinations</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={`text-white/70 transition-transform duration-200 ${mobileActiveDropdown === 0 ? "rotate-180 text-white" : ""
                    }`}
                >
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileActiveDropdown === 0 && (
                <div className="pl-4 pr-2 pt-1 pb-2 flex flex-col gap-1 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl mt-1 animate-dropdown">
                  {destinationsList.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-3 py-2 text-sm text-white hover:bg-white/20 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Item 2: Deals Accordion */}
            <div className="border-b border-white/15 pb-2">
              <button
                type="button"
                onClick={() => toggleMobileDropdown(1)}
                className="w-full px-3 py-2.5 rounded-xl hover:bg-white/10 text-white font-medium text-base flex items-center justify-between transition-colors"
              >
                <span>Deals</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={`text-white/70 transition-transform duration-200 ${mobileActiveDropdown === 1 ? "rotate-180 text-white" : ""
                    }`}
                >
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileActiveDropdown === 1 && (
                <div className="pl-4 pr-2 pt-1 pb-2 flex flex-col gap-1 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl mt-1 animate-dropdown">
                  {dealsList.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-3 py-2 text-sm text-white hover:bg-white/20 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Item 3: Travel Styles Accordion */}
            <div className="border-b border-white/15 pb-2">
              <button
                type="button"
                onClick={() => toggleMobileDropdown(2)}
                className="w-full px-3 py-2.5 rounded-xl hover:bg-white/10 text-white font-medium text-base flex items-center justify-between transition-colors"
              >
                <span>Travel Styles</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={`text-white/70 transition-transform duration-200 ${mobileActiveDropdown === 2 ? "rotate-180 text-white" : ""
                    }`}
                >
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileActiveDropdown === 2 && (
                <div className="pl-4 pr-2 pt-1 pb-2 flex flex-col gap-1 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl mt-1 animate-dropdown">
                  {travelStylesList.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-3 py-2 text-sm text-white hover:bg-white/20 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Item 4: Upcoming Trips */}
            <div className="border-b border-white/15 pb-2">
              <a
                href="#upcoming"
                className="block px-3 py-2.5 rounded-xl hover:bg-white/10 text-white font-medium text-base transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Upcoming trips
              </a>
            </div>

            {/* Mobile Item 5: More About Us Accordion */}
            <div className="pb-1">
              <button
                type="button"
                onClick={() => toggleMobileDropdown(4)}
                className="w-full px-3 py-2.5 rounded-xl hover:bg-white/10 text-white font-medium text-base flex items-center justify-between transition-colors"
              >
                <span>More About Us</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={`text-white/70 transition-transform duration-200 ${mobileActiveDropdown === 4 ? "rotate-180 text-white" : ""
                    }`}
                >
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileActiveDropdown === 4 && (
                <div className="pl-4 pr-2 pt-1 pb-2 flex flex-col gap-1 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl mt-1 animate-dropdown">
                  {moreAboutUsList.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-3 py-2 text-sm text-white hover:bg-white/20 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Bottom Action Buttons */}
          <div className="pt-3 border-t border-white/15 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenLogin) onOpenLogin();
              }}
              className="w-full py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-center text-sm transition-colors"
            >
              Login
            </button>
            <div className="flex justify-center">
              <PlayWithCattieButton
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenCattie) onOpenCattie();
                }}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
