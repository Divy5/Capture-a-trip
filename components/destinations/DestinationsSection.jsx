"use client";

import React, { useState } from "react";
import { DestinationToggle } from "./DestinationToggle";
import { DestinationCards } from "./DestinationCards";
import { destinationsData } from "@/data/destinations";

export function DestinationsSection({ onSelectDestination }) {
  const [activeCategory, setActiveCategory] = useState("india"); // 'india' | 'international'

  const currentDestinations = destinationsData.categories[activeCategory] || [];

  return (
    <section
      id="destinations"
      aria-label="Explore Destinations By Place"
      className="w-full bg-white text-[#0D1A0F] py-10 lg:py-[48px] px-5 sm:px-8 md:px-10 lg:px-12 flex justify-center items-center"
    >
      <div className="w-full max-w-[1280px] flex flex-col justify-between">
        {/* section title header and toggle tabs */}
        <div className="w-full flex flex-col min-[730px]:flex-row min-[730px]:items-end justify-between gap-3 min-[730px]:gap-4">
          <div className="flex flex-col gap-1 max-w-[717px]">
            {/* small category title */}
            <span className="text-[#008342] font-[var(--font-aktiv-bold)] text-[12px] sm:text-[14px] font-bold leading-[18px] sm:leading-[20px] tracking-[0.7px] uppercase">
              {destinationsData.sectionTitle}
            </span>
            {/* main section heading */}
            <h2
              className="text-[#0D1A0F] font-norsy font-[var(--font-norsy-family)] font-normal text-[26px] xs:text-[30px] sm:text-[32px] min-[730px]:text-[34px] min-[900px]:text-[38px] lg:text-[48px] leading-[1.15] min-[730px]:leading-[42px] lg:leading-[48px]"
              style={{ fontFamily: "var(--font-norsy-family), 'Norsy', sans-serif" }}
            >
              {destinationsData.heading}
            </h2>
          </div>

          {/* region category switch button */}
          <div className="shrink-0 self-start min-[730px]:self-auto mt-1 min-[730px]:mt-0">
            <DestinationToggle
              activeCategory={activeCategory}
              onToggleCategory={setActiveCategory}
            />
          </div>
        </div>

        {/* cards list slider */}
        <DestinationCards
          destinations={currentDestinations}
          onSelectDestination={onSelectDestination}
        />
      </div>
    </section>
  );
}
