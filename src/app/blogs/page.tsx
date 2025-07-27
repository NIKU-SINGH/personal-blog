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
      className="max-w-2xl mx-auto"
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
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      flex: 1,
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
                      <Link href={`/posts/${blog.year}/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h3>
                  </div>
                  {blog.tags && blog.tags.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        flexWrap: "wrap",
                        justifyContent: "flex-end",
                      }}
                    >
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          style={{
                            backgroundColor: "#f3f4f6",
                            color: "#374151",
                            padding: "0.25rem 0.5rem",
                            borderRadius: "0.25rem",
                            fontSize: "0.75rem",
                            fontWeight: "500",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
