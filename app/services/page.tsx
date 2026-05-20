import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { QUALIFIED_NURSE_SERVICES, ATTENDANT_SERVICES, PRICES } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5FAF9", minHeight: "80vh" }}>
        {/* Header */}
        <div style={{ backgroundColor: "#0D7A6E", padding: "48px 0" }}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>Our Services</h1>
            <p style={{ fontSize: "15px", color: "#B2DED9" }}>Professional, verified caregiving — at your doorstep</p>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12">

          {/* Two category cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {[
              { cat: "qualified_nurse", title: "Qualified Nurse", href: "/services/qualified-nurse", price: PRICES.qualified_nurse, badge: "PNC Registered", desc: "Pakistan Nursing Council registered nurses for clinical home care — wound dressing, IV therapy, medication management, and more.", services: QUALIFIED_NURSE_SERVICES },
              { cat: "attendant",       title: "Attendant",        href: "/services/attendant",       price: PRICES.attendant,       badge: "Trained & Verified",  desc: "Trained non-clinical caregivers for personal support, companionship, hygiene, feeding, and overnight patient care.", services: ATTENDANT_SERVICES },
            ].map(c => (
              <div key={c.cat} style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", overflow: "hidden" }}>
                <div style={{ backgroundColor: "#EEF9F7", padding: "28px 24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#0A2E2B" }}>{c.title}</h2>
                    <span style={{ backgroundColor: "#0D7A6E", color: "#fff", fontSize: "11px", fontWeight: 600, padding: "4px 12px", borderRadius: "20px" }}>{c.badge}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: "#3D5E5A", lineHeight: 1.7, marginBottom: "16px" }}>{c.desc}</p>
                  <div style={{ fontSize: "24px", fontWeight: 700, color: "#0D7A6E" }}>Rs. {c.price.toLocaleString()}
                    <span style={{ fontSize: "13px", fontWeight: 400, color: "#5A7572" }}> / 12hr shift</span>
                  </div>
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <ul style={{ marginBottom: "20px" }}>
                    {c.services.map(s => (
                      <li key={s.id} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "8px" }}>
                        <span style={{ color: "#0D7A6E", fontWeight: 700, fontSize: "14px", marginTop: "1px" }}>✓</span>
                        <div>
                          <span style={{ fontSize: "13px", fontWeight: 600, color: "#0A2E2B" }}>{s.label}</span>
                          <span style={{ fontSize: "12px", color: "#5A7572" }}> — {s.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <Link href={c.href}
                      style={{ flex: 1, textAlign: "center", padding: "10px", borderRadius: "8px", border: "1px solid #0D7A6E", color: "#0D7A6E", fontSize: "13px", fontWeight: 600 }}
                      className="hover:bg-[#EEF9F7] transition-colors">
                      Learn More
                    </Link>
                    <Link href={`/book?category=${c.cat}`}
                      style={{ flex: 1, textAlign: "center", padding: "10px", borderRadius: "8px", backgroundColor: "#0D7A6E", color: "#fff", fontSize: "13px", fontWeight: 600 }}
                      className="hover:bg-[#0A5E55] transition-colors">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "28px 24px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0A2E2B", marginBottom: "20px" }}>Not sure which you need?</h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #EEF9F7" }}>
                    <th style={{ textAlign: "left", padding: "10px 12px", color: "#5A7572", fontWeight: 600 }}>Feature</th>
                    <th style={{ textAlign: "center", padding: "10px 12px", color: "#0D7A6E", fontWeight: 700 }}>Qualified Nurse</th>
                    <th style={{ textAlign: "center", padding: "10px 12px", color: "#3D5E5A", fontWeight: 700 }}>Attendant</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["PNC registered",          true,  false],
                    ["Wound dressing / IV care", true,  false],
                    ["Medication administration",true,  false],
                    ["Vitals monitoring",        true,  false],
                    ["Personal hygiene support", true,  true],
                    ["Feeding assistance",       true,  true],
                    ["Companionship / support",  true,  true],
                    ["Overnight duty",           true,  true],
                    ["Price per shift",          "Rs. 4,000", "Rs. 3,000"],
                  ].map(([feat, n, a], i) => (
                    <tr key={String(feat)} style={{ borderBottom: "1px solid #F5FAF9", backgroundColor: i % 2 === 0 ? "#fff" : "#FAFFFE" }}>
                      <td style={{ padding: "10px 12px", color: "#3D5E5A" }}>{String(feat)}</td>
                      <td style={{ textAlign: "center", padding: "10px 12px", color: typeof n === "string" ? "#0D7A6E" : n ? "#1A9E6E" : "#C0392B", fontWeight: typeof n === "string" ? 700 : 400 }}>
                        {typeof n === "string" ? n : n ? "✓" : "✗"}
                      </td>
                      <td style={{ textAlign: "center", padding: "10px 12px", color: typeof a === "string" ? "#0D7A6E" : a ? "#1A9E6E" : "#C0392B", fontWeight: typeof a === "string" ? 700 : 400 }}>
                        {typeof a === "string" ? a : a ? "✓" : "✗"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
