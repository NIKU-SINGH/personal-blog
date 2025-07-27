import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface BlogMeta {
  title: string;
  date: string;
  tags: string[];
  slug: string;
  year: string;
}

const POSTS_DIR = path.join(process.cwd(), "src/app/posts");

// Helper function to normalize tags to always be an array
function normalizeTags(tags: string[] | string | unknown): string[] {
  if (Array.isArray(tags)) {
    return tags;
  }
  if (typeof tags === "string") {
    // Split by comma and clean up whitespace
    return tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
  }
  return [];
}

// Helper function to normalize date to always be a string
function normalizeDate(date: Date | string | unknown): string {
  if (date instanceof Date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }
  if (typeof date === "string") {
    // Try to parse the string as a date and format it
    const parsedDate = new Date(date);
    if (!isNaN(parsedDate.getTime())) {
      const day = String(parsedDate.getDate()).padStart(2, "0");
      const month = parsedDate.toLocaleString("default", { month: "short" });
      const year = parsedDate.getFullYear();
      return `${month} ${day}, ${year}`;
    }
    return date;
  }
  return "";
}

async function getMarkdownFiles(dir: string): Promise<string[]> {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map(async (dirent) => {
      const res = path.resolve(dir, dirent.name);
      if (dirent.isDirectory()) {
        return getMarkdownFiles(res);
      } else if (dirent.isFile() && res.endsWith(".md")) {
        return [res];
      } else {
        return [];
      }
    })
  );
  return Array.prototype.concat(...files);
}

export async function getAllBlogs(): Promise<BlogMeta[]> {
  const files = await getMarkdownFiles(POSTS_DIR);
  const blogs: BlogMeta[] = [];
  for (const file of files) {
    const content = await fs.readFile(file, "utf8");
    const { data } = matter(content);
    if (data.title && data.date && data.tags) {
      const relPath = path.relative(POSTS_DIR, file);
      const [year, filename] = relPath.split(path.sep);
      const slug = filename.replace(/\.md$/, "");
      blogs.push({
        title: data.title,
        date: normalizeDate(data.date),
        tags: normalizeTags(data.tags),
        slug,
        year,
      });
    }
  }
  blogs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return blogs;
}
