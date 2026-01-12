// Credit Card Program Types
export type CreditCardProgramId =
  | "chase"
  | "amex"
  | "citi"
  | "capital-one"
  | "bilt"
  | "wells-fargo"
  | "marriott";

export interface CreditCardProgram {
  id: CreditCardProgramId;
  name: string;
  shortName: string;
  color: string; // Brand color for visual identification
  pointsName: string; // e.g., "Ultimate Rewards", "Membership Rewards"
  logoUrl?: string; // Optional logo path
}

// Transfer Partner Types
export type PartnerType = "airline" | "hotel";

export type Alliance = "oneworld" | "skyteam" | "star-alliance" | "none";

export interface TransferPartner {
  id: string;
  name: string;
  shortName: string;
  type: PartnerType;
  alliance?: Alliance; // Only for airlines
  country?: string; // Headquarters country
  logoUrl?: string; // Optional logo path
}

// Transfer Relationship Types
export interface TransferRatio {
  from: number; // e.g., 1 (credit card points)
  to: number; // e.g., 1 or 1.5 (partner points)
}

export interface TransferRelationship {
  programId: CreditCardProgramId;
  partnerId: string;
  ratio: TransferRatio;
  transferTime?: string; // e.g., "Instant", "1-2 days"
  notes?: string; // e.g., "Minimum 1,000 points"
  hasBonus?: boolean; // Currently has a transfer bonus
  bonusPercent?: number; // e.g., 30 for 30% bonus
  bonusExpiry?: string; // ISO date string
}

// UI State Types
export interface MatrixFilter {
  partnerType: PartnerType | "all";
  searchQuery: string;
  selectedProgram: CreditCardProgramId | null;
  selectedPartner: string | null;
}

// Data Structure for the Matrix
export interface TransferPartnerData {
  programs: CreditCardProgram[];
  partners: TransferPartner[];
  relationships: TransferRelationship[];
}
