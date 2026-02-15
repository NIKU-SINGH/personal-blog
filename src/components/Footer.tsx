import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto py-8 border-t border-gray-200">
      <div className="max-w-xl mx-auto text-center text-sm text-gray-600">
        <p>
          Made by{" "}
          <Link
            href="https://github.com/NIKU-SINGH"
            target="_blank"
            className="text-gray-500 underline hover:text-black"
          >
            Niku Singh
          </Link>
          {" • "}
          <span>© 2026 All rights reserved</span>
        </p>
      </div>
    </footer>
  );
}
