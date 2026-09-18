"use client";

import React, { useState } from "react";
import { DestinationToggle } from "@/components/destinations/DestinationToggle";
import { TripFilterPills } from "./TripFilterPills";
import { EmiNotice } from "./EmiNotice";
import { TripCard } from "./TripCard";
import { SeeAllTripsButton } from "./SeeAllTripsButton";
import { upcomingTripsData } from "@/data/upcomingTrips";

export function UpcomingTripsSection() {
  const [activeRegion, setActiveRegion] = useState("india"); // 'india' | 'international'
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedTrip, setSelectedTrip] = useState(null);

  const scrollRef = React.useRef(null);
  const isDown = React.useRef(false);
  const startX = React.useRef(0);
  const scrollLeft = React.useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    setIsDragging(false);
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
    const walk = (x - startX.current) * 1.8;
    if (Math.abs(walk) > 4) {
      setIsDragging(true);
      e.preventDefault();
    }
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Filter trips by region and destination tag
  const filteredTrips = upcomingTripsData.trips.filter((trip) => {
    // Region match (india vs international)
    if (trip.region !== activeRegion) return false;

    // Filter pill match
    if (activeFilter !== "All" && trip.destination.toLowerCase() !== activeFilter.toLowerCase()) {
      return false;
    }

    return true;
  });

  return (
    <section
      id="upcoming"
      aria-label="Upcoming Group Trips"
      className="w-full bg-[#FAFAFA] md:bg-white text-[#0D1A0F] py-10 lg:py-[56px] px-5 sm:px-8 md:px-10 lg:px-12 flex justify-center items-center"
    >
      <div className="w-full max-w-[1280px] flex flex-col gap-6">
        {/* section heading & toggle */}
        <div className="w-full flex flex-col min-[730px]:flex-row min-[730px]:items-end justify-between gap-3 min-[730px]:gap-4">
          <div className="flex flex-col gap-1 max-w-[717px]">
            {/* subtitle tag */}
            <span className="text-[#008342] font-[var(--font-aktiv-bold)] text-[12px] sm:text-[14px] font-bold leading-[18px] sm:leading-[20px] tracking-[0.7px] uppercase">
              {upcomingTripsData.sectionTitle}
            </span>
            {/* main section title */}
            <h2
              className="text-[#0D1A0F] font-norsy font-[var(--font-norsy-family)] font-normal text-[26px] xs:text-[30px] sm:text-[32px] min-[730px]:text-[34px] min-[900px]:text-[38px] lg:text-[48px] leading-[1.15] min-[730px]:leading-[42px] lg:leading-[48px]"
              style={{ fontFamily: "var(--font-norsy-family), 'Norsy', sans-serif" }}
            >
              {upcomingTripsData.heading}
            </h2>
          </div>

          {/* region switcher */}
          <div className="shrink-0 self-start min-[730px]:self-auto mt-1 min-[730px]:mt-0">
            <DestinationToggle
              activeCategory={activeRegion}
              onToggleCategory={(region) => {
                setActiveRegion(region);
                setActiveFilter("All");
              }}
            />
          </div>
        </div>

        {/* filter pills and emi badge */}
        <div className="w-full flex flex-col gap-3">
          <TripFilterPills
            categories={upcomingTripsData.filterCategories}
            activeCategory={activeFilter}
            onSelectCategory={setActiveFilter}
          />
          <EmiNotice />
        </div>

        {/* trip cards slider */}
        <div className="relative group/slider w-full">
          {/* scroll left arrow */}
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
              }
            }}
            className="hidden md:flex absolute left-[-16px] top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white text-[#008342] border border-gray-200 shadow-xl items-center justify-center hover:bg-[#008342] hover:text-white hover:scale-110 transition-all cursor-pointer opacity-0 group-hover/slider:opacity-100 font-bold text-lg"
          >
            ‹
          </button>

          {/* scroll right arrow */}
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
              }
            }}
            className="hidden md:flex absolute right-[-16px] top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white text-[#008342] border border-gray-200 shadow-xl items-center justify-center hover:bg-[#008342] hover:text-white hover:scale-110 transition-all cursor-pointer opacity-0 group-hover/slider:opacity-100 font-bold text-lg"
          >
            ›
          </button>

          {/* draggable horizontal track */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="w-full overflow-x-auto no-scrollbar py-2 cursor-grab active:cursor-grabbing select-none"
          >
            <div className="flex items-center gap-3.5 sm:gap-4 min-w-max pb-4 px-1">
              {filteredTrips.length > 0 ? (
                filteredTrips.map((trip) => (
                  <TripCard
                    key={trip.id}
                    trip={trip}
                    onBookClick={(t) => {
                      if (!isDragging) {
                        setSelectedTrip(t);
                      }
                    }}
                  />
                ))
              ) : (
                <div className="py-12 px-6 text-center text-gray-500 font-medium w-full">
                  No trips available matching &quot;{activeFilter}&quot; for {activeRegion}. Try switching filters!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* see all trips button */}
        <div className="w-full flex justify-center pt-2 pb-4">
          <SeeAllTripsButton onClick={() => alert("Showing all available upcoming group trips...")} />
        </div>
      </div>

      {/* Booking Modal */}
      {selectedTrip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-dropdown">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl text-[#0D1A0F]">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100 mb-4">
              <h3 className="text-lg font-bold font-[var(--font-norsy-family)]">
                Book {selectedTrip.title}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedTrip(null)}
                className="text-gray-400 hover:text-black text-sm"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3 text-sm">
              <p className="text-gray-600">
                Reserve your slot with zero convenience fee or choose{" "}
                <strong className="text-[#008342]">{selectedTrip.emi}</strong>.
              </p>
              <div className="p-3 bg-gray-50 rounded-2xl flex justify-between items-center">
                <span className="text-gray-500">Package Price:</span>
                <span className="text-lg font-bold text-[#008342]">{selectedTrip.price}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  alert(`Booking confirmed for ${selectedTrip.title}!`);
                  setSelectedTrip(null);
                }}
                className="w-full py-3 rounded-full bg-[#008342] text-white font-bold text-sm hover:bg-[#007038] shadow-md transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
