export default function About() {
  return (
    <div className="flex flex-col py-10 px-4 bg-white text-gray-900 text-sm max-w-xl mx-auto">
      <div className="max-w-xl w-full">
        <h1 className="text-2xl font-semibold mb-6">About Me</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-medium mb-3">Background</h2>
            <p className="mb-4">
              I'm a full-stack developer based in India with a strong focus on
              data-intensive systems, scalable web apps, and real-time
              interfaces. I have a strong product sense and enjoy building
              solutions that solve real-world problems.
            </p>
            <p className="mb-4">
              My journey in tech started with curiosity about how things work on
              the web, which led me to explore various technologies and
              frameworks. I believe in continuous learning and staying updated
              with the latest developments in the tech ecosystem.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Frontend</h3>
                <ul className="space-y-1 text-sm">
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• TanStack Query</li>
                  <li>• Redux Toolkit</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Backend & Tools</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Node.js</li>
                  <li>• Python (FastAPI)</li>
                  <li>• GraphQL</li>
                  <li>• Git & GitHub</li>
                  <li>• Docker</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3">Current Focus</h2>
            <p className="mb-4">
              These days I'm deeply interested in LLMs and building products
              around them. I'm exploring how AI can enhance developer
              productivity and create better user experiences.
            </p>
            <p className="mb-4">
              I'm also passionate about open source contributions and believe in
              giving back to the developer community. My recent focus has been
              on building developer tools and data systems that can scale
              effectively.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3">Interests</h2>
            <p className="mb-4">
              Outside of coding, I enjoy reading technical books and research
              papers to stay updated with the latest developments in technology.
              I believe in the power of continuous learning and often share my
              learnings through blog posts and open source contributions.
            </p>
            <p>
              I'm always open to interesting conversations about technology,
              product development, and the future of software engineering.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
