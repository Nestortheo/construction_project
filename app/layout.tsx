import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amkosbau.gr"),

  title: "AMKOSBAU | Κατασκευαστικές Εργασίες στο Κιλκίς",

  description:
    "Η AMKOSBAU αναλαμβάνει κατασκευαστικές εργασίες κατοικιών, σκυρόδεμα, τοιχοποιία, μονώσεις και στέγες στο Κιλκίς.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "AMKOSBAU | Κατασκευές στο Κιλκίς",
    description:
      "Κατασκευαστικές εργασίες με συνέπεια και ποιότητα στο Κιλκίς.",
    url: "https://www.amkosbau.gr",
    siteName: "AMKOSBAU",
    locale: "el_GR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
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
        <Footer />
      </body>
    </html>
  );
}
