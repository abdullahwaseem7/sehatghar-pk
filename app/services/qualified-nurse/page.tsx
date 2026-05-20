import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { QUALIFIED_NURSE_SERVICES, PRICES } from "@/lib/constants";

export default function QualifiedNursePage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5FAF9", minHeight: "80vh" }}>
        <div style={{ backgroundColor: "#0D7A6E", padding: "48px 0" }}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
            <span style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff", fontSize: "11px", fontWeight: 600, padding: "4px 12px", borderRadius: "20px" }}>PNC Registered</span>
            <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "#fff", marginTop: "12px", marginBottom: "10px" }}>Qualified Nurse</h1>
            <p style={{ fontSize: "15px", color: "#B2DED9", marginBottom: "16px" }}>Clinical home nursing care by Pakistan Nursing Council registered professionals.</p>
            <div style={{ fontSize: "26px", fontWeight: 700, color: "#fff" }}>Rs. {PRICES.qualified_nurse.toLocaleString()} <span style={{ fontSize: "14px", fontWeight: 400, color: "#B2DED9" }}>/ 12-hour shift</span></div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {QUALIFIED_NURSE_SERVICES.map(s => (
              <div key={s.id} style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "20px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0A2E2B", marginBottom: "8px" }}>{s.label}</h3>
                <p style={{ fontSize: "13px", color: "#5A7572", lineHeight: 1.6, marginBottom: "14px" }}>{s.description}</p>
                <Link href={`/book?service=${s.id}&category=qualified_nurse`}
                  style={{ fontSize: "12px", fontWeight: 600, color: "#0D7A6E" }}>Book this service →</Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/book?category=qualified_nurse"
              style={{ backgroundColor: "#0D7A6E", color: "#fff", padding: "13px 36px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", display: "inline-block" }}
              className="hover:bg-[#0A5E55] transition-colors">
              Book a Qualified Nurse
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
