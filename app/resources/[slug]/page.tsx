import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { getAllResourceSlugs, getResourceBySlug } from "@/lib/mdx";

// Only the articles in content/resources exist; any other slug is a 404, not a missing-file crash
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getAllResourceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getResourceBySlug(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function ResourcePostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getResourceBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        kicker={
          <Link href="/resources" className="text-sm font-semibold text-brand-navy/70 hover:text-brand-navy">
            ← Back to resources
          </Link>
        }
        title={post.frontmatter.title}
      >
        <p className="mt-3 text-base text-brand-navy/70">{post.frontmatter.description}</p>

        <div className="mt-4 text-xs font-semibold tracking-widest text-brand-teal uppercase">
          {new Date(post.frontmatter.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "2-digit" })}
        </div>

        {/* Typography's default code style wraps inline code in literal backticks; drop them */}
        <article className="prose prose-slate mt-10 max-w-none prose-headings:tracking-tight prose-a:text-brand-navy prose-a:decoration-brand-teal/60 prose-a:underline-offset-4 prose-code:before:content-none prose-code:after:content-none">
          {post.content}
        </article>
      </PageHero>

      <CtaBand />
    </>
  );
}
