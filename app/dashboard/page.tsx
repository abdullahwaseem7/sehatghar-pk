import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const MOCK_BOOKINGS = [
  { ref: "CAH-2025-0042", nurse: "Sana Malik",   service: "Post-op Care",   date: "2025-05-12", shift: "Day",   status: "confirmed",  city: "Lahore",    price: 4000 },
  { ref: "CAH-2025-0038", nurse: "Ahmed Raza",   service: "Diabetic Care",  date: "2025-05-08", shift: "Night", status: "completed",  city: "Karachi",   price: 4000 },
  { ref: "CAH-2025-0031", nurse: "Usman Khan",   service: "Elderly Care",   date: "2025-04-28", shift: "Day",   status: "completed",  city: "Lahore",    price: 3000 },
];

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  confirmed:   { bg: "#EEF9F7", color: "#0D7A6E"  },
  pending:     { bg: "#FEF3C7", color: "#92400E"  },
  completed:   { bg: "#F3F4F6", color: "#374151"  },
  cancelled:   { bg: "#FEE2E2", color: "#991B1B"  },
  in_progress: { bg: "#DBEAFE", color: "#1E40AF"  },
};

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F5FAF9", minHeight: "80vh" }}>
        <div style={{ backgroundColor: "#0D7A6E", padding: "40px 0" }}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center flex-wrap gap-4">
            <div>
              <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#fff" }}>My Dashboard</h1>
              <p style={{ fontSize: "13px", color: "#B2DED9" }}>Manage your bookings and upcoming care</p>
            </div>
            <Link href="/book"
              style={{ backgroundColor: "#fff", color: "#0D7A6E", fontWeight: 700, fontSize: "13px", padding: "10px 22px", borderRadius: "8px" }}>
              + New Booking
            </Link>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-8">

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Bookings",   val: "3" },
              { label: "Upcoming",         val: "1" },
              { label: "Completed",        val: "2" },
              { label: "Fav Caregiver",    val: "Sana M." },
            ].map(s => (
              <div key={s.label} style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "18px 16px" }}>
                <div style={{ fontSize: "11px", color: "#5A7572", fontWeight: 600, marginBottom: "6px" }}>{s.label.toUpperCase()}</div>
                <div style={{ fontSize: "20px", fontWeight: 700, color: "#0A2E2B" }}>{s.val}</div>
              </div>
            ))}
          </div>

          {/* Bookings table */}
          <div style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", overflow: "hidden", marginBottom: "16px" }}>
            <div style={{ padding: "18px 20px", borderBottom: "1px solid #EEF9F7" }}>
              <h2 style={{ fontSize: "15px", fontWeight: 700, color: "#0A2E2B" }}>My Bookings</h2>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                  <tr style={{ backgroundColor: "#F5FAF9" }}>
                    {["Ref", "Nurse", "Service", "Date", "Shift", "City", "Price", "Status", ""].map(h => (
                      <th key={h} style={{ textAlign: "left", padding: "10px 14px", fontSize: "11px", color: "#5A7572", fontWeight: 600, whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MOCK_BOOKINGS.map((b, i) => {
                    const s = STATUS_STYLE[b.status] ?? STATUS_STYLE.pending;
                    return (
                      <tr key={b.ref} style={{ borderTop: "1px solid #EEF9F7", backgroundColor: i % 2 === 0 ? "#fff" : "#FAFFFE" }}>
                        <td style={{ padding: "12px 14px", fontWeight: 600, color: "#0D7A6E", whiteSpace: "nowrap" }}>{b.ref}</td>
                        <td style={{ padding: "12px 14px", color: "#0A2E2B" }}>{b.nurse}</td>
                        <td style={{ padding: "12px 14px", color: "#3D5E5A" }}>{b.service}</td>
                        <td style={{ padding: "12px 14px", color: "#3D5E5A", whiteSpace: "nowrap" }}>{b.date}</td>
                        <td style={{ padding: "12px 14px", color: "#3D5E5A" }}>{b.shift}</td>
                        <td style={{ padding: "12px 14px", color: "#3D5E5A" }}>{b.city}</td>
                        <td style={{ padding: "12px 14px", fontWeight: 600, color: "#0A2E2B", whiteSpace: "nowrap" }}>Rs. {b.price.toLocaleString()}</td>
                        <td style={{ padding: "12px 14px" }}>
                          <span style={{ backgroundColor: s.bg, color: s.color, fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "20px", textTransform: "capitalize" }}>
                            {b.status}
                          </span>
                        </td>
                        <td style={{ padding: "12px 14px" }}>
                          {b.status === "completed" && (
                            <button style={{ fontSize: "11px", color: "#0D7A6E", fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}>Rate</button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/book",    label: "Book a New Nurse",  icon: "➕" },
              { href: "/nurses",  label: "Browse Caregivers", icon: "🔍" },
              { href: "/contact", label: "Contact Support",   icon: "💬" },
            ].map(l => (
              <Link key={l.href} href={l.href}
                style={{ backgroundColor: "#fff", border: "0.5px solid #B2DED9", borderRadius: "12px", padding: "18px 16px", display: "flex", alignItems: "center", gap: "10px" }}
                className="hover:border-[#0D7A6E] transition-colors">
                <span style={{ fontSize: "20px" }}>{l.icon}</span>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#0A2E2B" }}>{l.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
