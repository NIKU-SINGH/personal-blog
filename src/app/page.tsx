import Link from "next/link";
import RecentList from "../components/RecentList";
import { getAllBlogs } from "../utils/readBlogs";

const homeData = {
  name: "Niku Singh",
  updated: "July 22, 2025",
  intro: [
    "I'm a full-stack developer based in India with a strong focus on data-intensive systems, scalable web apps, and real-time interfaces.",
    {
      text: "I currently contribute to ",
      links: [
        {
          label: "GitLab",
          href: "https://gitlab.com/NIKU-SINGH",
        },
      ],
      after:
        " as a hobby, following my Google Summer of Code 2023 stint there. I’ve also worked at startups like ",
      moreLinks: [
        {
          label: "Trumio AI",
          href: "https://trumio.ai",
        },
        {
          label: "Orca AI",
          href: "https://getorca.ai/",
        },
      ],
      afterMore:
        ", building modern dashboards and full platforms using React, TypeScript, and Redux Toolkit.",
    },
    {
      text: "I’ve led frontend efforts at ",
      links: [
        {
          label: "Leapsquare Labs",
          href: "https://onworkroom.com/",
        },
      ],
      after:
        ", working on server-side content generation and highly dynamic UI systems. My backend experience includes working with Golang, Python (FastAPI), and GraphQL.",
    },
    {
      text: "I’m passionate about building developer tools and data systems. One of my recent projects, ",
      links: [
        {
          label: "IngestFlow",
          href: "https://github.com/NIKU-SINGH/IngestFlow",
        },
      ],
      after: ", is a scalable log ingestor and query engine.",
    },
    "Outside of work, I enjoy contributing to open source and exploring problems at the intersection of UX, infra, and developer experience.",
  ],
  contact: {
    twitter: {
      label: "@niku_codes",
      href: "https://twitter.com/niku_codes",
    },
    email: {
      label: "nikusingh.dev@gmail.com",
      href: "mailto:nikusingh.dev@gmail.com",
    },
  },
  recentBlog: {
    title: "Recent Blog",
    items: [
      {
        title: "Making Sense of React Server Components",
        href: "#",
        description: "July 2025",
      },
      {
        title: "Designing Configurable Tables in React + Antd",
        href: "#",
        description: "June 2025",
      },
      {
        title: "The Architecture of IngestFlow",
        href: "#",
        description: "May 2025",
      },
      {
        title: "My Journey with GitLab OSS Contributions",
        href: "#",
        description: "April 2025",
      },
      {
        title: "Server Side Generation with TanStack Query",
        href: "#",
        description: "March 2025",
      },
    ],
    archiveHref: "#",
    archiveLabel: "Read more / Archive →",
  },
  recentProjects: {
    title: "Recent Projects",
    items: [
      {
        title: "IngestFlow",
        href: "https://github.com/NIKU-SINGH/IngestFlow",
        description: "June 2025",
        external: true,
      },
      {
        title: "Produx AI V2",
        href: "https://produx.ai",
        description: "March 2025",
        external: true,
      },
      {
        title: "Leapsquare Labs Platform",
        href: "https://leapsquare.io",
        description: "February 2025",
        external: true,
      },
    ],
    archiveHref: "#",
    archiveLabel: "Read more / Archive →",
  },
};

export default async function Home() {
  // Fetch all blogs and sort by date descending
  const blogs = await getAllBlogs();
  // Pick the 5 most recent blogs
  const recentBlogs = blogs.slice(-5).reverse();

  return (
    <div className="flex flex-col py-10 px-4 bg-white text-gray-900 text-sm max-w-2xl mx-auto">
      <div className="max-w-2xl w-full">
        <h1 className="text-2xl font-semibold mb-1">{homeData.name}</h1>
        <div className="text-sm text-gray-500 mb-6">
          Updated {homeData.updated}
        </div>
        {homeData.intro.map((item, idx) => {
          if (typeof item === "string") {
            return (
              <p className="mb-4" key={idx}>
                {item}
              </p>
            );
          } else {
            return (
              <p className="mb-4" key={idx}>
                {item.text}
                {item.links &&
                  item.links.map((link, i) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      {link.label}
                    </Link>
                  ))}
                {item.after}
                {item.moreLinks &&
                  item.moreLinks.map((link, i) => (
                    <span key={link.href}>
                      {i > 0 && ", "}
                      <Link
                        href={link.href}
                        target="_blank"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        {link.label}
                      </Link>
                    </span>
                  ))}
                {item.afterMore}
              </p>
            );
          }
        })}
        <p className="mt-6">
          You can find me on{" "}
          <Link
            href={homeData.contact.twitter.href}
            target="_blank"
            className="text-blue-600 underline hover:text-blue-800"
          >
            {homeData.contact.twitter.label}
          </Link>{" "}
          or reach out via{" "}
          <a
            href={homeData.contact.email.href}
            className="text-blue-600 underline hover:text-blue-800"
          >
            {homeData.contact.email.label}
          </a>
          .
        </p>
      </div>

      {/* Recent Blog Section */}
      <RecentList
        title={homeData.recentBlog.title}
        items={recentBlogs.map((blog) => ({
          title: blog.title,
          href: `/posts/${blog.year}/${blog.slug}`,
          description: blog.date,
        }))}
        archiveHref="/blogs"
        archiveLabel={homeData.recentBlog.archiveLabel}
      />

      {/* Recent Projects Section */}
      <RecentList
        title={homeData.recentProjects.title}
        items={homeData.recentProjects.items}
        archiveHref={homeData.recentProjects.archiveHref}
        archiveLabel={homeData.recentProjects.archiveLabel}
      />
    </div>
  );
}
