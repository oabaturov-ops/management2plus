import { getAllArticles, getAllCategories, getAllTags } from "@/lib/articles";
import Link from "next/link";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; tag?: string }>;
}) {
  const params = await searchParams;
  const allArticles = getAllArticles();
  const categories = getAllCategories();
  const tags = getAllTags();
  const selCat = params.category || "";
  const selTag = params.tag || "";

  const filtered = allArticles.filter(a => {
    if (selCat && a.category !== selCat) return false;
    if (selTag && (!a.tags || !a.tags.includes(selTag))) return false;
    return true;
  });

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 100px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#fff", marginBottom: "40px" }}>
          {"\u0411\u043B\u043E\u0433"}
        </h1>
        <div style={{ display: "flex", gap: "40px" }}>
          {/* Sidebar */}
          <div style={{ width: "240px", flexShrink: 0 }}>
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#c9a84c", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                {"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <Link href="/blog" style={{
                  color: !selCat && !selTag ? "#fff" : "#737373",
                  textDecoration: "none", fontSize: "15px", padding: "6px 12px",
                  borderRadius: "6px",
                  backgroundColor: !selCat && !selTag ? "#1c1c2e" : "transparent",
                  borderLeft: !selCat && !selTag ? "3px solid #c9a84c" : "3px solid transparent",
                  display: "block",
                }}>
                  {"\u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u044C\u0438"}
                </Link>
                {categories.map(cat => (
                  <Link key={cat} href={`/blog?category=${encodeURIComponent(cat)}`} style={{
                    color: selCat === cat ? "#fff" : "#737373",
                    textDecoration: "none", fontSize: "15px", padding: "6px 12px",
                    borderRadius: "6px",
                    backgroundColor: selCat === cat ? "#1c1c2e" : "transparent",
                    borderLeft: selCat === cat ? "3px solid #c9a84c" : "3px solid transparent",
                    display: "block",
                  }}>
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
            {tags.length > 0 && (
              <div>
                <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#c9a84c", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {"\u0422\u0435\u0433\u0438"}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {tags.map(tag => (
                    <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`} style={{
                      color: selTag === tag ? "#0a0a0a" : "#737373",
                      backgroundColor: selTag === tag ? "#c9a84c" : "#1a1a1a",
                      textDecoration: "none", fontSize: "13px", padding: "4px 12px",
                      borderRadius: "999px", border: "1px solid #333",
                    }}>
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {(selCat || selTag) && (
              <div style={{ marginTop: "24px" }}>
                <Link href="/blog" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "14px" }}>
                  {"\u2715 \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440"}
                </Link>
              </div>
            )}
          </div>
          {/* Articles */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {filtered.length === 0 ? (
              <p style={{ color: "#737373", fontSize: "18px" }}>
                {"\u041D\u0435\u0442 \u0441\u0442\u0430\u0442\u0435\u0439 \u0441 \u0442\u0430\u043A\u0438\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u043E\u043C"}
              </p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {filtered.map(a => (
                  <Link key={a.slug} href={`/blog/${a.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <div style={{ padding: "28px", borderRadius: "12px", border: "1px solid #262626", backgroundColor: "#111" }}>
                      <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#fff", margin: "0 0 12px 0" }}>{a.title}</h2>
                      <p style={{ fontSize: "16px", color: "#a3a3a3", lineHeight: 1.6, margin: "0 0 16px 0" }}>{a.excerpt}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", fontSize: "14px", color: "#737373" }}>
                        <span>{a.date}</span>
                        <span style={{ color: "#c9a84c", backgroundColor: "rgba(201,168,76,0.1)", padding: "2px 10px", borderRadius: "999px", fontSize: "12px" }}>{a.category}</span>
                        <span>{a.readTime}</span>
                        {a.tags && a.tags.map(t => (
                          <span key={t} style={{ color: "#555", fontSize: "12px" }}>#{t}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}