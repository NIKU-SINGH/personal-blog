export interface Heading {
  level: number;
  text: string;
  id: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function extractHeadings(content: string): Heading[] {
  const found: { index: number; level: number; text: string }[] = [];

  // Markdown headings (# ## ### etc.)
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    found.push({
      index: match.index,
      level: match[1].length,
      text: match[2].trim(),
    });
  }

  // Bold text on its own line, treated as a sub-heading (level 2)
  const boldRegex = /^\*\*(.+?)\*\*$/gm;
  while ((match = boldRegex.exec(content)) !== null) {
    const text = match[1].trim();
    if (text.length > 3) {
      found.push({ index: match.index, level: 2, text });
    }
  }

  found.sort((a, b) => a.index - b.index);

  const seen = new Set<string>();
  const headings: Heading[] = [];
  for (const { level, text } of found) {
    if (seen.has(text)) continue;
    seen.add(text);
    headings.push({ level, text, id: slugify(text) });
  }

  return headings;
}
