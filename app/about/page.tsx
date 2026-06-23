import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "About Us | Sehat Connect Home Nursing Service Lahore",
  description:
    "Learn about Sehat Connect — Lahore's trusted home nursing platform connecting families with PNC-registered nurses and trained attendants. Verified, affordable, available 24/7.",
  alternates: { canonical: "https://mysehatconnect.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5FAF9", minHeight: "80vh" }}>
        <div style={{ backgroundColor: "#0D7A6E", padding: "56px 0", textAlign: "center" }}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
            <h1 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>About Sehat Connect</h1>
            <p style={{ fontSize: "16px", color: "#B2DED9", maxWidth: "560px", margin: "0 auto" }}>
              We believe every Pakistani family deserves proper nursing care at home — not just those who can afford a hospital stay.
            </p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-4 md:px-6 lg:px-8 py-12">

          {/* Mission */}
          <div style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "32px 28px", marginBottom: "16px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0A2E2B", marginBottom: "12px" }}>Our Mission</h2>
            <p style={{ fontSize: "14px", color: "#3D5E5A", lineHeight: 1.8 }}>
              Most families in Pakistan have no easy way to get a qualified nurse at home after surgery or during illness. They either rely on untrained helpers or have to stay in hospital longer than needed. Sehat Connect was started to fix that. We send verified, PNC-registered nurses and trained attendants directly to your home — so your family member recovers safely and comfortably.
            </p>
          </div>

          {/* Values */}
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0A2E2B", marginBottom: "16px" }}>What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              { title: "Trust",          desc: "Every nurse and attendant is PNC-verified and CNIC-checked before we send them to your home." },
              { title: "No Hidden Fees", desc: "Rs. 4,000 for a qualified nurse, Rs. 3,000 for an attendant. What you see is what you pay." },
              { title: "Always Available", desc: "Male and female caregivers available in Lahore. Book anytime via website or WhatsApp." },
            ].map(v => (
              <div key={v.title} style={{ backgroundColor: "#EEF9F7", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "22px 20px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0D7A6E", marginBottom: "8px" }}>{v.title}</h3>
                <p style={{ fontSize: "13px", color: "#3D5E5A", lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/book"
              style={{ backgroundColor: "#0D7A6E", color: "#fff", padding: "13px 36px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", display: "inline-block" }}
              className="hover:bg-[#0A5E55] transition-colors">
              Book a Caregiver Today
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
