import type {
  CreditCardProgram,
  TransferPartner,
  TransferRelationship,
  TransferPartnerData,
  Alliance,
} from "@/types";

// Alliance metadata for display
export const allianceInfo: Record<Alliance, { name: string; displayName: string; color: string }> = {
  "star-alliance": { name: "Star Alliance", displayName: "Star Alliance", color: "#115740" },
  "oneworld": { name: "OneWorld", displayName: "oneworld", color: "#6B2C57" },
  "skyteam": { name: "SkyTeam", displayName: "SkyTeam", color: "#0066B3" },
  "none": { name: "Independent", displayName: "Independent Airlines", color: "#666666" },
};

// Display order for alliances
export const ALLIANCE_ORDER: Alliance[] = ["star-alliance", "oneworld", "skyteam", "none"];

// Credit Card Programs
export const programs: CreditCardProgram[] = [
  {
    id: "chase",
    name: "Chase Ultimate Rewards",
    shortName: "Chase",
    color: "#0A4B94",
    pointsName: "Ultimate Rewards",
  },
  {
    id: "amex",
    name: "American Express Membership Rewards",
    shortName: "Amex",
    color: "#006FCF",
    pointsName: "Membership Rewards",
  },
  {
    id: "citi",
    name: "Citi ThankYou Points",
    shortName: "Citi",
    color: "#003DA5",
    pointsName: "ThankYou Points",
  },
  {
    id: "capital-one",
    name: "Capital One Miles",
    shortName: "Capital One",
    color: "#D03027",
    pointsName: "Miles",
  },
  {
    id: "bilt",
    name: "Bilt Rewards",
    shortName: "Bilt",
    color: "#000000",
    pointsName: "Bilt Points",
  },
  {
    id: "wells-fargo",
    name: "Wells Fargo Rewards",
    shortName: "Wells Fargo",
    color: "#D71E28",
    pointsName: "Rewards",
  },
  {
    id: "marriott",
    name: "Marriott Bonvoy",
    shortName: "Marriott",
    color: "#A4343A",
    pointsName: "Bonvoy Points",
  },
];

// Transfer Partners - Airlines
export const airlinePartners: TransferPartner[] = [
  { id: "aegean", name: "Aegean Airlines Miles+Bonus", shortName: "Aegean", type: "airline", alliance: "star-alliance", country: "Greece", logoUrl: "/logos/airlines/aegean.svg" },
  { id: "aer-lingus", name: "Aer Lingus AerClub", shortName: "Aer Lingus", type: "airline", alliance: "none", country: "Ireland", logoUrl: "/logos/airlines/aer-lingus.svg" },
  { id: "aeromexico", name: "Aeromexico Rewards", shortName: "Aeromexico", type: "airline", alliance: "skyteam", country: "Mexico", logoUrl: "/logos/airlines/aeromexico.svg" },
  { id: "air-canada", name: "Air Canada Aeroplan", shortName: "Air Canada", type: "airline", alliance: "star-alliance", country: "Canada", logoUrl: "/logos/airlines/air-canada.svg" },
  { id: "air-france-klm", name: "Air France-KLM Flying Blue", shortName: "Flying Blue", type: "airline", alliance: "skyteam", country: "France", logoUrl: "/logos/airlines/air-france-klm.svg" },
  { id: "air-new-zealand", name: "Air New Zealand Airpoints", shortName: "Air NZ", type: "airline", alliance: "star-alliance", country: "New Zealand", logoUrl: "/logos/airlines/air-new-zealand.svg" },
  { id: "alaska", name: "Alaska Airlines Mileage Plan", shortName: "Alaska", type: "airline", alliance: "oneworld", country: "USA", logoUrl: "/logos/airlines/alaska.svg" },
  { id: "alaska-atmos", name: "Alaska Airlines Atmos Rewards", shortName: "Alaska Atmos", type: "airline", alliance: "oneworld", country: "USA", logoUrl: "/logos/airlines/alaska-atmos.svg" },
  { id: "american", name: "American Airlines AAdvantage", shortName: "American", type: "airline", alliance: "oneworld", country: "USA", logoUrl: "/logos/airlines/american.svg" },
  { id: "ana", name: "ANA Mileage Club", shortName: "ANA", type: "airline", alliance: "star-alliance", country: "Japan", logoUrl: "/logos/airlines/ana.svg" },
  { id: "asiana", name: "Asiana Airlines", shortName: "Asiana", type: "airline", alliance: "star-alliance", country: "South Korea", logoUrl: "/logos/airlines/asiana.svg" },
  { id: "avianca", name: "Avianca LifeMiles", shortName: "Avianca", type: "airline", alliance: "star-alliance", country: "Colombia", logoUrl: "/logos/airlines/avianca.svg" },
  { id: "british-airways", name: "British Airways Executive Club", shortName: "British Airways", type: "airline", alliance: "oneworld", country: "UK", logoUrl: "/logos/airlines/british-airways.svg" },
  { id: "cathay", name: "Cathay Pacific Asia Miles", shortName: "Cathay", type: "airline", alliance: "oneworld", country: "Hong Kong", logoUrl: "/logos/airlines/cathay.svg" },
  { id: "copa", name: "Copa Airlines ConnectMiles", shortName: "Copa", type: "airline", alliance: "star-alliance", country: "Panama", logoUrl: "/logos/airlines/copa.svg" },
  { id: "delta", name: "Delta SkyMiles", shortName: "Delta", type: "airline", alliance: "skyteam", country: "USA", logoUrl: "/logos/airlines/delta.svg" },
  { id: "emirates", name: "Emirates Skywards", shortName: "Emirates", type: "airline", alliance: "none", country: "UAE", logoUrl: "/logos/airlines/emirates.svg" },
  { id: "etihad", name: "Etihad Guest", shortName: "Etihad", type: "airline", alliance: "none", country: "UAE", logoUrl: "/logos/airlines/etihad.svg" },
  { id: "eva", name: "EVA Air Infinity MileageLands", shortName: "EVA Air", type: "airline", alliance: "star-alliance", country: "Taiwan", logoUrl: "/logos/airlines/eva.svg" },
  { id: "finnair", name: "Finnair Plus", shortName: "Finnair", type: "airline", alliance: "oneworld", country: "Finland", logoUrl: "/logos/airlines/finnair.svg" },
  { id: "frontier", name: "FRONTIER Miles", shortName: "Frontier", type: "airline", alliance: "none", country: "USA", logoUrl: "/logos/airlines/frontier.svg" },
  { id: "hainan", name: "Hainan Airlines Fortune Wings", shortName: "Hainan", type: "airline", alliance: "none", country: "China", logoUrl: "/logos/airlines/hainan.svg" },
  { id: "hawaiian", name: "Hawaiian Airlines HawaiianMiles", shortName: "Hawaiian", type: "airline", alliance: "none", country: "USA", logoUrl: "/logos/airlines/hawaiian.svg" },
  { id: "iberia", name: "Iberia Plus", shortName: "Iberia", type: "airline", alliance: "oneworld", country: "Spain", logoUrl: "/logos/airlines/iberia.svg" },
  { id: "jal", name: "Japan Airlines Mileage Bank", shortName: "JAL", type: "airline", alliance: "oneworld", country: "Japan", logoUrl: "/logos/airlines/jal.svg" },
  { id: "jetblue", name: "JetBlue TrueBlue", shortName: "JetBlue", type: "airline", alliance: "none", country: "USA", logoUrl: "/logos/airlines/jetblue.svg" },
  { id: "latam", name: "LATAM Pass", shortName: "LATAM", type: "airline", alliance: "none", country: "Chile", logoUrl: "/logos/airlines/latam.svg" },
  { id: "qantas", name: "Qantas Frequent Flyer", shortName: "Qantas", type: "airline", alliance: "oneworld", country: "Australia", logoUrl: "/logos/airlines/qantas.svg" },
  { id: "qatar", name: "Qatar Airways Privilege Club", shortName: "Qatar", type: "airline", alliance: "oneworld", country: "Qatar", logoUrl: "/logos/airlines/qatar.svg" },
  { id: "saudia", name: "Saudia Alfursan", shortName: "Saudia", type: "airline", alliance: "skyteam", country: "Saudi Arabia", logoUrl: "/logos/airlines/saudia.svg" },
  { id: "singapore", name: "Singapore Airlines KrisFlyer", shortName: "Singapore", type: "airline", alliance: "star-alliance", country: "Singapore", logoUrl: "/logos/airlines/singapore.svg" },
  { id: "southwest", name: "Southwest Rapid Rewards", shortName: "Southwest", type: "airline", alliance: "none", country: "USA", logoUrl: "/logos/airlines/southwest.svg" },
  { id: "spirit", name: "Spirit Airlines Free Spirit", shortName: "Spirit", type: "airline", alliance: "none", country: "USA", logoUrl: "/logos/airlines/spirit.svg" },
  { id: "tap", name: "TAP Air Portugal Miles&Go", shortName: "TAP", type: "airline", alliance: "star-alliance", country: "Portugal", logoUrl: "/logos/airlines/tap.svg" },
  { id: "thai", name: "Thai Airways Royal Orchid Plus", shortName: "Thai", type: "airline", alliance: "star-alliance", country: "Thailand", logoUrl: "/logos/airlines/thai.svg" },
  { id: "turkish", name: "Turkish Airlines Miles&Smiles", shortName: "Turkish", type: "airline", alliance: "star-alliance", country: "Turkey", logoUrl: "/logos/airlines/turkish.svg" },
  { id: "united", name: "United MileagePlus", shortName: "United", type: "airline", alliance: "star-alliance", country: "USA", logoUrl: "/logos/airlines/united.svg" },
  { id: "virgin-atlantic", name: "Virgin Atlantic Flying Club", shortName: "Virgin Atlantic", type: "airline", alliance: "none", country: "UK", logoUrl: "/logos/airlines/virgin-atlantic.svg" },
  { id: "virgin-australia", name: "Virgin Australia Velocity", shortName: "Virgin Australia", type: "airline", alliance: "none", country: "Australia", logoUrl: "/logos/airlines/virgin-australia.svg" },
  { id: "virgin-red", name: "Virgin Red", shortName: "Virgin Red", type: "airline", alliance: "none", country: "UK", logoUrl: "/logos/airlines/virgin-red.svg" },
  { id: "vueling", name: "Vueling Club", shortName: "Vueling", type: "airline", alliance: "none", country: "Spain", logoUrl: "/logos/airlines/vueling.svg" },
];

// Transfer Partners - Hotels
export const hotelPartners: TransferPartner[] = [
  { id: "accor", name: "Accor Live Limitless (ALL)", shortName: "Accor", type: "hotel", country: "France" },
  { id: "choice", name: "Choice Privileges", shortName: "Choice", type: "hotel", country: "USA" },
  { id: "hilton", name: "Hilton Honors", shortName: "Hilton", type: "hotel", country: "USA" },
  { id: "hyatt", name: "World of Hyatt", shortName: "Hyatt", type: "hotel", country: "USA" },
  { id: "ihg", name: "IHG One Rewards", shortName: "IHG", type: "hotel", country: "UK" },
  { id: "i-prefer", name: "I Prefer Hotel Rewards", shortName: "I Prefer", type: "hotel", country: "USA" },
  { id: "leading-hotels", name: "Leading Hotels of the World", shortName: "LHW", type: "hotel", country: "USA" },
  { id: "marriott", name: "Marriott Bonvoy", shortName: "Marriott", type: "hotel", country: "USA" },
  { id: "wyndham", name: "Wyndham Rewards", shortName: "Wyndham", type: "hotel", country: "USA" },
];

export const partners: TransferPartner[] = [...airlinePartners, ...hotelPartners];

// Transfer Relationships
export const relationships: TransferRelationship[] = [
  // ========== CHASE ULTIMATE REWARDS ==========
  // Airlines (10 partners, all 1:1)
  { programId: "chase", partnerId: "aer-lingus", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "chase", partnerId: "air-canada", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "chase", partnerId: "air-france-klm", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "chase", partnerId: "british-airways", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "chase", partnerId: "iberia", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "chase", partnerId: "jetblue", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "chase", partnerId: "singapore", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "chase", partnerId: "southwest", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "chase", partnerId: "united", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "chase", partnerId: "virgin-atlantic", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  // Hotels (3 partners, all 1:1)
  { programId: "chase", partnerId: "hyatt", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "chase", partnerId: "ihg", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "chase", partnerId: "marriott", ratio: { from: 1, to: 1 }, transferTime: "Instant" },

  // ========== AMEX MEMBERSHIP REWARDS ==========
  // Airlines (17 partners)
  { programId: "amex", partnerId: "aer-lingus", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "amex", partnerId: "aeromexico", ratio: { from: 1, to: 1.6 }, transferTime: "Instant" },
  { programId: "amex", partnerId: "air-canada", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "amex", partnerId: "air-france-klm", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "amex", partnerId: "ana", ratio: { from: 1, to: 1 }, transferTime: "2-3 days" },
  { programId: "amex", partnerId: "avianca", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "amex", partnerId: "british-airways", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "amex", partnerId: "cathay", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "amex", partnerId: "delta", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "amex", partnerId: "emirates", ratio: { from: 1, to: 0.8 }, transferTime: "Instant", notes: "5:4 ratio" },
  { programId: "amex", partnerId: "etihad", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "amex", partnerId: "iberia", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "amex", partnerId: "jetblue", ratio: { from: 1, to: 0.8 }, transferTime: "Instant", notes: "5:4 ratio" },
  { programId: "amex", partnerId: "qantas", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "amex", partnerId: "qatar", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "amex", partnerId: "singapore", ratio: { from: 1, to: 1 }, transferTime: "12-24 hours" },
  { programId: "amex", partnerId: "virgin-atlantic", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  // Hotels (3 partners)
  { programId: "amex", partnerId: "choice", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "amex", partnerId: "hilton", ratio: { from: 1, to: 2 }, transferTime: "Instant", notes: "1:2 bonus ratio" },
  { programId: "amex", partnerId: "marriott", ratio: { from: 1, to: 1 }, transferTime: "Instant" },

  // ========== CITI THANKYOU POINTS ==========
  // Airlines (16 partners)
  { programId: "citi", partnerId: "aeromexico", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "citi", partnerId: "air-france-klm", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "citi", partnerId: "american", ratio: { from: 1, to: 1 }, transferTime: "Instant", notes: "Exclusive partner" },
  { programId: "citi", partnerId: "avianca", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "citi", partnerId: "cathay", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "citi", partnerId: "emirates", ratio: { from: 1, to: 0.8 }, transferTime: "Instant", notes: "5:4 ratio" },
  { programId: "citi", partnerId: "etihad", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "citi", partnerId: "eva", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "citi", partnerId: "jetblue", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "citi", partnerId: "qantas", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "citi", partnerId: "qatar", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "citi", partnerId: "singapore", ratio: { from: 1, to: 1 }, transferTime: "12-24 hours" },
  { programId: "citi", partnerId: "thai", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "citi", partnerId: "turkish", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "citi", partnerId: "virgin-atlantic", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "citi", partnerId: "virgin-red", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  // Hotels (5 partners)
  { programId: "citi", partnerId: "accor", ratio: { from: 2, to: 1 }, transferTime: "Instant", notes: "2:1 ratio" },
  { programId: "citi", partnerId: "choice", ratio: { from: 1, to: 2 }, transferTime: "Instant", notes: "1:2 bonus ratio" },
  { programId: "citi", partnerId: "leading-hotels", ratio: { from: 5, to: 1 }, transferTime: "Instant", notes: "5:1 ratio" },
  { programId: "citi", partnerId: "i-prefer", ratio: { from: 1, to: 4 }, transferTime: "Instant", notes: "1:4 ratio" },
  { programId: "citi", partnerId: "wyndham", ratio: { from: 1, to: 1 }, transferTime: "Instant" },

  // ========== CAPITAL ONE MILES ==========
  // Airlines (18 partners)
  { programId: "capital-one", partnerId: "aeromexico", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "capital-one", partnerId: "air-canada", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "capital-one", partnerId: "air-france-klm", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "capital-one", partnerId: "avianca", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "capital-one", partnerId: "british-airways", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "capital-one", partnerId: "cathay", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "capital-one", partnerId: "emirates", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "capital-one", partnerId: "etihad", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "capital-one", partnerId: "eva", ratio: { from: 4, to: 3 }, transferTime: "Instant", notes: "4:3 ratio" },
  { programId: "capital-one", partnerId: "finnair", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "capital-one", partnerId: "jal", ratio: { from: 4, to: 3 }, transferTime: "Instant", notes: "4:3 ratio" },
  { programId: "capital-one", partnerId: "jetblue", ratio: { from: 5, to: 3 }, transferTime: "Instant", notes: "5:3 ratio" },
  { programId: "capital-one", partnerId: "qantas", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "capital-one", partnerId: "qatar", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "capital-one", partnerId: "singapore", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "capital-one", partnerId: "tap", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "capital-one", partnerId: "turkish", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "capital-one", partnerId: "virgin-red", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  // Hotels (4 partners)
  { programId: "capital-one", partnerId: "accor", ratio: { from: 2, to: 1 }, transferTime: "Instant", notes: "2:1 ratio" },
  { programId: "capital-one", partnerId: "choice", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "capital-one", partnerId: "i-prefer", ratio: { from: 1, to: 2 }, transferTime: "Instant", notes: "1:2 ratio" },
  { programId: "capital-one", partnerId: "wyndham", ratio: { from: 1, to: 1 }, transferTime: "Instant" },

  // ========== BILT REWARDS ==========
  // Airlines (19 partners)
  { programId: "bilt", partnerId: "aer-lingus", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "air-canada", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "air-france-klm", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "alaska-atmos", ratio: { from: 1, to: 1 }, transferTime: "Instant", notes: "Exclusive partner" },
  { programId: "bilt", partnerId: "avianca", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "british-airways", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "cathay", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "emirates", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "etihad", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "iberia", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "jal", ratio: { from: 1, to: 1 }, transferTime: "Instant", notes: "Rare partner" },
  { programId: "bilt", partnerId: "qatar", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "southwest", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "spirit", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "tap", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "turkish", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "united", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "virgin-atlantic", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "virgin-red", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  // Hotels (5 partners)
  { programId: "bilt", partnerId: "accor", ratio: { from: 3, to: 2 }, transferTime: "Instant", notes: "3:2 ratio" },
  { programId: "bilt", partnerId: "hilton", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "hyatt", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "ihg", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "bilt", partnerId: "marriott", ratio: { from: 1, to: 1 }, transferTime: "Instant" },

  // ========== WELLS FARGO REWARDS ==========
  // Airlines (7 partners)
  { programId: "wells-fargo", partnerId: "aer-lingus", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "wells-fargo", partnerId: "air-france-klm", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "wells-fargo", partnerId: "avianca", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "wells-fargo", partnerId: "british-airways", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "wells-fargo", partnerId: "iberia", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "wells-fargo", partnerId: "jetblue", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  { programId: "wells-fargo", partnerId: "virgin-atlantic", ratio: { from: 1, to: 1 }, transferTime: "Instant" },
  // Hotels (1 partner)
  { programId: "wells-fargo", partnerId: "choice", ratio: { from: 1, to: 2 }, transferTime: "Instant", notes: "1:2 bonus ratio" },

  // ========== MARRIOTT BONVOY (transfers OUT to airlines) ==========
  // Standard 3:1 with 5K bonus at 60K (effectively ~2.4:1)
  { programId: "marriott", partnerId: "aegean", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "aer-lingus", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "aeromexico", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "air-canada", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "air-france-klm", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "air-new-zealand", ratio: { from: 200, to: 1 }, transferTime: "2-3 days", notes: "Poor ratio" },
  { programId: "marriott", partnerId: "alaska", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "american", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "No 5K bonus" },
  { programId: "marriott", partnerId: "ana", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "asiana", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "avianca", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "No 5K bonus" },
  { programId: "marriott", partnerId: "british-airways", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "cathay", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "copa", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "delta", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "No 5K bonus" },
  { programId: "marriott", partnerId: "emirates", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "etihad", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "frontier", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "hainan", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "hawaiian", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "iberia", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "jal", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "latam", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "qantas", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "qatar", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "saudia", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "singapore", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "southwest", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "tap", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "thai", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "turkish", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "united", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "10K bonus per 60K (RewardsPlus)" },
  { programId: "marriott", partnerId: "virgin-atlantic", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "virgin-australia", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
  { programId: "marriott", partnerId: "vueling", ratio: { from: 3, to: 1 }, transferTime: "2-3 days", notes: "5K bonus per 60K" },
];

// Export combined data
export const transferPartnerData: TransferPartnerData = {
  programs,
  partners,
  relationships,
};

// Helper functions
export function getPartnersByProgram(programId: string): TransferPartner[] {
  const partnerIds = relationships
    .filter((r) => r.programId === programId)
    .map((r) => r.partnerId);
  return partners.filter((p) => partnerIds.includes(p.id));
}

export function getProgramsByPartner(partnerId: string): CreditCardProgram[] {
  const programIds = relationships
    .filter((r) => r.partnerId === partnerId)
    .map((r) => r.programId);
  return programs.filter((p) => programIds.includes(p.id));
}

export function getRelationship(
  programId: string,
  partnerId: string
): TransferRelationship | undefined {
  return relationships.find(
    (r) => r.programId === programId && r.partnerId === partnerId
  );
}

export function formatRatio(ratio: { from: number; to: number }): string {
  if (ratio.from === 1 && ratio.to === 1) return "1:1";
  if (ratio.from === 1) return `1:${ratio.to}`;
  if (ratio.to === 1) return `${ratio.from}:1`;
  return `${ratio.from}:${ratio.to}`;
}

// Get airlines grouped by alliance
export function getAirlinesByAlliance(alliance: Alliance): TransferPartner[] {
  return airlinePartners.filter((p) => p.alliance === alliance);
}
