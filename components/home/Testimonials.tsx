import { MOCK_TESTIMONIALS } from "@/lib/mockData";

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24"
          fill={i < n ? "#E8A020" : "#D1D5DB"} stroke="none">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: "#F5FAF9", padding: "56px 0" }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#0A2E2B", marginBottom: "8px" }}>
            What Families Say
          </h2>
          <p style={{ fontSize: "14px", color: "#5A7572" }}>Trusted by hundreds of families across Pakistan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MOCK_TESTIMONIALS.map((t) => {
            const initials = t.name.split(" ").map(n => n[0]).join("");
            return (
              <div key={t.name}
                style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "24px 20px" }}>
                <Stars n={t.rating} />
                <p style={{ fontSize: "14px", color: "#3D5E5A", lineHeight: 1.7, margin: "14px 0 20px", fontStyle: "italic" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", backgroundColor: "#EEF9F7", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "13px", color: "#0D7A6E", flexShrink: 0 }}>
                    {initials}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#0A2E2B" }}>{t.name}</div>
                    <div style={{ fontSize: "11px", color: "#5A7572" }}>{t.city}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
