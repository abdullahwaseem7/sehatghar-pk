import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { MOCK_CAREGIVERS, MOCK_REVIEWS } from "@/lib/mockData";
import { PRICES } from "@/lib/constants";

export default async function NurseProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const nurse = MOCK_CAREGIVERS.find(n => n.id === (id ?? "")) ?? MOCK_CAREGIVERS[0];
  const reviews = MOCK_REVIEWS.filter(r => r.caregiver_id === nurse.id);
  const isFemale = nurse.gender === "female";
  const isNurse = nurse.category === "qualified_nurse";
  const price = PRICES[nurse.category];
  const initials = nurse.name.split(" ").map(n => n[0]).join("");

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5FAF9", minHeight: "80vh" }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Main column */}
            <div style={{ flex: 1 }}>

              {/* Header card */}
              <div style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "28px 24px", marginBottom: "16px" }}>
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", flexWrap: "wrap" }}>
                  <div style={{
                    width: "80px", height: "80px", borderRadius: "50%", flexShrink: 0,
                    backgroundColor: isFemale ? "#F4E8F4" : "#EEF9F7",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: "26px",
                    color: isFemale ? "#7A3D8A" : "#0D7A6E",
                  }}>{initials}</div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#0A2E2B" }}>{nurse.name}</h1>
                      {nurse.is_verified && (
                        <span style={{ backgroundColor: "#EEF9F7", color: "#0D7A6E", fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "20px", display: "flex", alignItems: "center", gap: "4px" }}>
                          ✓ Verified
                        </span>
                      )}
                    </div>

                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "8px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "20px", backgroundColor: isNurse ? "#EEF9F7" : "#FEF3C7", color: isNurse ? "#0D7A6E" : "#92400E" }}>
                        {isNurse ? "Qualified Nurse" : "Attendant"}
                      </span>
                      <span style={{ fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "20px", backgroundColor: isFemale ? "#F4E8F4" : "#EEF9F7", color: isFemale ? "#7A3D8A" : "#0D7A6E" }}>
                        {isFemale ? "Female" : "Male"}
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: "16px", marginTop: "12px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "13px", color: "#5A7572" }}>📍 {nurse.city}</span>
                      <span style={{ fontSize: "13px", color: "#5A7572" }}>⏳ {nurse.experience_years} years experience</span>
                      <span style={{ fontSize: "13px", color: "#E8A020", fontWeight: 600 }}>★ {nurse.rating_avg} ({nurse.review_count} reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Verification badges */}
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "20px", paddingTop: "20px", borderTop: "1px solid #EEF9F7" }}>
                  {isNurse && nurse.pnc_number && (
                    <div style={{ backgroundColor: "#EEF9F7", borderRadius: "8px", padding: "10px 14px" }}>
                      <div style={{ fontSize: "11px", color: "#5A7572" }}>PNC Number</div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#0D7A6E" }}>{nurse.pnc_number}</div>
                    </div>
                  )}
                  <div style={{ backgroundColor: "#EEF9F7", borderRadius: "8px", padding: "10px 14px" }}>
                    <div style={{ fontSize: "11px", color: "#5A7572" }}>CNIC</div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#0D7A6E" }}>Verified ✓</div>
                  </div>
                  <div style={{ backgroundColor: "#EEF9F7", borderRadius: "8px", padding: "10px 14px" }}>
                    <div style={{ fontSize: "11px", color: "#5A7572" }}>Background</div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#0D7A6E" }}>Screened ✓</div>
                  </div>
                </div>
              </div>

              {/* About */}
              <div style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "24px", marginBottom: "16px" }}>
                <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#0A2E2B", marginBottom: "12px" }}>About</h2>
                <p style={{ fontSize: "14px", color: "#3D5E5A", lineHeight: 1.7 }}>{nurse.bio}</p>
              </div>

              {/* Specialisations */}
              <div style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "24px", marginBottom: "16px" }}>
                <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#0A2E2B", marginBottom: "12px" }}>Specialisations</h2>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {nurse.specialisations.map(s => (
                    <span key={s} style={{ padding: "6px 16px", borderRadius: "20px", backgroundColor: "#EEF9F7", border: "0.5px solid #B2DED9", fontSize: "13px", color: "#0D7A6E", fontWeight: 500 }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "24px" }}>
                <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#0A2E2B", marginBottom: "16px" }}>
                  Patient Reviews ({nurse.review_count})
                </h2>
                {reviews.length > 0 ? reviews.map(r => (
                  <div key={r.id} style={{ borderBottom: "1px solid #EEF9F7", paddingBottom: "16px", marginBottom: "16px" }}>
                    <div style={{ display: "flex", gap: "3px", marginBottom: "6px" }}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < r.rating ? "#E8A020" : "#D1D5DB"} stroke="none">
                          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
                        </svg>
                      ))}
                    </div>
                    <p style={{ fontSize: "13px", color: "#3D5E5A", lineHeight: 1.6, marginBottom: "8px" }}>{r.comment}</p>
                    <div style={{ fontSize: "12px", color: "#5A7572" }}>{r.user_name} · {r.created_at}</div>
                  </div>
                )) : (
                  <p style={{ fontSize: "13px", color: "#5A7572" }}>No reviews yet. Be the first to review after your booking!</p>
                )}
              </div>
            </div>

            {/* Sticky sidebar */}
            <aside style={{ width: "100%", maxWidth: "280px", flexShrink: 0 }}>
              <div style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "24px", position: "sticky", top: "80px" }}>
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <div style={{ fontSize: "28px", fontWeight: 700, color: "#0D7A6E" }}>Rs. {price.toLocaleString()}</div>
                  <div style={{ fontSize: "12px", color: "#5A7572" }}>per 12-hour shift</div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "6px", justifyContent: "center", marginBottom: "20px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: nurse.is_available ? "#1A9E6E" : "#C0392B" }} />
                  <span style={{ fontSize: "13px", fontWeight: 600, color: nurse.is_available ? "#1A9E6E" : "#C0392B" }}>
                    {nurse.availability_status === "available_now" ? "Available Now" : nurse.availability_status === "available_today" ? "Available Today" : "Currently Unavailable"}
                  </span>
                </div>

                <Link href={`/book?caregiver=${nurse.id}`}
                  style={{ display: "block", width: "100%", textAlign: "center", backgroundColor: "#0D7A6E", color: "#fff", fontWeight: 700, fontSize: "14px", padding: "13px", borderRadius: "8px", marginBottom: "10px" }}
                  className="hover:bg-[#0A5E55] transition-colors">
                  Book This Nurse
                </Link>
                <a href={`https://wa.me/923001234567?text=I%20want%20to%20book%20${encodeURIComponent(nurse.name)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ display: "block", width: "100%", textAlign: "center", backgroundColor: "#25D366", color: "#fff", fontWeight: 600, fontSize: "13px", padding: "12px", borderRadius: "8px" }}
                  className="hover:opacity-90 transition-opacity">
                  WhatsApp to Enquire
                </a>

                <div style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid #EEF9F7" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span style={{ fontSize: "12px", color: "#5A7572" }}>Rating</span>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#E8A020" }}>★ {nurse.rating_avg}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "12px", color: "#5A7572" }}>Experience</span>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#0A2E2B" }}>{nurse.experience_years} years</span>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
