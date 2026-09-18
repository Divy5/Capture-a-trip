// Data configuration for Trip Plan Analyzer section
export const tripAnalyzerData = {
  badge: "Powered by AI",
  headingPart1: "Is This Trip Plan",
  headingPart2: "Worth Your Money?",
  description: "Paste your itinerary and get an instant score out of 10 — on pace, variety, crowd levels, and value for what you're paying.",
  ctaText: "Analyse My Trip Plan",
  supportingText: "Know if it’s worth it, before you pay for it.",
  
  // Analyzer Card Metrics Demo State
  card: {
    fileName: "alaska_trip.pdf",
    overallScore: 8.5,
    maxScore: 10,
    breakdownLabel: "CATEGORY SCORES",
    metrics: [
      { id: "time", label: "Time Optimization", score: 9.2, max: 10, fillPercentage: 92 },
      { id: "budget", label: "Budget Allocation", score: 8.8, max: 10, fillPercentage: 88 },
      { id: "logistics", label: "Logistics Security", score: 8.0, max: 10, fillPercentage: 80 },
      { id: "variety", label: "Activity Variety", score: 7.5, max: 10, fillPercentage: 75 },
    ]
  }
};
