"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#home", label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" },
    { href: "/#about", label: "\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435" },
    { href: "/#concepts", label: "\u041A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u0438" },
    { href: "/blog", label: "\u0411\u043B\u043E\u0433" },
    { href: "/library", label: "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430" },
    { href: "/#contact", label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      backgroundColor: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid #1a1a1a", padding: "0 24px",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "64px",
      }}>
        <Link href="/#home" style={{ fontSize: "18px", fontWeight: 700, color: "#c9a84c", textDecoration: "none" }}>
          Management<span style={{ color: "#fff" }}>2plus</span>
        </Link>

        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              color: "#a3a3a3", textDecoration: "none", fontSize: "15px",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = "#c9a84c"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = "#a3a3a3"; }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Burger (mobile placeholder) */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: "none", background: "none", border: "none", color: "#e5e5e5", fontSize: "24px", cursor: "pointer" }}
        >
          {open ? "\u2715" : "\u2630"}
        </button>
      </div>
    </nav>
  );
}