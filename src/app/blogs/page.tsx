import { getAllBlogs } from "@/utils/readBlogs";
import Link from "next/link";

export default async function BlogsPage() {
  const blogs = await getAllBlogs();
  return (
    <main style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}>
      <h1>All Blogs</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {blogs.map((blog) => (
          <li
            key={blog.slug + blog.year}
            style={{
              marginBottom: "2rem",
              borderBottom: "1px solid #eee",
              paddingBottom: "1rem",
            }}
          >
            <h2>
              <Link href={`/posts/${blog.year}/${blog.slug}`}>
                {blog.title}
              </Link>
            </h2>
            <div style={{ color: "#888", fontSize: "0.9em" }}>{blog.date}</div>
            <div style={{ marginTop: "0.5em" }}>
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#f0f0f0",
                    borderRadius: 4,
                    padding: "2px 8px",
                    marginRight: 6,
                    fontSize: "0.85em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
