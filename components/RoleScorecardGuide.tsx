import { GuideBody, ToolGuide } from '@/components/ToolGuide';

const PANELS = [
  {
    pill: 'Start with outcomes',
    body: 'Define what must be true at 30, 60, 90 days. Outcomes are observable: shipped, implemented, reduced, improved. Avoid tasks — focus on results.',
  },
  {
    pill: 'Make success measurable',
    body: 'Choose 3–6 KPIs tied to outcomes. Define how each KPI is measured (source of truth). Set a cadence: weekly, monthly, or quarterly.',
  },
  {
    pill: 'Clarify scope & interfaces',
    body: 'List what the role owns and what it does not own. Name key stakeholders and handoffs. Write down decision rights to avoid confusion.',
  },
];

const PITFALLS = [
  'Using generic language like "support the team" without stating outcomes.',
  'Listing every task instead of the 5–7 responsibilities that truly define the role.',
  'KPIs without a defined measurement method — different people interpret them differently.',
  'Not stating key interfaces, which creates handoff ambiguity and escalations.',
];

export function RoleScorecardGuide() {
  return (
    <ToolGuide title="How to use the Role Scorecard" subtitle="A short guide to keep roles clear and hiring consistent.">
      <GuideBody
        introLabel="What this document is for"
        intro="A role scorecard is a single source of truth for a role. It clarifies outcomes, scope, and success metrics so hiring, onboarding, and performance management are aligned."
        panels={PANELS}
        listLabel="Common pitfalls to avoid"
        list={PITFALLS}
      />
    </ToolGuide>
  );
}
