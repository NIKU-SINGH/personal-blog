"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => router.back()}
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
      <div className="text-sm font-medium">Back</div>
    </div>
  );
}
