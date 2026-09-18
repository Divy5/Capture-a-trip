import { demoTrips } from "@/data/trips";

/**
 * Filter trips based on search parameters
 * @param {Object} query
 * @param {string} [query.destination]
 * @param {string} [query.when]
 * @param {string} [query.budget]
 * @returns {Array} Matching trips
 */
export function searchTrips({ destination, when, budget } = {}) {
  return demoTrips.filter((trip) => {
    // Destination filter
    if (
      destination &&
      destination.trim() !== "" &&
      destination.toLowerCase() !== "untamed" &&
      destination.toLowerCase() !== "where to?"
    ) {
      const matchDest = trip.destination
        .toLowerCase()
        .includes(destination.toLowerCase());
      if (!matchDest) return false;
    }

    // When filter
    if (
      when &&
      when.trim() !== "" &&
      when.toLowerCase() !== "someday" &&
      when.toLowerCase() !== "when?"
    ) {
      const matchDate = trip.date.toLowerCase() === when.toLowerCase();
      if (!matchDate) return false;
    }

    // Budget filter
    if (
      budget &&
      budget.trim() !== "" &&
      budget.toLowerCase() !== "priceless" &&
      budget.toLowerCase() !== "budget"
    ) {
      const matchBudget = trip.budget.toLowerCase() === budget.toLowerCase();
      if (!matchBudget) return false;
    }

    return true;
  });
}
