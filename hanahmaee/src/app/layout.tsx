import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/custom/Header";
import { ThemeProvider } from "next-themes"; //

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hanah Mae Espineda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem> {/* ✅ FIXED */}
          <Header />
          <main className="pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
