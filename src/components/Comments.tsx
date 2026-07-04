"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Comment {
  id: number;
  article_slug: string;
  author: string;
  text: string;
  created_at: string;
}

export default function Comments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    supabase
      .from("comments")
      .select("*")
      .eq("article_slug", slug)
      .order("created_at", { ascending: false })
      .then(({ data }: any) => {
        if (data) setComments(data);
      });
  }, [slug]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;
    setSending(true);
    await supabase.from("comments").insert([
      { article_slug: slug, author: author.trim(), text: text.trim() },
    ]);
    setComments(prev => [
      { id: Date.now(), article_slug: slug, author: author.trim(), text: text.trim(), created_at: new Date().toISOString() },
      ...prev,
    ]);
    setText("");
    setSending(false);
  }

  return (
    <div style={{ marginTop: "60px", borderTop: "1px solid #262626", paddingTop: "40px" }}>
      <h3 style={{ fontSize: "24px", fontWeight: 600, color: "#fff", marginBottom: "28px" }}>
        {"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"}
      </h3>

      {comments.length === 0 && (
        <p style={{ color: "#555", fontSize: "15px", marginBottom: "28px" }}>
          {"\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432. \u0411\u0443\u0434\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C!"}
        </p>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
        {comments.map(c => (
          <div key={c.id} style={{ padding: "20px", backgroundColor: "#111", borderRadius: "10px", border: "1px solid #1a1a1a" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ color: "#c9a84c", fontWeight: 600, fontSize: "15px" }}>{c.author}</span>
              <span style={{ color: "#555", fontSize: "13px" }}>{new Date(c.created_at).toLocaleDateString("ru-RU")}</span>
            </div>
            <p style={{ color: "#d4d4d4", fontSize: "15px", lineHeight: 1.6, margin: 0 }}>{c.text}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <input
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder={"\u0412\u0430\u0448\u0435 \u0438\u043C\u044F"}
          style={{ padding: "12px 16px", backgroundColor: "#111", border: "1px solid #333", borderRadius: "8px", color: "#e5e5e5", fontSize: "15px", outline: "none" }}
        />
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder={"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"}
          rows={4}
          style={{ padding: "12px 16px", backgroundColor: "#111", border: "1px solid #333", borderRadius: "8px", color: "#e5e5e5", fontSize: "15px", outline: "none", resize: "vertical" }}
        />
        <button type="submit" disabled={sending} style={{
          padding: "12px 24px", backgroundColor: "#c9a84c", color: "#0a0a0a",
          borderRadius: "8px", fontWeight: 600, fontSize: "15px", border: "none", cursor: sending ? "wait" : "pointer",
          opacity: sending ? 0.6 : 1,
        }}>
          {sending ? "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430..." : "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"}
        </button>
      </form>
    </div>
  );
}
