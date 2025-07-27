export interface Heading {
  level: number;
  text: string;
  id: string;
}

export function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = [];

  // Extract markdown headings (# ## ### etc.)
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    headings.push({ level, text, id });
  }

  // Extract bold text as headings (treat as level 2)
  const boldRegex = /\*\*(.+?)\*\*/g;
  while ((match = boldRegex.exec(content)) !== null) {
    const text = match[1].trim();
    // Skip if it's already captured as a heading or if it's just emphasis
    if (text.length > 3 && !headings.some((h) => h.text === text)) {
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

      headings.push({ level: 2, text, id });
    }
  }

  return headings;
}
