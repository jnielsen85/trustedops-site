import { GuideBody, ToolGuide } from '@/components/ToolGuide';

const PANELS = [
  {
    pill: 'Australian Direct Hire',
    body: "Salary is just the starting point. You also pay 11.5% superannuation, workers compensation, leave entitlements (annual, sick, LSL accruals), plus payroll processing and equipment. The real cost is typically 20–25% above base.",
  },
  {
    pill: 'TrustedOps',
    body: "Your team member's offshore salary plus a flat quarterly TrustedOps fee — that's it. TrustedOps handles all Philippine payroll, compliance, and statutory obligations. No super. No workers comp. No leave loadings on your books.",
  },
  {
    pill: 'How to use it',
    body: "Select a role to auto-fill benchmark salaries from our AU vs Philippines salary data. Adjust any inputs to match your actual situation. Use the results for directional planning and internal business cases.",
  },
];

const PITFALLS = [
  'Comparing base salary to base salary — this ignores 18–25% in Australian employer on-costs (super, workers comp, leave).',
  'Overlooking the time cost of hiring — AHRI puts the average cost to hire in Australia at A$23,860 per candidate, with 40 days average time-to-hire.',
  'Assuming offshore = lower quality — when properly recruited and managed, offshore team members perform at equivalent levels.',
];

export function CostCalculatorGuide() {
  return (
    <ToolGuide title="About this calculator" subtitle="What it compares and the costs most comparisons miss.">
      <GuideBody
        introLabel="What this tool does"
        intro="Most hiring comparisons use base salary. This calculator shows the full picture — superannuation, workers compensation, leave entitlements, equipment, and admin — so you can see the real difference between hiring locally in Australia and building your team through TrustedOps."
        panels={PANELS}
        listLabel="Common calculation mistakes"
        list={PITFALLS}
      />
    </ToolGuide>
  );
}
