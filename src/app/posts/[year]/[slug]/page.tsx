import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import React from "react";
import MarkdownWithIds from "@/components/MarkdownWithIds";
import TableOfContents from "@/components/TableOfContents";
import { extractHeadings } from "@/utils/extractHeadings";

interface BlogPageProps {
  params: Promise<{ year: string; slug: string }>;
}

export default async function BlogPage({
  params,
}: BlogPageProps): Promise<React.JSX.Element> {
  const { year, slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "src/app/posts",
    year,
    `${slug}.md`
  );
  let content = "";
  let data: Record<string, unknown> = {};
  try {
    const file = await fs.readFile(filePath, "utf8");
    const parsed = matter(file);
    content = parsed.content;
    data = parsed.data;
  } catch {
    return notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const headings = extractHeadings(content);

  return (
    <main className="min-h-screen">
      <div className="pt-10">
        <div className="max-w-xl mx-auto px-4">
          {/* <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            {data.title as string}
          </h1>

          <div className="text-gray-600 text-sm mb-8">
            {formatDate(data.date as string)} •{" "}
            {(data.author as string) || "Anonymous"}
          </div> */}
          <h1 className="text-2xl font-semibold mb-1">
            {data.title as string}
          </h1>
          <div className="text-sm text-gray-500 mb-6">
            {formatDate(data.date as string)} •{" "}
            {(data.author as string) || "Anonymous"}
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="max-w-xl mx-auto px-4 pb-24">
          <article className="prose prose-lg text-sm">
            <MarkdownWithIds>{content as string}</MarkdownWithIds>
          </article>
        </div>
        <div className="fixed right-24 top-10">
          <TableOfContents headings={headings} />
        </div>
      </div>
    </main>
  );
}
