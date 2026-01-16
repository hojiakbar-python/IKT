import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/lib/query-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "Edulab | Online Education Platform",
  description: "Premium online ta'lim platformasi MVP"
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="uz"
      className={`${spaceGrotesk.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body>
        <QueryProvider>
          <div className="relative min-h-screen">
            <Navbar />
            <main className="pt-24">{children}</main>
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
