import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Management2plus — Философия менеджмента нового поколения",
  description: "Менеджмент 2.0, 3.0 и новации в сфере производственных отношений. PMBoK, P2M и собственные концепции.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#0a0a0a",
          color: "#e5e5e5",
          fontFamily: "'Segoe UI', system-ui, sans-serif",
        }}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}