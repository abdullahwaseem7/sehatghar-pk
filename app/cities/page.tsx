import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CITIES } from "@/lib/constants";

export default function CitiesPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5FAF9", minHeight: "80vh" }}>
        <div style={{ backgroundColor: "#0D7A6E", padding: "48px 0", textAlign: "center" }}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
            <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>Cities We Serve</h1>
            <p style={{ fontSize: "14px", color: "#B2DED9" }}>Professional home nursing available across Pakistan&apos;s major cities</p>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {CITIES.map(city => (
              <Link key={city} href={`/cities/${city.toLowerCase()}`}
                style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "28px 24px", display: "block" }}
                className="hover:border-[#0D7A6E] hover:shadow-sm transition-all">
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>📍</div>
                <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0A2E2B", marginBottom: "6px" }}>{city}</h2>
                <p style={{ fontSize: "13px", color: "#5A7572" }}>Home nurses &amp; attendants available 24/7</p>
                <span style={{ fontSize: "12px", color: "#0D7A6E", fontWeight: 600, marginTop: "10px", display: "block" }}>View caregivers →</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
