"use client";

import React from "react";
import { MetricRow } from "./MetricRow";

export function MetricsBreakdown({
  label = "CATEGORY SCORES",
  metrics = [],
}) {
  return (
    <div className="w-full max-w-[280px] pt-4 border-t border-black/10 flex flex-col gap-3">
      <span className="text-[#6A6A6A] font-[var(--font-manrope-family)] text-[11px] font-bold leading-none tracking-[0.1em] uppercase">
        {label}
      </span>
      <div className="flex flex-col gap-2.5">
        {metrics.map((m) => (
          <MetricRow
            key={m.id || m.label}
            label={m.label}
            score={m.score}
            max={m.max || 10}
            fillPercentage={m.fillPercentage}
          />
        ))}
      </div>
    </div>
  );
}
