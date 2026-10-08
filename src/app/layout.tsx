import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], // Regular, SemiBold, Bold, ExtraBold
});

export const metadata: Metadata = {
  metadataBase: new URL('https://srepta.org'),
  title: {
    default: "Sangaree Elementary School PTA | Summerville, SC",
    template: "%s | Sangaree Elementary PTA",
  },
  description: "Welcome to the official website of the Sangaree Elementary School PTA in Summerville, SC. Join us in supporting our students, teachers, and community! Leading Under the Stars.",
  keywords: [
    "Sangaree Elementary", 
    "SRE PTA", 
    "Summerville SC", 
    "Parent Teacher Association", 
    "Sangaree Elementary School", 
    "Sangaree PTA",
    "Berkeley County School District"
  ],
  openGraph: {
    title: "Sangaree Elementary School PTA",
    description: "Welcome to the official website of the Sangaree Elementary School PTA in Summerville, SC.",
    url: "https://srepta.org",
    siteName: "Sangaree Elementary PTA",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-warm-cream text-midnight-navy">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
