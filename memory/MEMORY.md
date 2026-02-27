# TrustedOps Site — Memory

## Project Structure
- Next.js App Router, TypeScript, Tailwind CSS v3
- Brand colors: `brand-navy` (#0B1B3A), `brand-teal` (#1196CC) — defined in tokens.css + tailwind.config.ts
- `shadow-soft` custom shadow, `Container` (max-w-6xl, px-6)
- No `overflow-hidden` on card wrappers that need sticky children (breaks position: sticky)

## Resources Tools Pattern
Each tool at `/app/resources/{tool-name}/page.tsx`:
- Imports a `{Name}Guide` (intro modal, `'use client'`, fixed overlay, dismissible)
- Imports a `{Name}Form` (main component, `'use client'`, `overflow-hidden rounded-2xl`)
- Guide + Form rendered in page; Container wraps form with back link
- `localStorage` for persistence with STORAGE_KEY versioned string
- Print styles: `header, footer { display: none }` in `<style>` tag on page

## Tools built
- Role Scorecard (`/resources/role-scorecard`) — RoleScorecardGuide + RoleScorecardForm
- 30/60/90 Ramp Plan (`/resources/ramp-plan`) — RampPlanGuide + RampPlanForm
- Cost Calculator (`/resources/cost-calculator`) — CostCalculatorGuide + CostCalculatorForm

## Cost Calculator (v2 — AU focused)
- Two-model only: Australian Direct Hire vs TrustedOps (EoR)
- All figures in AUD; target audience is Australian businesses
- Role dropdown auto-fills PH and AU salaries from CSV benchmark data (31 roles across 5 categories)
- AU on-costs: superannuation (11.5%), workers comp (1.5%), leave accrual (5%), equipment, software, payroll admin
- TrustedOps: offshore salary + flat $2,500 AUD/qtr EoR fee (no super/workers comp/leave)
- Outputs: monthly totals on each assumption card, hero annual savings, comparison bars, 12-month totals, 3-year projection
- "Did You Know?" callout (amber): AHRI avg cost to hire = A$23,860, avg time-to-hire = 40 days (not in calc)
- State stored in localStorage under `trustedops_cost_calc_v2`
- Model colours: AU Direct Hire = brand-navy, TrustedOps = brand-teal

## Component Conventions
- `'use client'` at top for interactive components
- Label style: `text-[10px] font-semibold tracking-wider uppercase text-brand-navy/40`
- Section pill badges use `rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase`
- Input focus: `focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/10`
- Number inputs use `[appearance:textfield]` to hide spinners
- Two-column layout: `lg:grid lg:grid-cols-[1fr_390px] lg:divide-x`
