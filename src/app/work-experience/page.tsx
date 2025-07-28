export default function WorkExperience() {
  const experiences = [
    {
      company: "GitLab",
      role: "Open Source Contributor",
      period: "2023 - Present",
      description:
        "Contributing to GitLab's open source ecosystem following my Google Summer of Code 2023 stint. Working on various features and improvements to the platform.",
      achievements: [
        "Participated in Google Summer of Code 2023",
        "Contributed to core platform features",
        "Collaborated with the global GitLab community",
      ],
      tech: ["Ruby", "GitLab API", "Open Source"],
    },
    {
      company: "Trumio AI",
      role: "Full Stack Developer",
      period: "2024 - 2025",
      description:
        "Built modern dashboards and full platforms using React, TypeScript, Next.js, TanStack Query, and Redux Toolkit. Focused on creating scalable and user-friendly interfaces.",
      achievements: [
        "Developed responsive dashboards for data visualization",
        "Implemented real-time data processing features",
        "Optimized application performance and user experience",
      ],
      tech: [
        "React",
        "TypeScript",
        "Next.js",
        "TanStack Query",
        "Redux Toolkit",
      ],
    },
    {
      company: "Orca AI",
      role: "Frontend Developer",
      period: "2024 - 2025",
      description:
        "Worked on building modern web applications with a focus on user experience and performance optimization.",
      achievements: [
        "Built scalable frontend architectures",
        "Implemented advanced UI components",
        "Collaborated with design and backend teams",
      ],
      tech: ["React", "TypeScript", "Modern Web APIs"],
    },
    {
      company: "Leapsquare Labs",
      role: "Frontend Lead",
      period: "2023 - 2024",
      description:
        "Led frontend development efforts, working on server-side content generation and highly dynamic UI systems. Managed a team of developers and mentored junior developers.",
      achievements: [
        "Led a team of 3 frontend developers",
        "Implemented server-side rendering solutions",
        "Built highly dynamic UI systems",
        "Mentored junior developers",
      ],
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "GraphQL",
        "Server-Side Rendering",
      ],
    },
  ];

  return (
    <div className="flex flex-col py-10 px-4 bg-white text-gray-900 text-sm max-w-xl mx-auto">
      <div className="max-w-xl w-full">
        <h1 className="text-2xl font-semibold mb-6">Work Experience</h1>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-6 last:border-b-0"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="text-lg font-medium">{experience.company}</h2>
                  <p className="text-gray-600">{experience.role}</p>
                </div>
                <span className="text-xs text-gray-500">
                  {experience.period}
                </span>
              </div>

              <p className="text-gray-700 mb-3">{experience.description}</p>

              <div className="mb-3">
                <h3 className="font-medium text-sm mb-2">Key Achievements:</h3>
                <ul className="space-y-1">
                  {experience.achievements.map(
                    (achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="text-sm text-gray-700"
                      >
                        • {achievement}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {experience.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-600">
            I&apos;m always open to new opportunities and interesting
            challenges. Feel free to reach out if you&apos;d like to discuss
            potential collaborations or opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
