import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import { compileMDX } from "next-mdx-remote/rsc";

const CONTENT_DIR = path.join(process.cwd(), "content", "resources");

export type ResourceFrontmatter = {
  title: string;
  description: string;
  date: string; // ISO
  tags?: string[];
};

export type Resource = {
  slug: string;
  frontmatter: ResourceFrontmatter;
};

function assertFrontmatter(data: any): asserts data is ResourceFrontmatter {
  if (!data?.title || !data?.description || !data?.date) {
    throw new Error("MDX file is missing required frontmatter: title, description, date");
  }
}

export async function getAllResourceSlugs(): Promise<string[]> {
  const files = await fs.readdir(CONTENT_DIR);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
    .sort();
}

export async function getAllResources(): Promise<Resource[]> {
  const slugs = await getAllResourceSlugs();
  const items: Resource[] = [];

  for (const slug of slugs) {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    const raw = await fs.readFile(filePath, "utf8");
    const { data } = matter(raw);
    assertFrontmatter(data);
    items.push({ slug, frontmatter: data });
  }

  // newest first by date
  return items.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export async function getResourceBySlug(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  assertFrontmatter(data);

  const compiled = await compileMDX<{ }>(
    {
      source: content,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    }
  );

  return {
    slug,
    frontmatter: data,
    content: compiled.content,
  };
}
