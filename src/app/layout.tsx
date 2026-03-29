import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niku Singh",
  description: "Personal blog of Niku Singh",
  icons: {
    icon: [
      {
        url: "/images/logo-dark.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/logo-white.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased text-gray-500 dark:text-gray-400 transition-all duration-300`}>
        <div className="min-h-screen flex flex-col">
          <div className="flex-1 px-4">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
