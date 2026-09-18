"use client";

import React, { useRef } from "react";
import { DestinationCard } from "./DestinationCard";

export function DestinationCards({
  destinations = [],
  selectedDestination,
  onSelectDestination,
}) {
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragDistance = useRef(0);

  // Smooth Left/Right Arrow Button Scroll
  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    dragDistance.current = 0;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.scrollBehavior = "auto";
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = "smooth";
    }
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = "smooth";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDown.current || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    dragDistance.current = Math.abs(walk);
    if (dragDistance.current > 3) {
      e.preventDefault();
    }
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="w-full max-w-[1280px] pt-[24px] pb-[12px] relative group/slider">
      {/* Left Navigation Arrow */}
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => scrollByAmount(-300)}
        className="hidden md:flex absolute left-[-16px] top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white text-[#008342] border border-gray-200 shadow-xl items-center justify-center hover:bg-[#008342] hover:text-white hover:scale-110 transition-all cursor-pointer opacity-0 group-hover/slider:opacity-100 font-bold text-lg"
      >
        ‹
      </button>

      {/* Right Navigation Arrow */}
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scrollByAmount(300)}
        className="hidden md:flex absolute right-[-16px] top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white text-[#008342] border border-gray-200 shadow-xl items-center justify-center hover:bg-[#008342] hover:text-white hover:scale-110 transition-all cursor-pointer opacity-0 group-hover/slider:opacity-100 font-bold text-lg"
      >
        ›
      </button>

      {/* Horizontal Scrollable Row with Mouse Drag-to-Scroll (Hidden Scrollbar) */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="w-full flex items-center gap-[14px] overflow-x-auto no-scrollbar pb-2 pt-1 px-1 cursor-grab active:cursor-grabbing select-none"
      >
        {destinations.map((dest) => {
          const isSelected =
            selectedDestination &&
            (selectedDestination.id === dest.id ||
              selectedDestination.name === dest.name);

          return (
            <DestinationCard
              key={dest.id || dest.name}
              name={dest.name}
              image={dest.image}
              isSelected={isSelected}
              onClick={() => {
                if (dragDistance.current < 6 && onSelectDestination) {
                  onSelectDestination(dest);
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
