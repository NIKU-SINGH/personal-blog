"use client";

export default function Projects() {
  const projects = [
    {
      title: "Recollect AI",
      description:
        "An AI-powered memory and knowledge management system that helps users organize and retrieve information efficiently.",
      tech: ["Next.js", "TypeScript", "OpenAI API", "Vercel"],
      href: "https://recollect-ai.vercel.app",
      github: "https://github.com/NIKU-SINGH/recollect-ai",
      external: true,
      date: "July 2025",
      year: "2025",
    },
    {
      title: "IngestFlow",
      description:
        "A scalable log ingestor and query engine designed for high-performance data processing and analytics.",
      tech: ["Go", "TypeScript", "React", "Docker"],
      href: "https://github.com/NIKU-SINGH/IngestFlow",
      github: "https://github.com/NIKU-SINGH/IngestFlow",
      external: true,
      date: "June 2025",
      year: "2025",
    },
  ];

  // Group projects by year
  const projectsByYear = projects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  // Sort years in descending order (newest first)
  const sortedYears = Object.keys(projectsByYear).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  return (
    <main className="max-w-xl mx-auto my-8 px-4 text-sm">
      <h1 className="text-2xl font-semibold mb-8">All Projects</h1>

      {sortedYears.map((year) => (
        <div key={year} className="mb-8">
          <h2 className="font-medium mb-4 text-gray-700 border-b border-gray-200 pb-2 text-sm">
            {year}
          </h2>
          <ul className="list-none p-0">
            {projectsByYear[year].map((project, index) => (
              <li
                key={project.title + project.year + index}
                className="mb-4 border-b border-gray-100 pb-4"
              >
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="text-gray-500 text-sm min-w-fit">
                      {project.date}
                    </div>
                    <div className="flex-1">
                      <h3 className="m-0 inline">
                        {project.external ? (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 no-underline hover:underline transition-all"
                          >
                            {project.title}
                          </a>
                        ) : (
                          project.title
                        )}
                      </h3>
                    </div>
                    <div className="flex gap-2 items-center min-w-fit">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                          title="View on GitHub"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      )}
                      {project.href && project.href !== project.github && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 transition-colors"
                          title="Live Demo"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="14px"
                            viewBox="0 -960 960 960"
                            width="14px"
                            fill="currentColor"
                          >
                            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="m-0 text-gray-800 text-sm leading-relaxed pl-0">
                    {project.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-gray-500 m-0">
          I&apos;m always working on new projects and exploring different
          technologies. Most of my work is open source and available on{" "}
          <a
            href="https://github.com/NIKU-SINGH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 no-underline hover:underline transition-all"
          >
            GitHub
          </a>
          .
        </p>
      </div> */}
    </main>
  );
}
