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
        date: data.date,
        tags: data.tags,
        slug,
        year,
      });
    }
  }
  blogs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return blogs;
}
