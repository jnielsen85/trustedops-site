/** Small uppercase heading used inside a guide's body */
export const guideLabel = 'mb-2 text-[11px] font-bold tracking-widest text-brand-navy/70 uppercase';

/** Collapsible guide panel for the resource tools, closed by default so the tool is never blocked. */
export function ToolGuide({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-3xl border border-black/10 bg-white print:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
        <div>
          <h2 className="text-lg font-bold text-brand-navy">{title}</h2>
          <p className="mt-1 text-sm text-brand-navy/70">{subtitle}</p>
        </div>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-5 w-5 shrink-0 text-brand-teal transition-transform group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 8l5 5 5-5" />
        </svg>
      </summary>

      <div className="border-t border-black/10 px-6 pb-6 pt-5">{children}</div>
    </details>
  );
}

/** Intro paragraph, three pill-headed panels and a list of mistakes: the layout shared by the tool guides. */
export function GuideBody({
  introLabel,
  intro,
  panels,
  listLabel,
  list,
}: {
  introLabel: string;
  intro: React.ReactNode;
  panels: { pill: string; body: string }[];
  listLabel: string;
  list: string[];
}) {
  return (
    <>
      <h3 className={guideLabel}>{introLabel}</h3>
      <p className="max-w-prose text-[15px] leading-relaxed text-brand-navy/70">{intro}</p>

      <div className="mt-5 grid gap-3.5 md:grid-cols-3">
        {panels.map(({ pill, body }) => (
          <div key={pill} className="rounded-2xl border border-black/10 p-4">
            <div className="mb-2.5 inline-flex items-center rounded-full border border-brand-teal/25 bg-brand-teal/5 px-2.5 py-1 text-[11px] font-bold tracking-wide text-brand-navy uppercase">
              {pill}
            </div>
            <p className="text-sm leading-relaxed text-brand-navy/70">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 border-t border-black/10 pt-5">
        <h3 className={guideLabel}>{listLabel}</h3>
        <ul className="list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-brand-navy/70">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
