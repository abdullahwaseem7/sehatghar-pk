import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Sehat Connect | Home Nurse Lahore 0305-8489988",
  description:
    "Contact Sehat Connect to book a home nurse or patient attendant in Lahore. Call or WhatsApp 0305-8489988. Available 24/7 for enquiries and bookings.",
  alternates: { canonical: "https://mysehatconnect.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5FAF9", minHeight: "80vh" }}>
        <div style={{ backgroundColor: "#0D7A6E", padding: "48px 0", textAlign: "center" }}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
            <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>Contact Us</h1>
            <p style={{ fontSize: "14px", color: "#B2DED9" }}>We&apos;re here 24/7 — reach us any way that works for you</p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { icon: "📞", label: "Phone",    val: CONTACT_PHONE_DISPLAY,  href: `tel:${CONTACT_PHONE_TEL}` },
                { icon: "💬", label: "WhatsApp", val: CONTACT_PHONE_DISPLAY,  href: `https://wa.me/${WHATSAPP_NUMBER}` },
                { icon: "✉",  label: "Email",    val: "care@sehat-connect.pk",    href: "mailto:care@sehat-connect.pk" },
                { icon: "🕐", label: "Hours",    val: "24/7 — every day",     href: null },
              ].map(c => (
                <div key={c.label} style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "18px 20px", display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ fontSize: "22px" }}>{c.icon}</span>
                  <div>
                    <div style={{ fontSize: "11px", color: "#5A7572", fontWeight: 600 }}>{c.label.toUpperCase()}</div>
                    {c.href ? (
                      <a href={c.href} style={{ fontSize: "14px", fontWeight: 600, color: "#0D7A6E" }}>{c.val}</a>
                    ) : (
                      <span style={{ fontSize: "14px", fontWeight: 600, color: "#0A2E2B" }}>{c.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "24px" }}>
              <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#0A2E2B", marginBottom: "18px" }}>Send a Message</h2>
              <form style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { label: "Your Name", type: "text", placeholder: "Full name" },
                  { label: "Phone Number", type: "tel", placeholder: "03XX-XXXXXXX" },
                  { label: "Email (Optional)", type: "email", placeholder: "you@example.com" },
                ].map(f => (
                  <div key={f.label}>
                    <label style={{ fontSize: "12px", fontWeight: 600, color: "#5A7572", display: "block", marginBottom: "6px" }}>{f.label.toUpperCase()}</label>
                    <input type={f.type} placeholder={f.placeholder}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #B2DED9", fontSize: "13px", color: "#0A2E2B", backgroundColor: "#fff", outline: "none" }} />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 600, color: "#5A7572", display: "block", marginBottom: "6px" }}>MESSAGE</label>
                  <textarea placeholder="How can we help you?" rows={4}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #B2DED9", fontSize: "13px", color: "#0A2E2B", backgroundColor: "#fff", outline: "none", resize: "vertical" }} />
                </div>
                <button type="submit"
                  style={{ backgroundColor: "#0D7A6E", color: "#fff", fontWeight: 700, fontSize: "14px", padding: "12px", borderRadius: "8px", border: "none", cursor: "pointer" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
