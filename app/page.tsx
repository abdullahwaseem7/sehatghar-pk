import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import ServicesSection from "@/components/home/ServicesSection";
import TrustSignals from "@/components/home/TrustSignals";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Sehat Connect | Home Nursing Service in Lahore | Nurse at Home",
  description:
    "Pakistan's trusted home nursing platform. Book a PNC-registered nurse or trained attendant at home in Lahore. Post-op care, elderly care, paediatric care — available 24/7. Call 0305-8489988.",
  alternates: { canonical: "https://mysehatconnect.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Sehat Connect",
  description:
    "Home nursing service in Lahore providing PNC-registered nurses and trained attendants for post-operative care, elderly care, paediatric care and more.",
  url: "https://mysehatconnect.com",
  telephone: "+92-305-8489988",
  email: "care@sehat-connect.pk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  areaServed: {
    "@type": "City",
    name: "Lahore",
  },
  serviceType: [
    "Home Nursing",
    "Post-operative Care",
    "Elderly Care",
    "Paediatric Care",
    "Patient Attendant",
    "Night Duty Nurse",
  ],
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "Rs. 3,000 - Rs. 4,000 per shift",
  sameAs: [
    "https://wa.me/923058489988",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <ServicesSection />
        <TrustSignals />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
