"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Heading } from "@/utils/extractHeadings";

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -35% 0px" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goBack = () => {
    router.back();
  };

  if (headings.length === 0) return null;

  return (
    <nav className="hidden lg:block w-64">
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={goBack}
          className="cursor-pointer p-1 hover:bg-gray-100 rounded transition-colors"
          title="Go back"
        >
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 15L3 9m0 0l6-6m-6 6h18"
            />
          </svg>
        </button>
        <div className="text-sm font-medium text-gray-900">Index</div>
      </div>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`text-left w-full text-sm transition-all duration-200 hover:text-gray-900 relative ${
                activeId === heading.id
                  ? "text-gray-900 font-medium bg-gray-50 border-l-2 border-gray-400 pl-3"
                  : "text-gray-600 hover:bg-gray-50 pl-3"
              }`}
              style={{
                paddingLeft: `${(heading.level - 1) * 12 + 12}px`,
              }}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
