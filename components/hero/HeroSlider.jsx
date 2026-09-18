"use client";

import React, { useState } from "react";

export function HeroSlider({ totalSlides = 3, activeIndex = 1, onChangeSlide }) {
  const [current, setCurrent] = useState(activeIndex);

  const handleDotClick = (idx) => {
    setCurrent(idx);
    if (onChangeSlide) onChangeSlide(idx);
  };

  return (
    <div
      aria-label="Hero slider pagination"
      className="w-full flex items-center justify-center gap-2 py-4 select-none"
    >
      <div className="w-[66px] h-[6px] flex items-center justify-center gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => {
          const isActive = idx === current;
          return (
            <button
              key={idx}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => handleDotClick(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${isActive
                  ? "w-[24px] h-[6px] bg-white"
                  : "w-[6px] h-[6px] bg-white/35 hover:bg-white/60"
                }`}
            />
          );
        })}
      </div>
    </div>
  );
}
