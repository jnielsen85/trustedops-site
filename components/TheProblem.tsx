import { Card } from "@/components/Card";
import { IconList } from "@/components/IconList";
import { PageSection } from "@/components/PageSection";

type ProblemCard = {
  title: string;
  icon: "clock" | "tag";
  points: string[];
};

const cards: ProblemCard[] = [
  {
    title: "If you don't hire",
    icon: "clock",
    points: [
      "Your nights and weekends go on invoices, inboxes and admin",
      "Follow-ups slip and decisions pile up waiting for you",
      "Your team keeps bringing you questions you shouldn't need to answer",
      "Growth stops at the edge of your own calendar",
    ],
  },
  {
    title: "If you hire locally",
    icon: "tag",
    points: [
      "A full salary plus super, leave and on-costs before they've done a day's work",
      "The good candidates want more than the role can justify",
      "Specialist roles sit open for months",
      "You stretch the budget for one person, or settle for less than you need",
    ],
  },
];

function CardIcon({ icon }: { icon: ProblemCard["icon"] }) {
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
      {icon === "clock" ? (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      ) : (
        <>
          <path d="M12.6 2.6A2 2 0 0 0 11.2 2H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.7 8.7a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4z" />
          <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
        </>
      )}
    </svg>
  );
}

export function TheProblem() {
  return (
    <PageSection
      id="the-problem"
      tone="grey"
      eyebrow="The problem"
      title="Headcount is the limit on your growth."
      intro="Every growing business hits the same wall. There's more work than there are hours, and the next hire costs more than the business can comfortably carry. So the work lands on you or your already stretched team, which means the work that actually moves the business forward waits."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {cards.map((card) => (
          <Card key={card.title}>
            <h3 className="flex items-center gap-2.5 text-lg font-bold text-brand-navy">
              <CardIcon icon={card.icon} />
              {card.title}
            </h3>
            <IconList items={card.points} marker="cross" />
          </Card>
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-lg font-semibold text-brand-navy">
        You don&apos;t need a bigger hiring budget. You need your time back, and a team that grows when
        the business does.
      </p>
    </PageSection>
  );
}
