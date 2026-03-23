"use client";

import React from "react";

interface HandDrawnCircleProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export default function HandDrawnCircle({
  children,
  color = "black", // Changed to black as requested
  className = "",
}: HandDrawnCircleProps) {
  // Static hand-drawn path (slightly irregular)
  const pathData = "M 48 4 C 85 2 98 25 96 52 C 94 82 75 97 45 96 C 15 95 3 73 5 45 C 7 15 25 5 55 5 C 75 5 95 15 94 48";

  return (
    <span className={`relative inline-block px-2 py-0.5 ${className}`}>
      {children}
      <svg
        className="absolute inset-0 w-[115%] h-[125%] -left-[7.5%] -top-[12.5%] pointer-events-none overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            opacity: 0.7,
          }}
        />
      </svg>
    </span>
  );
}
