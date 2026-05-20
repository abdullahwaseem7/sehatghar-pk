"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5FAF9", minHeight: "80vh" }}>
        <div style={{ backgroundColor: "#0D7A6E", padding: "48px 0", textAlign: "center" }}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
            <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>Frequently Asked Questions</h1>
            <p style={{ fontSize: "14px", color: "#B2DED9" }}>Everything you need to know before booking</p>
          </div>
        </div>

        <div className="max-w-[760px] mx-auto px-4 md:px-6 py-12">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", marginBottom: "10px", overflow: "hidden" }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#0A2E2B", paddingRight: "12px" }}>{item.q}</span>
                <span style={{ flexShrink: 0, color: "#0D7A6E", fontSize: "20px", fontWeight: 300, lineHeight: 1 }}>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div style={{ padding: "0 20px 18px", fontSize: "14px", color: "#3D5E5A", lineHeight: 1.7, borderTop: "1px solid #EEF9F7" }}>
                  <div style={{ paddingTop: "14px" }}>{item.a}</div>
                </div>
              )}
            </div>
          ))}

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <p style={{ fontSize: "14px", color: "#5A7572", marginBottom: "16px" }}>Still have questions?</p>
            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: "#25D366", color: "#fff", fontWeight: 600, fontSize: "14px", padding: "12px 28px", borderRadius: "8px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
