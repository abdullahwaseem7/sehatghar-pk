"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LoginPage() {
  const [step, setStep]   = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp]     = useState("");

  const inputStyle = {
    width: "100%", padding: "12px 14px", borderRadius: "8px",
    border: "1px solid #B2DED9", fontSize: "14px", color: "#0A2E2B",
    backgroundColor: "#fff", outline: "none",
  };

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5FAF9", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 16px" }}>
        <div style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "16px", padding: "36px 28px", maxWidth: "400px", width: "100%" }}>

          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <div style={{ backgroundColor: "#0D7A6E", borderRadius: "12px", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <h1 style={{ fontSize: "20px", fontWeight: 700, color: "#0A2E2B" }}>Sign in to SehatGhar</h1>
            <p style={{ fontSize: "13px", color: "#5A7572", marginTop: "4px" }}>
              {step === "phone" ? "Enter your phone number to receive an OTP" : `OTP sent to ${phone}`}
            </p>
          </div>

          {step === "phone" ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#5A7572", display: "block", marginBottom: "6px" }}>PHONE NUMBER</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "13px", color: "#5A7572", fontWeight: 600 }}>🇵🇰 +92</span>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="3XX XXXXXXX"
                    style={{ ...inputStyle, paddingLeft: "70px" }} />
                </div>
              </div>
              <button onClick={() => phone.length >= 10 && setStep("otp")}
                style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "none", backgroundColor: "#0D7A6E", color: "#fff", fontWeight: 700, fontSize: "14px", cursor: "pointer" }}>
                Send OTP
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#5A7572", display: "block", marginBottom: "6px" }}>ENTER OTP</label>
                <input type="text" value={otp} onChange={e => setOtp(e.target.value)} placeholder="4-digit code"
                  maxLength={4} style={{ ...inputStyle, textAlign: "center", fontSize: "22px", letterSpacing: "8px" }} />
              </div>
              <button
                style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "none", backgroundColor: "#0D7A6E", color: "#fff", fontWeight: 700, fontSize: "14px", cursor: "pointer" }}>
                Verify &amp; Sign In
              </button>
              <button onClick={() => setStep("phone")}
                style={{ background: "none", border: "none", fontSize: "12px", color: "#5A7572", cursor: "pointer", textAlign: "center" }}>
                ← Change phone number
              </button>
            </div>
          )}

          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "13px", color: "#5A7572" }}>
            New user?{" "}
            <Link href="/register" style={{ color: "#0D7A6E", fontWeight: 600 }}>Create account</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
