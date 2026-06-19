import { books } from "@/data/books";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return books.map(b => ({ id: b.id }));
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const book = books.find(b => b.id === id);
  if (!book) notFound();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "48px 24px 100px" }}>
        <Link href="/library" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#c9a84c", fontSize: "16px", textDecoration: "none", marginBottom: "40px" }}>
          {"\u2190"} {"\u041D\u0430\u0437\u0430\u0434 \u043A \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0435"}
        </Link>
        <h1 style={{ fontSize: "36px", fontWeight: 700, color: "#fff", margin: "0 0 12px 0" }}>{book.title}</h1>
        <p style={{ fontSize: "18px", color: "#c9a84c", marginBottom: "24px" }}>{book.author}</p>
        <p style={{ fontSize: "17px", color: "#a3a3a3", lineHeight: 1.8, marginBottom: "40px" }}>{book.description}</p>
        {book.pdfUrl && (
          <a href={book.pdfUrl} download style={{
            display: "inline-block", padding: "14px 32px", backgroundColor: "#c9a84c", color: "#0a0a0a",
            borderRadius: "8px", fontWeight: 600, fontSize: "16px", textDecoration: "none",
          }}>
            {"\u0421\u043A\u0430\u0447\u0430\u0442\u044C PDF"}
          </a>
        )}
        {book.externalUrl && (
          <a href={book.externalUrl} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block", padding: "14px 32px", backgroundColor: "#c9a84c", color: "#0a0a0a",
            borderRadius: "8px", fontWeight: 600, fontSize: "16px", textDecoration: "none",
          }}>
            {"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 Google Drive"}
          </a>
        )}
      </div>
    </div>
  );
}