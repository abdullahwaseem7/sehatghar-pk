import type { Metadata } from "next";
import { FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQs | Home Nurse in Lahore | Sehat Connect",
  description:
    "Frequently asked questions about Sehat Connect home nursing service in Lahore. Pricing, verification, availability, and how to book a nurse or attendant at home.",
  alternates: { canonical: "https://mysehatconnect.com/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
