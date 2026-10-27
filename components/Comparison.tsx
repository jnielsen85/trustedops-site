import Link from "next/link";
import { cn } from "@/lib/utils";
import { PageSection } from "@/components/PageSection";

// ── Price figures: update here ────────────────────────────────────────────
// FROM_PRICE should not exceed the cost calculator's lowest TrustedOps total
// (currently $1,922/mo: Data Entry / CRM Administration at default settings).
const FROM_PRICE = "$1,950";
const LOCAL_COST_RANGE = "$60,000–$80,000+";
const SAVINGS = "$30,000+";

const CALCULATOR_HREF = "/resources/cost-calculator";

type OptionKey = "local" | "freelancer" | "trustedops";

type Cell = { value: string; sub?: string };

type Row = { label: string; cells: Record<OptionKey, Cell> };

const options: { key: OptionKey; label: string }[] = [
  { key: "local", label: "Hiring locally" },
  { key: "freelancer", label: "Freelancer / VA platform" },
  { key: "trustedops", label: "TrustedOps" },
];

// Stacked cards on mobile lead with TrustedOps
const mobileOrder: OptionKey[] = ["trustedops", "local", "freelancer"];

const rows: Row[] = [
  {
    label: "Cost",
    cells: {
      local: {
        value: `${LOCAL_COST_RANGE} a year`,
        sub: "Salary, super, WorkCover, leave and recruitment",
      },
      freelancer: { value: "Hourly rates that vary and add up" },
      trustedops: {
        value: `From ${FROM_PRICE}/month all-in`,
        sub: "Salary, benefits, supervision, HR, payroll and compliance in one price",
      },
    },
  },
  {
    label: "Availability",
    cells: {
      local: { value: "Full-time, dedicated" },
      freelancer: { value: "Part-time, shared with other clients" },
      trustedops: {
        value: "Full-time, dedicated to your account, with hours aligned to your Australian business day",
      },
    },
  },
  {
    label: "Day-to-day supervision",
    cells: {
      local: { value: "On you" },
      freelancer: { value: "On you" },
      trustedops: { value: "Managed by our Philippines team" },
    },
  },
  {
    label: "Payroll, HR and compliance",
    cells: {
      local: { value: "On you" },
      freelancer: { value: "On you" },
      trustedops: { value: "Included" },
    },
  },
  {
    label: "Choosing who you get",
    cells: {
      local: { value: "You run the recruitment" },
      freelancer: { value: "Pick from profiles and hope" },
      trustedops: { value: "Interview up to 3 pre-vetted candidates and approve who's assigned" },
    },
  },
  {
    label: "If it doesn't work out",
    cells: {
      local: { value: "Start recruiting again" },
      freelancer: { value: "Start searching again" },
      trustedops: { value: "6-month replacement guarantee" },
    },
  },
  {
    label: "Time to get started",
    cells: {
      local: { value: "Weeks to months" },
      freelancer: { value: "Fast, but hit and miss" },
      trustedops: { value: "Meet candidates within ~2 weeks" },
    },
  },
];

function Check() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className="mt-1 h-3 w-3 shrink-0 text-brand-teal"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 6.5l2.5 2.5L10 3.5" />
    </svg>
  );
}

function RecommendedPill() {
  return (
    <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-brand-navy uppercase">
      Recommended
    </span>
  );
}

function CellContent({ cell, highlight }: { cell: Cell; highlight: boolean }) {
  return (
    <div className={cn(highlight && "flex gap-2")}>
      {highlight ? <Check /> : null}
      <div>
        <div>{cell.value}</div>
        {cell.sub ? (
          <div className={cn("mt-1 text-xs font-normal", highlight ? "text-brand-navy/70" : "text-brand-navy/60")}>
            {cell.sub}
          </div>
        ) : null}
      </div>
    </div>
  );
}

// Teal side borders on every TrustedOps cell, so the column reads as one highlighted block
const tealColumn = "border-x-2 border-brand-teal";

export function Comparison() {
  return (
    <PageSection
      id="comparison"
      tone="grey"
      eyebrow="The comparison"
      title="The same full-time help, for a fraction of the cost."
      intro="Here's how a dedicated TrustedOps specialist compares with the usual ways of getting help."
    >
      {/* Desktop: comparison table */}
      <div className="hidden overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm md:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-brand-navy text-white">
              <th scope="col" className="w-[22%] p-5">
                <span className="sr-only">Compared on</span>
              </th>
              {options.map((o) =>
                o.key === "trustedops" ? (
                  <th key={o.key} scope="col" className={cn("bg-brand-teal p-5 text-base font-bold", tealColumn)}>
                    <div className="flex flex-wrap items-center gap-2">
                      {o.label}
                      <RecommendedPill />
                    </div>
                  </th>
                ) : (
                  <th key={o.key} scope="col" className="p-5 text-base font-bold">
                    {o.label}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.label} className="border-t border-black/10">
                <th scope="row" className="bg-slate-50 p-5 align-top font-bold text-brand-navy">
                  {row.label}
                </th>
                {options.map((o) => {
                  const highlight = o.key === "trustedops";
                  return (
                    <td
                      key={o.key}
                      className={cn(
                        "p-5 align-top",
                        highlight
                          ? cn("bg-brand-teal/10 font-medium text-brand-navy", tealColumn, i === rows.length - 1 && "border-b-2")
                          : "text-brand-navy/70"
                      )}
                    >
                      <CellContent cell={row.cells[o.key]} highlight={highlight} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: one card per option, TrustedOps first */}
      <div className="space-y-5 md:hidden">
        {mobileOrder.map((key) => {
          const option = options.find((o) => o.key === key)!;
          const highlight = key === "trustedops";
          return (
            <div
              key={key}
              className={cn(
                "overflow-hidden rounded-3xl border bg-white",
                highlight ? "border-2 border-brand-teal" : "border-black/10"
              )}
            >
              <h3
                className={cn(
                  "flex flex-wrap items-center gap-2 px-5 py-4 text-base font-bold",
                  highlight ? "bg-brand-teal text-white" : "bg-brand-navy text-white"
                )}
              >
                {option.label}
                {highlight ? <RecommendedPill /> : null}
              </h3>
              <dl className={cn("divide-y divide-black/10 text-sm", highlight && "bg-brand-teal/10")}>
                {rows.map((row) => (
                  <div key={row.label} className="px-5 py-3.5">
                    <dt className="text-xs font-bold text-brand-navy">{row.label}</dt>
                    <dd className={cn("mt-1", highlight ? "font-medium text-brand-navy" : "text-brand-navy/70")}>
                      <CellContent cell={row.cells[key]} highlight={highlight} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          );
        })}
      </div>

      {/* Savings callout */}
      <div className="mt-10 text-center">
        <p className="text-2xl font-bold tracking-tight text-brand-teal md:text-3xl">
          Save {SAVINGS} a year compared with hiring locally.
        </p>
        <Link
          href={CALCULATOR_HREF}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white hover:opacity-95"
        >
          Calculate your savings
        </Link>
        <p className="mt-4 text-xs text-brand-navy/60">
          Illustrative only. Pricing depends on the role and experience level. Figures in AUD.
        </p>
      </div>
    </PageSection>
  );
}
