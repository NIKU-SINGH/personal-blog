import ReactMarkdown from "react-markdown";
import React from "react";

function getText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getText).join("");
  if (React.isValidElement(node) && (node.props as any).children) {
    return getText((node.props as any).children);
  }
  return "";
}

function generateId(children: React.ReactNode): string {
  return getText(children)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

interface MarkdownWithIdsProps {
  children: string;
}

export default function MarkdownWithIds({ children }: MarkdownWithIdsProps) {
  const components = {
    h1: ({ children, ...props }: React.ComponentPropsWithoutRef<"h1">) => {
      const id = generateId(children);
      return (
        <h1 id={id} {...props}>
          {children}
        </h1>
      );
    },
    h2: ({ children, ...props }: React.ComponentPropsWithoutRef<"h2">) => {
      const id = generateId(children);
      return (
        <h2 id={id} {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }: React.ComponentPropsWithoutRef<"h3">) => {
      const id = generateId(children);
      return (
        <h3 id={id} {...props}>
          {children}
        </h3>
      );
    },
    h4: ({ children, ...props }: React.ComponentPropsWithoutRef<"h4">) => {
      const id = generateId(children);
      return (
        <h4 id={id} {...props}>
          {children}
        </h4>
      );
    },
    h5: ({ children, ...props }: React.ComponentPropsWithoutRef<"h5">) => {
      const id = generateId(children);
      return (
        <h5 id={id} {...props}>
          {children}
        </h5>
      );
    },
    h6: ({ children, ...props }: React.ComponentPropsWithoutRef<"h6">) => {
      const id = generateId(children);
      return (
        <h6 id={id} {...props}>
          {children}
        </h6>
      );
    },
    strong: ({
      children,
      ...props
    }: React.ComponentPropsWithoutRef<"strong">) => {
      const text = getText(children);
      // Only add ID if the text is longer than 3 characters (likely a heading)
      if (text && text.length > 3) {
        const id = generateId(children);
        return (
          <strong id={id} {...props}>
            {children}
          </strong>
        );
      }
      return <strong {...props}>{children}</strong>;
    },
    ul: ({ children, ...props }: React.ComponentPropsWithoutRef<"ul">) => {
      return (
        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }} {...props}>
          {children}
        </ul>
      );
    },
    ol: ({ children, ...props }: React.ComponentPropsWithoutRef<"ol">) => {
      return (
        <ol
          style={{ listStyleType: "decimal", paddingLeft: "1.5rem" }}
          {...props}
        >
          {children}
        </ol>
      );
    },
    li: ({ children, ...props }: React.ComponentPropsWithoutRef<"li">) => {
      return (
        <li style={{ marginBottom: "0.5rem" }} {...props}>
          {children}
        </li>
      );
    },
    a: ({ href, children, ...props }: React.ComponentPropsWithoutRef<"a">) => {
      // Check if it's a Loom video URL
      if (href && href.includes("loom.com/embed")) {
        return (
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              margin: "2rem 0",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            <iframe
              src={href}
              frameBorder="0"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "8px",
              }}
            />
          </div>
        );
      }

      // Regular link
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    },
  };

  return (
    <ReactMarkdown
      components={components}
      remarkPlugins={[]}
      rehypePlugins={[]}
    >
      {children}
    </ReactMarkdown>
  );
}
