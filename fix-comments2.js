var fs = require('fs');
var path = require('path');

var commentsPath = path.join(__dirname, 'src', 'components', 'Comments.tsx');
var c = fs.readFileSync(commentsPath, 'utf8');

// Fix broken signature: remove bad insert from inside params
c = c.replace(
  /export default function Comments\(\{\s*\n\s*if \(!supabase\) return null;\s*\n\s*slug \}: \{ slug: string \}\)/,
  'export default function Comments({ slug }: { slug: string })'
);

// Add null check properly - inside function body, after opening {
c = c.replace(
  /(export default function Comments\(\{ slug \}: \{ slug: string \}\) \{\n)/,
  '$1  if (!supabase) return null;\n'
);

fs.writeFileSync(commentsPath, c, 'utf8');
console.log('OK: Comments.tsx fixed');