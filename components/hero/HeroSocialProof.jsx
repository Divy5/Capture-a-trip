"use client";

import React from "react";
import Image from "next/image";
import { PlanWithCattieButton } from "./PlanWithCattieButton";
import { heroAssets, heroContent } from "@/data/hero";

export function HeroSocialProof({ onOpenCattie }) {
  const proofCards = [
    {
      id: "as-seen-on",
      label: "AS SEEN ON",
      subLabel: "SHARK TANK",
      isBrand: true,
      image: heroAssets.sharkTank,
      alt: "Shark Tank India",
      imageWidth: 34,
      imageHeight: 34,
    },
    {
      id: "community",
      value: heroContent.socialProof.communityCount,
      label: heroContent.socialProof.communityLabel,
      image: heroAssets.instagram,
      alt: "Instagram",
      imageWidth: 32,
      imageHeight: 32,
    },
    {
      id: "reviews",
      value: heroContent.socialProof.rating,
      label: heroContent.socialProof.reviewsCount,
      image: heroAssets.google,
      alt: "Google Reviews",
      imageWidth: 32,
      imageHeight: 32,
    },
    {
      id: "travellers",
      value: heroContent.socialProof.travellersCount,
      label: heroContent.socialProof.travellersLabel,
      image: heroAssets.travel,
      alt: "Travellers",
      imageWidth: 32,
      imageHeight: 32,
    },
  ];

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pt-0 pb-2 sm:pb-4 flex flex-col lg:flex-row items-center justify-between gap-2.5 sm:gap-3 lg:gap-4 relative z-10">
      {/* 4 Social/Press Proof Cards: 2x2 Grid on Mobile (< 520px), Centered Single Row on 520px-1023px, Left-aligned on Desktop (1024px+) */}
      <div className="w-full lg:w-auto grid grid-cols-2 min-[520px]:flex min-[520px]:flex-row items-center gap-2 xs:gap-2.5 sm:gap-3 justify-items-center min-[520px]:justify-center lg:justify-start py-0.5">
        {proofCards.map((card) => (
          <div
            key={card.id}
            className="w-full min-[520px]:w-auto h-[44px] xs:h-[46px] sm:h-[48px] md:h-[52px] lg:h-[56px] px-2.5 xs:px-3 sm:px-3.5 md:px-4 py-1.5 rounded-[12px] xs:rounded-[14px] sm:rounded-[16px] bg-white/20  border border-white/20 border-t-white/50 flex flex-row items-center gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 transition-transform hover:scale-[1.02] shrink-0 justify-center min-[520px]:justify-start"
          >
            {/* Left Direct Image Icon */}
            <div className="flex items-center justify-center shrink-0 w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
              <Image
                src={card.image}
                alt={card.alt}
                width={card.imageWidth}
                height={card.imageHeight}
                className="object-contain w-full h-full max-h-6 xs:max-h-7 sm:max-h-8"
              />
            </div>

            {/* Right Text Content */}
            {card.isBrand ? (
              <div className="flex flex-col text-left justify-center">
                <span className="text-white/60 font-[var(--font-aktiv-bold)] text-[8px] xs:text-[8.5px] sm:text-[9px] font-bold tracking-[0.5px] uppercase leading-none">
                  {card.label}
                </span>
                <span className="text-white font-[var(--font-aktiv-bold)] text-[10px] xs:text-[11px] sm:text-[11.5px] md:text-[12px] font-bold leading-[12px] xs:leading-[13px] sm:leading-[14px] mt-0.5 whitespace-nowrap">
                  {card.subLabel}
                </span>
              </div>
            ) : (
              <div className="flex flex-col text-left justify-center leading-tight">
                <span className="text-white font-[var(--font-aktiv-bold)] text-[10.5px] xs:text-[11.5px] sm:text-[12px] md:text-[13px] font-bold leading-[12px] xs:leading-[13px] sm:leading-[15px] whitespace-nowrap">
                  {card.value}
                </span>
                <span className="text-white/70 font-normal text-[8.5px] xs:text-[9.5px] md:text-[10px] leading-[11px] xs:leading-[12px] sm:leading-[13px] mt-0.5 whitespace-nowrap">
                  {card.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Plan with Cattie Bottom Button */}
      <div className="flex items-center justify-center shrink-0 mt-1 min-[480px]:mt-0">
        <PlanWithCattieButton onClick={onOpenCattie} />
      </div>
    </div>
  );
}
