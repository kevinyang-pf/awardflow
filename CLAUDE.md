# AwardFlow - Codebase Documentation

> This document provides comprehensive documentation for AI assistants and developers working on the AwardFlow codebase.

## Project Overview

**AwardFlow** is a Next.js web application that provides an interactive tool for exploring transfer partner relationships between credit card points programs and airline/hotel loyalty programs. It helps users maximize the value of their credit card points by visualizing and analyzing transfer ratios.

**Live Site**: https://awardflow.vercel.app
**GitHub**: https://github.com/kevinyang-pf/awardflow

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.1 | React framework with App Router |
| React | 19.2.3 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Styling |
| next-themes | 0.4.6 | Dark/light mode |
| lucide-react | 0.562.0 | Icons |

## Directory Structure

```
awardflow/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (Header, Footer, ThemeProvider)
│   ├── page.tsx                 # Home page with hero and stats
│   ├── globals.css              # Global styles, brand colors, Tailwind
│   └── transfer-matrix/
│       └── page.tsx             # Transfer matrix page with filters
├── components/
│   ├── layout/
│   │   ├── header.tsx           # Navigation header with theme toggle
│   │   └── footer.tsx           # Footer with attribution
│   ├── shared/
│   │   ├── theme-provider.tsx   # next-themes wrapper
│   │   └── theme-toggle.tsx     # Dark/light mode button
│   └── transfer-matrix/
│       └── matrix-grid.tsx      # Interactive matrix grid component
├── data/
│   └── transfer-partners.ts     # All programs, partners, relationships
├── lib/
│   └── utils.ts                 # cn() utility for class merging
├── types/
│   └── index.ts                 # TypeScript interfaces
└── public/                      # Static assets
```

## Component Hierarchy

```
RootLayout (app/layout.tsx)
└── ThemeProvider
    ├── Header
    │   └── ThemeToggle
    ├── main
    │   ├── HomePage (/)
    │   │   └── [Hero, Stats, Programs, CTA]
    │   └── TransferMatrixPage (/transfer-matrix)
    │       └── MatrixGrid
    └── Footer
```

## Data Architecture

### Types (`types/index.ts`)

```typescript
// Credit Card Program (7 total: Chase, Amex, Citi, Capital One, Bilt, Wells Fargo, Marriott)
CreditCardProgramId = "chase" | "amex" | "citi" | "capital-one" | "bilt" | "wells-fargo" | "marriott"
CreditCardProgram { id, name, shortName, color, pointsName }

// Transfer Partners (40 airlines + 9 hotels = 49 total)
PartnerType = "airline" | "hotel"
Alliance = "oneworld" | "skyteam" | "star-alliance" | "none"
TransferPartner { id, name, shortName, type, alliance?, country? }

// Transfer Relationships (169 mappings)
TransferRatio { from, to }  // e.g., { from: 1, to: 1 } = 1:1 ratio
TransferRelationship { programId, partnerId, ratio, transferTime?, notes?, hasBonus? }

// UI State
MatrixFilter { partnerType, searchQuery, selectedProgram, selectedPartner }
```

### Data Layer (`data/transfer-partners.ts`)

**Exports:**
- `programs[]` - 7 credit card programs with brand colors
- `airlinePartners[]` - 40 airline loyalty programs
- `hotelPartners[]` - 9 hotel loyalty programs
- `partners[]` - Combined array (airlines + hotels)
- `relationships[]` - 169 transfer mappings with ratios

**Helper Functions:**
- `getPartnersByProgram(programId)` - All partners for a program
- `getProgramsByPartner(partnerId)` - All programs transferring to a partner
- `getRelationship(programId, partnerId)` - Specific transfer relationship
- `formatRatio(ratio)` - Display format (e.g., "1:1", "3:1")

### Data Flow

```
transfer-partners.ts (static data)
    │
    ├─→ page.tsx (home) ─── statistics display
    │
    └─→ MatrixGrid ─┬─ filter by type (airline/hotel)
                    ├─ filter by search query
                    ├─ highlight by program selection
                    └─ highlight by partner selection
```

## Key Files Explained

### `app/layout.tsx` - Root Layout
- Imports Geist fonts from Google Fonts
- Wraps app in ThemeProvider for dark mode
- Renders Header → main (children) → Footer
- Sets metadata (title, description)

### `app/page.tsx` - Home Page
- Server component (no "use client")
- Hero section with brand gradient background
- Statistics section showing counts from data
- Programs grid showing all 7 card programs
- CTA buttons linking to /transfer-matrix

### `app/transfer-matrix/page.tsx` - Matrix Page
- Client component with filter/search state
- Filter buttons: All, Airlines, Hotels
- Search input for partner names
- Legend explaining color coding
- Renders MatrixGrid with filter props

### `components/transfer-matrix/matrix-grid.tsx` - Core Feature
- Interactive 7-column grid (programs × partners)
- Click program header → highlight all its partners
- Click partner row → highlight all programs that transfer
- Color coding:
  - Green (#00C400) = 1:1 ratio (best value)
  - Gold (#FFD700) = bonus ratio (e.g., 1:2)
- Uses useMemo for filtered partner calculations
- Manages selectedProgram and selectedPartner state

### `app/globals.css` - Brand Styling
```css
/* Brand Colors */
--color-brand-primary: #00D4FF;   /* Cyan */
--color-brand-secondary: #0066CC; /* Blue */
--color-brand-red: #FF3B3B;
--color-brand-gold: #FFD700;
--color-brand-coral: #FF6B4A;

/* Brand Gradient */
.bg-brand-gradient {
  background: linear-gradient(135deg, #00D4FF 0%, #0066CC 100%);
}
```

## Patterns & Conventions

### Client vs Server Components
- **Server**: Home page, Root layout, Footer (no interactivity needed)
- **Client**: Header, ThemeToggle, MatrixGrid, TransferMatrixPage (require useState/useEffect)
- Use `"use client"` directive at top of interactive components

### Styling
- Tailwind CSS for all styling
- CSS variables for brand colors in globals.css
- `cn()` utility from lib/utils.ts for class merging
- Responsive breakpoints: `md:`, `lg:`

### State Management
- useState for local component state
- Props drilling (page → MatrixGrid)
- useMemo for expensive computations

### Naming
- Components: PascalCase (`MatrixGrid`, `ThemeProvider`)
- Files: kebab-case (`matrix-grid.tsx`, `theme-toggle.tsx`)
- Functions: camelCase (`getPartnersByProgram`, `formatRatio`)

## Routes

| Path | File | Type | Description |
|------|------|------|-------------|
| `/` | `app/page.tsx` | Server | Landing page with hero |
| `/transfer-matrix` | `app/transfer-matrix/page.tsx` | Client | Interactive matrix tool |

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

- Platform: Vercel
- Auto-deploys from GitHub main branch
- Configuration: `.vercel/` directory

## Feature Summary

1. **Interactive Matrix** - Visual grid of card programs × transfer partners
2. **Click-to-Highlight** - Click program/partner to see all relationships
3. **Filtering** - Filter by airline or hotel partners
4. **Search** - Search partners by name
5. **Ratio Display** - Color-coded transfer ratios
6. **Dark/Light Mode** - Theme toggle with system detection
7. **Responsive** - Works on mobile, tablet, desktop

## Data Statistics

- **7** Credit Card Programs
- **40** Airline Partners
- **9** Hotel Partners
- **169** Transfer Relationships

## Future Considerations

Documented in original plan but not yet implemented:
- Supabase integration for dynamic data
- User authentication
- Custom domain (awardflow.com)
- Additional programs (e.g., Rove Miles)
- Transfer bonus tracking/alerts
