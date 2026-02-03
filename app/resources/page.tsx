import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { getAllResources } from "@/lib/mdx";

export const metadata: Metadata = { title: "Resources" };

export default async function ResourcesPage() {
  const resources = await getAllResources();

  return (
    <Container className="py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Resources</h1>
      <p className="mt-4 max-w-2xl text-base text-brand-navy/70">
        Local MDX content stored in-repo. Add files to <code className="rounded bg-black/5 px-1 py-0.5">content/resources</code>.
      </p>

      <div className="mt-10 grid gap-6">
        {resources.map((r) => (
          <Link
            key={r.slug}
            href={`/resources/${r.slug}`}
            className="group rounded-3xl border border-black/10 bg-white p-6 shadow-soft transition hover:-translate-y-0.5"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold text-brand-navy group-hover:underline decoration-brand-teal/60 underline-offset-4">
                  {r.frontmatter.title}
                </div>
                <div className="mt-1 text-sm text-brand-navy/70">{r.frontmatter.description}</div>
              </div>
              <div className="text-xs font-semibold tracking-widest text-brand-teal uppercase">
                {new Date(r.frontmatter.date).toLocaleDateString("en-AU", { year: "numeric", month: "short", day: "2-digit" })}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
