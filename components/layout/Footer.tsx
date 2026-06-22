// v2
import Link from "next/link";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, WHATSAPP_NUMBER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A2E2B", color: "#B2DED9" }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="36" height="36" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="68" stroke="#B2DED9" strokeWidth="13" fill="none"/>
                <circle cx="32" cy="100" r="7" fill="#B2DED9"/>
                <circle cx="168" cy="100" r="7" fill="#B2DED9"/>
                <path d="M32 100 L54 100 L63 86 L70 55 L82 125 L89 100 L98 100 Q106 74 115 100 L168 100"
                  stroke="#0D7A6E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "17px" }}>
                Sehat <span style={{ color: "#0D7A6E" }}>Connect</span>
              </span>
            </div>
            <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#B2DED9" }}>
              Professional nursing care, right at your doorstep. Verified nurses and attendants across Pakistan's major cities.
            </p>
            <div className="flex gap-3 mt-5">
              {/* WhatsApp */}
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                style={{ backgroundColor: "#25D366", borderRadius: "8px", padding: "8px" }} className="hover:opacity-80 transition-opacity">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, fontSize: "14px", marginBottom: "16px" }}>Our Services</h4>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/services/qualified-nurse", label: "Qualified Nurse" },
                { href: "/services/attendant",       label: "Attendant" },
                { href: "/nurses",                   label: "Browse Nurses" },
                { href: "/book",                     label: "Book a Nurse" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: "13px", color: "#B2DED9" }} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, fontSize: "14px", marginBottom: "16px" }}>Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href={`tel:${CONTACT_PHONE_TEL}`} style={{ fontSize: "13px", color: "#B2DED9", display: "flex", alignItems: "center", gap: "8px" }} className="hover:text-white transition-colors">
                📞 {CONTACT_PHONE_DISPLAY}
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "#B2DED9", display: "flex", alignItems: "center", gap: "8px" }} className="hover:text-white transition-colors">
                💬 WhatsApp Us
              </a>
            </div>
            <div style={{ marginTop: "20px" }}>
              <p style={{ fontSize: "12px", color: "#5A7572" }}>Currently serving</p>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#B2DED9", marginTop: "4px" }}>Lahore</p>
              <p style={{ fontSize: "12px", color: "#5A7572", marginTop: "2px" }}>More cities coming soon</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #1A4A46", marginTop: "40px", paddingTop: "20px" }}
          className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p style={{ fontSize: "12px", color: "#5A7572" }}>© 2025 Sehat Connect — All rights reserved.</p>
          <div className="flex gap-5">
            {[
              { href: "/about",   label: "About" },
              { href: "/faq",     label: "FAQ" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize: "12px", color: "#5A7572" }} className="hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
