import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mysehatconnect.com"),
  title: {
    default: "Sehat Connect | Home Nursing Service in Lahore | Nurse at Home",
    template: "%s | Sehat Connect",
  },
  description:
    "Book a verified nurse or patient attendant at home in Lahore. PNC-registered qualified nurses and trained attendants for post-op care, elderly care, and more. Available 24/7. Call 0328-8489988.",
  keywords: [
    "home nurse Lahore",
    "nurse at home Lahore",
    "home nursing service Lahore",
    "patient attendant Lahore",
    "home healthcare Lahore",
    "qualified nurse at home Lahore",
    "post operative care at home Lahore",
    "elderly care at home Lahore",
    "female nurse at home Lahore",
    "male nurse at home Lahore",
    "ghar par nurse Lahore",
    "home nurse Pakistan",
    "nursing care at home Pakistan",
    "PNC registered nurse home visit",
    "attendant for patient at home",
    "Sehat Connect",
    "sehat-connect.pk",
  ],
  authors: [{ name: "Sehat Connect" }],
  creator: "Sehat Connect",
  publisher: "Sehat Connect",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://mysehatconnect.com",
    siteName: "Sehat Connect",
    title: "Sehat Connect | Home Nursing Service in Lahore",
    description:
      "Book a verified nurse or patient attendant at home in Lahore. PNC-registered, background-checked, available 24/7. Call 0328-8489988.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sehat Connect | Home Nursing Service in Lahore",
    description:
      "Book a verified nurse or patient attendant at home in Lahore. Available 24/7.",
  },
  alternates: {
    canonical: "https://mysehatconnect.com",
  },
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
