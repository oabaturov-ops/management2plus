const fs = require("fs");
const path = require("path");

const inputFile = path.join(__dirname, "input.txt");
const destDir = path.join(__dirname, "content", "articles");

let raw = fs.readFileSync(inputFile, "utf8");
if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);

const lines = raw.split(/\r?\n/);

const title = (lines[0] || "").trim();
const excerpt = (lines[1] || "").trim();
const category = (lines[2] || "").trim() || "\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438";
const tagsRaw = (lines[3] || "").trim();
const tags = tagsRaw ? tagsRaw.split(",").map(t => t.trim()).filter(t => t) : [];

if (!title) {
  console.log("Error: input.txt is empty or missing title");
  process.exit(1);
}

let contentStart = 4;
while (contentStart < lines.length && lines[contentStart].trim() === "") {
  contentStart++;
}

const contentLines = lines.slice(contentStart);
const content = [];
let current = "";

for (const line of contentLines) {
  if (line.trim() === "") {
    if (current.trim()) {
      content.push(current.trim());
      current = "";
    }
  } else {
    current += (current ? " " : "") + line.trim();
  }
}
if (current.trim()) content.push(current.trim());

if (content.length === 0) {
  console.log("Error: no content found in input.txt");
  process.exit(1);
}

const slugMap = {
  "\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e",
  "\u0451":"yo","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"y","\u043A":"k",
  "\u043B":"l","\u043C":"m","\u043D":"n","\u043E":"o","\u043F":"p","\u0440":"r",
  "\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"kh","\u0446":"ts",
  "\u0447":"ch","\u0448":"sh","\u0449":"shch","\u044A":"","\u044B":"y","\u044C":"",
  "\u044D":"e","\u044E":"yu","\u044F":"ya"," ":"-",
  "\u0410":"a","\u0411":"b","\u0412":"v","\u0413":"g","\u0414":"d","\u0415":"e",
  "\u0401":"yo","\u0416":"zh","\u0417":"z","\u0418":"i","\u0419":"y","\u041A":"k",
  "\u041B":"l","\u041C":"m","\u041D":"n","\u041E":"o","\u041F":"p","\u0420":"r",
  "\u0421":"s","\u0422":"t","\u0423":"u","\u0424":"f","\u0425":"kh","\u0426":"ts",
  "\u0427":"ch","\u0428":"sh","\u0429":"shch","\u042A":"","\u042B":"y","\u042C":"",
  "\u042D":"e","\u042E":"yu","\u042F":"ya",
};

let slug = title.toLowerCase().split("").map(c => slugMap[c] || c).join("")
  .replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "");
if (!slug) slug = "article-" + Date.now();

const readTime = Math.max(1, Math.ceil(content.join("").length / 1500)) + " \u043C\u0438\u043D";

const article = { slug, title, excerpt, category, tags, content, date: new Date().toISOString().slice(0, 10), readTime };

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const filePath = path.join(destDir, slug + ".json");
fs.writeFileSync(filePath, JSON.stringify(article, null, 2), "utf8");

console.log("+ " + slug + ".json");
console.log("  Category: " + article.category);
console.log("  Tags: " + (tags.length ? tags.join(", ") : "(none)"));
console.log("  Paragraphs: " + content.length);