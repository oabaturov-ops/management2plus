"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

    const links = [
    { href: "/#home", label: "\u0413\u043b\u0430\u0432\u043d\u0430\u044f" },
    { href: "/#about", label: "\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435" },
    { href: "/#concepts", label: "\u041a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438" },
    { href: "/blog", label: "\u0411\u043b\u043e\u0433" },
    { href: "/menedzhment-2-0", label: "\u041c\u0435\u043d\u0435\u0434\u0436\u043c\u0435\u043d\u0442 2.0" },
    { href: "/pravo-2-0", label: "\u041f\u0440\u0430\u0432\u043e 2.0" },
    { href: "/meditsina-2-0", label: "\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0430 2.0" },
    { href: "/stroitelnyj-kontrol-2-0", label: "\u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c 2.0" },
    { href: "/obrazovanie-2-0", label: "\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 2.0" },
    { href: "/#contact", label: "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b" },
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