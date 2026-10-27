import { Card } from "@/components/Card";
import { IconList } from "@/components/IconList";
import { PageSection } from "@/components/PageSection";

type SolutionCard = {
  title: string;
  icon: "sliders" | "shield";
  points: string[];
};

const cards: SolutionCard[] = [
  {
    title: "You stay in control",
    icon: "sliders",
    points: [
      "Set the priorities and work with your specialist every day",
      "Approve who's assigned to your account",
      "Request a change at any time",
      "One monthly price, no recruitment fees",
    ],
  },
  {
    title: "We carry the employer load",
    icon: "shield",
    points: [
      "Employment contracts, statutory benefits and Philippine labour law",
      "Day-to-day supervision by our Philippines team",
      "Payroll, HR administration and onboarding coordination",
      "6-month replacement guarantee",
    ],
  },
];

function CardIcon({ icon }: { icon: SolutionCard["icon"] }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-brand-teal"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icon === "sliders" ? (
        <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
      ) : (
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      )}
    </svg>
  );
}

export function TheSolution() {
  return (
    <PageSection
      id="the-solution"
      tone="navy"
      eyebrow="The solution"
      title="A dedicated specialist on your team, without the hiring overhead."
      intro="TrustedOps gives you a dedicated, Philippines-based specialist for the work that's eating your week or simply not getting done. They work exclusively on your account, in your systems, with hours aligned to your Australian business day. We employ, supervise and manage them through our team in the Philippines."
    >
      <p className="mb-8 border-l-4 border-brand-teal pl-4 text-xl font-semibold text-brand-teal md:text-2xl">
        You set the priorities. We employ, supervise and manage.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {cards.map((card) => (
          <Card key={card.title} onNavy>
            <h3 className="flex items-center gap-2.5 text-lg font-bold text-white">
              <CardIcon icon={card.icon} />
              {card.title}
            </h3>
            <IconList items={card.points} marker="check" onNavy />
          </Card>
        ))}
      </div>
    </PageSection>
  );
}
