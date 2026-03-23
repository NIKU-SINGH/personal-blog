import React from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import { weekNotesData } from "@/data/weekNotes";

export const metadata = {
  title: "Week Notes - Niku Singh",
  description: "Weekly updates and reflections on my work and life.",
};

export default function WeekNotes() {
  const latestNote = weekNotesData[0];
  const pastNotes = weekNotesData.slice(1);

  return (
    <div className="relative min-h-screen">
      <div className="flex flex-col py-10 px-4 bg-white text-gray-500 text-sm max-w-xl mx-auto">
        <div className="max-w-xl w-full">
          <h1 className="text-2xl font-semibold mb-6 text-gray-900">Week Notes</h1>
          
          <div className="mb-12">
            <h2 className="text-lg font-medium mb-3 text-gray-900">Latest: {latestNote.title}</h2>
            <ul className="list-outside list-disc pl-4 space-y-2 mb-6">
              {latestNote.notes.map((note, noteIdx) => (
                <li key={noteIdx} className="leading-relaxed">
                  {note}
                </li>
              ))}
            </ul>
            <hr className="border-gray-100" />
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4 text-gray-900">Past Notes</h2>
            {pastNotes.length > 0 ? (
              <ul className="space-y-3">
                {pastNotes.map((week) => (
                  <li key={week.id}>
                    <Link
                      href={`/week-notes/${week.id}`}
                      className="text-gray-500 hover:text-black underline underline-offset-4 decoration-gray-300 hover:decoration-black transition-colors"
                    >
                      {week.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="italic text-gray-400">Updates coming soon...</p>
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
