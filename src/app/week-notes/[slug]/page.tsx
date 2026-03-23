import React from "react";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";
import { weekNotesData } from "@/data/weekNotes";

interface WeekNotePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: WeekNotePageProps) {
  const { slug } = await params;
  const note = weekNotesData.find((n) => n.id === slug);
  if (!note) return { title: "Not Found" };
  return {
    title: `${note.title} - Niku Singh`,
    description: `Notes for ${note.title}.`,
  };
}

// Generate static params so these pages are statically built
export function generateStaticParams() {
  return weekNotesData.map((note) => ({
    slug: note.id,
  }));
}

export default async function WeekNoteDetail({ params }: WeekNotePageProps) {
  const { slug } = await params;
  const note = weekNotesData.find((n) => n.id === slug);

  if (!note) {
    return notFound();
  }

  return (
    <div className="relative min-h-screen">
      <div className="flex flex-col py-10 px-4 bg-white text-gray-500 text-sm max-w-xl mx-auto">
        <div className="max-w-xl w-full">
          <h1 className="text-2xl font-semibold mb-6 text-gray-900">{note.title}</h1>
          <ul className="list-outside list-disc pl-4 space-y-2">
            {note.notes.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="fixed right-24 top-10 hidden lg:block">
        <BackButton />
      </div>
    </div>
  );
}
