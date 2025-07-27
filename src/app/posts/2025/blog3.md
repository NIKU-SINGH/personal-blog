---
title: "Getting Started with Next.js and Markdown"
date: "2025-01-03"
author: "Niku Singh"
tags: ["nextjs", "markdown", "tutorial", "2025"]
---

This is a comprehensive guide on how to build a blog with Next.js and render Markdown content properly.

### Why Next.js?

Next.js is a powerful React framework that provides:

- **Server-side rendering** for better SEO
- **Static site generation** for fast loading
- **API routes** for backend functionality
- **File-based routing** for easy navigation

### Setting Up Your Blog

#### 1. Install Dependencies

First, you'll need to install the necessary packages:

```bash
npm install react-markdown gray-matter
```

#### 2. Create Your Blog Structure

Organize your blog posts in a clear structure:

```
src/app/posts/
├── 2024/
│   ├── first-post.md
│   └── second-post.md
└── 2025/
    ├── blog1.md
    ├── blog2.md
    └── blog3.md
```

#### 3. Write Your Content

Each Markdown file should have frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2025-01-03"
author: "Your Name"
tags: ["tag1", "tag2"]
---

# Your content here
```

### Markdown Features

#### Headers

You can use different header levels:

# H1 Header

## H2 Header

### H3 Header

#### Lists

**Unordered lists:**

- Item 1
- Item 2
- Item 3

**Ordered lists:**

1. First step
2. Second step
3. Third step

#### Emphasis

- _Italic text_ for emphasis
- **Bold text** for strong emphasis
- **_Bold and italic_** for extra emphasis

#### Links

You can add [links to external sites](https://nextjs.org) or internal pages.

#### Code

Inline code: `const example = "hello world"`

Code blocks:

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("World"));
```

#### Blockquotes

> This is a blockquote. It's great for highlighting important information or quotes from other sources.

### Best Practices

1. **Use descriptive titles** that clearly indicate the content
2. **Add relevant tags** to help with categorization
3. **Keep your content well-structured** with proper headers
4. **Use images sparingly** and optimize them for web
5. **Test your Markdown** before publishing

### Conclusion

Building a blog with Next.js and Markdown is straightforward and powerful. The combination provides:

- **Easy content management** with Markdown files
- **Fast performance** with static generation
- **Great developer experience** with React
- **SEO-friendly** out of the box

**Happy blogging!** 🚀
