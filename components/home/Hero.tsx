import Link from "next/link";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "@/lib/constants";

const NURSE_CARDS = [
  { name: "Rukhsar", cat: "Qualified Nurse", city: "Lahore", gender: "female" },
  { name: "Rashid",  cat: "Qualified Nurse", city: "Lahore", gender: "male"   },
  { name: "Bushra",  cat: "Attendant",        city: "Lahore", gender: "female" },
];

function MiniNurseCard({ name, cat, city, gender }: typeof NURSE_CARDS[0]) {
  const initials = name.split(" ").map(n => n[0]).join("");
  const isFemale = gender === "female";
  return (
    <div style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "14px 16px", display: "flex", alignItems: "center", gap: "12px" }}>
      <div style={{
        width: "42px", height: "42px", borderRadius: "50%", flexShrink: 0,
        backgroundColor: isFemale ? "#F4E8F4" : "#EEF9F7",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontWeight: 700, fontSize: "14px",
        color: isFemale ? "#7A3D8A" : "#0D7A6E",
      }}>{initials}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: "13px", color: "#0A2E2B" }}>{name}</div>
        <div style={{ fontSize: "11px", color: "#5A7572" }}>{cat} · {city}</div>
      </div>
      <span style={{ fontSize: "10px", fontWeight: 500, padding: "2px 8px", borderRadius: "20px", backgroundColor: "#D1FAE5", color: "#065F46", flexShrink: 0 }}>
        Available
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section style={{ backgroundColor: "#F5FAF9" }} className="pt-10 pb-14 md:pt-16 md:pb-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#EEF9F7", border: "1px solid #B2DED9", borderRadius: "20px", padding: "5px 12px", marginBottom: "18px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#1A9E6E", flexShrink: 0 }} />
              <span style={{ fontSize: "12px", fontWeight: 500, color: "#0D7A6E" }}>Verified &amp; Certified Nurses in Lahore</span>
            </div>

            <h1 style={{ fontSize: "clamp(26px, 5vw, 40px)", fontWeight: 700, color: "#0A2E2B", lineHeight: 1.2, marginBottom: "16px" }}>
              Professional Nursing Care,{" "}
              <span style={{ color: "#0D7A6E" }}>Right at Your Doorstep</span>
            </h1>
            <p style={{ fontSize: "15px", color: "#3D5E5A", lineHeight: 1.7, marginBottom: "28px", maxWidth: "480px" }}>
              Connect with PNC-registered nurses and trained attendants for post-op care, elderly care, paediatric care, and more — verified, trusted, available 24/7.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/book"
                style={{ backgroundColor: "#0D7A6E", color: "#fff", fontWeight: 600, fontSize: "14px", padding: "12px 28px", borderRadius: "8px", display: "inline-block" }}
                className="hover:bg-[#0A5E55] transition-colors">
                Book a Nurse
              </Link>
              <a href={`tel:${CONTACT_PHONE_TEL}`}
                style={{ border: "1px solid #0D7A6E", color: "#0D7A6E", fontWeight: 600, fontSize: "14px", padding: "12px 24px", borderRadius: "8px", display: "inline-flex", alignItems: "center", gap: "7px" }}
                className="hover:bg-[#EEF9F7] transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.22 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/>
                </svg>
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Right — nurse cards */}
          <div className="flex flex-col gap-3">
            {NURSE_CARDS.map((c) => <MiniNurseCard key={c.name} {...c} />)}
            <div style={{ textAlign: "center", marginTop: "4px" }}>
              <Link href="/nurses" style={{ fontSize: "13px", color: "#0D7A6E", fontWeight: 500 }}>
                View all caregivers →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
