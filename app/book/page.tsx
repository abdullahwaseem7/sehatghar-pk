"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CONTACT_PHONE_DISPLAY } from "@/lib/constants";

const LAHORE_AREAS = [
  "Gulberg",
  "DHA Phase 1–4",
  "DHA Phase 5–6",
  "Johar Town",
  "Model Town",
  "Garden Town",
  "Bahria Town",
  "Cantt / Garrison",
  "Iqbal Town",
  "Township",
  "Wapda Town",
  "Valencia",
  "Allama Iqbal Town",
  "Faisal Town",
  "Samanabad",
  "Shadman",
  "Cavalry Ground",
  "Askari",
  "Raiwind Road",
  "Other",
];

export default function BookPage() {
  const router = useRouter();
  const [name,  setName]  = useState("");
  const [phone, setPhone] = useState("");
  const [area,  setArea]  = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #B2DED9",
    fontSize: "14px",
    color: "#0A2E2B",
    backgroundColor: "#fff",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "12px",
    fontWeight: 600,
    color: "#5A7572",
    display: "block",
    marginBottom: "7px",
    letterSpacing: "0.04em",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !area) return;
    setLoading(true);
    setError("");
    const ref = "SGH-" + Math.floor(1000 + Math.random() * 9000);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim(), area, ref }),
      });
      if (!res.ok) {
        const data = await res.json();
        setLoading(false);
        setError("Error: " + JSON.stringify(data));
        return;
      }
    } catch (e) {
      setLoading(false);
      setError("Error: " + String(e));
      return;
    }
    setLoading(false);
    router.push("/book/confirm?ref=" + ref);
  };

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5FAF9", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 16px" }}>
        <div style={{ width: "100%", maxWidth: "480px" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div style={{ width: "52px", height: "52px", borderRadius: "50%", backgroundColor: "#EEF9F7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0D7A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#0A2E2B", marginBottom: "8px" }}>
              Book a Caregiver
            </h1>
            <p style={{ fontSize: "13px", color: "#5A7572", lineHeight: 1.6 }}>
              Fill in your details and we&apos;ll call you within <strong style={{ color: "#0D7A6E" }}>30 minutes</strong> to confirm everything.
            </p>
          </div>

          {/* Form card */}
          <form onSubmit={handleSubmit}
            style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "14px", padding: "28px 24px", display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Name */}
            <div>
              <label style={labelStyle}>YOUR NAME</label>
              <input
                type="text"
                placeholder="e.g. Ali Hassan"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            {/* Phone */}
            <div>
              <label style={labelStyle}>PHONE NUMBER</label>
              <input
                type="tel"
                placeholder="e.g. 0300-1234567"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            {/* Area */}
            <div>
              <label style={labelStyle}>AREA IN LAHORE</label>
              <select
                value={area}
                onChange={e => setArea(e.target.value)}
                required
                style={{ ...inputStyle, cursor: "pointer" }}
              >
                <option value="" disabled>Select your area…</option>
                {LAHORE_AREAS.map(a => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>

            {/* Error */}
            {error && (
              <p style={{ fontSize: "13px", color: "#991B1B", backgroundColor: "#FEE2E2", borderRadius: "8px", padding: "10px 14px" }}>{error}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{ width: "100%", padding: "13px", borderRadius: "8px", border: "none", backgroundColor: loading ? "#5A9E96" : "#0D7A6E", color: "#fff", fontWeight: 700, fontSize: "15px", cursor: loading ? "not-allowed" : "pointer", marginTop: "4px" }}
              className="hover:bg-[#0A5E55] transition-colors"
            >
              {loading ? "Sending…" : "Request a Callback"}
            </button>

            {/* Reassurance */}
            <p style={{ textAlign: "center", fontSize: "12px", color: "#5A7572", marginTop: "-8px" }}>
              No payment needed now. We&apos;ll sort everything on the call.
            </p>
          </form>

          {/* Alternative CTA */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <p style={{ fontSize: "13px", color: "#5A7572", marginBottom: "10px" }}>Prefer to call us directly?</p>
            <a href={`tel:+923058489988`}
              style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontWeight: 700, fontSize: "15px", color: "#0D7A6E" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.22 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/>
              </svg>
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>

        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
