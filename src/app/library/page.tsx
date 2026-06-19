import { books } from "@/data/books";
import Link from "next/link";

export default function LibraryPage() {
  if (books.length === 0) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "#737373", fontSize: "18px" }}>
          {"\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043A\u043D\u0438\u0433 \u0432 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0435"}
        </p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 24px 100px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#fff", marginBottom: "40px" }}>
          {"\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430"}
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
          {books.map(book => (
            <Link key={book.id} href={`/library/${book.id}`} style={{ textDecoration: "none" }}>
              <div style={{ padding: "24px", borderRadius: "12px", border: "1px solid #262626", backgroundColor: "#111", height: "100%" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>{book.title}</h2>
                <p style={{ fontSize: "14px", color: "#c9a84c", marginBottom: "12px" }}>{book.author}</p>
                <p style={{ fontSize: "15px", color: "#a3a3a3", lineHeight: 1.6 }}>{book.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}