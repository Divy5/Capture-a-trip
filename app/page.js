import { Hero } from "@/components/hero/Hero";
import { TripAnalyzer } from "@/components/trip-analyzer/TripAnalyzer";
import { DestinationsSection } from "@/components/destinations/DestinationsSection";
import { UpcomingTripsSection } from "@/components/upcoming-trips/UpcomingTripsSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#03100A] overflow-x-hidden">
      {/* main hero header & top banner */}
      <Hero />

      {/* smart trip plan score analyzer tool */}
      <TripAnalyzer />

      {/* popular destinations section */}
      <DestinationsSection />

      {/* upcoming group trips carousel */}
      <UpcomingTripsSection />

      {/* footer section */}
      <Footer />
    </main>
  );
}
