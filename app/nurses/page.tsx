"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { MOCK_CAREGIVERS } from "@/lib/mockData";
import { CITIES } from "@/lib/constants";
import type { Caregiver } from "@/types";

function NurseCard({ c }: { c: Caregiver }) {
  const initials = c.name.split(" ").map(n => n[0]).join("");
  const isFemale = c.gender === "female";
  const isNurse = c.category === "qualified_nurse";

  const availColor =
    c.availability_status === "available_now"   ? "#1A9E6E" :
    c.availability_status === "available_today" ? "#E8A020" : "#C0392B";

  return (
    <div style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "18px 16px", display: "flex", flexDirection: "column", gap: "12px" }}>
      {/* Top row */}
      <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
        <div style={{
          width: "52px", height: "52px", borderRadius: "50%", flexShrink: 0,
          backgroundColor: isFemale ? "#F4E8F4" : "#EEF9F7",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 700, fontSize: "16px",
          color: isFemale ? "#7A3D8A" : "#0D7A6E",
        }}>{initials}</div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
            <span style={{ fontWeight: 700, fontSize: "14px", color: "#0A2E2B" }}>{c.name}</span>
            {c.is_verified && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#0D7A6E"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9,12 11,14 15,10" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            )}
          </div>
          <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginTop: "4px" }}>
            <span style={{ fontSize: "10px", fontWeight: 600, padding: "2px 9px", borderRadius: "20px", backgroundColor: isNurse ? "#EEF9F7" : "#FEF3C7", color: isNurse ? "#0D7A6E" : "#92400E" }}>
              {isNurse ? "Qualified Nurse" : "Attendant"}
            </span>
            <span style={{ fontSize: "10px", fontWeight: 600, padding: "2px 9px", borderRadius: "20px", backgroundColor: isFemale ? "#F4E8F4" : "#EEF9F7", color: isFemale ? "#7A3D8A" : "#0D7A6E" }}>
              {isFemale ? "Female" : "Male"}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: availColor, display: "inline-block" }} />
          <span style={{ fontSize: "11px", color: availColor, fontWeight: 600 }}>
            {c.availability_status === "available_now" ? "Now" : c.availability_status === "available_today" ? "Today" : "Busy"}
          </span>
        </div>
      </div>

      {/* Meta */}
      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "12px", color: "#5A7572" }}>📍 {c.city}</span>
        <span style={{ fontSize: "12px", color: "#5A7572" }}>⏳ {c.experience_years} yrs exp</span>
        <span style={{ fontSize: "12px", color: "#E8A020", fontWeight: 600 }}>★ {c.rating_avg} ({c.review_count})</span>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
        {c.specialisations.slice(0, 3).map(s => (
          <span key={s} style={{ fontSize: "11px", padding: "3px 10px", borderRadius: "20px", backgroundColor: "#F5FAF9", border: "0.5px solid #B2DED9", color: "#3D5E5A" }}>{s}</span>
        ))}
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
        <Link href={`/nurses/${c.id}`}
          style={{ flex: 1, textAlign: "center", padding: "9px", borderRadius: "8px", fontSize: "12px", fontWeight: 600, border: "1px solid #0D7A6E", color: "#0D7A6E", backgroundColor: "transparent" }}
          className="hover:bg-[#EEF9F7] transition-colors">
          View Profile
        </Link>
        <Link href={`/book?caregiver=${c.id}`}
          style={{ flex: 1, textAlign: "center", padding: "9px", borderRadius: "8px", fontSize: "12px", fontWeight: 600, backgroundColor: "#0D7A6E", color: "#fff" }}
          className="hover:bg-[#0A5E55] transition-colors">
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default function NursesPage() {
  const [gender, setGender]     = useState<"" | "male" | "female">("");
  const [category, setCategory] = useState<"" | "qualified_nurse" | "attendant">("");
  const [city, setCity]         = useState("");
  const [avail, setAvail]       = useState(false);
  const [highRating, setHighRating] = useState(false);

  const filtered = MOCK_CAREGIVERS.filter(c => {
    if (gender && c.gender !== gender) return false;
    if (category && c.category !== category) return false;
    if (city && c.city !== city) return false;
    if (avail && !c.is_available) return false;
    if (highRating && c.rating_avg < 4.7) return false;
    return true;
  });

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5FAF9", minHeight: "80vh" }}>
        {/* Header */}
        <div style={{ backgroundColor: "#fff", borderBottom: "1px solid #B2DED9", padding: "28px 0" }}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
            <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#0A2E2B", marginBottom: "4px" }}>Find a Nurse or Attendant</h1>
            <p style={{ fontSize: "13px", color: "#5A7572" }}>{MOCK_CAREGIVERS.length} verified caregivers available across Pakistan</p>

            {/* Gender toggle — always visible in header */}
            <div style={{ display: "flex", gap: "8px", marginTop: "16px", backgroundColor: "#F5FAF9", border: "1px solid #B2DED9", borderRadius: "10px", padding: "4px", width: "fit-content" }}>
              {(["", "female", "male"] as const).map((g) => (
                <button key={g} onClick={() => setGender(g)}
                  style={{ padding: "7px 18px", borderRadius: "7px", fontSize: "13px", fontWeight: 600, border: "none", cursor: "pointer",
                    backgroundColor: gender === g ? (g === "female" ? "#F4E8F4" : g === "male" ? "#EEF9F7" : "#0D7A6E") : "transparent",
                    color: gender === g ? (g === "female" ? "#7A3D8A" : g === "male" ? "#0D7A6E" : "#fff") : "#5A7572",
                  }}>
                  {g === "" ? "All" : g === "female" ? "👩 Female" : "👨 Male"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Sidebar filters */}
            <aside style={{ width: "100%", maxWidth: "240px", flexShrink: 0 }}>
              <div style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "20px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#0A2E2B", marginBottom: "16px" }}>Filters</h3>

                {/* Category */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ fontSize: "12px", fontWeight: 600, color: "#5A7572", display: "block", marginBottom: "8px" }}>CATEGORY</label>
                  {(["", "qualified_nurse", "attendant"] as const).map(cat => (
                    <label key={cat} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px", cursor: "pointer" }}>
                      <input type="radio" name="cat" checked={category === cat} onChange={() => setCategory(cat)}
                        style={{ accentColor: "#0D7A6E" }} />
                      <span style={{ fontSize: "13px", color: "#3D5E5A" }}>
                        {cat === "" ? "All" : cat === "qualified_nurse" ? "Qualified Nurse" : "Attendant"}
                      </span>
                    </label>
                  ))}
                </div>

                {/* City */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ fontSize: "12px", fontWeight: 600, color: "#5A7572", display: "block", marginBottom: "8px" }}>CITY</label>
                  <select value={city} onChange={e => setCity(e.target.value)}
                    style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1px solid #B2DED9", fontSize: "13px", color: "#3D5E5A", backgroundColor: "#fff" }}>
                    <option value="">All Cities</option>
                    {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Availability */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    <input type="checkbox" checked={avail} onChange={e => setAvail(e.target.checked)} style={{ accentColor: "#0D7A6E" }} />
                    <span style={{ fontSize: "13px", color: "#3D5E5A" }}>Available Now / Today</span>
                  </label>
                </div>

                {/* Rating */}
                <div>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    <input type="checkbox" checked={highRating} onChange={e => setHighRating(e.target.checked)} style={{ accentColor: "#0D7A6E" }} />
                    <span style={{ fontSize: "13px", color: "#3D5E5A" }}>4.7★ and above</span>
                  </label>
                </div>

                <button onClick={() => { setGender(""); setCategory(""); setCity(""); setAvail(false); setHighRating(false); }}
                  style={{ marginTop: "20px", width: "100%", padding: "9px", borderRadius: "8px", border: "1px solid #B2DED9", fontSize: "12px", color: "#5A7572", backgroundColor: "transparent", cursor: "pointer" }}>
                  Clear Filters
                </button>
              </div>
            </aside>

            {/* Grid */}
            <div style={{ flex: 1 }}>
              {filtered.length === 0 ? (
                <div style={{ textAlign: "center", padding: "60px 0", color: "#5A7572" }}>
                  <p style={{ fontSize: "16px", fontWeight: 600 }}>No caregivers match your filters.</p>
                  <p style={{ fontSize: "13px", marginTop: "6px" }}>Try adjusting or clearing your filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filtered.map(c => <NurseCard key={c.id} c={c} />)}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
