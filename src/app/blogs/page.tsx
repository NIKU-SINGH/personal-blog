import { getAllBlogs } from "@/utils/readBlogs";
import Link from "next/link";

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  // Group blogs by year
  const blogsByYear = blogs.reduce((acc, blog) => {
    if (!acc[blog.year]) {
      acc[blog.year] = [];
    }
    acc[blog.year].push(blog);
    return acc;
  }, {} as Record<string, typeof blogs>);

  // Sort years in descending order (newest first)
  const sortedYears = Object.keys(blogsByYear).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  return (
    <main
      style={{
        maxWidth: 600,
        margin: "2rem auto",
        padding: "1rem",
        fontSize: "14px",
      }}
      className="max-w-xl mx-auto"
    >
      <h1 className="text-2xl font-semibold mb-8">All Blogs</h1>

      {sortedYears.map((year) => (
        <div key={year} style={{ marginBottom: "2rem" }}>
          <h2
            className="font-medium mb-4 text-gray-700 border-b border-gray-200 pb-2"
            style={{ fontSize: "14px" }}
          >
            {year}
          </h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {blogsByYear[year].map((blog) => (
              <li
                key={blog.slug + blog.year}
                style={{
                  marginBottom: "0.5rem",
                  borderBottom: "1px solid #eee",
                  paddingBottom: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      color: "#888",
                      fontSize: "0.9em",
                      minWidth: "fit-content",
                    }}
                  >
                    {blog.date}
                  </div>
                  <h3 style={{ margin: 0 }}>
                    <Link
                      href={`/posts/${blog.year}/${blog.slug}`}
                      className="text-gray-500 hover:text-black hover:underline"
                    >
                      {blog.title}
                    </Link>
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
