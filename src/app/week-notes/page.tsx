import React from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import { getAllMarkdown, getMarkdownContent } from "@/utils/readMarkdown";
import path from "path";
import MarkdownWithIds from "@/components/MarkdownWithIds";

export const metadata = {
  title: "Week Notes - Niku Singh",
  description: "Weekly updates and reflections on my work and life.",
};

const WEEK_NOTES_DIR = path.join(process.cwd(), "src/content/week-notes");

export default async function WeekNotes() {
  const notes = await getAllMarkdown(WEEK_NOTES_DIR);
  
  if (notes.length === 0) {
    return (
      <div className="relative min-h-screen">
        <div className="flex flex-col py-10 px-4 bg-white text-gray-500 text-sm max-w-xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6 text-gray-900">Week Notes</h1>
          <p className="italic text-gray-400">Updates coming soon...</p>
        </div>
        <div className="fixed right-24 top-10 hidden lg:block">
          <BackButton />
        </div>
      </div>
    );
  }

  const latestNoteHeader = notes[0];
  const latestNoteFull = await getMarkdownContent(WEEK_NOTES_DIR, latestNoteHeader.slug);
  const pastNotes = notes.slice(1);

  return (
    <div className="relative min-h-screen">
      <div className="flex flex-col py-10 px-4 bg-white text-gray-500 text-sm max-w-xl mx-auto">
        <div className="max-w-xl w-full">
          <h1 className="text-2xl font-semibold mb-6 text-gray-900">Week Notes</h1>
          
          <div className="mb-12">
            <h2 className="text-lg font-medium mb-3 text-gray-900">Latest: {latestNoteHeader.title}</h2>
            <div className="prose prose-sm text-gray-600 mb-6">
              <MarkdownWithIds>{latestNoteFull?.content || ""}</MarkdownWithIds>
            </div>
            <hr className="border-gray-100" />
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4 text-gray-900">Past Notes</h2>
            {pastNotes.length > 0 ? (
              <ul className="space-y-3">
                {pastNotes.map((week) => (
                  <li key={week.slug}>
                    <Link
                      href={`/week-notes/${week.slug}`}
                      className="text-gray-500 hover:text-black underline underline-offset-4 decoration-gray-300 hover:decoration-black transition-colors"
                    >
                      {week.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="italic text-gray-400">More notes coming soon...</p>
            )}
          </div>
          
        </div>
      </div>
      <div className="fixed right-24 top-10 hidden lg:block">
        <BackButton />
      </div>
    </div>
  );
}
