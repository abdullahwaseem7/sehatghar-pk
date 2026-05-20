import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default async function BookingConfirmPage({ searchParams }: { searchParams: Promise<{ ref?: string }> }) {
  const resolvedParams = await searchParams;
  const ref = resolvedParams.ref ?? "CAH-2025-0001";

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5FAF9", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 16px" }}>
        <div style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "16px", padding: "40px 32px", maxWidth: "480px", width: "100%", textAlign: "center" }}>

          {/* Success icon */}
          <div style={{ width: "72px", height: "72px", borderRadius: "50%", backgroundColor: "#EEF9F7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0D7A6E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20,6 9,17 4,12"/>
            </svg>
          </div>

          <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#0A2E2B", marginBottom: "10px" }}>Booking Confirmed!</h1>
          <p style={{ fontSize: "14px", color: "#3D5E5A", lineHeight: 1.6, marginBottom: "24px" }}>
            Your booking has been received. We will assign a verified nurse and confirm within <strong>30 minutes</strong> via SMS or WhatsApp.
          </p>

          {/* Booking ref */}
          <div style={{ backgroundColor: "#F5FAF9", borderRadius: "10px", padding: "14px", marginBottom: "24px", border: "1px solid #B2DED9" }}>
            <div style={{ fontSize: "11px", color: "#5A7572", marginBottom: "4px" }}>BOOKING REFERENCE</div>
            <div style={{ fontSize: "20px", fontWeight: 700, color: "#0D7A6E", letterSpacing: "1px" }}>{ref}</div>
          </div>

          <div style={{ backgroundColor: "#EEF9F7", borderRadius: "10px", padding: "14px 16px", marginBottom: "28px", textAlign: "left" }}>
            <p style={{ fontSize: "13px", color: "#0A2E2B", fontWeight: 600, marginBottom: "8px" }}>What happens next?</p>
            {[
              "Our team matches you with the best available nurse.",
              "You receive an SMS confirmation with nurse details.",
              "Nurse arrives at your scheduled time.",
              "Pay cash on arrival.",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "5px" }}>
                <span style={{ color: "#0D7A6E", fontWeight: 700, fontSize: "12px" }}>{i + 1}.</span>
                <span style={{ fontSize: "12px", color: "#3D5E5A" }}>{t}</span>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: "#25D366", color: "#fff", fontWeight: 600, fontSize: "14px", padding: "13px", borderRadius: "8px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat with Support on WhatsApp
            </a>
            <Link href="/dashboard"
              style={{ display: "block", textAlign: "center", border: "1px solid #0D7A6E", color: "#0D7A6E", fontWeight: 600, fontSize: "13px", padding: "12px", borderRadius: "8px" }}>
              View My Dashboard
            </Link>
            <Link href="/"
              style={{ display: "block", textAlign: "center", fontSize: "13px", color: "#5A7572" }}>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
