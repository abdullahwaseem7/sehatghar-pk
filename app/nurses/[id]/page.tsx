import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { MOCK_CAREGIVERS } from "@/lib/mockData";
import { PRICES } from "@/lib/constants";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default async function NurseProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const nurse = MOCK_CAREGIVERS.find(n => n.id === (id ?? "")) ?? MOCK_CAREGIVERS[0];
  const isFemale = nurse.gender === "female";
  const isNurse = nurse.category === "qualified_nurse";
  const price = PRICES[nurse.category];
  const initials = nurse.name.split(" ").map(n => n[0]).join("");

  const reviewMsg = encodeURIComponent(`Hi! I'd like to leave a review for ${nurse.name}.`);

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

                    <div style={{ marginTop: "10px" }}>
                      <span style={{ fontSize: "13px", color: "#5A7572" }}>📍 {nurse.city}</span>
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

              {/* Write a Review */}
              <div style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "24px" }}>
                <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#0A2E2B", marginBottom: "6px" }}>Leave a Review</h2>
                <p style={{ fontSize: "13px", color: "#5A7572", marginBottom: "16px", lineHeight: 1.6 }}>
                  Had a good experience with {nurse.name}? We&apos;d love to hear about it. Send us your review on WhatsApp and we&apos;ll feature it on the site.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${reviewMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#25D366", color: "#fff", fontWeight: 600, fontSize: "13px", padding: "11px 20px", borderRadius: "8px" }}
                  className="hover:opacity-90 transition-opacity"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Write a Review on WhatsApp
                </a>
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
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#1A9E6E" }} />
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#1A9E6E" }}>Available</span>
                </div>

                <Link href={`/book?caregiver=${nurse.id}`}
                  style={{ display: "block", width: "100%", textAlign: "center", backgroundColor: "#0D7A6E", color: "#fff", fontWeight: 700, fontSize: "14px", padding: "13px", borderRadius: "8px", marginBottom: "10px" }}
                  className="hover:bg-[#0A5E55] transition-colors">
                  Book Now
                </Link>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'd like to enquire about ${nurse.name}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ display: "block", width: "100%", textAlign: "center", backgroundColor: "#25D366", color: "#fff", fontWeight: 600, fontSize: "13px", padding: "12px", borderRadius: "8px" }}
                  className="hover:opacity-90 transition-opacity">
                  WhatsApp to Enquire
                </a>
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
