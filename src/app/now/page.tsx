import React from "react";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import MarkdownWithIds from "@/components/MarkdownWithIds";
import TableOfContents from "@/components/TableOfContents";
import { extractHeadings } from "@/utils/extractHeadings";

export const metadata = {
  title: "Now - Niku Singh",
  description: "What I'm currently focused on right now.",
};

export default async function Now() {
  const filePath = path.join(process.cwd(), "src/content/now.md");
  let content = "";
  let lastUpdated = "";

  try {
    const file = await fs.readFile(filePath, "utf8");
    const parsed = matter(file);
    content = parsed.content;
    lastUpdated = parsed.data.lastUpdated || "March 2026";
  } catch (error) {
    console.error("Error loading now.md:", error);
    content = "Current focus information coming soon...";
  }

  const headings = extractHeadings(content);

  return (
    <div className="relative min-h-screen">
      <div className="flex flex-col py-10 px-4 bg-white text-gray-500 text-sm max-w-xl mx-auto">
        <div className="max-w-xl w-full">
          <h1 className="text-2xl font-semibold mb-2 text-gray-900">Now</h1>
          <p className="italic text-xs">Last updated in {lastUpdated}.</p>
          <p className="mb-8 italic text-xs">
            Inspired by{" "}
            <a
              href="https://nownownow.com/about"
              className="underline hover:text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              Derek Sivers's Now movement
            </a>
            , this page is a snapshot of what I'm focused on right now rather
            than a bio or a running feed—closer to what you'd find on my
            profile than in my archives.
          </p>

          <Image
            src="/images/now/desk-setup.jpg"
            alt="My desk setup"
            width={1600}
            height={1200}
            className="mb-8 w-full rounded-lg"
            sizes="(max-width: 640px) 100vw, 576px"
            priority
          />

          <article className="prose prose-sm text-gray-600 prose-now">
            <MarkdownWithIds>{content}</MarkdownWithIds>
          </article>
        </div>
      </div>
      <div className="fixed right-24 top-10 hidden lg:block">
        <TableOfContents headings={headings} />
      </div>
    </div>
  );
}
