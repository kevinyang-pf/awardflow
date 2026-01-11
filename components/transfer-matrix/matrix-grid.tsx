"use client";

import { useState, useMemo } from "react";
import {
  programs,
  partners,
  relationships,
  formatRatio,
  getRelationship,
  allianceInfo,
  ALLIANCE_ORDER,
} from "@/data/transfer-partners";
import type { CreditCardProgramId, PartnerType, Alliance, TransferPartner } from "@/types";

interface MatrixGridProps {
  filter: PartnerType | "all";
  searchQuery: string;
}

export function MatrixGrid({ filter, searchQuery }: MatrixGridProps) {
  const [selectedProgram, setSelectedProgram] =
    useState<CreditCardProgramId | null>(null);
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  // Filter partners based on type and search
  const filteredPartners = useMemo(() => {
    return partners.filter((partner) => {
      const matchesType = filter === "all" || partner.type === filter;
      const matchesSearch =
        searchQuery === "" ||
        partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        partner.shortName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [filter, searchQuery]);

  // Group partners by alliance (airlines) or type (hotels)
  const groupedPartners = useMemo(() => {
    const groups: { key: string; label: string; color: string; partners: TransferPartner[] }[] = [];

    if (filter !== "hotel") {
      // Add airline groups by alliance
      for (const alliance of ALLIANCE_ORDER) {
        const airlinesInGroup = filteredPartners.filter(
          (p) => p.type === "airline" && p.alliance === alliance
        );
        if (airlinesInGroup.length > 0) {
          const info = allianceInfo[alliance];
          groups.push({
            key: alliance,
            label: info.displayName,
            color: info.color,
            partners: airlinesInGroup,
          });
        }
      }
    }

    if (filter !== "airline") {
      // Add hotels group
      const hotels = filteredPartners.filter((p) => p.type === "hotel");
      if (hotels.length > 0) {
        groups.push({
          key: "hotels",
          label: "Hotels",
          color: "#D97706", // amber-600
          partners: hotels,
        });
      }
    }

    return groups;
  }, [filter, filteredPartners]);

  // Get partners for a program
  const getProgramPartnerIds = (programId: CreditCardProgramId): string[] => {
    return relationships
      .filter((r) => r.programId === programId)
      .map((r) => r.partnerId);
  };

  // Get programs for a partner
  const getPartnerProgramIds = (partnerId: string): CreditCardProgramId[] => {
    return relationships
      .filter((r) => r.partnerId === partnerId)
      .map((r) => r.programId);
  };

  // Check if cell should be highlighted
  const isCellHighlighted = (
    programId: CreditCardProgramId,
    partnerId: string
  ): boolean => {
    if (selectedProgram && selectedProgram === programId) {
      return getProgramPartnerIds(programId).includes(partnerId);
    }
    if (selectedPartner && selectedPartner === partnerId) {
      return getPartnerProgramIds(partnerId).includes(programId);
    }
    return false;
  };

  // Check if row/column should be dimmed
  const isDimmed = (
    programId: CreditCardProgramId,
    partnerId: string
  ): boolean => {
    if (!selectedProgram && !selectedPartner) return false;

    const relationship = getRelationship(programId, partnerId);
    if (!relationship) return true;

    if (selectedProgram) {
      return programId !== selectedProgram;
    }
    if (selectedPartner) {
      return partnerId !== selectedPartner;
    }
    return false;
  };

  const handleProgramClick = (programId: CreditCardProgramId) => {
    setSelectedPartner(null);
    setSelectedProgram(selectedProgram === programId ? null : programId);
  };

  const handlePartnerClick = (partnerId: string) => {
    setSelectedProgram(null);
    setSelectedPartner(selectedPartner === partnerId ? null : partnerId);
  };

  const clearSelection = () => {
    setSelectedProgram(null);
    setSelectedPartner(null);
  };

  return (
    <div className="w-full overflow-x-auto">
      {(selectedProgram || selectedPartner) && (
        <button
          onClick={clearSelection}
          className="mb-4 text-sm text-muted-foreground hover:text-foreground underline"
        >
          Clear selection
        </button>
      )}

      <div className="min-w-[800px] max-w-[1100px] mx-auto">
        {/* Header row with program names */}
        <div className="grid grid-cols-[200px_repeat(7,1fr)] gap-1 mb-1">
          <div className="p-2" /> {/* Empty corner cell */}
          {programs.map((program) => (
            <button
              key={program.id}
              onClick={() => handleProgramClick(program.id)}
              className={`p-2 text-xs font-semibold text-center rounded-md transition-all cursor-pointer ${
                selectedProgram === program.id
                  ? "ring-2 ring-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]/10"
                  : "hover:bg-muted"
              }`}
              style={{
                opacity:
                  selectedPartner &&
                  !getPartnerProgramIds(selectedPartner).includes(program.id)
                    ? 0.3
                    : 1,
              }}
            >
              <div
                className="w-3 h-3 rounded-full mx-auto mb-1"
                style={{ backgroundColor: program.color }}
              />
              <span className="block truncate">{program.shortName}</span>
            </button>
          ))}
        </div>

        {/* Partner rows grouped by alliance/type */}
        {groupedPartners.map((group) => (
          <div key={group.key}>
            {/* Section header */}
            <div className="grid grid-cols-[200px_repeat(7,1fr)] gap-1 mt-6 mb-2 first:mt-0">
              <div className="flex items-center gap-2 px-2">
                <span
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: group.color }}
                >
                  {group.label}
                </span>
                <span className="text-xs text-muted-foreground">
                  ({group.partners.length})
                </span>
              </div>
              {/* Empty cells for alignment */}
              {programs.map((p) => (
                <div key={p.id} />
              ))}
            </div>

            {/* Partner rows in this group */}
            {group.partners.map((partner) => (
              <div
                key={partner.id}
                className="grid grid-cols-[200px_repeat(7,1fr)] gap-1 mb-1"
              >
                {/* Partner name cell */}
                <button
                  onClick={() => handlePartnerClick(partner.id)}
                  className={`p-2 text-left text-sm rounded-md transition-all cursor-pointer flex items-center gap-2 ${
                    selectedPartner === partner.id
                      ? "ring-2 ring-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]/10"
                      : "hover:bg-muted"
                  }`}
                  style={{
                    opacity:
                      selectedProgram &&
                      !getProgramPartnerIds(selectedProgram).includes(partner.id)
                        ? 0.3
                        : 1,
                  }}
                >
                  <span
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      partner.type === "airline" ? "bg-blue-500" : "bg-amber-500"
                    }`}
                  />
                  <span className="truncate">{partner.shortName}</span>
                </button>

                {/* Ratio cells */}
                {programs.map((program) => {
                  const relationship = getRelationship(program.id, partner.id);
                  const isHighlighted = isCellHighlighted(program.id, partner.id);
                  const dimmed = isDimmed(program.id, partner.id);

                  return (
                    <div
                      key={`${program.id}-${partner.id}`}
                      className={`p-2 text-center text-xs rounded-md transition-all ${
                        relationship
                          ? isHighlighted
                            ? "bg-[var(--color-brand-primary)]/20 text-foreground font-medium"
                            : dimmed
                            ? "bg-muted/30 text-muted-foreground/50"
                            : "bg-muted/50 text-foreground"
                          : "bg-transparent"
                      }`}
                    >
                      {relationship ? (
                        <span
                          className={
                            relationship.ratio.from === 1 &&
                            relationship.ratio.to === 1
                              ? "text-green-600 dark:text-green-400"
                              : relationship.ratio.to > relationship.ratio.from
                              ? "text-[var(--color-brand-gold)]"
                              : "text-muted-foreground"
                          }
                        >
                          {formatRatio(relationship.ratio)}
                        </span>
                      ) : (
                        <span className="text-muted-foreground/30">—</span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>

      {filteredPartners.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No partners found matching your criteria.
        </div>
      )}
    </div>
  );
}
