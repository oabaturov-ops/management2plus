import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import Link from "next/link";
import { notFound } from "next/navigation";

function renderParagraph(text: string, key: number) {
  const t = text.trim();
  if (!t) return null;
  const openCount = (t.match(/\u00AB/g) || []).length;
  const closeCount = (t.match(/\u00BB/g) || []).length;
  if (t.startsWith("\u00AB") && openCount === 1 && closeCount === 1) {
    const inner = t.replace(/^\u00AB/, "").replace(/\u00BB[\s.,:;!?…\u2014\u2014]*$/, "");
    return (
      <blockquote key={key} style={{ fontStyle: "italic", borderLeft: "4px solid #3b82f6", paddingLeft: "20px", margin: "28px 0", color: "#94a3b8", fontSize: "18px", lineHeight: "1.7" }}>
        {inner}
      </blockquote>
    );
  }
  const parts = t.split(/(\u00AB[^\u00BB]+\u00BB)/g);
  return (
    <p key={key} style={{ fontSize: "18px", lineHeight: "1.8", color: "#d4d4d4", margin: "0 0 24px 0" }}>
      {parts.map((part, i) =>
        part.startsWith("\u00AB") && part.endsWith("\u00BB") ? (
          <span key={i} style={{ fontStyle: "italic", color: "#c9a84c" }}>{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

export async function generateStaticParams() {
  return getAllArticles().map(a => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "48px 24px 100px" }}>
        <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#c9a84c", fontSize: "16px", textDecoration: "none", marginBottom: "40px" }}>
          {"\u2190"} {"\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u0442\u0430\u0442\u044C\u044F\u043C"}
        </Link>
        <h1 style={{ fontSize: "36px", fontWeight: 700, color: "#fff", lineHeight: 1.2, margin: "0 0 20px 0" }}>{article.title}</h1>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", color: "#737373", fontSize: "15px", marginBottom: "40px", paddingBottom: "32px", borderBottom: "1px solid #262626" }}>
          <span>{article.date}</span>
          <span style={{ color: "#404040" }}>{"\u00B7"}</span>
          <span style={{ color: "#c9a84c", backgroundColor: "rgba(201,168,76,0.1)", padding: "3px 14px", borderRadius: "999px", fontSize: "13px" }}>{article.category}</span>
          <span style={{ color: "#404040" }}>{"\u00B7"}</span>
          <span>{article.readTime}</span>
          {article.tags && article.tags.map(t => (
            <span key={t} style={{ color: "#404040", fontSize: "13px" }}>#{t}</span>
          ))}
        </div>
        <article>{article.content.map((paragraph, i) => renderParagraph(paragraph, i))}</article>
      </div>
    </div>
  );
}