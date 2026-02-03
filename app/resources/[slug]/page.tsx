import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { getAllResourceSlugs, getResourceBySlug } from "@/lib/mdx";

export async function generateStaticParams() {
  const slugs = await getAllResourceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getResourceBySlug(slug);
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function ResourcePostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getResourceBySlug(slug);

  return (
    <Container className="py-16">
      <div className="max-w-3xl">
        <Link href="/resources" className="text-sm font-semibold text-brand-navy/70 hover:text-brand-navy">
          ← Back to resources
        </Link>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-brand-navy">
          {post.frontmatter.title}
        </h1>
        <p className="mt-3 text-base text-brand-navy/70">{post.frontmatter.description}</p>

        <div className="mt-4 text-xs font-semibold tracking-widest text-brand-teal uppercase">
          {new Date(post.frontmatter.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "2-digit" })}
        </div>

        <article className="prose prose-slate mt-10 max-w-none prose-headings:tracking-tight prose-a:text-brand-navy prose-a:decoration-brand-teal/60 prose-a:underline-offset-4">
          {post.content}
        </article>
      </div>
    </Container>
  );
}
