import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SehatGhar.pk — Professional Nursing Care at Home in Pakistan",
  description:
    "Book verified male or female nurses and attendants at home in Lahore, Karachi, Islamabad & more. PNC registered, background-checked, available 24/7. Rs. 4,000 per shift.",
  keywords:
    "home nurse Pakistan, home nurse Lahore, home nurse Karachi, female nurse at home, home nursing service Pakistan",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
