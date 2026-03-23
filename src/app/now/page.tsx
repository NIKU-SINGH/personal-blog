import React from "react";
import BackButton from "@/components/BackButton";

export const metadata = {
  title: "Now - Niku Singh",
  description: "What I'm currently focused on right now.",
};

export default function Now() {
  return (
    <div className="relative min-h-screen">
      <div className="flex flex-col py-10 px-4 bg-white text-gray-500 text-sm max-w-xl mx-auto">
        <div className="max-w-xl w-full">
          <h1 className="text-2xl font-semibold mb-2 text-gray-900">Now</h1>
        <p className="mb-8 italic text-xs">
          Inspired by <a href="https://nownownow.com/about" className="underline hover:text-black" target="_blank" rel="noopener noreferrer">Derek Sivers's Now movement</a>. Last updated in March 2026.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-medium mb-3 text-gray-900">Current Focus</h2>
            <p className="mb-4">
              I am currently looking into how code base indexing works, building my own code base knowledge graph tool to give an overview of the repo.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3 text-gray-900">Tinkering</h2>
            <p className="mb-4">
              I am also tinkering with voice models—trying to generate music with AI and experimenting with voice clones.
            </p>
          </section>
        </div>
      </div>
      </div>
      <div className="fixed right-24 top-10 hidden lg:block">
        <BackButton />
      </div>
    </div>
  );
}
