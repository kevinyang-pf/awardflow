"use client";

import { useState } from "react";
import { MatrixGrid } from "@/components/transfer-matrix/matrix-grid";
import type { PartnerType } from "@/types";

export default function TransferMatrixPage() {
  const [filter, setFilter] = useState<PartnerType | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container max-w-screen-2xl px-4 md:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Transfer Partner Matrix
        </h1>
        <p className="text-muted-foreground">
          Click on a credit card program or transfer partner to highlight
          relationships. Green ratios (1:1) are the best value.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              filter === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("airline")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              filter === "airline"
                ? "bg-blue-500 text-white"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            Airlines
          </button>
          <button
            onClick={() => setFilter("hotel")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              filter === "hotel"
                ? "bg-amber-500 text-white"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            Hotels
          </button>
        </div>

        <div className="flex-1 max-w-sm">
          <input
            type="text"
            placeholder="Search partners..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 text-sm rounded-md border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span>Airline</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span>Hotel</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-600 dark:text-green-400 font-medium">
            1:1
          </span>
          <span>Best ratio</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[var(--color-brand-gold)] font-medium">
            1:2
          </span>
          <span>Bonus ratio</span>
        </div>
      </div>

      {/* Matrix */}
      <MatrixGrid filter={filter} searchQuery={searchQuery} />
    </div>
  );
}
