import Link from "next/link";
import { Comparison } from "@/components/Comparison";
import { CtaBand } from "@/components/CtaBand";
import { HowItWorks } from "@/components/HowItWorks";
import { TheProblem } from "@/components/TheProblem";
import { TheSolution } from "@/components/TheSolution";
import { PageHero } from "@/components/PageHero";

export default function HomePage() {
  return (
    <>
      <PageHero
        tall
        kicker={
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs text-brand-navy/70">
            <span className="h-2 w-2 rounded-full bg-brand-teal" />
            Build offshore like it&apos;s in-house
          </div>
        }
        title="Better Talent Economics"
        image={{
          src: "/brand/twophworking.jpg",
          alt: "Two people working together at a desk",
          position: "center 8%",
        }}
      >
        <p className="mt-5 text-base leading-relaxed text-brand-navy/70">
          Add capability without adding complexity. We help you hire great offshore team members
          while providing a light-touch ops layer so delivery stays consistent as you grow.{" "}
          <span className="font-semibold text-brand-navy">More capacity. Lower costs.</span>
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
          >
            Contact Us
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-navy hover:bg-white"
          >
            What we do
          </Link>
        </div>
      </PageHero>

      <TheProblem />
      <TheSolution />
      <HowItWorks />
      <Comparison />
      <CtaBand secondary={{ label: "Cost Calculator", href: "/resources/cost-calculator" }} />
    </>
  );
}
