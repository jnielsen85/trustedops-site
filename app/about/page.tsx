import type { Metadata } from "next";
import Image from "next/image";
import { Card } from "@/components/Card";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export const metadata: Metadata = {
  title: "About us",
  description:
    "TrustedOps started inside a growing Australian tech company, where one Philippines contractor grew into a trusted, multi-function team. Meet the founders.",
};

const teamFunctions = [
  "Admin",
  "Customer support",
  "Onboarding",
  "Technical implementation",
  "Data & BI analysis",
];

const founders = [
  {
    name: "James Nielsen",
    role: "Co-founder & Managing Director",
    bio: [
      "James leads Customer Solutions at Publift globally, running onboarding, integration and configuration teams across Australia, Ireland and the Philippines. He saw early what a Philippines team could do for the company, set the strategy and grew it into an operation covering several functions.",
      "Before Publift he worked on both the sales and presales sides of enterprise SaaS. He's PRINCE2-certified and prefers building things to talking about them. He comes from a family of tradies, which gives him a soft spot for businesses doing real work with small teams.",
    ],
  },
  {
    name: "Sei Castro",
    role: "Co-founder & Philippines Lead",
    bio: [
      "Sei has worked with Australian and New Zealand businesses from the Philippines for more than 15 years. She started in BPO, then worked as a search advertising strategist for agencies across Australia and New Zealand, where she was recognised as a top performer. She joined Publift as a contractor in 2017 and now leads its entire Philippines team. Her time in the recruitment industry taught her how to find good people as well as keep them.",
      "At TrustedOps, Sei runs everything on the ground, from hiring and onboarding to day-to-day support for every Assigned Specialist.",
    ],
  },
];

/** Body copy for the story sections */
function Prose({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[65ch] space-y-4 text-base leading-relaxed text-brand-navy/70">{children}</div>;
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker={<SectionEyebrow>About us</SectionEyebrow>}
        title="Tested inside a real business first"
        image={{
          src: "/brand/team-philippines-celebration.jpg",
          alt: "James with the Philippines team, dressed in traditional Filipino attire at a team celebration",
          position: "center 30%",
          // A gentler fade than the default keeps the team members on the left of the shot visible
          left: "max(430px, calc(50% - 160px))",
          fade: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 10%, #000 22%)",
        }}
      >
        <p className="mt-5 text-base leading-relaxed text-brand-navy/70">
          TrustedOps started as an experiment inside a growing Australian tech company, and it worked better than
          anyone expected.
        </p>
        <p className="mt-4 text-base leading-relaxed text-brand-navy/70">
          The name means what it says:{" "}
          <span className="font-semibold text-brand-navy">a partner you can trust with your operations.</span>
        </p>
      </PageHero>

      <PageSection tone="grey" title="How it started">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <Prose>
            <p>
              Publift, an Australian ad tech business, prided itself on its service. It was an important edge and
              competitive advantage in an industry lurching towards automation. The headcount necessary to maintain
              its levels of service meant it faced a problem familiar to most growing companies. New headcount relied
              on first hitting revenue targets, which meant the team was often stretched.
            </p>
            <p>
              In 2017, Publift engaged Sei as its first contractor in the Philippines. Her work was excellent from the
              start and kept improving, and it showed what offshore delivery could look like. When James joined, he
              saw how far it could go and doubled down.
            </p>
            <p>
              Over time, that one contractor role grew into a full Philippines team covering admin, customer support,
              onboarding, technical implementation, and data and BI analysis. Its cost-effectiveness helped Publift
              sustain its high-touch, people-led approach.
            </p>
          </Prose>

          <Card>
            <div className="text-[10px] font-semibold tracking-wider text-brand-navy/40 uppercase">
              From one contractor in 2017 to a team covering
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {teamFunctions.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-brand-teal/20 bg-brand-teal/5 px-3 py-1 text-sm font-medium text-brand-navy"
                >
                  {f}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </PageSection>

      <PageSection title="What made it work">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <Prose>
            <p>
              James knew from the start the traditional BPO approach of handing tasks to people you never meet
              wouldn&apos;t work. The Philippines team was simply part of Publift&apos;s team: trusted with real
              responsibility, given the context to do the job well and backed to grow with the company.
            </p>
            <p>
              Many of them, Sei included, came from BPOs where they had never really been part of a team. Once they
              were, there was a sense of ownership of their work and a shared commitment to the business&apos;s
              success.
            </p>
            <p>
              When Publift was acquired by one of Australia&apos;s largest online marketplace groups, the Philippines
              team wasn&apos;t cut. It grew, because the return was obvious, and year after year since it has topped
              the group&apos;s engagement scores.
            </p>
            <p>
              For comparison, attrition in Philippine BPOs runs at around 40% (
              <a
                href="https://sprout.ph/thought-leadership/the-state-of-hr-in-bpo-2024/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-teal underline underline-offset-2 hover:text-brand-navy"
              >
                Sprout, State of HR in the BPO Industry 2024
              </a>
              ). James and Sei know the people aren&apos;t the problem. Rather, it comes down to how engaged staff are
              and how well they&apos;re set up to succeed.
            </p>
          </Prose>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Card className="p-5">
              <div className="text-2xl font-bold tracking-tight text-brand-navy md:text-3xl">~40%</div>
              <div className="mt-1 text-sm text-brand-navy/70">Typical attrition in Philippine BPOs</div>
            </Card>
            <Card className="border-brand-teal/30 bg-brand-teal/5 p-5">
              <div className="text-2xl font-bold tracking-tight text-brand-navy md:text-3xl">Top</div>
              <div className="mt-1 text-sm text-brand-navy/70">
                Engagement scores across the group, year after year, for the team James and Sei built
              </div>
            </Card>
          </div>
        </div>
      </PageSection>

      <PageSection tone="grey" title="Why TrustedOps exists">
        <Prose>
          <p>
            When the parent group started looking at moving some of its own functions offshore, it wanted to know what
            had made the Philippines team work. Those conversations led to TrustedOps.
          </p>
          <p>
            The savings a large enterprise was after would matter far more to a small or medium Australian business,
            where margins are thin and every hire is a big decision. James and Sei also believed they could beat the
            traditional BPO model for businesses of any size. Their answer was dedicated professionals who work as part
            of the client&apos;s team, backed by people who have built a team like that themselves.
          </p>
        </Prose>
        <p className="mt-8 max-w-3xl border-l-4 border-brand-teal pl-5 text-xl font-semibold leading-snug tracking-tight text-brand-navy md:text-2xl">
          TrustedOps connects Australian businesses dealing with high costs and tight margins with some of the most
          dedicated professionals they&apos;ll ever work with.
        </p>
      </PageSection>

      <PageSection title="The founders">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-black/10 sm:aspect-[4/3] lg:sticky lg:top-24 lg:aspect-[4/5]">
            <Image
              src="/brand/founders-james-sei.jpg"
              alt="TrustedOps co-founders Sei Castro and James Nielsen"
              fill
              sizes="(min-width: 1024px) 460px, 100vw"
              className="object-cover"
              style={{ objectPosition: "center 25%" }}
            />
          </div>

          <div className="grid gap-5">
            {founders.map((f) => (
              <Card key={f.name}>
                <h3 className="text-lg font-bold text-brand-navy">{f.name}</h3>
                <div className="mt-0.5 text-sm font-medium text-brand-teal">{f.role}</div>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-brand-navy/70">
                  {f.bio.map((para) => (
                    <p key={para.slice(0, 24)}>{para}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection tone="grey" title="A partnership built over years">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Prose>
            <p>
              James and Sei worked side by side for years before TrustedOps had a name. James visits the Philippines
              several times a year, and those trips are a highlight for him. The team there has become far more than
              colleagues.
            </p>
            <p className="font-semibold text-brand-navy">TrustedOps brings that way of working to more Australian businesses.</p>
          </Prose>
          <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-black/10">
            <Image
              src="/brand/team-philippines-dinner.jpg"
              alt="James sharing a meal with the Philippines team at a restaurant on one of his visits"
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
              // Trims the ceiling so the team fills the frame
              style={{ objectPosition: "center 85%" }}
            />
          </div>
        </div>
      </PageSection>

      <CtaBand secondary={{ label: "What we do", href: "/how-it-works" }} />
    </>
  );
}
