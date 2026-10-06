import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMKOSBAU | Κατασκευές & Τεχνικά Έργα",
  description:
    "AMKOSBAU — Κατασκευαστικές εργασίες, σκυρόδεμα, τοιχοποιία, μονώσεις και τεχνικά έργα.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="el"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <Navbar />
        {children}
      </body>
    </html>
  );
}
