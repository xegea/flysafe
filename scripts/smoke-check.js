const fs = require('fs');
const path = require('path');

const readme = fs.readFileSync(path.join(__dirname, '..', 'README.md'), 'utf8');
if (!/FlySafe/.test(readme)) {
  console.error('Smoke check failed: README does not contain FlySafe');
  process.exit(1);
}
console.log('Smoke check passed');
process.exit(0);
