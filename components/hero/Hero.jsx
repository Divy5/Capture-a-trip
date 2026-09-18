"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HeroNavbar } from "./HeroNavbar";
import { HeroLocation } from "./HeroLocation";
import { HeroContent } from "./HeroContent";
import { HeroSearch } from "./HeroSearch";
import { PopularDestinations } from "./PopularDestinations";
import { HeroSlider } from "./HeroSlider";
import { HeroSocialProof } from "./HeroSocialProof";
import { heroAssets } from "@/data/hero";

export function Hero() {
  const [destination, setDestination] = useState("Untamed.");
  const [when, setWhen] = useState("Someday.");
  const [budget, setBudget] = useState("Priceless.");

  const [searchResults, setSearchResults] = useState(null);
  const [searchParams, setSearchParams] = useState(null);
  const [activeModal, setActiveModal] = useState(null); // 'cattie' | 'login' | 'results' | null

  const handleSelectPopular = (destName) => {
    setDestination(destName);
  };

  const handleSearchResults = (results, params) => {
    setSearchResults(results);
    setSearchParams(params);
    setActiveModal("results");
  };

  return (
    <section
      aria-label="Hero Section"
      className="relative w-full min-h-fit sm:min-h-[820px] lg:min-h-[945px] flex flex-col justify-between overflow-hidden bg-[#03100A]"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroAssets.heroImage}
          alt="Ladakh Mountains Landscape Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dual Gradient Overlays (#6 Specs) */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(0deg, rgba(3, 16, 10, 0.92) 0%, rgba(3, 16, 10, 0.55) 40%, rgba(3, 16, 10, 0.2) 70%, rgba(3, 16, 10, 0.15) 100%),
              linear-gradient(90deg, rgba(3, 16, 10, 0.3) 0%, rgba(0, 0, 0, 0) 50%, rgba(3, 16, 10, 0.1) 100%)
            `,
          }}
        />
      </div>

      {/* Main Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-fit sm:min-h-[820px] lg:min-h-[917px] justify-between gap-1 sm:gap-4 pb-2 sm:pb-6">
        {/* Top Header Navbar */}
        <HeroNavbar
          onOpenCattie={() => setActiveModal("cattie")}
          onOpenLogin={() => setActiveModal("login")}
        />

        {/* Center Hero Body */}
        <div className="flex-initial sm:flex-1 flex flex-col justify-center py-1 sm:py-2 relative z-30">
          <HeroLocation />
          <HeroContent />
          <HeroSearch
            destination={destination}
            setDestination={setDestination}
            when={when}
            setWhen={setWhen}
            budget={budget}
            setBudget={setBudget}
            onSearchResults={handleSearchResults}
          />
          <PopularDestinations
            selectedDestination={destination}
            onSelectDestination={handleSelectPopular}
          />
          <HeroSlider />
        </div>

        {/* Bottom Social Proof Bar */}
        <HeroSocialProof
          onOpenCattie={() => setActiveModal("cattie")}
        />
      </div>

      {/* Interactive Modals (Search Results, Cattie AI Assistant, Login) */}
      {activeModal === "results" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-dropdown">
          <div className="bg-[#0C2016] border border-white/20 rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold font-[var(--font-norsy-family)] text-white">
                  Search Results
                </h2>
                <p className="text-xs text-white/60 mt-1">
                  Filtering for:{" "}
                  <span className="text-[#008342] font-semibold">
                    {searchParams?.destination || "All"}
                  </span>{" "}
                  • {searchParams?.when || "Anytime"} •{" "}
                  {searchParams?.budget || "Any Budget"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
              >
                ✕
              </button>
            </div>

            {searchResults && searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchResults.map((trip) => (
                  <div
                    key={trip.id}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#008342] transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#008342] bg-[#ECFFF5]/10 px-2.5 py-1 rounded-full border border-[#008342]/30">
                          {trip.destination}
                        </span>
                        <span className="text-xs text-white/60">
                          ★ {trip.rating}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {trip.title}
                      </h3>
                      <p className="text-xs text-white/70 mb-3 line-clamp-2">
                        {trip.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-white/60">{trip.duration}</span>
                      <span className="text-base font-bold text-white">
                        {trip.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 text-white/50 text-xl">
                  🔍
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  No Matching Trips Found
                </h3>
                <p className="text-sm text-white/60 max-w-sm mx-auto mb-4">
                  We couldn&apos;t find any trips matching your exact filter criteria. Try choosing another destination or budget.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setDestination("Untamed.");
                    setWhen("Someday.");
                    setBudget("Priceless.");
                    setActiveModal(null);
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#008342] text-white text-xs font-bold hover:bg-[#007038] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Cattie Modal */}
      {activeModal === "cattie" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-dropdown">
          <div className="bg-[#0C2016] border border-white/20 rounded-3xl p-6 max-w-md w-full shadow-2xl text-white text-center">
            <div className="w-14 h-14 rounded-full bg-[#ECFFF5] flex items-center justify-center mx-auto mb-4 text-[#008342]">
              <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.80385 6.19615L16 8L9.80385 9.80385L8 16L6.19615 9.80385L0 8L6.19615 6.19615L8 0Z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Cattie AI Travel Assistant</h2>
            <p className="text-xs text-white/70 mb-6">
              Plan custom itineraries, estimate budget & get instant travel recommendations tailored to your tribe.
            </p>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-left text-xs text-white/80 mb-6">
              &quot;Hey traveler! Tell me where you want to go or what kind of experience you are looking for.&quot;
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="flex-1 py-2.5 rounded-full border border-white/20 text-xs font-semibold hover:bg-white/10"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => alert("Connecting to Cattie AI...")}
                className="flex-1 py-2.5 rounded-full bg-[#008342] text-white text-xs font-semibold hover:bg-[#007038]"
              >
                Start Chatting
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {activeModal === "login" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-dropdown">
          <div className="bg-[#0C2016] border border-white/20 rounded-3xl p-6 max-w-sm w-full shadow-2xl text-white">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Log in to Capture a Trip</h2>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="text-white/60 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setActiveModal(null); }} className="space-y-4">
              <div>
                <label className="block text-xs text-white/70 mb-1">Phone Number or Email</label>
                <input
                  type="text"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-[#008342]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#008342] text-white font-bold text-sm hover:bg-[#007038] transition-colors"
              >
                Get OTP / Continue
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
