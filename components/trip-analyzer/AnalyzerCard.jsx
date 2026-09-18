"use client";

import React from "react";
import { AnalysisStatus } from "./AnalysisStatus";
import { ScoreCircle } from "./ScoreCircle";
import { MetricsBreakdown } from "./MetricsBreakdown";
import { tripAnalyzerData } from "@/data/tripAnalyzer";

export function AnalyzerCard({ cardData = tripAnalyzerData.card, isAnalyzing = false }) {
  return (
    <div className="w-full max-w-[344px] min-h-[393px] p-5 sm:p-[24px_32px] rounded-[24px] bg-white/45 backdrop-blur-[24px] border border-black/10 shadow-[0px_16px_32px_0px_rgba(0,0,0,0.12)] flex flex-col justify-between shrink-0 select-none transition-all mx-auto lg:mx-0">
      {/* Header */}
      <AnalysisStatus
        fileName={cardData.fileName}
        isAnalyzing={isAnalyzing}
      />

      {/* Circular Score Ring */}
      <ScoreCircle
        score={cardData.overallScore}
        maxScore={cardData.maxScore}
      />

      {/* Category Scores Breakdown */}
      <MetricsBreakdown
        label={cardData.breakdownLabel}
        metrics={cardData.metrics}
      />
    </div>
  );
}
