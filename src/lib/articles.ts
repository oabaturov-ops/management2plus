import fs from "fs";
import path from "path";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  tags?: string[];
  image?: string;
}

const articlesDir = path.join(process.cwd(), "content", "articles");

export function getAllArticles(): Article[] {
  if (!fs.existsSync(articlesDir)) return [];
  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith(".json"));
  const articles: Article[] = [];
  for (const file of files) {
    const raw = fs.readFileSync(path.join(articlesDir, file), "utf8");
    articles.push(JSON.parse(raw));
  }
  return articles.sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find(a => a.slug === slug);
}

export function getAllCategories(): string[] {
  const set = new Set<string>();
  for (const a of getAllArticles()) {
    if (a.category) set.add(a.category);
  }
  return Array.from(set).sort();
}

export function getAllTags(): string[] {
  const set = new Set<string>();
  for (const a of getAllArticles()) {
    if (a.tags) for (const t of a.tags) if (t) set.add(t);
  }
  return Array.from(set).sort();
}