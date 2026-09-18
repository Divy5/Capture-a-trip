"use client";

import React from "react";
import Image from "next/image";

export function TripCard({ trip, onBookClick }) {
  const getTagStyle = (tagType) => {
    switch (tagType) {
      case "purple":
        return "bg-gradient-to-r from-purple-600 to-pink-500 text-white";
      case "orange":
        return "bg-[#F97316] text-white";
      case "red":
        return "bg-[#EF4444] text-white";
      default:
        return "bg-[#008342] text-white";
    }
  };

  return (
    <div className="relative w-[278.3px] sm:w-[295px] h-[425px] sm:h-[435px] rounded-[24px] overflow-hidden shrink-0 group select-none shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      {/* Background Destination Photo */}
      <Image
        src={trip.image}
        alt={trip.title}
        width={300}
        height={435}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
      />

      {/* Dark Vignette Overlay Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Foreground Card Content */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
        {/* Top Header Layer: Tag Badge & Rating / Duration Badges */}
        <div className="flex items-start justify-between gap-2">
          {/* Top Left Tag Badge */}
          {trip.tag && (
            <span
              className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm ${getTagStyle(
                trip.tagType
              )}`}
            >
              {trip.tag}
            </span>
          )}

          {/* Top Right Rating & Duration Badges */}
          <div className="flex flex-col items-end gap-1.5 ml-auto">
            {/* Rating Pill */}
            <div className="inline-flex items-center gap-1 h-[24px] px-2.5 rounded-full bg-black/40  text-white text-[11px] font-medium border border-white/10">
              <span className="text-amber-300 text-xs">★</span>
              <span className="font-bold">{trip.rating}</span>
              <span className="text-white/60">({trip.reviewsCount})</span>
            </div>

            {/* Duration Pill */}
            <div className="inline-flex items-center h-[22px] px-2.5 rounded-full bg-black/45 backdrop-blur-md text-white/90 text-[10.5px] font-medium border border-white/10">
              {trip.duration}
            </div>
          </div>
        </div>

        {/* Bottom Details Layer: Inclusions, Dates, Title & Glass Pricing Footer */}
        <div className="flex flex-col gap-2.5">
          {/* Amenities / Inclusions Badges (h-[19px], px-[8px], py-[2px], gap-[4px], bg-[#0083428C]) */}
          <div className="flex flex-wrap items-center gap-[4px]">
            {trip.inclusions &&
              trip.inclusions.map((inc, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-[4px] h-[19px] px-[8px] py-[2px] rounded-full bg-[#0083428C] backdrop-blur-md text-white text-[10px] font-normal leading-none"
                >
                  <span className="text-[10px]">{inc.icon}</span>
                  <span>{inc.label}</span>
                </span>
              ))}
          </div>

          {/* Departure Dates (font-aktiv-medium, 11px, line-height 16.5px, color #DCDCDC) */}
          <div className="text-[#DCDCDC] font-[var(--font-aktiv-medium)] text-[11px] font-normal leading-[16.5px] tracking-[0px] truncate">
            {trip.dates}
          </div>

          {/* Trip Title (font-aktiv-bold, 15px, line-height 20.63px, color #FFFFFF) */}
          <h3 className="text-white font-[var(--font-aktiv-bold)] text-[15px] font-normal leading-[20.63px] tracking-[0px] line-clamp-2 drop-shadow-sm">
            {trip.title}
          </h3>

          {/* Bottom Glassmorphism Pricing & Book Footer (Transparent & Frosted Glass Effect) */}
          <div className="w-full h-[71px] px-[14px] py-[12px] rounded-[16px] border border-white/25 border-t-white/50 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] relative overflow-hidden transition-all hover:bg-white/25 hover:border-white/40">
            {/* Glass Specular Reflection Highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent pointer-events-none" />

            {/* Price & EMI */}
            <div className="flex flex-col justify-center leading-none relative z-10">
              <div className="flex items-baseline gap-1">
                <span className="text-white font-[var(--font-aktiv-bold)] text-[18px] font-extrabold leading-[28px] tracking-[0px] drop-shadow-sm">
                  {trip.price}
                </span>
                {trip.originalPrice && (
                  <span className="text-white/60 font-[var(--font-aktiv-medium)] text-[12px] font-normal leading-[16px] line-through">
                    {trip.originalPrice}
                  </span>
                )}
              </div>
              {trip.emi && (
                <span className="text-white/80 font-[var(--font-aktiv-medium)] text-[12px] font-normal leading-[15px] tracking-[0.3px] mt-0.5 drop-shadow-sm">
                  {trip.emi}
                </span>
              )}
            </div>

            {/* Book Button */}
            <button
              type="button"
              onClick={() => {
                if (onBookClick) onBookClick(trip);
              }}
              className="h-[36px] px-4 rounded-full bg-[#008342] hover:bg-[#007038] text-white font-[var(--font-aktiv-bold)] text-[13px] font-bold leading-none flex items-center justify-center gap-1 transition-all active:scale-95 cursor-pointer shadow-md hover:shadow-lg shrink-0 relative z-10"
            >
              <span>Book</span>
              <span className="text-xs">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
