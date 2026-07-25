import YearGroupedList from "@/components/YearGroupedList";

const projects = [
  {
    title: "Recollect AI",
    href: "https://recollect-ai.vercel.app",
    external: true,
    date: "July 2025",
    year: "2025",
  },
  {
    title: "IngestFlow",
    href: "https://github.com/NIKU-SINGH/IngestFlow",
    external: true,
    date: "June 2025",
    year: "2025",
  },
];

export default function Projects() {
  const items = projects.map((project, idx) => ({
    ...project,
    isNew: idx === 0,
  }));

  return (
    <main className="max-w-xl mx-auto my-8 px-4 text-sm">
      <h1 className="text-2xl font-semibold mb-8">All Projects</h1>
      <YearGroupedList heading="Projects" items={items} />
    </main>
  );
}
