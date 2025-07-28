import Link from "next/link";
import RecentList from "../components/RecentList";
import { getAllBlogs } from "../utils/readBlogs";

const homeData = {
  name: "Niku Singh",
  updated: "July 22, 2025",
  intro: [
    "I'm a full-stack developer based in India with a strong focus on data-intensive systems, scalable web apps, and real-time interfaces with a strong product sense as well.",
    {
      text: "I currently contribute to ",
      links: [
        {
          label: "GitLab",
          href: "https://gitlab.com/NIKU-SINGH",
        },
      ],
      after:
        " as a hobby, following my Google Summer of Code 2023 stint there. I've also worked at startups like ",
      moreLinks: [
        {
          label: "Trumio AI",
          href: "https://trumio.ai",
        },
        {
          label: "Orca AI",
          href: "https://getorca.ai/",
        },
        {
          label: "Leapsquare Labs",
          href: "https://onworkroom.com/",
        },
      ],
      afterMore:
        ", building modern dashboards and full platforms using React, TypeScript, Next.js, TanStack Query, and Redux Toolkit.",
    },
    "Outside of work, I enjoy contributing to open source and exploring problems at the intersection of UX, infra, and developer experience.",
  ],
  contact: {
    twitter: {
      label: "@Niku_Singh_",
      href: "https://x.com/Niku_Singh_",
    },
    email: {
      label: "nikusing319@gmail.com",
      href: "mailto:nikusing319@gmail.com",
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
        title: "Recollect AI",
        href: "https://recollect-ai.vercel.app",
        description: "July 2025",
        external: true,
      },
      {
        title: "IngestFlow",
        href: "https://github.com/NIKU-SINGH/IngestFlow",
        description: "June 2025",
        external: true,
      },
    ],
    archiveHref: "#",
    archiveLabel: "View more →",
  },
};

export default async function Home() {
  // Fetch all blogs and sort by date descending
  const blogs = await getAllBlogs();
  // Pick the 5 most recent blogs
  const recentBlogs = blogs.slice(-5).reverse();

  return (
    <div className="flex flex-col py-10 px-4 bg-white text-gray-900 text-sm max-w-xl mx-auto">
      <div className="max-w-xl w-full">
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
                  item.moreLinks.map((link) => (
                    <span key={link.href}>
                      {item.moreLinks.indexOf(link) > 0 && ", "}
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
        <p className="mt-4">
          Read more about me:{" "}
          <Link
            href="/about"
            className="text-blue-600 underline hover:text-blue-800"
          >
            About
          </Link>
          ,{" "}
          <Link
            href="/projects"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Projects
          </Link>
          ,{" "}
          <Link
            href="/work-experience"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Work Experience
          </Link>
          ,{" "}
          <Link
            href="/bookshelf"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Book Shelf
          </Link>
          ,{" "}
          <Link
            href="/papershelf"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Paper Shelf
          </Link>
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
