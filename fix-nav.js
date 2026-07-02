var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, 'src', 'components', 'Nav.tsx');
var c = fs.readFileSync(filePath, 'utf8');

var newLinks = [
  '  const links = [',
  '    { href: "/#home", label: "\\u0413\\u043b\\u0430\\u0432\\u043d\\u0430\\u044f" },',
  '    { href: "/#about", label: "\\u041e \\u043f\\u0440\\u043e\\u0435\\u043a\\u0442\\u0435" },',
  '    { href: "/#concepts", label: "\\u041a\\u043e\\u043d\\u0446\\u0435\\u043f\\u0446\\u0438\\u0438" },',
  '    { href: "/blog", label: "\\u0411\\u043b\\u043e\\u0433" },',
  '    { href: "/menedzhment-2-0", label: "\\u041c\\u0435\\u043d\\u0435\\u0434\\u0436\\u043c\\u0435\\u043d\\u0442 2.0" },',
  '    { href: "/pravo-2-0", label: "\\u041f\\u0440\\u0430\\u0432\\u043e 2.0" },',
  '    { href: "/meditsina-2-0", label: "\\u041c\\u0435\\u0434\\u0438\\u0446\\u0438\\u043d\\u0430 2.0" },',
  '    { href: "/stroitelnyj-kontrol-2-0", label: "\\u0421\\u0442\\u0440\\u043e\\u0438\\u0442\\u0435\\u043b\\u044c\\u043d\\u044b\\u0439 \\u043a\\u043e\\u043d\\u0442\\u0440\\u043e\\u043b\\u044c 2.0" },',
  '    { href: "/obrazovanie-2-0", label: "\\u041e\\u0431\\u0440\\u0430\\u0437\\u043e\\u0432\\u0430\\u043d\\u0438\\u0435 2.0" },',
  '    { href: "/#contact", label: "\\u041a\\u043e\\u043d\\u0442\\u0430\\u043a\\u0442\\u044b" },',
  '  ];',
].join('\n');

// Replace old links array
c = c.replace(/const links = \[[\s\S]*?\];/, newLinks);

fs.writeFileSync(filePath, c, 'utf8');
console.log('OK: Nav.tsx updated');