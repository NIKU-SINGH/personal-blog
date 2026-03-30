import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface MarkdownMeta {
  title: string;
  date: string;
  tags?: string[];
  slug: string;
  year?: string;
  description?: string;
}

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
export function normalizeDate(date: Date | string | unknown): string {
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
  try {
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
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
    return [];
  }
}

export async function getMarkdownContent(dir: string, slug: string): Promise<{ content: string; data: any } | null> {
  const files = await getMarkdownFiles(dir);
  const file = files.find(f => path.basename(f, ".md") === slug);
  if (!file) return null;
  
  const content = await fs.readFile(file, "utf8");
  return matter(content);
}

export async function getAllMarkdown(dir: string): Promise<MarkdownMeta[]> {
  const files = await getMarkdownFiles(dir);
  const items: MarkdownMeta[] = [];
  
  for (const file of files) {
    const content = await fs.readFile(file, "utf8");
    const { data } = matter(content);
    
    if (data.title) {
      const relPath = path.relative(dir, file);
      const parts = relPath.split(path.sep);
      const filename = parts[parts.length - 1];
      const slug = filename.replace(/\.md$/, "");
      
      items.push({
        title: data.title,
        date: normalizeDate(data.date),
        tags: normalizeTags(data.tags),
        slug,
        year: data.year || (parts.length > 1 ? parts[0] : undefined),
        description: data.description,
      });
    }
  }
  
  // Sort by date descending (newest first)
  items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return items;
}
