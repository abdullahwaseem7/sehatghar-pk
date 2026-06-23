const SIGNALS = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0D7A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: "PNC Registered",
    desc: "Every nurse verified with Pakistan Nursing Council",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0D7A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    label: "CNIC Checked",
    desc: "Full identity verification before every hire",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0D7A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    label: "24/7 Available",
    desc: "Day shifts, night shifts, and emergency bookings",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0D7A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "GPS Tracked",
    desc: "Know when your nurse is on the way",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0D7A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9,12 11,14 15,10"/>
      </svg>
    ),
    label: "Background Screened",
    desc: "Background checks on all caregivers",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0D7A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    label: "Urdu Support",
    desc: "Full support in Urdu for every family",
  },
];

export default function TrustSignals() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "56px 0" }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#0A2E2B", marginBottom: "8px" }}>
            Why Choose Sehat Connect?
          </h2>
          <p style={{ fontSize: "14px", color: "#5A7572" }}>Every nurse and attendant is verified and background checked before coming to your home</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {SIGNALS.map((s) => (
            <div key={s.label}
              style={{ backgroundColor: "#F5FAF9", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "20px 18px" }}>
              <div style={{ backgroundColor: "#EEF9F7", borderRadius: "10px", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#0A2E2B", marginBottom: "5px" }}>{s.label}</h3>
              <p style={{ fontSize: "12px", color: "#5A7572", lineHeight: 1.5 }}
                dangerouslySetInnerHTML={{ __html: s.desc }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
