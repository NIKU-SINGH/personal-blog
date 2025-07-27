import Link from "next/link";

interface RecentListItem {
  title: string;
  href: string;
  description: string;
  external?: boolean;
  date?: string; // new optional date field
}

interface RecentListProps {
  title: string;
  items: RecentListItem[];
  archiveHref?: string;
  archiveLabel?: string;
}

export default function RecentList({
  title,
  items,
  archiveHref,
  archiveLabel,
}: RecentListProps) {
  // Helper to format date
  function parseDate(dateStr: string) {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  return (
    <section className="mt-12 max-w-2xl w-full">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className={archiveHref ? "mb-2" : undefined}>
        {items.map((item, idx) => {
          // Prefer item.date, fallback to description if it's a date
          const formattedDate = item.date
            ? parseDate(item.date)
            : parseDate(item.description);
          // Show description only if it's not a date string
          const showDescription =
            !item.date &&
            isNaN(new Date(item.description).getTime()) &&
            item.description;
          // Hide 'New' tag for Recent Projects section
          const showNewTag = item.external && title !== "Recent Projects";
          return (
            <li key={idx}>
              <div className="flex items-center py-2 border-b last:border-b-0">
                <span className="w-36 text-gray-400 text-sm text-left">
                  {formattedDate}
                </span>
                <div className="flex-1 flex items-center">
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-normal text-black hover:underline text-left"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="font-normal text-black hover:underline text-left"
                    >
                      {item.title}
                    </Link>
                  )}
                  {showNewTag && (
                    <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded">
                      New
                    </span>
                  )}
                  {showDescription && (
                    <span className="ml-2 text-xs text-gray-500">
                      {item.description}
                    </span>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {archiveHref && archiveLabel && (
        <Link
          href={archiveHref}
          className="text-sm text-blue-600 underline hover:text-blue-800"
        >
          {archiveLabel}
        </Link>
      )}
    </section>
  );
}
