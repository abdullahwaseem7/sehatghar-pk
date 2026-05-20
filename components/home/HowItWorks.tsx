const STEPS = [
  {
    num: "01",
    title: "Fill the Form",
    desc: "Tell us the type of care, date, shift, and your location. Takes under 2 minutes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D7A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Get Matched",
    desc: "We match you with a verified, available nurse or attendant near you within 30 minutes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D7A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Care Begins",
    desc: "Your nurse arrives at the scheduled time, fully verified and ready to provide care.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D7A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Rate &amp; Review",
    desc: "After the shift, share your feedback to help other families and reward great nurses.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D7A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "56px 0" }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#0A2E2B", marginBottom: "8px" }}>
            How It Works
          </h2>
          <p style={{ fontSize: "14px", color: "#5A7572" }}>From booking to care — in 4 simple steps</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step) => (
            <div key={step.num}
              style={{ backgroundColor: "#F5FAF9", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "24px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div style={{ backgroundColor: "#EEF9F7", borderRadius: "10px", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {step.icon}
                </div>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#B2DED9" }}>{step.num}</span>
              </div>
              <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#0A2E2B", marginBottom: "7px" }}
                dangerouslySetInnerHTML={{ __html: step.title }} />
              <p style={{ fontSize: "13px", color: "#5A7572", lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
