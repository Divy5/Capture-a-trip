"use client";

import React from "react";
import Image from "next/image";

export function DestinationCard({ name, image, onClick }) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          if (onClick) onClick();
        }
      }}
      className="relative w-[144px] h-[192px] rounded-[16px] overflow-hidden shrink-0 group cursor-pointer shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-[1.03] select-none"
    >
      {/* Background Destination Image */}
      <Image
        src={image}
        alt={`${name} destination`}
        width={144}
        height={192}
        className="w-[144px] h-[192px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
      />

      {/* Dark Bottom Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      {/* Destination Title Text */}
      <div className="absolute bottom-[12px] left-[12px] right-[12px]">
        <span className="text-white font-[var(--font-aktiv-bold)] text-[12px] font-bold leading-[15px] tracking-[0px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] block truncate">
          {name}
        </span>
      </div>
    </div>
  );
}
