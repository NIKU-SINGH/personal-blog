import Link from "next/link";
import HandDrawnCircle from "./HandDrawnCircle";

export interface YearListItem {
  title: string;
  href: string;
  date: string;
  year: string;
  external?: boolean;
  isNew?: boolean;
}

interface YearGroupedListProps {
  heading: string;
  items: YearListItem[]; // expected pre-sorted newest first
  archiveHref?: string;
  archiveLabel?: string;
}

function formatDayMonth(dateStr: string) {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}/${month}`;
}

export default function YearGroupedList({
  heading,
  items,
  archiveHref,
  archiveLabel,
}: YearGroupedListProps) {
  let lastYear: string | null = null;

  return (
    <section className="max-w-xl w-full">
      <h2 className="text-gray-400 text-sm mb-2">{heading}</h2>
      <div>
        {items.map((item, idx) => {
          const showYear = item.year !== lastYear;
          lastYear = item.year;

          return (
            <div
              key={item.href + idx}
              className="flex items-center gap-4 py-2 border-b border-gray-100 last:border-b-0"
            >
              <span className="w-12 shrink-0 text-gray-400 text-sm">
                {showYear ? item.year : ""}
              </span>
              <span className="flex-1 flex items-center">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-black hover:underline"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-900 hover:text-black hover:underline"
                  >
                    {item.title}
                  </Link>
                )}
                {item.isNew && (
                  <span className="ml-2 text-pink-500 text-xs">
                    <HandDrawnCircle color="#ec4899">New</HandDrawnCircle>
                  </span>
                )}
              </span>
              <span className="shrink-0 text-gray-400 text-sm">
                {formatDayMonth(item.date)}
              </span>
            </div>
          );
        })}
      </div>
      {archiveHref && archiveLabel && (
        <Link
          href={archiveHref}
          className="mt-2 inline-block text-sm text-gray-500 underline underline-offset-4 decoration-gray-400 hover:decoration-black hover:text-black"
        >
          {archiveLabel}
        </Link>
      )}
    </section>
  );
}
