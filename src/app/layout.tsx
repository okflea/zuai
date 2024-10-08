import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Open_Sans, Roboto_Mono } from 'next/font/google';
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: "ZuAi",
  description: "Evaluating your understanding of the course material.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn(
        openSans.variable,
        robotoMono.variable,
        "min-h-screen bg-slate-100 font-sans antialiased"
      )}>
        <Navbar />
        <main className="pt-16 md:pt-0 md:mx-20"> {/* Adjust padding-top and margin-left */}
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
