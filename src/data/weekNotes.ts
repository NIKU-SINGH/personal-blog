export interface WeekNote {
  id: string;
  title: string;
  notes: string[];
}

export const weekNotesData: WeekNote[] = [
  {
    id: "week-of-feb-8th-2026",
    title: "Week of Feb 8th, 2026",
    notes: [
      "Decided to start sharing weekly notes to document my progress and ideas transparently.",
      "Added a new /now page inspired by the nownownow project.",
      "Spent time reflecting on AI developer tools and the best ways to scale them.",
    ],
  },
  {
    id: "week-of-feb-1st-2026",
    title: "Week of Feb 1st, 2026",
    notes: [
      "Explored new TanStack features.",
      "Read several papers on distributed consensus algorithms.",
      "Worked on some open-source bug fixes in UI components.",
    ],
  },
  {
    id: "week-of-jan-23rd-2026",
    title: "Week of Jan 23rd, 2026",
    notes: [
      "Brainstormed ideas for a new side project related to data processing.",
      "Setup the initial monorepo workspace for upcoming tasks.",
      "Enjoyed a quiet weekend hiking to unplug from screen time.",
    ],
  },
  {
    id: "week-of-dec-27th-2025",
    title: "Week of Dec 27th, 2025",
    notes: [
      "Kicked off the month by refining my existing portfolio website layout.",
      "Fixed some lingering bugs in the routing module.",
    ],
  },
  {
    id: "week-of-dec-13th-2025",
    title: "Week of Dec 13th, 2025",
    notes: [
      "Started reading up on modern monorepo tools.",
      "Experimented with Turbopack in Next.js 16.",
    ],
  },
];
