import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Home Nurse in Lahore | Sehat Connect",
  description:
    "Book a verified nurse or patient attendant at home in Lahore. Fill in your details and we will call you within 30 minutes to confirm. No payment needed upfront.",
  alternates: { canonical: "https://mysehatconnect.com/book" },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
