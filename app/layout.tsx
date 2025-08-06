import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next"; // ✅ Proper type import
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import React from "react"; // ✅ Ensure React is imported

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADMyBRAND Insights",
  description: "AI-powered analytics dashboard for digital marketers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
