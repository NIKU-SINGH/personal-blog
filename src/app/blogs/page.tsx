import { getAllBlogs } from "@/utils/readBlogs";
import YearGroupedList from "@/components/YearGroupedList";

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  // Newest first
  const sortedBlogs = [...blogs].reverse();

  const items = sortedBlogs.map((blog, idx) => ({
    title: blog.title,
    href: `/posts/${blog.year}/${blog.slug}`,
    date: blog.date,
    year: blog.year,
    isNew: idx === 0,
  }));

  return (
    <main className="max-w-xl mx-auto my-8 px-4 text-sm">
      <h1 className="text-2xl font-semibold mb-8">All Blogs</h1>
      <YearGroupedList heading="Writing" items={items} />
    </main>
  );
}
