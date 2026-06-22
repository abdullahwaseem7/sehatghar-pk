import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { MOCK_CAREGIVERS } from "@/lib/mockData";

export function generateStaticParams() {
  return ["lahore", "karachi", "islamabad", "rawalpindi", "faisalabad"].map(city => ({ city }));
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const slug = city ?? "";
  const cityName = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : "Your City";
  const caregivers = MOCK_CAREGIVERS.filter(c => slug && c.city.toLowerCase() === slug.toLowerCase()).slice(0, 4);

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5FAF9", minHeight: "80vh" }}>
        <div style={{ backgroundColor: "#0D7A6E", padding: "56px 0" }}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
            <p style={{ fontSize: "13px", color: "#B2DED9", marginBottom: "8px" }}>
              <Link href="/cities" style={{ color: "#B2DED9" }}>Cities</Link> / {cityName}
            </p>
            <h1 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
              Home Nurse in {cityName}
            </h1>
            <p style={{ fontSize: "15px", color: "#B2DED9", maxWidth: "540px", marginBottom: "20px" }}>
              Verified male and female nurses and attendants available 24/7 in {cityName}. PNC registered, background-checked. Rs. 4,000 per shift.
            </p>
            <Link href={`/book?city=${cityName}`}
              style={{ backgroundColor: "#fff", color: "#0D7A6E", fontWeight: 700, fontSize: "14px", padding: "12px 28px", borderRadius: "8px", display: "inline-block" }}
              className="hover:bg-[#EEF9F7] transition-colors">
              Book a Nurse in {cityName}
            </Link>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-10">
          {caregivers.length > 0 ? (
            <>
              <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0A2E2B", marginBottom: "16px" }}>
                Available Caregivers in {cityName}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {caregivers.map(c => {
                  const initials = c.name.split(" ").map(n => n[0]).join("");
                  return (
                    <div key={c.id} style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "18px" }}>
                      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                        <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: c.gender === "female" ? "#F4E8F4" : "#EEF9F7", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "15px", color: c.gender === "female" ? "#7A3D8A" : "#0D7A6E", flexShrink: 0 }}>{initials}</div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: "14px", color: "#0A2E2B" }}>{c.name}</div>
                          <div style={{ fontSize: "12px", color: "#5A7572" }}>{c.category === "qualified_nurse" ? "Qualified Nurse" : "Attendant"} · ★ {c.rating_avg}</div>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "8px", marginTop: "14px" }}>
                        <Link href={`/nurses/${c.id}`}
                          style={{ flex: 1, textAlign: "center", padding: "8px", borderRadius: "8px", border: "1px solid #0D7A6E", color: "#0D7A6E", fontSize: "12px", fontWeight: 600 }}>
                          View Profile
                        </Link>
                        <Link href={`/book?caregiver=${c.id}`}
                          style={{ flex: 1, textAlign: "center", padding: "8px", borderRadius: "8px", backgroundColor: "#0D7A6E", color: "#fff", fontSize: "12px", fontWeight: 600 }}>
                          Book Now
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <p style={{ fontSize: "15px", color: "#5A7572", marginBottom: "16px" }}>
                We are expanding to {cityName} soon! Contact us to be notified.
              </p>
            </div>
          )}

          {/* SEO content */}
          <div style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "28px 24px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#0A2E2B", marginBottom: "12px" }}>Home Nursing Services in {cityName}</h2>
            <p style={{ fontSize: "13px", color: "#3D5E5A", lineHeight: 1.8 }}>
              Sehat Connect provides professional home nursing care in {cityName} with fully verified caregivers. Our services include post-operative care, elderly care, paediatric nursing, ICU step-down care, diabetic care, and overnight night duty — delivered by PNC-registered qualified nurses or trained attendants, depending on your need.
            </p>
            <p style={{ fontSize: "13px", color: "#3D5E5A", lineHeight: 1.8, marginTop: "10px" }}>
              All nurses in {cityName} are Pakistan Nursing Council registered, CNIC verified, and background-screened. You can request a male or female caregiver. Pricing is transparent: Rs. 4,000 per 12-hour shift for a qualified nurse, Rs. 3,000 for an attendant. Book online in under 3 minutes or WhatsApp us at 0300-1234567.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
