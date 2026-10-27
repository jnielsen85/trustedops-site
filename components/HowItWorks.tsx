import { cn } from "@/lib/utils";
import { PageSection } from "@/components/PageSection";

type Step = {
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    title: "Brief",
    body: "Tell us the role, the tasks and the tools you use. We'll help you scope it.",
  },
  {
    title: "Match",
    body: "Within ~2 weeks, interview up to 3 pre-vetted candidates and approve who's assigned.",
  },
  {
    title: "Onboard",
    body: "We handle the employment contract and payroll. You brief them on your systems.",
  },
  {
    title: "Operate",
    body: "Your priorities, every day. Our PH supervisor manages them; we run HR and compliance.",
  },
];

export function HowItWorks() {
  return (
    <PageSection id="how-it-works" eyebrow="The process" title="How it works">
      <ol role="list" className="grid md:grid-cols-4 md:gap-8">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          return (
            <li
              key={step.title}
              className={cn("relative flex gap-5 md:flex-col md:gap-0", !isLast && "pb-10 md:pb-0")}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white",
                  isLast ? "bg-brand-teal" : "bg-brand-navy"
                )}
              >
                {i + 1}
              </span>

              {!isLast ? (
                <>
                  {/* Mobile: vertical connector down to the next circle */}
                  <span
                    aria-hidden="true"
                    className="absolute left-6 top-14 bottom-2 flex -translate-x-1/2 flex-col items-center md:hidden"
                  >
                    <span className="w-px flex-1 bg-brand-teal" />
                    <svg viewBox="0 0 10 8" className="h-2 w-2.5 text-brand-teal" fill="currentColor">
                      <path d="M0 0h10L5 8z" />
                    </svg>
                  </span>

                  {/* Desktop: horizontal arrow across the gap to the next circle */}
                  <span
                    aria-hidden="true"
                    className="absolute left-[3.75rem] -right-5 top-6 hidden -translate-y-1/2 items-center md:flex"
                  >
                    <span className="h-px flex-1 bg-brand-teal" />
                    <svg viewBox="0 0 8 10" className="h-2.5 w-2 text-brand-teal" fill="currentColor">
                      <path d="M0 0l8 5-8 5z" />
                    </svg>
                  </span>
                </>
              ) : null}

              <div className="pt-2.5 md:pt-5">
                <h3 className="text-lg font-bold text-brand-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">{step.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </PageSection>
  );
}
