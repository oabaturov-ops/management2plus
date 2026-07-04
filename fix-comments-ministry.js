var fs = require('fs');
var path = require('path');

// Fix supabase.ts - add fallback for missing env vars
var supabasePath = path.join(__dirname, 'src', 'lib', 'supabase.ts');
if (fs.existsSync(supabasePath)) {
  var c = fs.readFileSync(supabasePath, 'utf8');
  var newContent = [
    'const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";',
    'const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";',
    '',
    'export const supabase = supabaseUrl && supabaseAnonKey',
    '  ? require("@supabase/supabase-js").createClient(supabaseUrl, supabaseAnonKey)',
    '  : null;',
  ].join('\n');

  c = c.replace(/const supabaseUrl[\s\S]*?export const supabase[\s\S]*?;/, newContent);
  fs.writeFileSync(supabasePath, c, 'utf8');
  console.log('OK: supabase.ts fixed');
}

// Fix Comments.tsx - add null check
var commentsPath = path.join(__dirname, 'src', 'components', 'Comments.tsx');
if (fs.existsSync(commentsPath)) {
  var c2 = fs.readFileSync(commentsPath, 'utf8');
  // Add early return if no supabase at the top of the component
  var earlyReturn = '  if (!supabase) return null;\n';
  // Find the component function start and add after the first {
  var match = c2.match(/(export default function Comments[\s\S]*?\{)/);
  if (match && !c2.includes('if (!supabase)')) {
    c2 = c2.replace(match[1], match[1] + '\n' + earlyReturn);
  }
  fs.writeFileSync(commentsPath, c2, 'utf8');
  console.log('OK: Comments.tsx fixed');
}