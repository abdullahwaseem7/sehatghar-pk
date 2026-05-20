"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#fff", borderBottom: "1px solid #B2DED9" }} className="sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div style={{ backgroundColor: "#0D7A6E", borderRadius: "8px" }} className="w-8 h-8 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <span style={{ color: "#0A2E2B", fontWeight: 700, fontSize: "17px" }}>
            SehatGhar<span style={{ color: "#0D7A6E" }}>.pk</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { href: "/services",  label: "Services" },
            { href: "/nurses",    label: "Find a Nurse" },
            { href: "/about",     label: "About" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              style={{ color: "#3D5E5A", fontSize: "13px", fontWeight: 500 }}
              className="hover:text-[#0D7A6E] transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login"
            style={{ color: "#0D7A6E", fontSize: "13px", fontWeight: 500, border: "1px solid #0D7A6E", borderRadius: "8px", padding: "8px 18px" }}
            className="hover:bg-[#EEF9F7] transition-colors">
            Sign In
          </Link>
          <Link href="/book"
            style={{ backgroundColor: "#0D7A6E", color: "#fff", fontSize: "13px", fontWeight: 500, borderRadius: "8px", padding: "9px 20px" }}
            className="hover:bg-[#0A5E55] transition-colors">
            Book Now
          </Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A2E2B" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A2E2B" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: "#fff", borderTop: "1px solid #EEF9F7" }} className="md:hidden px-4 pb-4 flex flex-col gap-3">
          {[
            { href: "/services",  label: "Services" },
            { href: "/nurses",    label: "Find a Nurse" },
            { href: "/about",     label: "About" },
            { href: "/faq",       label: "FAQ" },
            { href: "/contact",   label: "Contact" },
          ].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ color: "#3D5E5A", fontSize: "14px", fontWeight: 500, padding: "10px 0", borderBottom: "1px solid #EEF9F7" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/book" onClick={() => setOpen(false)}
            style={{ backgroundColor: "#0D7A6E", color: "#fff", textAlign: "center", borderRadius: "8px", padding: "11px", fontSize: "14px", fontWeight: 600, marginTop: "4px" }}>
            Book a Nurse
          </Link>
        </div>
      )}
    </nav>
  );
}
