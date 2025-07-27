import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import React from "react";
import ReactMarkdown from "react-markdown";

interface BlogPageProps {
  params: { year: string; slug: string };
}

export default async function BlogPage({
  params,
}: BlogPageProps): Promise<React.JSX.Element> {
  const { year, slug } = params;
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
  } catch (e) {
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

  return (
    <main>
      <div
        style={{
          padding: "4rem 0rem 0rem 0rem",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "500",
            }}
          >
            {data.title as string}
          </h1>
          <div
            style={{
              color: "#a0a0a0",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            {formatDate(data.date as string)} •{" "}
            {(data.author as string) || "Anonymous"}
          </div>
        </div>
      </div>

      <div style={{ fontSize: "14px" }}>
        <article className="prose">
          <ReactMarkdown>{content as string}</ReactMarkdown>
        </article>
      </div>
    </main>
  );
}
