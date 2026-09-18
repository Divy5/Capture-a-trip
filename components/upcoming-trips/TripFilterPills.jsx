"use client";

import React from "react";

export function TripFilterPills({
  categories = [],
  activeCategory = "All",
  onSelectCategory,
}) {
  return (
    <div
      aria-label="Trip destination filter categories"
      className="w-full flex items-center gap-[8px] overflow-x-auto no-scrollbar py-1 select-none"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`h-[32px] px-[16px] py-[6px] rounded-full text-[13px] font-[var(--font-aktiv-medium)] font-medium leading-[20px] transition-all cursor-pointer shrink-0 ${isActive
                ? "bg-[#008342] text-white shadow-sm"
                : "bg-white text-[#3F3F46] border border-[#E4E4E7] hover:border-[#008342]/40 hover:bg-gray-50"
              }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
