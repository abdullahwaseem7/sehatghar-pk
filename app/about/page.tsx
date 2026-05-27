import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "About Us | SehatGhar.pk Home Nursing Service Lahore",
  description:
    "Learn about SehatGhar.pk — Lahore's trusted home nursing platform connecting families with PNC-registered nurses and trained attendants. Verified, affordable, available 24/7.",
  alternates: { canonical: "https://sehatghar-pk.vercel.app/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5FAF9", minHeight: "80vh" }}>
        <div style={{ backgroundColor: "#0D7A6E", padding: "56px 0", textAlign: "center" }}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
            <h1 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>About SehatGhar.pk</h1>
            <p style={{ fontSize: "16px", color: "#B2DED9", maxWidth: "560px", margin: "0 auto" }}>
              We exist so every Pakistani family can access verified, professional nursing care at home — safely and affordably.
            </p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-4 md:px-6 lg:px-8 py-12">

          {/* Mission */}
          <div style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "32px 28px", marginBottom: "16px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0A2E2B", marginBottom: "12px" }}>Our Mission</h2>
            <p style={{ fontSize: "14px", color: "#3D5E5A", lineHeight: 1.8 }}>
              SehatGhar.pk was founded on a simple belief: recovering at home, surrounded by family, should not mean compromising on the quality of care.
              We connect families with PNC-registered nurses and trained attendants who bring hospital-grade professionalism into the home environment.
              Every caregiver on our platform is identity-verified, background-screened, and rated by real patients.
            </p>
          </div>

          {/* Values */}
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0A2E2B", marginBottom: "16px" }}>What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              { title: "Trust",          desc: "Every caregiver is PNC-verified, CNIC-checked, and background-screened before joining our platform." },
              { title: "Transparency",   desc: "Prices are shown upfront — Rs. 4,000 for nurses, Rs. 3,000 for attendants. No hidden fees." },
              { title: "Accessibility",  desc: "Male and female caregivers available. Urdu support. Bookings accepted 24/7 via web or WhatsApp." },
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
