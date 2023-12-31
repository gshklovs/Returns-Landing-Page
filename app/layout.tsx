import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OASIS Returns - Shop Effortlessly",
  description: `At OASIS, we can't choose the clothes you like, but we can return the clothes you don't.
  Find out how we garuntee an effortless shopping experience: `,
  keywords: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, height=device-height"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
      </head>

      <body className={inter.className}>
        <div
          className="absolute inset-x-0  -z-50 transform-gpu overflow-hidden blur-3xl sm:-top-20"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tl from-blue-600 to-blue-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(13% 30%, 15% 15%, 43% 12%, 85% 0%, 85% 15%, 44% 30%, 100% 85%, 51% 65%, 85% 100%, 33% 83%, 28% 48%, 0% 85%)",
            }}
          />
        </div>
        <header className="inset-x-0 top-0 z-20">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
