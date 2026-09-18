"use client";

import React, { useState } from "react";
import { AnalyzerContent } from "./AnalyzerContent";
import { AnalyzerCard } from "./AnalyzerCard";
import { tripAnalyzerData } from "@/data/tripAnalyzer";

export function TripAnalyzer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itineraryText, setItineraryText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [cardData, setCardData] = useState(tripAnalyzerData.card);

  const handleStartAnalysis = (e) => {
    e.preventDefault();
    if (!itineraryText.trim()) return;

    setIsAnalyzing(true);
    setIsModalOpen(false);

    // Simulate realistic AI scoring feedback
    setTimeout(() => {
      const generatedScore = (7.5 + Math.random() * 2.2).toFixed(1);
      setCardData((prev) => ({
        ...prev,
        fileName: "custom_plan.pdf",
        overallScore: parseFloat(generatedScore),
        metrics: [
          { id: "time", label: "Time Optimization", score: (8.5 + Math.random()).toFixed(1), max: 10, fillPercentage: 88 },
          { id: "budget", label: "Budget Allocation", score: (8.0 + Math.random()).toFixed(1), max: 10, fillPercentage: 82 },
          { id: "logistics", label: "Logistics Security", score: (8.8 + Math.random()).toFixed(1), max: 10, fillPercentage: 90 },
          { id: "variety", label: "Activity Variety", score: (7.8 + Math.random()).toFixed(1), max: 10, fillPercentage: 79 },
        ]
      }));
      setIsAnalyzing(false);
    }, 1200);
  };

  return (
    <section
      id="analyzer"
      aria-label="Trip Plan Analyzer"
      className="w-full bg-white text-[#0D1A0F] py-8 sm:py-14 lg:py-[80px] px-4 sm:px-6 md:px-10 lg:px-12 flex justify-center items-center overflow-hidden"
    >
      {/* inner gradient card wrapper */}
      <div
        className="w-full max-w-[1280px] min-h-[466px] rounded-[24px] border border-[#D3FFE9] p-6 sm:p-8 lg:p-10 xl:p-[56px] flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-6 xl:gap-14 shadow-sm overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #ECFFF5 0%, #F0FFF8 55%, #D3FFE9 100%)",
        }}
      >
        {/* left text content */}
        <AnalyzerContent onAnalyzeClick={() => setIsModalOpen(true)} />

        {/* right score card */}
        <AnalyzerCard cardData={cardData} isAnalyzing={isAnalyzing} />
      </div>

      {/* Interactive Itinerary Paste Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-dropdown">
          <div className="bg-white rounded-3xl p-5 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 text-[#0D1A0F]">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#008342]" />
                <h3 className="text-lg font-bold font-[var(--font-norsy-family)] text-[#0D1A0F]">
                  Paste Your Trip Itinerary
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-black text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleStartAnalysis} className="space-y-4">
              <p className="text-xs text-gray-500">
                Paste your trip schedule, hotels, flight times or itinerary details below to get an instant AI evaluation score out of 10.
              </p>

              <textarea
                rows={5}
                required
                value={itineraryText}
                onChange={(e) => setItineraryText(e.target.value)}
                placeholder="e.g. Day 1: Fly to Leh, rest & acclimatize. Day 2: Visit Hemis & Thiksey monasteries. Day 3: Drive to Nubra Valley via Khardung La..."
                className="w-full p-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#008342] text-gray-800"
              />

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#008342] text-white text-xs font-bold hover:bg-[#007038] shadow-md transition-colors"
                >
                  Generate AI Score
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
