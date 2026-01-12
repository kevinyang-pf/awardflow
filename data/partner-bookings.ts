/**
 * Partner Award Booking Connections
 *
 * This file documents which airline loyalty programs allow you to book
 * award flights on other airlines. These are well-known "sweet spots"
 * in the points/miles community.
 */

export interface PartnerBookingConnection {
  programId: string;
  canBookOn: string[];
  notes?: string;
}

// Well-known partner award booking relationships
export const partnerBookings: PartnerBookingConnection[] = [
  // Virgin Atlantic - Famous for ANA First Class sweet spot
  {
    programId: "virgin-atlantic",
    canBookOn: ["ana", "delta", "air-france-klm"],
    notes: "ANA First Class at 120K RT; Delta domestic one-ways",
  },

  // Avianca LifeMiles - Star Alliance with no fuel surcharges
  {
    programId: "avianca",
    canBookOn: ["united", "ana", "lufthansa", "swiss", "air-canada", "turkish", "eva", "singapore", "tap", "copa"],
    notes: "No fuel surcharges on most Star Alliance partners",
  },

  // Air Canada Aeroplan - Star Alliance with great stopover rules
  {
    programId: "air-canada",
    canBookOn: ["united", "ana", "lufthansa", "swiss", "eva", "singapore", "turkish", "tap", "thai", "asiana"],
    notes: "Excellent stopover rules; no fuel surcharges on many partners",
  },

  // British Airways Avios - oneworld with distance-based pricing
  {
    programId: "british-airways",
    canBookOn: ["american", "qantas", "cathay", "jal", "qatar", "alaska", "iberia", "finnair"],
    notes: "Distance-based redemptions; high fuel surcharges on BA metal",
  },

  // American AAdvantage - oneworld access
  {
    programId: "american",
    canBookOn: ["british-airways", "qantas", "cathay", "jal", "qatar", "etihad", "finnair"],
    notes: "Web-bookable for many partners; Etihad partner flights",
  },

  // Alaska Mileage Plan - oneworld plus unique partners
  {
    programId: "alaska",
    canBookOn: ["american", "british-airways", "qantas", "cathay", "jal", "emirates", "finnair", "fiji"],
    notes: "Emirates First at 180K RT; unique partner roster",
  },

  // United MileagePlus - Star Alliance
  {
    programId: "united",
    canBookOn: ["ana", "lufthansa", "swiss", "air-canada", "singapore", "turkish", "eva", "thai", "tap"],
    notes: "Excursionist perk for free stopovers",
  },

  // Air France-KLM Flying Blue - SkyTeam
  {
    programId: "air-france-klm",
    canBookOn: ["delta", "korean", "aeromexico", "saudia"],
    notes: "Monthly Promo Rewards with discounted pricing",
  },

  // Singapore KrisFlyer - Star Alliance
  {
    programId: "singapore",
    canBookOn: ["united", "lufthansa", "ana", "air-canada", "turkish", "eva", "thai", "tap"],
    notes: "Own-metal RTW awards; waitlist access on partners",
  },

  // Cathay Asia Miles - oneworld
  {
    programId: "cathay",
    canBookOn: ["american", "british-airways", "qantas", "jal", "qatar", "alaska", "finnair"],
    notes: "One-way awards available; reasonable fuel surcharges",
  },

  // Qatar Privilege Club - oneworld
  {
    programId: "qatar",
    canBookOn: ["american", "british-airways", "cathay", "jal", "qantas"],
    notes: "Qsuites business class on own metal is the best value",
  },

  // Emirates Skywards - Limited partners
  {
    programId: "emirates",
    canBookOn: ["qantas", "jal"],
    notes: "Limited partner redemptions; best for own-metal flights",
  },

  // ANA Mileage Club - Star Alliance with RTW awards
  {
    programId: "ana",
    canBookOn: ["united", "lufthansa", "singapore", "turkish", "eva", "air-canada", "thai"],
    notes: "RTW awards at excellent value; fuel surcharges on some partners",
  },

  // JAL Mileage Bank - oneworld with distance-based charts
  {
    programId: "jal",
    canBookOn: ["american", "british-airways", "cathay", "qantas", "alaska", "emirates", "finnair"],
    notes: "Distance-based award charts; Emerald status benefits",
  },

  // Delta SkyMiles - SkyTeam (limited transparency)
  {
    programId: "delta",
    canBookOn: ["air-france-klm", "korean", "aeromexico", "virgin-atlantic"],
    notes: "Dynamic pricing; Virgin Atlantic as close partner",
  },

  // Turkish Miles&Smiles - Star Alliance
  {
    programId: "turkish",
    canBookOn: ["united", "ana", "lufthansa", "singapore", "air-canada", "eva", "thai"],
    notes: "Good Star Alliance business class redemptions",
  },

  // Qantas Frequent Flyer - oneworld
  {
    programId: "qantas",
    canBookOn: ["american", "british-airways", "cathay", "jal", "qatar", "emirates", "alaska"],
    notes: "Classic rewards on partners; Emirates partnership",
  },

  // Etihad Guest - Limited partners
  {
    programId: "etihad",
    canBookOn: ["american"],
    notes: "American partnership for US domestic flights",
  },
];

// Helper function to get bookable partners for a program
export function getBookablePartners(programId: string): string[] {
  const connection = partnerBookings.find((p) => p.programId === programId);
  return connection?.canBookOn || [];
}

// Helper function to get booking notes for a program
export function getBookingNotes(programId: string): string | undefined {
  const connection = partnerBookings.find((p) => p.programId === programId);
  return connection?.notes;
}

// Helper function to get all programs that can book on a specific airline
export function getProgramsBookingOn(airlineId: string): string[] {
  return partnerBookings
    .filter((p) => p.canBookOn.includes(airlineId))
    .map((p) => p.programId);
}
