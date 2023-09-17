var regeneratorRuntime = require('regenerator-runtime')();

module.exports = regeneratorRuntime;

try {
  regeneratorRuntime = regeneratorRuntime;
} catch (n) {
  if ('object' == typeof globalThis) globalThis.regeneratorRuntime = regeneratorRuntime;
  else Function('r', 'regeneratorRuntime = r')(regeneratorRuntime);
}
