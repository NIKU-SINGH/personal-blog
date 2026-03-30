import React from "react";
import { notFound } from "next/navigation";
import path from "path";
import BackButton from "@/components/BackButton";
import { getAllMarkdown, getMarkdownContent, normalizeDate } from "@/utils/readMarkdown";
import MarkdownWithIds from "@/components/MarkdownWithIds";

interface WeekNotePageProps {
  params: Promise<{ slug: string }>;
}

const WEEK_NOTES_DIR = path.join(process.cwd(), "src/content/week-notes");

export async function generateMetadata({ params }: WeekNotePageProps) {
  const { slug } = await params;
  const note = await getMarkdownContent(WEEK_NOTES_DIR, slug);
  if (!note) return { title: "Not Found" };
  return {
    title: `${note.data.title} - Niku Singh`,
    description: `Notes for ${note.data.title}.`,
  };
}

// Generate static params so these pages are statically built
export async function generateStaticParams() {
  const notes = await getAllMarkdown(WEEK_NOTES_DIR);
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export default async function WeekNoteDetail({ params }: WeekNotePageProps) {
  const { slug } = await params;
  const note = await getMarkdownContent(WEEK_NOTES_DIR, slug);

  if (!note) {
    return notFound();
  }

  const formattedDate = normalizeDate(note.data.date);

  return (
    <div className="relative min-h-screen">
      <div className="flex flex-col py-10 px-4 bg-white text-gray-500 text-sm max-w-xl mx-auto">
        <div className="max-w-xl w-full">
          <h1 className="text-2xl font-semibold mb-1 text-gray-900">{note.data.title}</h1>
          <p className="text-gray-400 mb-6 text-xs">{formattedDate}</p>
          <article className="prose prose-sm text-gray-600">
            <MarkdownWithIds>{note.content}</MarkdownWithIds>
          </article>
        </div>
      </div>
      <div className="fixed right-24 top-10 hidden lg:block">
        <BackButton />
      </div>
    </div>
  );
}
